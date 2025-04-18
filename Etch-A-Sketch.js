console.log("Hello from a large JS file!");

function greetUser(name) {
  alert(`Welcome, ${name}!`);
}

greetUser("Visitor");

const container1 = document.querySelector(".container");
const range = document.getElementById("grid-select");
const buttons = document.getElementsByClassName("color"); 

// for (let i = 0; i < 256; i++) {
//     let div = document.createElement("div");
//     div.className = "gridItem";
//     div.textContent = "This is a new div!";
//     document.body.appendChild(div);
// }

let divs = document.getElementsByClassName("gridItem");//Grid item that was created dynamicallys
const newGridButton = document.getElementById("newGridButton");//Get the element with the specified id
const container = document.getElementById("gridContainer");//Get the element with the specified id

// function newGridButton(){
//     gridButton = prompt("No. of squares per side for the new grid:");
//     if(gridButton > 0 && gridButton <= 100) {
//         console.log("Number of squares per side is:", gridButton);
//     }
// };

document.addEventListener("DOMContentLoaded", function() {
  const gridButton = document.getElementById("grid-button");
  if (gridButton) {
    gridButton.addEventListener("click", function() {
      const newSize = prompt("Enter the number of squares per side:");
      if (newSize !== null && newSize > 0) {
        clearGrid();
        createGrid(newSize);
      }
    });
  } else {
    console.error("Element with ID 'grid-button' not found.");
  }
});

  function clearGrid() {
    const gridContainer = document.getElementById("grid-container");
    gridContainer.innerHTML = ""; // Remove all children
  }
  
  function createGrid(size) {
    const gridContainer = document.getElementById("grid-container");
    const cellSize = 960 / size; // Assuming 960px width for the grid
  
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${cellSize}px`;
        square.style.height = `${cellSize}px`;
        gridContainer.appendChild(square);
      }
    }
  } 
