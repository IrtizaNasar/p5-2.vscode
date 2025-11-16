/**
 * p5.js Project Generator Extension
 * 
 * This extension provides commands to generate new p5.js 2.x projects
 * with support for both online (CDN) and offline (local library) configurations.
 * 
 * @author Irtiza Nasar with help from Agentic Friends (Claude AI)
 * @version 1.0.0
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { registerP5CompletionProvider, registerP5HoverProvider, registerP5SignatureHelpProvider } from './utils/p5CompletionProvider';

/**
 * Current p5.js version used by the extension
 */
const P5_VERSION = '2.1.1';

/**
 * CDN base URL for p5.js library
 */
const P5_CDN_BASE = `https://cdn.jsdelivr.net/npm/p5@${P5_VERSION}/lib`;

/**
 * Extension activation function
 * Called when the extension is activated
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('p5.js Project Generator extension is now active');

    // Register command for creating project with folder selection
    const createProjectCommand = vscode.commands.registerCommand(
        'p5js-generator.createProject', 
        () => createP5ProjectCommand(context)
    );

    // Register command for creating project in selected folder
    const createProjectHereCommand = vscode.commands.registerCommand(
        'p5js-generator.createProjectHere', 
        (uri: vscode.Uri) => createP5ProjectCommand(context, uri)
    );

    // Register p5.js autocomplete and IntelliSense features
    const completionProvider = registerP5CompletionProvider(context);
    const hoverProvider = registerP5HoverProvider(context);
    const signatureHelpProvider = registerP5SignatureHelpProvider(context);

    context.subscriptions.push(
        createProjectCommand,
        createProjectHereCommand,
        completionProvider,
        hoverProvider,
        signatureHelpProvider
    );
}

/**
 * Main command handler for project creation
 * 
 * @param context - Extension context
 * @param targetUri - Optional target directory URI
 */
async function createP5ProjectCommand(context: vscode.ExtensionContext, targetUri?: vscode.Uri): Promise<void> {
    try {
        // Get project configuration from user
        const config = await getProjectConfiguration();
        if (!config) {
            return; // User cancelled
        }

        // Determine target directory
        const targetDir = await getTargetDirectory(config.projectName, targetUri);
        if (!targetDir) {
            return; // User cancelled
        }

        // Check for existing directory
        if (fs.existsSync(targetDir)) {
            const shouldOverwrite = await confirmOverwrite(config.projectName);
            if (!shouldOverwrite) {
                return;
            }
        }

        // Create the project with progress indication
        await vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "Creating p5.js project",
            cancellable: false
        }, async (progress) => {
            await createProject(context, targetDir, config, progress);
        });

        // Offer to open the created project
        await offerToOpenProject(targetDir, config.projectName);

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Failed to create p5.js project: ${errorMessage}`);
        console.error('Project creation error:', error);
    }
}

/**
 * Project configuration interface
 */
interface ProjectConfig {
    projectName: string;
    useOnlineLibrary: boolean;
    includeAddons: boolean;
    useMinifiedLibrary: boolean;
}

/**
 * Gather project configuration from user input
 * 
 * @returns Project configuration or undefined if cancelled
 */
async function getProjectConfiguration(): Promise<ProjectConfig | undefined> {
    // Get project name
    const projectName = await vscode.window.showInputBox({
        prompt: 'Enter project name',
        placeHolder: 'my-p5js-project',
        validateInput: validateProjectName
    });

    if (!projectName) {
        return undefined;
    }

    // Get library mode preference
    const libraryModeChoice = await vscode.window.showQuickPick([
        {
            label: 'Online (CDN)',
            description: 'Load p5.js from CDN - requires internet connection',
            detail: 'Smaller project size, always up-to-date',
            value: 'online'
        },
        {
            label: 'Offline (Local)',
            description: 'Include p5.js files in project - works offline',
            detail: 'Larger project size, works without internet',
            value: 'offline'
        }
    ], {
        placeHolder: 'Select library loading method'
    });

    if (!libraryModeChoice) {
        return undefined;
    }

    let useMinifiedLibrary = true; // Default for online
    
    // Only ask about minification for offline projects
    if (libraryModeChoice.value === 'offline') {
        const libraryVersionChoice = await vscode.window.showQuickPick([
            {
                label: 'Minified (p5.min.js)',
                description: 'Smaller file size, faster loading',
                detail: 'Recommended for production',
                value: true
            },
            {
                label: 'Full (p5.js)',
                description: 'Includes friendly error messages',
                detail: 'Better for development and learning',
                value: false
            }
        ], {
            placeHolder: 'Select library version'
        });

        if (libraryVersionChoice === undefined) {
            return undefined;
        }
        
        useMinifiedLibrary = libraryVersionChoice.value;
    }

    // Get addon preferences
    const includeAddonsChoice = await vscode.window.showQuickPick([
        {
            label: 'Include p5.sound addon',
            description: 'Adds audio functionality',
            value: true
        },
        {
            label: 'Basic p5.js only',
            description: 'Core functionality only',
            value: false
        }
    ], {
        placeHolder: 'Include additional libraries?'
    });

    if (includeAddonsChoice === undefined) {
        return undefined;
    }

    return {
        projectName: projectName.trim(),
        useOnlineLibrary: libraryModeChoice.value === 'online',
        includeAddons: includeAddonsChoice.value,
        useMinifiedLibrary: useMinifiedLibrary
    };
}

/**
 * Validate project name input
 * 
 * @param value - Input value to validate
 * @returns Error message or null if valid
 */
function validateProjectName(value: string): string | null {
    if (!value || value.trim().length === 0) {
        return 'Project name cannot be empty';
    }
    if (!/^[a-zA-Z0-9-_\s]+$/.test(value)) {
        return 'Project name can only contain letters, numbers, hyphens, underscores, and spaces';
    }
    return null;
}

/**
 * Determine target directory for project creation
 * 
 * @param projectName - Name of the project
 * @param targetUri - Optional target URI from context menu
 * @returns Target directory path or undefined if cancelled
 */
async function getTargetDirectory(projectName: string, targetUri?: vscode.Uri): Promise<string | undefined> {
    if (targetUri && targetUri.fsPath) {
        // Called from context menu - use selected folder
        return path.join(targetUri.fsPath, projectName);
    }

    // Called from command palette - ask user to select folder
    const folderUri = await vscode.window.showOpenDialog({
        canSelectFolders: true,
        canSelectFiles: false,
        canSelectMany: false,
        openLabel: 'Select Parent Folder'
    });

    if (!folderUri || folderUri.length === 0) {
        return undefined;
    }

    return path.join(folderUri[0].fsPath, projectName);
}

/**
 * Confirm overwrite of existing directory
 * 
 * @param projectName - Name of the project
 * @returns True if user confirms overwrite
 */
async function confirmOverwrite(projectName: string): Promise<boolean> {
    const choice = await vscode.window.showWarningMessage(
        `A folder named "${projectName}" already exists. Overwrite?`,
        'Overwrite', 'Cancel'
    );
    return choice === 'Overwrite';
}

/**
 * Create the p5.js project structure
 * 
 * @param context - Extension context
 * @param projectPath - Target project path
 * @param config - Project configuration
 * @param progress - Progress reporter
 */
async function createProject(
    context: vscode.ExtensionContext,
    projectPath: string,
    config: ProjectConfig,
    progress: vscode.Progress<{ increment?: number; message?: string }>
): Promise<void> {
    
    progress.report({ increment: 0, message: "Setting up project structure" });

    // Remove existing directory if it exists
    if (fs.existsSync(projectPath)) {
        fs.rmSync(projectPath, { recursive: true, force: true });
    }

    // Create project directory structure
    createDirectoryStructure(projectPath, config);
    
    progress.report({ increment: 25, message: "Creating project files" });

    // Create project files
    await createProjectFiles(context, projectPath, config);
    
    progress.report({ increment: 75, message: "Copying library files" });

    // Copy library files if offline mode
    if (!config.useOnlineLibrary) {
        await copyLibraryFiles(context, projectPath, config.includeAddons, config.useMinifiedLibrary);
    }

    progress.report({ increment: 100, message: "Project created successfully" });
}

/**
 * Create the directory structure for the project
 * 
 * @param projectPath - Project root path
 * @param config - Project configuration
 */
function createDirectoryStructure(projectPath: string, config: ProjectConfig): void {
    // Create main project directory
    fs.mkdirSync(projectPath, { recursive: true });

    // Create subdirectories
    const directories = ['assets', 'css'];
    
    if (!config.useOnlineLibrary) {
        directories.push('js');
        if (config.includeAddons) {
            directories.push('js/addons');
        }
    }

    directories.forEach(dir => {
        fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
    });
}

/**
 * Create all project files from templates
 * 
 * @param context - Extension context
 * @param projectPath - Project root path
 * @param config - Project configuration
 */
async function createProjectFiles(
    context: vscode.ExtensionContext,
    projectPath: string,
    config: ProjectConfig
): Promise<void> {
    
    // Create HTML file
    await createHtmlFile(context, projectPath, config);
    
    // Create JavaScript file
    await createJavaScriptFile(context, projectPath);
    
    // Create CSS file
    await createCssFile(context, projectPath);
    
    // Create README file
    await createReadmeFile(projectPath, config);
}

/**
 * Create the main HTML file
 * 
 * @param context - Extension context
 * @param projectPath - Project root path
 * @param config - Project configuration
 */
async function createHtmlFile(
    context: vscode.ExtensionContext,
    projectPath: string,
    config: ProjectConfig
): Promise<void> {
    
    const templateName = config.useOnlineLibrary ? 'index-online.html' : 'index-offline.html';
    const templatePath = path.join(context.extensionPath, 'src', 'templates', templateName);
    
    let htmlContent = fs.readFileSync(templatePath, 'utf8');
    
    // Replace template variables
    htmlContent = htmlContent.replace(/\{\{PROJECT_NAME\}\}/g, config.projectName);
    htmlContent = htmlContent.replace(/\{\{P5_VERSION\}\}/g, P5_VERSION);
    
    // Handle main p5.js script tag for offline projects
    if (!config.useOnlineLibrary) {
        const p5FileName = config.useMinifiedLibrary ? 'p5.min.js' : 'p5.js';
        htmlContent = htmlContent.replace(/p5\.min\.js/g, p5FileName);
    }
    
    // Handle addon scripts
    let addonScripts = '';
    if (config.includeAddons) {
        if (config.useOnlineLibrary) {
            addonScripts = `<script src="${P5_CDN_BASE}/addons/p5.sound.min.js"></script>`;
        } else {
            addonScripts = '<script src="js/addons/p5.sound.min.js"></script>';
        }
    }
    
    htmlContent = htmlContent.replace(/\{\{ADDONS\}\}/g, addonScripts);
    
    fs.writeFileSync(path.join(projectPath, 'index.html'), htmlContent);
}

/**
 * Create the main JavaScript sketch file
 * 
 * @param context - Extension context
 * @param projectPath - Project root path
 */
async function createJavaScriptFile(context: vscode.ExtensionContext, projectPath: string): Promise<void> {
    const templatePath = path.join(context.extensionPath, 'src', 'templates', 'sketch.js');
    const jsContent = fs.readFileSync(templatePath, 'utf8');
    fs.writeFileSync(path.join(projectPath, 'sketch.js'), jsContent);
}

/**
 * Create the CSS stylesheet
 * 
 * @param context - Extension context
 * @param projectPath - Project root path
 */
async function createCssFile(context: vscode.ExtensionContext, projectPath: string): Promise<void> {
    const templatePath = path.join(context.extensionPath, 'src', 'templates', 'style.css');
    const cssContent = fs.readFileSync(templatePath, 'utf8');
    fs.writeFileSync(path.join(projectPath, 'css', 'style.css'), cssContent);
}

/**
 * Copy p5.js library files to project
 * 
 * @param context - Extension context
 * @param projectPath - Project root path
 * @param includeAddons - Whether to include addon libraries
 * @param useMinifiedLibrary - Whether to use minified version
 */
async function copyLibraryFiles(
    context: vscode.ExtensionContext,
    projectPath: string,
    includeAddons: boolean,
    useMinifiedLibrary: boolean
): Promise<void> {
    
    const libSourcePath = path.join(context.extensionPath, 'resources', 'lib');
    const jsDir = path.join(projectPath, 'js');
    
    // Copy appropriate p5.js library version
    const p5FileName = useMinifiedLibrary ? 'p5.min.js' : 'p5.js';
    const p5SourcePath = path.join(libSourcePath, p5FileName);
    const p5DestPath = path.join(jsDir, p5FileName);
    
    if (!fs.existsSync(p5SourcePath)) {
        throw new Error(`${p5FileName} library file not found in extension resources`);
    }
    
    fs.copyFileSync(p5SourcePath, p5DestPath);
    
    // Copy addon libraries if requested
    if (includeAddons) {
        const soundSourcePath = path.join(libSourcePath, 'addons', 'p5.sound.min.js');
        const soundDestPath = path.join(jsDir, 'addons', 'p5.sound.min.js');
        
        if (fs.existsSync(soundSourcePath)) {
            fs.copyFileSync(soundSourcePath, soundDestPath);
        }
    }
}

/**
 * Create project README file
 * 
 * @param projectPath - Project root path
 * @param config - Project configuration
 */
async function createReadmeFile(projectPath: string, config: ProjectConfig): Promise<void> {
    const readmeContent = `# ${config.projectName}

## Getting Started

Open \`index.html\` in your web browser and start editing \`sketch.js\`.

## Running Locally

For projects with media files, use a local server:

\`\`\`bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
\`\`\`

## Resources

- [p5.js 2.0](https://beta.p5js.org/)
- [p5.js Reference](https://p5js.org/reference/)
`;

    fs.writeFileSync(path.join(projectPath, 'README.md'), readmeContent);
}

/**
 * Offer to open the created project
 * 
 * @param projectPath - Path to created project
 * @param projectName - Name of the project
 */
async function offerToOpenProject(projectPath: string, projectName: string): Promise<void> {
    const choice = await vscode.window.showInformationMessage(
        `p5.js project "${projectName}" created successfully`,
        'Open Project',
        'Open in New Window'
    );

    if (choice === 'Open Project') {
        await vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(projectPath));
    } else if (choice === 'Open in New Window') {
        await vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(projectPath), true);
    }
}

/**
 * Extension deactivation function
 * Called when the extension is deactivated
 */
export function deactivate(): void {
    console.log('p5.js Project Generator extension deactivated');
}
