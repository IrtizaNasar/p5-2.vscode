/**
 * p5.js Completion Provider
 * Provides autocomplete, parameter hints, and documentation for p5.js 2.0 functions
 */

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { p5Functions, P5Function, findFunction } from './p5Functions';

/**
 * Check if a file is a p5.js file
 * Determines this by:
 * 1. File name patterns (sketch.js, *.p5.js, etc.)
 * 2. File is in a directory with index.html that references p5.js
 * 3. File content contains p5.js patterns
 */
export async function isP5File(document: vscode.TextDocument): Promise<boolean> {
    const fileName = path.basename(document.fileName).toLowerCase();
    const filePath = document.fileName;
    
    // Check file name patterns
    const p5FileNamePatterns = [
        /sketch\.js$/i,
        /\.p5\.js$/i,
        /p5.*\.js$/i
    ];
    
    if (p5FileNamePatterns.some(pattern => pattern.test(fileName))) {
        return true;
    }
    
    // Check if file is in a p5.js project (has index.html with p5.js reference)
    const dir = path.dirname(filePath);
    const indexPath = path.join(dir, 'index.html');
    
    if (fs.existsSync(indexPath)) {
        try {
            const indexContent = fs.readFileSync(indexPath, 'utf8');
            // Check for p5.js references in HTML
            if (/p5\.(min\.)?js|cdn\.jsdelivr\.net.*p5/i.test(indexContent)) {
                return true;
            }
        } catch (error) {
            // If we can't read the file, continue with other checks
        }
    }
    
    // Check parent directories
    let currentDir = dir;
    for (let i = 0; i < 3; i++) { // Check up to 3 levels up
        const parentIndexPath = path.join(currentDir, 'index.html');
        if (fs.existsSync(parentIndexPath)) {
            try {
                const indexContent = fs.readFileSync(parentIndexPath, 'utf8');
                if (/p5\.(min\.)?js|cdn\.jsdelivr\.net.*p5/i.test(indexContent)) {
                    return true;
                }
            } catch (error) {
                // Continue checking
            }
        }
        currentDir = path.dirname(currentDir);
        if (currentDir === path.dirname(currentDir)) {
            break; // Reached root
        }
    }
    
    // Check file content for p5.js patterns
    const content = document.getText();
    const p5Patterns = [
        /\bfunction\s+(setup|draw|preload)\s*\(/i,
        /\bcreateCanvas\s*\(/i,
        /\bbackground\s*\(/i,
        /\bfill\s*\(/i,
        /\bstroke\s*\(/i,
        /\bellipse\s*\(/i,
        /\brect\s*\(/i
    ];
    
    if (p5Patterns.some(pattern => pattern.test(content))) {
        return true;
    }
    
    return false;
}

/**
 * Create a completion item from a p5.js function
 */
function createCompletionItem(func: P5Function): vscode.CompletionItem {
    const item = new vscode.CompletionItem(
        func.name,
        vscode.CompletionItemKind.Function
    );
    
    item.detail = func.signature;
    const documentation = new vscode.MarkdownString();
    documentation.appendMarkdown(`**${func.name}** - ${func.description}\n\n`);
    documentation.appendMarkdown(`**Category:** ${func.category}\n\n`);
    
    if (func.parameters.length > 0) {
        documentation.appendMarkdown('**Parameters:**\n');
        func.parameters.forEach(param => {
            const optional = param.optional ? ' (optional)' : '';
            documentation.appendMarkdown(`- \`${param.name}\` (${param.type})${optional}: ${param.description}\n`);
        });
    }
    
    if (func.returnType) {
        documentation.appendMarkdown(`\n**Returns:** ${func.returnType}`);
    }
    
    item.documentation = documentation;
    
    // Create insert text with parameter placeholders
    const params = func.parameters.map((param, index) => {
        return param.optional ? `\${${index + 1}:${param.name}}` : `\${${index + 1}:${param.name}}`;
    });
    
    if (params.length > 0) {
        item.insertText = new vscode.SnippetString(`${func.name}(${params.join(', ')})`);
    } else {
        item.insertText = func.name;
    }
    
    return item;
}

/**
 * Register the p5.js completion provider
 */
export function registerP5CompletionProvider(context: vscode.ExtensionContext): vscode.Disposable {
    const provider = vscode.languages.registerCompletionItemProvider(
        { scheme: 'file', language: 'javascript' },
        {
            async provideCompletionItems(
                document: vscode.TextDocument,
                position: vscode.Position,
                token: vscode.CancellationToken,
                context: vscode.CompletionContext
            ): Promise<vscode.CompletionItem[] | undefined> {
                // Check if this is a p5.js file
                const isP5 = await isP5File(document);
                if (!isP5) {
                    return undefined;
                }
                
                // Get the word at the cursor position
                const wordRange = document.getWordRangeAtPosition(position);
                const word = wordRange ? document.getText(wordRange) : '';
                
                // Create completion items for all p5.js functions
                const completions = p5Functions.map(func => createCompletionItem(func));
                
                return completions;
            },
            
            async resolveCompletionItem(
                item: vscode.CompletionItem,
                token: vscode.CancellationToken
            ): Promise<vscode.CompletionItem> {
                // Additional resolution if needed
                return item;
            }
        },
        '.', // Trigger on dot
        '(' // Trigger on opening parenthesis
    );
    
    return provider;
}

/**
 * Register hover provider for p5.js functions
 */
export function registerP5HoverProvider(context: vscode.ExtensionContext): vscode.Disposable {
    const provider = vscode.languages.registerHoverProvider(
        { scheme: 'file', language: 'javascript' },
        {
            async provideHover(
                document: vscode.TextDocument,
                position: vscode.Position,
                token: vscode.CancellationToken
            ): Promise<vscode.Hover | undefined> {
                // Check if this is a p5.js file
                const isP5 = await isP5File(document);
                if (!isP5) {
                    return undefined;
                }
                
                // Get the word at the cursor position
                const wordRange = document.getWordRangeAtPosition(position);
                if (!wordRange) {
                    return undefined;
                }
                
                const word = document.getText(wordRange);
                const func = findFunction(word);
                
                if (!func) {
                    return undefined;
                }
                
                const markdown = new vscode.MarkdownString();
                markdown.appendMarkdown(`**${func.name}** - ${func.description}\n\n`);
                markdown.appendMarkdown(`**Signature:** \`${func.signature}\`\n\n`);
                markdown.appendMarkdown(`**Category:** ${func.category}\n\n`);
                
                if (func.parameters.length > 0) {
                    markdown.appendMarkdown('**Parameters:**\n');
                    func.parameters.forEach(param => {
                        const optional = param.optional ? ' (optional)' : '';
                        markdown.appendMarkdown(`- \`${param.name}\`: ${param.type}${optional} - ${param.description}\n`);
                    });
                }
                
                if (func.returnType) {
                    markdown.appendMarkdown(`\n**Returns:** \`${func.returnType}\``);
                }
                
                markdown.appendMarkdown(`\n\n[View in p5.js Reference](https://beta.p5js.org/reference/#${func.name})`);
                
                return new vscode.Hover(markdown);
            }
        }
    );
    
    return provider;
}

/**
 * Register signature help provider for parameter hints
 */
export function registerP5SignatureHelpProvider(context: vscode.ExtensionContext): vscode.Disposable {
    const provider = vscode.languages.registerSignatureHelpProvider(
        { scheme: 'file', language: 'javascript' },
        {
            async provideSignatureHelp(
                document: vscode.TextDocument,
                position: vscode.Position,
                token: vscode.CancellationToken,
                context: vscode.SignatureHelpContext
            ): Promise<vscode.SignatureHelp | undefined> {
                // Check if this is a p5.js file
                const isP5 = await isP5File(document);
                if (!isP5) {
                    return undefined;
                }
                
                // Get text before cursor
                const line = document.lineAt(position.line);
                const textBeforeCursor = line.text.substring(0, position.character);
                
                // Find function name before opening parenthesis
                const functionMatch = textBeforeCursor.match(/(\w+)\s*\(/);
                if (!functionMatch) {
                    return undefined;
                }
                
                const functionName = functionMatch[1];
                const func = findFunction(functionName);
                
                if (!func) {
                    return undefined;
                }
                
                // Count commas to determine active parameter
                const textInParens = textBeforeCursor.substring(textBeforeCursor.lastIndexOf('('));
                const commaCount = (textInParens.match(/,/g) || []).length;
                const activeParameter = commaCount;
                
                const signature = new vscode.SignatureInformation(func.signature, func.description);
                signature.parameters = func.parameters.map(param => {
                    const label = param.optional ? `[${param.name}]` : param.name;
                    return new vscode.ParameterInformation(
                        label,
                        `${param.type} - ${param.description}`
                    );
                });
                
                const help = new vscode.SignatureHelp();
                help.signatures = [signature];
                help.activeSignature = 0;
                help.activeParameter = Math.min(activeParameter, func.parameters.length - 1);
                
                return help;
            }
        },
        '(', ','
    );
    
    return provider;
}

