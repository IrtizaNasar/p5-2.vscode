<img src="icon.png" width="128" height="128" alt="p5.js Project Generator icon">

# p5.js 2.x Project Generator

A Visual Studio Code extension that quickly generates new [p5.js 2.0](https://beta.p5js.org/) projects with a clean, minimal setup. Perfect for artists, designers, educators, and anyone getting started with creative coding.

## Features

- **Quick Project Setup** - Generate a complete p5.js 2.x project structure in seconds
- **Flexible Library Options** - Choose between online (CDN) or offline (local files) library loading
- **Minimal Templates** - Start with clean, bare-bones templates ready for your creative code
- **Addon Support** - Optionally include p5.sound for audio functionality
- **Library Versions** - Select between minified or full p5.js library for offline projects
- **Context Menu Integration** - Create projects directly from the Explorer context menu
- **Smart Project Structure** - Automatically creates organized folders for assets, CSS, and JavaScript

## Requirements

- Visual Studio Code 1.74.0 or higher
- No additional dependencies required

## Usage

### Create a New Project

1. **From Command Palette:**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
   - Type "Create a new p5.js 2.x Project"
   - Select the command
   - Choose a parent folder for your project
   - Follow the prompts to configure your project

2. **From Explorer Context Menu:**
   - Right-click on a folder in the Explorer
   - Select "Create p5.js 2.x Project Here"
   - Follow the prompts to configure your project

### Project Configuration Options

When creating a project, you'll be prompted to choose:

- **Project Name** - Name for your project folder
- **Library Loading Method:**
  - **Online (CDN)** - Loads p5.js from CDN (requires internet, smaller project size)
  - **Offline (Local)** - Includes p5.js files in your project (works offline, larger project size)
- **Library Version** (offline only):
  - **Minified** - Smaller file size, faster loading (recommended for production)
  - **Full** - Includes friendly error messages (better for development and learning)
- **Addons:**
  - **Include p5.sound** - Adds audio functionality to your project
  - **Basic p5.js only** - Core functionality only

### Generated Project Structure

```
your-project/
├── index.html          # Main HTML file
├── sketch.js           # Your p5.js sketch code
├── css/
│   └── style.css       # Project styles
├── js/                 # (offline projects only)
│   └── p5.min.js       # p5.js library
│   └── addons/         # (if addons included)
│       └── p5.sound.min.js
├── assets/             # Place images, sounds, data files here
└── README.md           # Project documentation
```

## Getting Started with p5.js 2.0

This extension generates projects using **p5.js 2.0**, the latest version of the p5.js library. Learn more about p5.js 2.0 at [beta.p5js.org](https://beta.p5js.org/).

### Running Your Project

1. Open `index.html` in your web browser
2. Start editing `sketch.js` to create your artwork
3. Refresh the browser to see your changes

### Local Development Server

For projects with media files, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

## Resources

- [p5.js 2.0 Website](https://beta.p5js.org/)
- [p5.js Reference](https://p5js.org/reference/)
- [p5.js Examples](https://p5js.org/examples/)
- [p5.js Community](https://discourse.processing.org/c/p5js)
- [p5.js GitHub](https://github.com/processing/p5.js)

## Extension Settings

This extension does not add any VS Code settings. All configuration is done through the project creation wizard.

## Release Notes

### 1.0.0

Initial release of p5.js Project Generator
- Generate p5.js 2.x projects with online/offline library options
- Support for p5.sound addon
- Minimal, clean project templates
- Context menu integration for quick project creation

## Contributing

Issues and pull requests are welcome! Please feel free to contribute to make this extension better.

## License

This extension is open source. The p5.js library is licensed under the LGPL 2.1 license.

---

