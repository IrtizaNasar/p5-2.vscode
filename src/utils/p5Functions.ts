/**
 * p5.js 2.0 Function Definitions
 * Based on https://beta.p5js.org/reference/
 */

export interface P5Function {
    name: string;
    description: string;
    signature: string;
    parameters: Array<{
        name: string;
        type: string;
        description: string;
        optional?: boolean;
    }>;
    returnType?: string;
    category: string;
}

export const p5Functions: P5Function[] = [
    // Structure
    {
        name: 'setup',
        description: 'A function that\'s called once when the sketch begins running',
        signature: 'setup()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'draw',
        description: 'A function that\'s called repeatedly while the sketch runs',
        signature: 'draw()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'createCanvas',
        description: 'Creates a canvas element in the document',
        signature: 'createCanvas(width, height, [renderer])',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the canvas' },
            { name: 'height', type: 'number', description: 'Height of the canvas' },
            { name: 'renderer', type: 'string', description: 'Either P2D or WEBGL', optional: true }
        ],
        returnType: 'p5.Renderer',
        category: 'Structure'
    },
    {
        name: 'resizeCanvas',
        description: 'Resizes the canvas to given width and height',
        signature: 'resizeCanvas(width, height, [noRedraw])',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the canvas' },
            { name: 'height', type: 'number', description: 'Height of the canvas' },
            { name: 'noRedraw', type: 'boolean', description: 'If true, does not redraw the canvas', optional: true }
        ],
        category: 'Structure'
    },
    {
        name: 'noCanvas',
        description: 'Removes the default canvas',
        signature: 'noCanvas()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'createGraphics',
        description: 'Creates a new p5.Graphics object',
        signature: 'createGraphics(width, height, [renderer])',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the graphics buffer' },
            { name: 'height', type: 'number', description: 'Height of the graphics buffer' },
            { name: 'renderer', type: 'string', description: 'Either P2D or WEBGL', optional: true }
        ],
        returnType: 'p5.Graphics',
        category: 'Structure'
    },
    {
        name: 'blendMode',
        description: 'Sets the way colors blend when added to the canvas',
        signature: 'blendMode(mode)',
        parameters: [
            { name: 'mode', type: 'string', description: 'Blend mode: BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, NORMAL' }
        ],
        category: 'Color'
    },
    {
        name: 'background',
        description: 'Sets the color used for the background of the canvas',
        signature: 'background(color)',
        parameters: [
            { name: 'color', type: 'string|number|p5.Color', description: 'Color value' }
        ],
        category: 'Color'
    },
    {
        name: 'clear',
        description: 'Clears the pixels within a buffer',
        signature: 'clear()',
        parameters: [],
        category: 'Color'
    },
    {
        name: 'colorMode',
        description: 'Changes the way color values are interpreted',
        signature: 'colorMode(mode, [max1], [max2], [max3], [maxA])',
        parameters: [
            { name: 'mode', type: 'string', description: 'Either RGB, HSB, HSL, LAB, or OKLAB' },
            { name: 'max1', type: 'number', description: 'Range for the red or hue depending on the current color mode', optional: true },
            { name: 'max2', type: 'number', description: 'Range for the green or saturation depending on the current color mode', optional: true },
            { name: 'max3', type: 'number', description: 'Range for the blue or brightness depending on the current color mode', optional: true },
            { name: 'maxA', type: 'number', description: 'Range for the alpha', optional: true }
        ],
        category: 'Color'
    },
    {
        name: 'fill',
        description: 'Sets the color used to fill shapes',
        signature: 'fill(value)',
        parameters: [
            { name: 'value', type: 'string|number|p5.Color', description: 'Color value' }
        ],
        category: 'Color'
    },
    {
        name: 'noFill',
        description: 'Disables setting the fill color for shapes',
        signature: 'noFill()',
        parameters: [],
        category: 'Color'
    },
    {
        name: 'stroke',
        description: 'Sets the color used to draw points, lines, and the outlines of shapes',
        signature: 'stroke(value)',
        parameters: [
            { name: 'value', type: 'string|number|p5.Color', description: 'Color value' }
        ],
        category: 'Color'
    },
    {
        name: 'noStroke',
        description: 'Disables drawing points, lines, and the outlines of shapes',
        signature: 'noStroke()',
        parameters: [],
        category: 'Color'
    },
    {
        name: 'erase',
        description: 'Starts using shapes to erase parts of the canvas',
        signature: 'erase([strengthFill], [strengthStroke])',
        parameters: [
            { name: 'strengthFill', type: 'number', description: 'A number (0-255) for the strength of erasing the fill', optional: true },
            { name: 'strengthStroke', type: 'number', description: 'A number (0-255) for the strength of erasing the stroke', optional: true }
        ],
        category: 'Color'
    },
    {
        name: 'noErase',
        description: 'Ends erasing that was started with erase()',
        signature: 'noErase()',
        parameters: [],
        category: 'Color'
    },
    // Shape - 2D Primitives
    {
        name: 'arc',
        description: 'Draws an arc',
        signature: 'arc(x, y, w, h, start, stop, [mode])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the arc\'s ellipse' },
            { name: 'y', type: 'number', description: 'y-coordinate of the arc\'s ellipse' },
            { name: 'w', type: 'number', description: 'Width of the arc\'s ellipse' },
            { name: 'h', type: 'number', description: 'Height of the arc\'s ellipse' },
            { name: 'start', type: 'number', description: 'Angle to start the arc, specified in radians' },
            { name: 'stop', type: 'number', description: 'Angle to stop the arc, specified in radians' },
            { name: 'mode', type: 'string', description: 'Optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'circle',
        description: 'Draws a circle',
        signature: 'circle(x, y, d)',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the center of the circle' },
            { name: 'y', type: 'number', description: 'y-coordinate of the center of the circle' },
            { name: 'd', type: 'number', description: 'Diameter of the circle' }
        ],
        category: 'Shape'
    },
    {
        name: 'ellipse',
        description: 'Draws an ellipse (oval)',
        signature: 'ellipse(x, y, w, [h])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the center of the ellipse' },
            { name: 'y', type: 'number', description: 'y-coordinate of the center of the ellipse' },
            { name: 'w', type: 'number', description: 'Width of the ellipse' },
            { name: 'h', type: 'number', description: 'Height of the ellipse', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'line',
        description: 'Draws a straight line between two points',
        signature: 'line(x1, y1, x2, y2)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first point' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first point' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the second point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the second point' }
        ],
        category: 'Shape'
    },
    {
        name: 'point',
        description: 'Draws a single point in space',
        signature: 'point(x, y, [z])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the point' },
            { name: 'y', type: 'number', description: 'y-coordinate of the point' },
            { name: 'z', type: 'number', description: 'z-coordinate of the point (for WebGL mode)', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'quad',
        description: 'Draws a quadrilateral (four-sided shape)',
        signature: 'quad(x1, y1, x2, y2, x3, y3, x4, y4)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first corner' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first corner' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the second corner' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the second corner' },
            { name: 'x3', type: 'number', description: 'x-coordinate of the third corner' },
            { name: 'y3', type: 'number', description: 'y-coordinate of the third corner' },
            { name: 'x4', type: 'number', description: 'x-coordinate of the fourth corner' },
            { name: 'y4', type: 'number', description: 'y-coordinate of the fourth corner' }
        ],
        category: 'Shape'
    },
    {
        name: 'rect',
        description: 'Draws a rectangle',
        signature: 'rect(x, y, w, [h], [tl], [tr], [br], [bl])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the rectangle' },
            { name: 'y', type: 'number', description: 'y-coordinate of the rectangle' },
            { name: 'w', type: 'number', description: 'Width of the rectangle' },
            { name: 'h', type: 'number', description: 'Height of the rectangle', optional: true },
            { name: 'tl', type: 'number', description: 'Radius of top-left corner', optional: true },
            { name: 'tr', type: 'number', description: 'Radius of top-right corner', optional: true },
            { name: 'br', type: 'number', description: 'Radius of bottom-right corner', optional: true },
            { name: 'bl', type: 'number', description: 'Radius of bottom-left corner', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'square',
        description: 'Draws a square',
        signature: 'square(x, y, s, [tl], [tr], [br], [bl])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the square' },
            { name: 'y', type: 'number', description: 'y-coordinate of the square' },
            { name: 's', type: 'number', description: 'Side size of the square' },
            { name: 'tl', type: 'number', description: 'Radius of top-left corner', optional: true },
            { name: 'tr', type: 'number', description: 'Radius of top-right corner', optional: true },
            { name: 'br', type: 'number', description: 'Radius of bottom-right corner', optional: true },
            { name: 'bl', type: 'number', description: 'Radius of bottom-left corner', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'triangle',
        description: 'Draws a triangle',
        signature: 'triangle(x1, y1, x2, y2, x3, y3)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first point' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first point' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the second point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the second point' },
            { name: 'x3', type: 'number', description: 'x-coordinate of the third point' },
            { name: 'y3', type: 'number', description: 'y-coordinate of the third point' }
        ],
        category: 'Shape'
    },
    // Typography
    {
        name: 'text',
        description: 'Draws text to the canvas',
        signature: 'text(str, x, y, [x2], [y2])',
        parameters: [
            { name: 'str', type: 'string', description: 'The alphanumeric symbols to be displayed' },
            { name: 'x', type: 'number', description: 'x-coordinate of text' },
            { name: 'y', type: 'number', description: 'y-coordinate of text' },
            { name: 'x2', type: 'number', description: 'By default, the width of the text box', optional: true },
            { name: 'y2', type: 'number', description: 'By default, the height of the text box', optional: true }
        ],
        category: 'Typography'
    },
    {
        name: 'textFont',
        description: 'Sets the font used by the text() function',
        signature: 'textFont(font)',
        parameters: [
            { name: 'font', type: 'string|p5.Font', description: 'A String or p5.Font object' }
        ],
        category: 'Typography'
    },
    {
        name: 'textSize',
        description: 'Sets or gets the current text size',
        signature: 'textSize(size)',
        parameters: [
            { name: 'size', type: 'number', description: 'The size of the text' }
        ],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'textAlign',
        description: 'Sets the way text is aligned when text() is called',
        signature: 'textAlign(horizAlign, [vertAlign])',
        parameters: [
            { name: 'horizAlign', type: 'string', description: 'Horizontal alignment, either LEFT, CENTER, or RIGHT' },
            { name: 'vertAlign', type: 'string', description: 'Vertical alignment, either TOP, BOTTOM, CENTER, or BASELINE', optional: true }
        ],
        category: 'Typography'
    },
    // Transform
    {
        name: 'applyMatrix',
        description: 'Multiplies the current matrix by the one specified through the parameters',
        signature: 'applyMatrix(a, b, c, d, e, f)',
        parameters: [
            { name: 'a', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' },
            { name: 'b', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' },
            { name: 'c', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' },
            { name: 'd', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' },
            { name: 'e', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' },
            { name: 'f', type: 'number', description: 'Numbers which define the 2x3 matrix to be multiplied' }
        ],
        category: 'Transform'
    },
    {
        name: 'resetMatrix',
        description: 'Replaces the current matrix with the identity matrix',
        signature: 'resetMatrix()',
        parameters: [],
        category: 'Transform'
    },
    {
        name: 'rotate',
        description: 'Rotates a shape by the amount specified by the angle parameter',
        signature: 'rotate(angle)',
        parameters: [
            { name: 'angle', type: 'number', description: 'The angle of rotation, specified in radians or degrees' }
        ],
        category: 'Transform'
    },
    {
        name: 'scale',
        description: 'Increases or decreases the size of a shape by expanding and contracting vertices',
        signature: 'scale(s, [y], [z])',
        parameters: [
            { name: 's', type: 'number', description: 'Percent to scale the object, or percentage to scale the object in the x-axis if multiple arguments are given' },
            { name: 'y', type: 'number', description: 'Percent to scale the object in the y-axis', optional: true },
            { name: 'z', type: 'number', description: 'Percent to scale the object in the z-axis (for WebGL mode)', optional: true }
        ],
        category: 'Transform'
    },
    {
        name: 'shearX',
        description: 'Shears a shape around the x-axis',
        signature: 'shearX(angle)',
        parameters: [
            { name: 'angle', type: 'number', description: 'Angle to shear, specified in radians or degrees' }
        ],
        category: 'Transform'
    },
    {
        name: 'shearY',
        description: 'Shears a shape around the y-axis',
        signature: 'shearY(angle)',
        parameters: [
            { name: 'angle', type: 'number', description: 'Angle to shear, specified in radians or degrees' }
        ],
        category: 'Transform'
    },
    {
        name: 'translate',
        description: 'Specifies an amount to displace objects within the display window',
        signature: 'translate(x, y, [z])',
        parameters: [
            { name: 'x', type: 'number', description: 'Left/right displacement' },
            { name: 'y', type: 'number', description: 'Up/down displacement' },
            { name: 'z', type: 'number', description: 'Forward/backward displacement (for WebGL mode)', optional: true }
        ],
        category: 'Transform'
    },
    // Input - Mouse
    {
        name: 'mouseX',
        description: 'The system variable mouseX always contains the current horizontal position of the mouse',
        signature: 'mouseX',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'mouseY',
        description: 'The system variable mouseY always contains the current vertical position of the mouse',
        signature: 'mouseY',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'pmouseX',
        description: 'The system variable pmouseX always contains the horizontal position of the mouse in the frame previous to the current frame',
        signature: 'pmouseX',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'pmouseY',
        description: 'The system variable pmouseY always contains the vertical position of the mouse in the frame previous to the current frame',
        signature: 'pmouseY',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'winMouseX',
        description: 'The system variable winMouseX always contains the current horizontal position of the mouse, relative to (0, 0) of the window',
        signature: 'winMouseX',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'winMouseY',
        description: 'The system variable winMouseY always contains the current vertical position of the mouse, relative to (0, 0) of the window',
        signature: 'winMouseY',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'mouseButton',
        description: 'The system variable mouseButton is set to either LEFT, RIGHT, or CENTER depending on which button is pressed',
        signature: 'mouseButton',
        parameters: [],
        returnType: 'string',
        category: 'Input'
    },
    {
        name: 'mouseIsPressed',
        description: 'The boolean system variable mouseIsPressed is true if the mouse is pressed and false if not',
        signature: 'mouseIsPressed',
        parameters: [],
        returnType: 'boolean',
        category: 'Input'
    },
    {
        name: 'mousePressed',
        description: 'The mousePressed() function is called once after every time a mouse button is pressed',
        signature: 'mousePressed([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional MouseEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'mouseReleased',
        description: 'The mouseReleased() function is called once every time a mouse button is released',
        signature: 'mouseReleased([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional MouseEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'mouseClicked',
        description: 'The mouseClicked() function is called once after a mouse button has been pressed and then released',
        signature: 'mouseClicked([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional MouseEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'mouseMoved',
        description: 'The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed',
        signature: 'mouseMoved([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional MouseEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'mouseDragged',
        description: 'The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed',
        signature: 'mouseDragged([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional MouseEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'mouseWheel',
        description: 'The mouseWheel() function is called once every time a mouse wheel event is detected',
        signature: 'mouseWheel([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional WheelEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    // Input - Keyboard
    {
        name: 'key',
        description: 'The system variable key always contains the value of the most recent key on the keyboard that was typed',
        signature: 'key',
        parameters: [],
        returnType: 'string',
        category: 'Input'
    },
    {
        name: 'keyCode',
        description: 'The variable keyCode is used to detect special keys such as BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW',
        signature: 'keyCode',
        parameters: [],
        returnType: 'number',
        category: 'Input'
    },
    {
        name: 'keyIsPressed',
        description: 'The boolean system variable keyIsPressed is true if any key is pressed and false if no keys are pressed',
        signature: 'keyIsPressed',
        parameters: [],
        returnType: 'boolean',
        category: 'Input'
    },
    {
        name: 'keyPressed',
        description: 'The keyPressed() function is called once every time a key is pressed',
        signature: 'keyPressed([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional KeyboardEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'keyReleased',
        description: 'The keyReleased() function is called once every time a key is released',
        signature: 'keyReleased([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional KeyboardEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'keyTyped',
        description: 'The keyTyped() function is called once every time a key is pressed, but action keys such as Ctrl, Shift, and Alt are ignored',
        signature: 'keyTyped([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional KeyboardEvent callback argument', optional: true }
        ],
        category: 'Input'
    },
    {
        name: 'keyIsDown',
        description: 'The keyIsDown() function checks if the key is currently down',
        signature: 'keyIsDown(code)',
        parameters: [
            { name: 'code', type: 'number', description: 'The keyCode to check' }
        ],
        returnType: 'boolean',
        category: 'Input'
    },
    // Math
    {
        name: 'abs',
        description: 'Calculates the absolute value (magnitude) of a number',
        signature: 'abs(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to compute' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'ceil',
        description: 'Calculates the closest int value that is greater than or equal to the value of the parameter',
        signature: 'ceil(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to round up' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'constrain',
        description: 'Constrains a value between a minimum and maximum value',
        signature: 'constrain(n, low, high)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to constrain' },
            { name: 'low', type: 'number', description: 'Minimum limit' },
            { name: 'high', type: 'number', description: 'Maximum limit' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'dist',
        description: 'Calculates the distance between two points',
        signature: 'dist(x1, y1, x2, y2)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first point' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first point' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the second point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the second point' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'exp',
        description: 'Returns Euler\'s number e (2.71828...) raised to the power of the n parameter',
        signature: 'exp(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Exponent to raise' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'floor',
        description: 'Calculates the closest int value that is less than or equal to the value of the parameter',
        signature: 'floor(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to round down' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'lerp',
        description: 'Calculates a number between two numbers at a specific increment',
        signature: 'lerp(start, stop, amt)',
        parameters: [
            { name: 'start', type: 'number', description: 'First value' },
            { name: 'stop', type: 'number', description: 'Second value' },
            { name: 'amt', type: 'number', description: 'Number between 0.0 and 1.0' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'log',
        description: 'Calculates the natural logarithm (the base-e logarithm) of a number',
        signature: 'log(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number greater than 0' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'mag',
        description: 'Calculates the magnitude (or length) of a vector',
        signature: 'mag(a, b)',
        parameters: [
            { name: 'a', type: 'number', description: 'First component' },
            { name: 'b', type: 'number', description: 'Second component' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'map',
        description: 'Re-maps a number from one range to another',
        signature: 'map(value, start1, stop1, start2, stop2, [withinBounds])',
        parameters: [
            { name: 'value', type: 'number', description: 'The incoming value to be converted' },
            { name: 'start1', type: 'number', description: 'Lower bound of the value\'s current range' },
            { name: 'stop1', type: 'number', description: 'Upper bound of the value\'s current range' },
            { name: 'start2', type: 'number', description: 'Lower bound of the value\'s target range' },
            { name: 'stop2', type: 'number', description: 'Upper bound of the value\'s target range' },
            { name: 'withinBounds', type: 'boolean', description: 'Constrain the value to the newly mapped range', optional: true }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'max',
        description: 'Returns the maximum value in a sequence of numbers',
        signature: 'max(n0, n1)',
        parameters: [
            { name: 'n0', type: 'number', description: 'First number to compare' },
            { name: 'n1', type: 'number', description: 'Second number to compare' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'min',
        description: 'Returns the minimum value in a sequence of numbers',
        signature: 'min(n0, n1)',
        parameters: [
            { name: 'n0', type: 'number', description: 'First number to compare' },
            { name: 'n1', type: 'number', description: 'Second number to compare' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'norm',
        description: 'Normalizes a number from another range into a value between 0 and 1',
        signature: 'norm(value, start, stop)',
        parameters: [
            { name: 'value', type: 'number', description: 'The incoming value to be converted' },
            { name: 'start', type: 'number', description: 'Lower bound of the value\'s current range' },
            { name: 'stop', type: 'number', description: 'Upper bound of the value\'s current range' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'pow',
        description: 'Facilitates exponential expressions',
        signature: 'pow(n, e)',
        parameters: [
            { name: 'n', type: 'number', description: 'Base of the exponential expression' },
            { name: 'e', type: 'number', description: 'Power of which to raise the base' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'round',
        description: 'Calculates the integer closest to the n parameter',
        signature: 'round(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to round' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'sq',
        description: 'Squares a number (multiplies a number by itself)',
        signature: 'sq(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number to square' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'sqrt',
        description: 'Calculates the square root of a number',
        signature: 'sqrt(n)',
        parameters: [
            { name: 'n', type: 'number', description: 'Number whose square root is to be calculated' }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'random',
        description: 'Generates random numbers',
        signature: 'random([min], [max])',
        parameters: [
            { name: 'min', type: 'number', description: 'Minimum value', optional: true },
            { name: 'max', type: 'number', description: 'Maximum value', optional: true }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'randomSeed',
        description: 'Sets the seed value for random()',
        signature: 'randomSeed(seed)',
        parameters: [
            { name: 'seed', type: 'number', description: 'Seed value' }
        ],
        category: 'Math'
    },
    {
        name: 'noise',
        description: 'Returns the Perlin noise value at specified coordinates',
        signature: 'noise(x, [y], [z])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate in noise space' },
            { name: 'y', type: 'number', description: 'y-coordinate in noise space', optional: true },
            { name: 'z', type: 'number', description: 'z-coordinate in noise space', optional: true }
        ],
        returnType: 'number',
        category: 'Math'
    },
    {
        name: 'noiseSeed',
        description: 'Sets the seed value for noise()',
        signature: 'noiseSeed(seed)',
        parameters: [
            { name: 'seed', type: 'number', description: 'Seed value' }
        ],
        category: 'Math'
    },
    // Image
    {
        name: 'loadImage',
        description: 'Loads an image to create a p5.Image object',
        signature: 'loadImage(path, [successCallback], [failureCallback])',
        parameters: [
            { name: 'path', type: 'string', description: 'Path of the image file' },
            { name: 'successCallback', type: 'function', description: 'Function to be called once the image is loaded', optional: true },
            { name: 'failureCallback', type: 'function', description: 'Function to be called in case of an error', optional: true }
        ],
        returnType: 'p5.Image',
        category: 'Image'
    },
    {
        name: 'image',
        description: 'Draws an image to the canvas',
        signature: 'image(img, x, y, [width], [height])',
        parameters: [
            { name: 'img', type: 'p5.Image', description: 'The image to display' },
            { name: 'x', type: 'number', description: 'x-coordinate of the image' },
            { name: 'y', type: 'number', description: 'y-coordinate of the image' },
            { name: 'width', type: 'number', description: 'Width to draw the image', optional: true },
            { name: 'height', type: 'number', description: 'Height to draw the image', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'tint',
        description: 'Tints images using a color',
        signature: 'tint(v1, [v2], [v3], [alpha])',
        parameters: [
            { name: 'v1', type: 'number|string|p5.Color', description: 'Red or hue value, or color string, or p5.Color' },
            { name: 'v2', type: 'number', description: 'Green or saturation value', optional: true },
            { name: 'v3', type: 'number', description: 'Blue or brightness value', optional: true },
            { name: 'alpha', type: 'number', description: 'Alpha value', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'noTint',
        description: 'Removes the current tint set by tint()',
        signature: 'noTint()',
        parameters: [],
        category: 'Image'
    },
    {
        name: 'imageMode',
        description: 'Changes the location from which images are drawn when image() is called',
        signature: 'imageMode(mode)',
        parameters: [
            { name: 'mode', type: 'string', description: 'Either CORNER, CORNERS, or CENTER' }
        ],
        category: 'Image'
    },
    // Time & Date
    {
        name: 'millis',
        description: 'Returns the number of milliseconds (thousandths of a second) since starting the sketch',
        signature: 'millis()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'second',
        description: 'Returns the current second as a value from 0 - 59',
        signature: 'second()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'minute',
        description: 'Returns the current minute as a value from 0 - 59',
        signature: 'minute()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'hour',
        description: 'Returns the current hour as a value from 0 - 23',
        signature: 'hour()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'day',
        description: 'Returns the current day as a value from 1 - 31',
        signature: 'day()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'month',
        description: 'Returns the current month as a value from 1 - 12',
        signature: 'month()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    {
        name: 'year',
        description: 'Returns the current year as an integer (2014, 2015, 2016, etc)',
        signature: 'year()',
        parameters: [],
        returnType: 'number',
        category: 'Time'
    },
    // Constants
    {
        name: 'PI',
        description: 'PI is a mathematical constant with the value 3.14159265358979323846',
        signature: 'PI',
        parameters: [],
        returnType: 'number',
        category: 'Constants'
    },
    {
        name: 'TWO_PI',
        description: 'TWO_PI is a mathematical constant with the value 6.28318530717958647693',
        signature: 'TWO_PI',
        parameters: [],
        returnType: 'number',
        category: 'Constants'
    },
    {
        name: 'TAU',
        description: 'TAU is a mathematical constant with the value 6.28318530717958647693',
        signature: 'TAU',
        parameters: [],
        returnType: 'number',
        category: 'Constants'
    },
    {
        name: 'HALF_PI',
        description: 'HALF_PI is a mathematical constant with the value 1.57079632679489661923',
        signature: 'HALF_PI',
        parameters: [],
        returnType: 'number',
        category: 'Constants'
    },
    {
        name: 'QUARTER_PI',
        description: 'QUARTER_PI is a mathematical constant with the value 0.78539816339744830962',
        signature: 'QUARTER_PI',
        parameters: [],
        returnType: 'number',
        category: 'Constants'
    },
    // 3D Primitives
    {
        name: 'box',
        description: 'Draws a box (rectangular prism)',
        signature: 'box([width], [height], [depth], [detailX], [detailY])',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the box', optional: true },
            { name: 'height', type: 'number', description: 'Height of the box', optional: true },
            { name: 'depth', type: 'number', description: 'Depth of the box', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'sphere',
        description: 'Draws a sphere',
        signature: 'sphere([radius], [detailX], [detailY])',
        parameters: [
            { name: 'radius', type: 'number', description: 'Radius of the sphere', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'cone',
        description: 'Draws a cone',
        signature: 'cone([radius], [height], [detailX], [detailY], [cap])',
        parameters: [
            { name: 'radius', type: 'number', description: 'Radius of the bottom', optional: true },
            { name: 'height', type: 'number', description: 'Height of the cone', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true },
            { name: 'cap', type: 'boolean', description: 'Whether to draw the base of the cone', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'cylinder',
        description: 'Draws a cylinder',
        signature: 'cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap])',
        parameters: [
            { name: 'radius', type: 'number', description: 'Radius of the cylinder', optional: true },
            { name: 'height', type: 'number', description: 'Height of the cylinder', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true },
            { name: 'bottomCap', type: 'boolean', description: 'Whether to draw the bottom cap', optional: true },
            { name: 'topCap', type: 'boolean', description: 'Whether to draw the top cap', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'plane',
        description: 'Draws a plane',
        signature: 'plane([width], [height], [detailX], [detailY])',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the plane', optional: true },
            { name: 'height', type: 'number', description: 'Height of the plane', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'torus',
        description: 'Draws a torus',
        signature: 'torus([radius], [tubeRadius], [detailX], [detailY])',
        parameters: [
            { name: 'radius', type: 'number', description: 'Radius of the torus', optional: true },
            { name: 'tubeRadius', type: 'number', description: 'Radius of the tube', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'ellipsoid',
        description: 'Draws an ellipsoid',
        signature: 'ellipsoid([radiusX], [radiusY], [radiusZ], [detailX], [detailY])',
        parameters: [
            { name: 'radiusX', type: 'number', description: 'Radius in x-dimension', optional: true },
            { name: 'radiusY', type: 'number', description: 'Radius in y-dimension', optional: true },
            { name: 'radiusZ', type: 'number', description: 'Radius in z-dimension', optional: true },
            { name: 'detailX', type: 'number', description: 'Number of segments in x-dimension', optional: true },
            { name: 'detailY', type: 'number', description: 'Number of segments in y-dimension', optional: true }
        ],
        category: 'Shape'
    },
    // 3D Models
    {
        name: 'loadModel',
        description: 'Loads a 3D model to create a p5.Geometry object',
        signature: 'loadModel(path, [normalize], [successCallback], [failureCallback])',
        parameters: [
            { name: 'path', type: 'string', description: 'Path of the model to be loaded' },
            { name: 'normalize', type: 'boolean', description: 'If true, scale the model to a standardized size', optional: true },
            { name: 'successCallback', type: 'function', description: 'Function to be called once the model is loaded', optional: true },
            { name: 'failureCallback', type: 'function', description: 'Function to be called in case of an error', optional: true }
        ],
        returnType: 'p5.Geometry',
        category: 'Shape'
    },
    {
        name: 'model',
        description: 'Draws a p5.Geometry object to the canvas',
        signature: 'model(geometry)',
        parameters: [
            { name: 'geometry', type: 'p5.Geometry', description: 'The p5.Geometry object to render' }
        ],
        category: 'Shape'
    },
    // Curves
    {
        name: 'bezier',
        description: 'Draws a Bézier curve',
        signature: 'bezier(x1, y1, x2, y2, x3, y3, x4, y4)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first point' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first point' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the first control point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the first control point' },
            { name: 'x3', type: 'number', description: 'x-coordinate of the second control point' },
            { name: 'y3', type: 'number', description: 'y-coordinate of the second control point' },
            { name: 'x4', type: 'number', description: 'x-coordinate of the second point' },
            { name: 'y4', type: 'number', description: 'y-coordinate of the second point' }
        ],
        category: 'Shape'
    },
    {
        name: 'spline',
        description: 'Draws a curve using a Catmull-Rom spline',
        signature: 'spline(x1, y1, x2, y2, x3, y3, x4, y4)',
        parameters: [
            { name: 'x1', type: 'number', description: 'x-coordinate of the first point' },
            { name: 'y1', type: 'number', description: 'y-coordinate of the first point' },
            { name: 'x2', type: 'number', description: 'x-coordinate of the second point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the second point' },
            { name: 'x3', type: 'number', description: 'x-coordinate of the third point' },
            { name: 'y3', type: 'number', description: 'y-coordinate of the third point' },
            { name: 'x4', type: 'number', description: 'x-coordinate of the fourth point' },
            { name: 'y4', type: 'number', description: 'y-coordinate of the fourth point' }
        ],
        category: 'Shape'
    },
    {
        name: 'beginShape',
        description: 'Begins adding vertices to a custom shape',
        signature: 'beginShape([kind])',
        parameters: [
            { name: 'kind', type: 'string', description: 'Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, QUAD_STRIP', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'endShape',
        description: 'Concludes the vertices of a custom shape',
        signature: 'endShape([mode])',
        parameters: [
            { name: 'mode', type: 'string', description: 'Use CLOSE to close the shape', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'vertex',
        description: 'Adds a vertex to a custom shape',
        signature: 'vertex(x, y, [z])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the vertex' },
            { name: 'y', type: 'number', description: 'y-coordinate of the vertex' },
            { name: 'z', type: 'number', description: 'z-coordinate of the vertex (for WebGL mode)', optional: true }
        ],
        category: 'Shape'
    },
    {
        name: 'bezierVertex',
        description: 'Adds a Bézier curve segment to a custom shape',
        signature: 'bezierVertex(x2, y2, x3, y3, x4, y4)',
        parameters: [
            { name: 'x2', type: 'number', description: 'x-coordinate of the first control point' },
            { name: 'y2', type: 'number', description: 'y-coordinate of the first control point' },
            { name: 'x3', type: 'number', description: 'x-coordinate of the second control point' },
            { name: 'y3', type: 'number', description: 'y-coordinate of the second control point' },
            { name: 'x4', type: 'number', description: 'x-coordinate of the anchor point' },
            { name: 'y4', type: 'number', description: 'y-coordinate of the anchor point' }
        ],
        category: 'Shape'
    },
    {
        name: 'splineVertex',
        description: 'Connects points with a smooth curve (a spline)',
        signature: 'splineVertex(x, y, [z])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the vertex' },
            { name: 'y', type: 'number', description: 'y-coordinate of the vertex' },
            { name: 'z', type: 'number', description: 'z-coordinate of the vertex (for WebGL mode)', optional: true }
        ],
        category: 'Shape'
    },
    // Attributes
    {
        name: 'ellipseMode',
        description: 'Changes where ellipses, circles, and arcs are drawn',
        signature: 'ellipseMode(mode)',
        parameters: [
            { name: 'mode', type: 'string', description: 'Either CENTER, RADIUS, CORNER, or CORNERS' }
        ],
        category: 'Shape'
    },
    {
        name: 'rectMode',
        description: 'Changes where rectangles and squares are drawn',
        signature: 'rectMode(mode)',
        parameters: [
            { name: 'mode', type: 'string', description: 'Either CENTER, RADIUS, CORNER, or CORNERS' }
        ],
        category: 'Shape'
    },
    {
        name: 'strokeWeight',
        description: 'Sets the width of the stroke used for points, lines, and the outlines of shapes',
        signature: 'strokeWeight(weight)',
        parameters: [
            { name: 'weight', type: 'number', description: 'The weight (in pixels) of the stroke' }
        ],
        category: 'Shape'
    },
    {
        name: 'strokeCap',
        description: 'Sets the style for rendering the ends of lines',
        signature: 'strokeCap(cap)',
        parameters: [
            { name: 'cap', type: 'string', description: 'Either SQUARE, PROJECT, or ROUND' }
        ],
        category: 'Shape'
    },
    {
        name: 'strokeJoin',
        description: 'Sets the style of the joints that connect line segments',
        signature: 'strokeJoin(join)',
        parameters: [
            { name: 'join', type: 'string', description: 'Either MITER, BEVEL, or ROUND' }
        ],
        category: 'Shape'
    },
    // DOM
    {
        name: 'createDiv',
        description: 'Creates a <div></div> element',
        signature: 'createDiv([html])',
        parameters: [
            { name: 'html', type: 'string', description: 'HTML content for the div', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createP',
        description: 'Creates a paragraph element',
        signature: 'createP([html])',
        parameters: [
            { name: 'html', type: 'string', description: 'HTML content for the paragraph', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createSpan',
        description: 'Creates a <span></span> element',
        signature: 'createSpan([html])',
        parameters: [
            { name: 'html', type: 'string', description: 'HTML content for the span', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createInput',
        description: 'Creates a text <input></input> element',
        signature: 'createInput([value], [type])',
        parameters: [
            { name: 'value', type: 'string', description: 'Default value of the input', optional: true },
            { name: 'type', type: 'string', description: 'Type of input (text, password, etc.)', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createButton',
        description: 'Creates a <button></button> element',
        signature: 'createButton(label, [value])',
        parameters: [
            { name: 'label', type: 'string', description: 'Label displayed on the button' },
            { name: 'value', type: 'string', description: 'Value of the button', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createSlider',
        description: 'Creates a slider <input></input> element',
        signature: 'createSlider(min, max, [value], [step])',
        parameters: [
            { name: 'min', type: 'number', description: 'Minimum value of the slider' },
            { name: 'max', type: 'number', description: 'Maximum value of the slider' },
            { name: 'value', type: 'number', description: 'Default value of the slider', optional: true },
            { name: 'step', type: 'number', description: 'Step size for the slider', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createSelect',
        description: 'Creates a dropdown menu <select></select> element',
        signature: 'createSelect([multiple])',
        parameters: [
            { name: 'multiple', type: 'boolean', description: 'If true, allows multiple selections', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createRadio',
        description: 'Creates a radio button element',
        signature: 'createRadio([divId])',
        parameters: [
            { name: 'divId', type: 'string', description: 'ID of the div to contain the radio buttons', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createCheckbox',
        description: 'Creates a checkbox <input></input> element',
        signature: 'createCheckbox([label], [value])',
        parameters: [
            { name: 'label', type: 'string', description: 'Label displayed next to the checkbox', optional: true },
            { name: 'value', type: 'boolean', description: 'Default value of the checkbox', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createFileInput',
        description: 'Creates an <input></input> element of type \'file\'',
        signature: 'createFileInput([callback], [multiple])',
        parameters: [
            { name: 'callback', type: 'function', description: 'Callback function for when a file is selected', optional: true },
            { name: 'multiple', type: 'boolean', description: 'If true, allows multiple file selection', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createImg',
        description: 'Creates an <img> element that can appear outside of the canvas',
        signature: 'createImg(src, [alt])',
        parameters: [
            { name: 'src', type: 'string', description: 'Path to the image' },
            { name: 'alt', type: 'string', description: 'Alternate text for the image', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'createVideo',
        description: 'Creates a <video> element for simple audio/video playback',
        signature: 'createVideo(src, [callback])',
        parameters: [
            { name: 'src', type: 'string', description: 'Path to the video file' },
            { name: 'callback', type: 'function', description: 'Callback function for when the video is loaded', optional: true }
        ],
        returnType: 'p5.MediaElement',
        category: 'DOM'
    },
    {
        name: 'createAudio',
        description: 'Creates an <audio> element for simple audio playback',
        signature: 'createAudio(src, [callback])',
        parameters: [
            { name: 'src', type: 'string', description: 'Path to the audio file' },
            { name: 'callback', type: 'function', description: 'Callback function for when the audio is loaded', optional: true }
        ],
        returnType: 'p5.MediaElement',
        category: 'DOM'
    },
    {
        name: 'select',
        description: 'Searches the page for the first element that matches the given CSS selector string',
        signature: 'select(name)',
        parameters: [
            { name: 'name', type: 'string', description: 'CSS selector string' }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    {
        name: 'selectAll',
        description: 'Searches the page for all elements that match the given CSS selector string',
        signature: 'selectAll(name)',
        parameters: [
            { name: 'name', type: 'string', description: 'CSS selector string' }
        ],
        returnType: 'p5.Element[]',
        category: 'DOM'
    },
    // Data - Conversion
    {
        name: 'boolean',
        description: 'Converts a String or Number to a Boolean',
        signature: 'boolean(value)',
        parameters: [
            { name: 'value', type: 'string|number', description: 'Value to convert' }
        ],
        returnType: 'boolean',
        category: 'Data'
    },
    {
        name: 'byte',
        description: 'Converts a Boolean, String, or Number to its byte value',
        signature: 'byte(value)',
        parameters: [
            { name: 'value', type: 'boolean|string|number', description: 'Value to convert' }
        ],
        returnType: 'number',
        category: 'Data'
    },
    {
        name: 'char',
        description: 'Converts a Number or String to a single-character String',
        signature: 'char(value)',
        parameters: [
            { name: 'value', type: 'number|string', description: 'Value to convert' }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'float',
        description: 'Converts a String to a floating point (decimal) Number',
        signature: 'float(str)',
        parameters: [
            { name: 'str', type: 'string', description: 'String to convert' }
        ],
        returnType: 'number',
        category: 'Data'
    },
    {
        name: 'int',
        description: 'Converts a Boolean, String, or decimal Number to an integer',
        signature: 'int(value)',
        parameters: [
            { name: 'value', type: 'boolean|string|number', description: 'Value to convert' }
        ],
        returnType: 'number',
        category: 'Data'
    },
    {
        name: 'str',
        description: 'Converts a Boolean or Number to String',
        signature: 'str(value)',
        parameters: [
            { name: 'value', type: 'boolean|number', description: 'Value to convert' }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'hex',
        description: 'Converts a Number to a String with its hexadecimal value',
        signature: 'hex(value)',
        parameters: [
            { name: 'value', type: 'number', description: 'Value to convert' }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'unhex',
        description: 'Converts a String with a hexadecimal value to a Number',
        signature: 'unhex(str)',
        parameters: [
            { name: 'str', type: 'string', description: 'Hexadecimal string to convert' }
        ],
        returnType: 'number',
        category: 'Data'
    },
    // Data - LocalStorage
    {
        name: 'storeItem',
        description: 'Stores a value in the web browser\'s local storage',
        signature: 'storeItem(key, value)',
        parameters: [
            { name: 'key', type: 'string', description: 'Key to store the value under' },
            { name: 'value', type: 'string|number|boolean|object', description: 'Value to store' }
        ],
        category: 'Data'
    },
    {
        name: 'getItem',
        description: 'Returns a value in the web browser\'s local storage',
        signature: 'getItem(key)',
        parameters: [
            { name: 'key', type: 'string', description: 'Key to retrieve' }
        ],
        returnType: 'string|number|boolean|object',
        category: 'Data'
    },
    {
        name: 'removeItem',
        description: 'Removes an item from the web browser\'s local storage',
        signature: 'removeItem(key)',
        parameters: [
            { name: 'key', type: 'string', description: 'Key to remove' }
        ],
        category: 'Data'
    },
    {
        name: 'clearStorage',
        description: 'Removes all items in the web browser\'s local storage',
        signature: 'clearStorage()',
        parameters: [],
        category: 'Data'
    },
    // Data - Utility
    {
        name: 'nf',
        description: 'Converts a Number into a String with a given number of digits',
        signature: 'nf(num, [left], [right])',
        parameters: [
            { name: 'num', type: 'number', description: 'Number to format' },
            { name: 'left', type: 'number', description: 'Number of digits to the left of the decimal point', optional: true },
            { name: 'right', type: 'number', description: 'Number of digits to the right of the decimal point', optional: true }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'nfc',
        description: 'Converts a Number into a String with commas to mark units of 1,000',
        signature: 'nfc(num, [right])',
        parameters: [
            { name: 'num', type: 'number', description: 'Number to format' },
            { name: 'right', type: 'number', description: 'Number of digits to the right of the decimal point', optional: true }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'shuffle',
        description: 'Shuffles the elements of an array',
        signature: 'shuffle(array, [modify])',
        parameters: [
            { name: 'array', type: 'any[]', description: 'Array to shuffle' },
            { name: 'modify', type: 'boolean', description: 'If true, modifies the original array', optional: true }
        ],
        returnType: 'any[]',
        category: 'Data'
    },
    {
        name: 'splitTokens',
        description: 'Splits a String into pieces and returns an array containing the pieces',
        signature: 'splitTokens(str, [delimiter])',
        parameters: [
            { name: 'str', type: 'string', description: 'String to split' },
            { name: 'delimiter', type: 'string', description: 'Delimiter character(s)', optional: true }
        ],
        returnType: 'string[]',
        category: 'Data'
    },
    // Image - Pixels
    {
        name: 'get',
        description: 'Gets a pixel or a region of pixels from the canvas',
        signature: 'get([x], [y], [w], [h])',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the pixel', optional: true },
            { name: 'y', type: 'number', description: 'y-coordinate of the pixel', optional: true },
            { name: 'w', type: 'number', description: 'Width of the region', optional: true },
            { name: 'h', type: 'number', description: 'Height of the region', optional: true }
        ],
        returnType: 'p5.Image|p5.Color|number[]',
        category: 'Image'
    },
    {
        name: 'set',
        description: 'Sets the color of a pixel or writes an image into the canvas',
        signature: 'set(x, y, c)',
        parameters: [
            { name: 'x', type: 'number', description: 'x-coordinate of the pixel' },
            { name: 'y', type: 'number', description: 'y-coordinate of the pixel' },
            { name: 'c', type: 'p5.Color|number[]|p5.Image', description: 'Color or image to set' }
        ],
        category: 'Image'
    },
    {
        name: 'filter',
        description: 'Applies an image filter to the canvas',
        signature: 'filter(filterType, [filterParam])',
        parameters: [
            { name: 'filterType', type: 'string', description: 'Either THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE, or BLUR' },
            { name: 'filterParam', type: 'number', description: 'Optional parameter for certain filters', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'copy',
        description: 'Copies pixels from a source image to a region of the canvas',
        signature: 'copy(srcImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)',
        parameters: [
            { name: 'srcImage', type: 'p5.Image', description: 'Source image' },
            { name: 'sx', type: 'number', description: 'Source x-coordinate' },
            { name: 'sy', type: 'number', description: 'Source y-coordinate' },
            { name: 'sWidth', type: 'number', description: 'Source width' },
            { name: 'sHeight', type: 'number', description: 'Source height' },
            { name: 'dx', type: 'number', description: 'Destination x-coordinate' },
            { name: 'dy', type: 'number', description: 'Destination y-coordinate' },
            { name: 'dWidth', type: 'number', description: 'Destination width' },
            { name: 'dHeight', type: 'number', description: 'Destination height' }
        ],
        category: 'Image'
    },
    {
        name: 'blend',
        description: 'Copies a region of pixels from one image to another',
        signature: 'blend(srcImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, [blendMode])',
        parameters: [
            { name: 'srcImage', type: 'p5.Image', description: 'Source image' },
            { name: 'sx', type: 'number', description: 'Source x-coordinate' },
            { name: 'sy', type: 'number', description: 'Source y-coordinate' },
            { name: 'sWidth', type: 'number', description: 'Source width' },
            { name: 'sHeight', type: 'number', description: 'Source height' },
            { name: 'dx', type: 'number', description: 'Destination x-coordinate' },
            { name: 'dy', type: 'number', description: 'Destination y-coordinate' },
            { name: 'dWidth', type: 'number', description: 'Destination width' },
            { name: 'dHeight', type: 'number', description: 'Destination height' },
            { name: 'blendMode', type: 'string', description: 'Blend mode to use', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'saveCanvas',
        description: 'Saves the current canvas as an image',
        signature: 'saveCanvas([filename], [extension])',
        parameters: [
            { name: 'filename', type: 'string', description: 'Filename for the image', optional: true },
            { name: 'extension', type: 'string', description: 'File extension (png, jpg, etc.)', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'saveFrames',
        description: 'Captures a sequence of frames from the canvas that can be saved as images',
        signature: 'saveFrames(filename, extension, duration, framerate, [callback])',
        parameters: [
            { name: 'filename', type: 'string', description: 'Base filename for the frames' },
            { name: 'extension', type: 'string', description: 'File extension (png, jpg, etc.)' },
            { name: 'duration', type: 'number', description: 'Duration in seconds' },
            { name: 'framerate', type: 'number', description: 'Frames per second' },
            { name: 'callback', type: 'function', description: 'Callback function when complete', optional: true }
        ],
        category: 'Image'
    },
    {
        name: 'saveGif',
        description: 'Generates a gif from a sketch and saves it to a file',
        signature: 'saveGif(filename, duration, [options])',
        parameters: [
            { name: 'filename', type: 'string', description: 'Filename for the GIF' },
            { name: 'duration', type: 'number', description: 'Duration in seconds' },
            { name: 'options', type: 'object', description: 'Optional settings for the GIF', optional: true }
        ],
        category: 'Image'
    },
    // Environment
    {
        name: 'width',
        description: 'System variable that stores the width of the display window',
        signature: 'width',
        parameters: [],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'height',
        description: 'System variable that stores the height of the display window',
        signature: 'height',
        parameters: [],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'windowWidth',
        description: 'System variable that stores the width of the inner window',
        signature: 'windowWidth',
        parameters: [],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'windowHeight',
        description: 'System variable that stores the height of the inner window',
        signature: 'windowHeight',
        parameters: [],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'windowResized',
        description: 'The windowResized() function is called once every time the browser window is resized',
        signature: 'windowResized([event])',
        parameters: [
            { name: 'event', type: 'object', description: 'Optional Event callback argument', optional: true }
        ],
        category: 'Environment'
    },
    {
        name: 'fullscreen',
        description: 'Toggles fullscreen mode',
        signature: 'fullscreen([val])',
        parameters: [
            { name: 'val', type: 'boolean', description: 'Whether to enter fullscreen', optional: true }
        ],
        returnType: 'boolean',
        category: 'Environment'
    },
    {
        name: 'pixelDensity',
        description: 'Sets the pixel scaling for high pixel density displays',
        signature: 'pixelDensity([val])',
        parameters: [
            { name: 'val', type: 'number', description: 'Either 1 or 2', optional: true }
        ],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'displayDensity',
        description: 'Returns the pixel density of the current display the sketch is running on',
        signature: 'displayDensity()',
        parameters: [],
        returnType: 'number',
        category: 'Environment'
    },
    {
        name: 'getURL',
        description: 'Returns the current URL',
        signature: 'getURL()',
        parameters: [],
        returnType: 'string',
        category: 'Environment'
    },
    {
        name: 'getURLPath',
        description: 'Returns the current URL path',
        signature: 'getURLPath()',
        parameters: [],
        returnType: 'string',
        category: 'Environment'
    },
    {
        name: 'getURLParams',
        description: 'Returns the current URL parameters as an object',
        signature: 'getURLParams()',
        parameters: [],
        returnType: 'object',
        category: 'Environment'
    },
    // Typography - Additional
    {
        name: 'loadFont',
        description: 'Loads a font and creates a p5.Font object',
        signature: 'loadFont(path, [successCallback], [failureCallback])',
        parameters: [
            { name: 'path', type: 'string', description: 'Path of the font file' },
            { name: 'successCallback', type: 'function', description: 'Function to be called once the font is loaded', optional: true },
            { name: 'failureCallback', type: 'function', description: 'Function to be called in case of an error', optional: true }
        ],
        returnType: 'p5.Font',
        category: 'Typography'
    },
    {
        name: 'textLeading',
        description: 'Sets the spacing between lines of text when text() is called',
        signature: 'textLeading(leading)',
        parameters: [
            { name: 'leading', type: 'number', description: 'The size in pixels for spacing between lines' }
        ],
        category: 'Typography'
    },
    {
        name: 'textStyle',
        description: 'Sets the style for system fonts when text() is called',
        signature: 'textStyle(style)',
        parameters: [
            { name: 'style', type: 'string', description: 'Either NORMAL, ITALIC, or BOLD' }
        ],
        category: 'Typography'
    },
    {
        name: 'textWeight',
        description: 'Sets or gets the current font weight',
        signature: 'textWeight(weight)',
        parameters: [
            { name: 'weight', type: 'number|string', description: 'Font weight (100-900) or string (normal, bold)' }
        ],
        returnType: 'number|string',
        category: 'Typography'
    },
    {
        name: 'textWidth',
        description: 'Calculates the width of the given text string in pixels',
        signature: 'textWidth(text)',
        parameters: [
            { name: 'text', type: 'string', description: 'Text to measure' }
        ],
        returnType: 'number',
        category: 'Typography'
    },
    // Constants - Additional
    {
        name: 'WEBGL',
        description: 'One of the two render modes in p5.js, used for computationally intensive tasks like 3D rendering and shaders',
        signature: 'WEBGL',
        parameters: [],
        returnType: 'string',
        category: 'Constants'
    },
    {
        name: 'P2D',
        description: 'The default, two-dimensional renderer in p5.js',
        signature: 'P2D',
        parameters: [],
        returnType: 'string',
        category: 'Constants'
    },
    {
        name: 'VERSION',
        description: 'Version of this p5.js',
        signature: 'VERSION',
        parameters: [],
        returnType: 'string',
        category: 'Constants'
    },
    // Missing 3D Functions
    {
        name: 'createModel',
        description: 'Load a 3d model from an OBJ or STL string',
        signature: 'createModel(objString)',
        parameters: [
            { name: 'objString', type: 'string', description: 'OBJ or STL file content as a string' }
        ],
        returnType: 'p5.Geometry',
        category: 'Shape'
    },
    {
        name: 'buildGeometry',
        description: 'Creates a custom p5.Geometry object from simpler 3D shapes',
        signature: 'buildGeometry(primitives)',
        parameters: [
            { name: 'primitives', type: 'p5.Geometry[]', description: 'Array of p5.Geometry objects to combine' }
        ],
        returnType: 'p5.Geometry',
        category: 'Shape'
    },
    {
        name: 'curveDetail',
        description: 'Sets the number of segments used to draw spline curves in WebGL mode',
        signature: 'curveDetail(detail)',
        parameters: [
            { name: 'detail', type: 'number', description: 'Number of curve segments' }
        ],
        category: 'Shape'
    },
    {
        name: 'freeGeometry',
        description: 'Clears a p5.Geometry object from the graphics processing unit (GPU) memory',
        signature: 'freeGeometry(geometry)',
        parameters: [
            { name: 'geometry', type: 'p5.Geometry', description: 'The geometry object to free from GPU memory' }
        ],
        category: 'Shape'
    },
    {
        name: 'saveObj',
        description: 'Exports p5.Geometry objects as 3D models in the Wavefront .obj file format',
        signature: 'saveObj(geometry, filename)',
        parameters: [
            { name: 'geometry', type: 'p5.Geometry', description: 'The geometry object to export' },
            { name: 'filename', type: 'string', description: 'Filename for the exported .obj file' }
        ],
        category: 'Shape'
    },
    {
        name: 'saveStl',
        description: 'Exports p5.Geometry objects as 3D models in the STL stereolithography file format',
        signature: 'saveStl(geometry, filename)',
        parameters: [
            { name: 'geometry', type: 'p5.Geometry', description: 'The geometry object to export' },
            { name: 'filename', type: 'string', description: 'Filename for the exported .stl file' }
        ],
        category: 'Shape'
    },
    {
        name: 'strokeMode',
        description: 'Sets the stroke rendering mode to balance performance and visual features when drawing lines',
        signature: 'strokeMode(mode)',
        parameters: [
            { name: 'mode', type: 'string', description: 'Stroke rendering mode' }
        ],
        category: 'Shape'
    },
    // Missing Curve Functions
    {
        name: 'bezierPoint',
        description: 'Calculates coordinates along a Bézier curve using interpolation',
        signature: 'bezierPoint(a, b, c, d, t)',
        parameters: [
            { name: 'a', type: 'number', description: 'First point coordinate' },
            { name: 'b', type: 'number', description: 'First control point coordinate' },
            { name: 'c', type: 'number', description: 'Second control point coordinate' },
            { name: 'd', type: 'number', description: 'Second point coordinate' },
            { name: 't', type: 'number', description: 'Value between 0 and 1' }
        ],
        returnType: 'number',
        category: 'Shape'
    },
    {
        name: 'bezierTangent',
        description: 'Calculates coordinates along a line that\'s tangent to a Bézier curve',
        signature: 'bezierTangent(a, b, c, d, t)',
        parameters: [
            { name: 'a', type: 'number', description: 'First point coordinate' },
            { name: 'b', type: 'number', description: 'First control point coordinate' },
            { name: 'c', type: 'number', description: 'Second control point coordinate' },
            { name: 'd', type: 'number', description: 'Second point coordinate' },
            { name: 't', type: 'number', description: 'Value between 0 and 1' }
        ],
        returnType: 'number',
        category: 'Shape'
    },
    {
        name: 'splinePoint',
        description: 'Calculates coordinates along a spline curve using interpolation',
        signature: 'splinePoint(a, b, c, d, t)',
        parameters: [
            { name: 'a', type: 'number', description: 'First point coordinate' },
            { name: 'b', type: 'number', description: 'Second point coordinate' },
            { name: 'c', type: 'number', description: 'Third point coordinate' },
            { name: 'd', type: 'number', description: 'Fourth point coordinate' },
            { name: 't', type: 'number', description: 'Value between 0 and 1' }
        ],
        returnType: 'number',
        category: 'Shape'
    },
    {
        name: 'splineTangent',
        description: 'Calculates coordinates along a line that\'s tangent to a spline curve',
        signature: 'splineTangent(a, b, c, d, t)',
        parameters: [
            { name: 'a', type: 'number', description: 'First point coordinate' },
            { name: 'b', type: 'number', description: 'Second point coordinate' },
            { name: 'c', type: 'number', description: 'Third point coordinate' },
            { name: 'd', type: 'number', description: 'Fourth point coordinate' },
            { name: 't', type: 'number', description: 'Value between 0 and 1' }
        ],
        returnType: 'number',
        category: 'Shape'
    },
    // Missing Custom Shape Functions
    {
        name: 'beginContour',
        description: 'Begins creating a hole within a flat shape',
        signature: 'beginContour()',
        parameters: [],
        category: 'Shape'
    },
    {
        name: 'bezierOrder',
        description: 'Influences the shape of the Bézier curve segment in a custom shape',
        signature: 'bezierOrder(order)',
        parameters: [
            { name: 'order', type: 'number', description: 'Order of the Bézier curve' }
        ],
        category: 'Shape'
    },
    {
        name: 'endContour',
        description: 'Stops creating a hole within a flat shape',
        signature: 'endContour()',
        parameters: [],
        category: 'Shape'
    },
    {
        name: 'normal',
        description: 'Sets the normal vector for vertices in a custom 3D shape',
        signature: 'normal(x, y, z)',
        parameters: [
            { name: 'x', type: 'number', description: 'x-component of the normal vector' },
            { name: 'y', type: 'number', description: 'y-component of the normal vector' },
            { name: 'z', type: 'number', description: 'z-component of the normal vector' }
        ],
        category: 'Shape'
    },
    {
        name: 'splineProperties',
        description: 'Get or set multiple spline properties at once',
        signature: 'splineProperties(properties)',
        parameters: [
            { name: 'properties', type: 'object', description: 'Object containing spline properties' }
        ],
        returnType: 'object',
        category: 'Shape'
    },
    {
        name: 'splineProperty',
        description: 'Gets or sets a given spline property',
        signature: 'splineProperty(property, [value])',
        parameters: [
            { name: 'property', type: 'string', description: 'Name of the property' },
            { name: 'value', type: 'any', description: 'Value to set (optional for get)', optional: true }
        ],
        returnType: 'any',
        category: 'Shape'
    },
    {
        name: 'vertexProperty',
        description: 'Sets the shader\'s vertex property or attribute variables',
        signature: 'vertexProperty(name, value)',
        parameters: [
            { name: 'name', type: 'string', description: 'Name of the vertex property' },
            { name: 'value', type: 'number|number[]', description: 'Value or array of values' }
        ],
        category: 'Shape'
    },
    // Missing Attributes
    {
        name: 'noSmooth',
        description: 'Draws certain features with jagged (aliased) edges',
        signature: 'noSmooth()',
        parameters: [],
        category: 'Shape'
    },
    {
        name: 'smooth',
        description: 'Draws certain features with smooth (antialiased) edges',
        signature: 'smooth()',
        parameters: [],
        category: 'Shape'
    },
    // Missing Color Functions
    {
        name: 'beginClip',
        description: 'Starts defining a shape that will mask any shapes drawn afterward',
        signature: 'beginClip()',
        parameters: [],
        category: 'Color'
    },
    {
        name: 'clip',
        description: 'Defines a shape that will mask any shapes drawn afterward',
        signature: 'clip()',
        parameters: [],
        category: 'Color'
    },
    {
        name: 'endClip',
        description: 'Ends defining a mask that was started with beginClip()',
        signature: 'endClip()',
        parameters: [],
        category: 'Color'
    },
    // Missing Typography Functions
    {
        name: 'fontAscent',
        description: 'Returns the loose ascent of the text based on the font\'s intrinsic metrics',
        signature: 'fontAscent()',
        parameters: [],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'fontBounds',
        description: 'Computes a generic (non-tight) bounding box for a block of text',
        signature: 'fontBounds(text, x, y, [fontSize])',
        parameters: [
            { name: 'text', type: 'string', description: 'Text to measure' },
            { name: 'x', type: 'number', description: 'x-coordinate' },
            { name: 'y', type: 'number', description: 'y-coordinate' },
            { name: 'fontSize', type: 'number', description: 'Font size', optional: true }
        ],
        returnType: 'object',
        category: 'Typography'
    },
    {
        name: 'fontDescent',
        description: 'Returns the loose descent of the text based on the font\'s intrinsic metrics',
        signature: 'fontDescent()',
        parameters: [],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'fontWidth',
        description: 'Returns the loose width of a text string based on the current font',
        signature: 'fontWidth(text)',
        parameters: [
            { name: 'text', type: 'string', description: 'Text to measure' }
        ],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'textAscent',
        description: 'Returns the ascent of the text',
        signature: 'textAscent()',
        parameters: [],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'textBounds',
        description: 'Computes the tight bounding box for a block of text',
        signature: 'textBounds(text, x, y, [fontSize])',
        parameters: [
            { name: 'text', type: 'string', description: 'Text to measure' },
            { name: 'x', type: 'number', description: 'x-coordinate' },
            { name: 'y', type: 'number', description: 'y-coordinate' },
            { name: 'fontSize', type: 'number', description: 'Font size', optional: true }
        ],
        returnType: 'object',
        category: 'Typography'
    },
    {
        name: 'textDescent',
        description: 'Returns the descent of the text',
        signature: 'textDescent()',
        parameters: [],
        returnType: 'number',
        category: 'Typography'
    },
    {
        name: 'textDirection',
        description: 'Sets or gets the text drawing direction',
        signature: 'textDirection([direction])',
        parameters: [
            { name: 'direction', type: 'string', description: 'Either LTR (left-to-right) or RTL (right-to-left)', optional: true }
        ],
        returnType: 'string',
        category: 'Typography'
    },
    {
        name: 'textProperties',
        description: 'Gets or sets text properties in batch, similar to calling textProperty() multiple times',
        signature: 'textProperties([properties])',
        parameters: [
            { name: 'properties', type: 'object', description: 'Object containing text properties', optional: true }
        ],
        returnType: 'object',
        category: 'Typography'
    },
    {
        name: 'textProperty',
        description: 'Sets or gets a single text property for the renderer',
        signature: 'textProperty(property, [value])',
        parameters: [
            { name: 'property', type: 'string', description: 'Name of the property' },
            { name: 'value', type: 'any', description: 'Value to set (optional for get)', optional: true }
        ],
        returnType: 'any',
        category: 'Typography'
    },
    {
        name: 'textWrap',
        description: 'Sets the style for wrapping text when text() is called',
        signature: 'textWrap(wrap)',
        parameters: [
            { name: 'wrap', type: 'string', description: 'Either WORD, CHAR, or NONE' }
        ],
        category: 'Typography'
    },
    // Missing Image Functions
    {
        name: 'createImage',
        description: 'Creates a new p5.Image object',
        signature: 'createImage(width, height)',
        parameters: [
            { name: 'width', type: 'number', description: 'Width of the image' },
            { name: 'height', type: 'number', description: 'Height of the image' }
        ],
        returnType: 'p5.Image',
        category: 'Image'
    },
    // Missing DOM Functions
    {
        name: 'removeElements',
        description: 'Removes all elements created by p5.js, including any event handlers',
        signature: 'removeElements()',
        parameters: [],
        category: 'DOM'
    },
    {
        name: 'createElement',
        description: 'Creates a new p5.Element object',
        signature: 'createElement(tag, [content])',
        parameters: [
            { name: 'tag', type: 'string', description: 'HTML tag name' },
            { name: 'content', type: 'string', description: 'HTML content', optional: true }
        ],
        returnType: 'p5.Element',
        category: 'DOM'
    },
    // Missing Structure Functions
    {
        name: 'disableFriendlyErrors',
        description: 'Turns off the parts of the Friendly Error System (FES) that impact performance',
        signature: 'disableFriendlyErrors()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'isLooping',
        description: 'Returns true if the draw loop is running and false if not',
        signature: 'isLooping()',
        parameters: [],
        returnType: 'boolean',
        category: 'Structure'
    },
    {
        name: 'loop',
        description: 'Resumes the draw loop after noLoop() has been called',
        signature: 'loop()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'noLoop',
        description: 'Stops the code in draw() from running repeatedly',
        signature: 'noLoop()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'redraw',
        description: 'Runs the code in draw() once',
        signature: 'redraw()',
        parameters: [],
        category: 'Structure'
    },
    {
        name: 'remove',
        description: 'Removes the sketch from the web page',
        signature: 'remove()',
        parameters: [],
        category: 'Structure'
    },
    // Missing Data Functions
    {
        name: 'unchar',
        description: 'Converts a single-character String to a Number',
        signature: 'unchar(n)',
        parameters: [
            { name: 'n', type: 'string', description: 'Single character string' }
        ],
        returnType: 'number',
        category: 'Data'
    },
    {
        name: 'nfp',
        description: 'Converts a Number into a String with a plus or minus sign',
        signature: 'nfp(num, [left], [right])',
        parameters: [
            { name: 'num', type: 'number', description: 'Number to format' },
            { name: 'left', type: 'number', description: 'Number of digits to the left of the decimal point', optional: true },
            { name: 'right', type: 'number', description: 'Number of digits to the right of the decimal point', optional: true }
        ],
        returnType: 'string',
        category: 'Data'
    },
    {
        name: 'nfs',
        description: 'Converts a positive Number into a String with an extra space in front',
        signature: 'nfs(num, [left], [right])',
        parameters: [
            { name: 'num', type: 'number', description: 'Number to format' },
            { name: 'left', type: 'number', description: 'Number of digits to the left of the decimal point', optional: true },
            { name: 'right', type: 'number', description: 'Number of digits to the right of the decimal point', optional: true }
        ],
        returnType: 'string',
        category: 'Data'
    }
];

/**
 * Get all p5.js functions
 */
export function getAllFunctions(): P5Function[] {
    return p5Functions;
}

/**
 * Get functions by category
 */
export function getFunctionsByCategory(category: string): P5Function[] {
    return p5Functions.filter(func => func.category === category);
}

/**
 * Find a function by name
 */
export function findFunction(name: string): P5Function | undefined {
    return p5Functions.find(func => func.name.toLowerCase() === name.toLowerCase());
}

