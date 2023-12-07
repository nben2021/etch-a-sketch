// Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded", (event) => {
    
    let mainContainer = document.querySelector('.main-container');
    let container = document.querySelector('.container');

    // Create and configure Pen 
    const pen = document.createElement('button');
    pen.textContent = "Pen";
    mainContainer.appendChild(pen);
    pen.style.width = '100px';

    // Create and configure Eraser 
    const eraser = document.createElement('button');
    eraser.textContent = "Eraser";
    mainContainer.appendChild(eraser);
    eraser.style.width = '100px';

    // Create a 16x16 grid of div elements for drawing
    let divs = [];
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.classList.add('content');
            divs.push(div);
            container.appendChild(div);
        }
    }

  
    let activeMouse = null;

    // Set active tool to 'pen' when Pen button is clicked
    pen.addEventListener('click', function() {
        activeMouse = 'pen';
    });

    // Set active tool to 'eraser' when Eraser button is clicked
    eraser.addEventListener('click', function() {
        activeMouse = 'eraser';
    });

    // Add event listeners to each div in the grid
    divs.forEach((div) => {
        // Change background color on mouseover 
        div.addEventListener('mouseover', function(e) {
            if (activeMouse === 'pen') {
                e.target.style.backgroundColor = 'black';
            } else if (activeMouse === 'eraser') {
                e.target.style.backgroundColor = 'white';
            }
        });

        // Stop drawing or erasing when clicking a div
        div.addEventListener('click', function() {
            activeMouse = null;
        });
    });
});
