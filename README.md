# etch-a-sketch
Etch-a-Sketch Project Readme

Description

This project is a simple Etch-a-Sketch simulator implemented in HTML, CSS, and JavaScript. It allows users to draw on a grid using a pen or erase with an eraser. The UI is minimalist, containing only the drawing grid and the buttons for the pen and eraser tools.

Files

index.html: The HTML file that defines the structure of the web page.
styles.css: Contains the CSS rules for styling the HTML elements.
javascript.js: Handles the interactivity of the Etch-a-Sketch using JavaScript.
HTML Structure
The HTML document is structured into a head and body.
The head contains meta-information, links to the CSS and JavaScript files, and sets the title.
The body contains the main header (h1) and two container divs for holding the Etch-a-Sketch grid.
CSS Styling
h1: The text within the h1 element is centered.
.main-container: Set as a flexbox to hold the drawing container and buttons.
.container: A flexbox with wrapping, holding the individual cells (divs) of the drawing grid.
.content: Styles individual cells in the grid.
JavaScript Logic
Waits for the DOM to be fully loaded before running.
Creates a 16x16 grid using div elements for the drawing area.
Implements the pen and eraser tools via buttons.
Sets event listeners to enable and disable drawing and erasing.
Usage

Open index.html in a web browser to start the Etch-a-Sketch. Use the Pen button to activate the drawing tool and the Eraser button to activate the erasing tool. Move the mouse over the cells to draw or erase.

Requirements

A modern web browser that supports HTML5, CSS3, and JavaScript.