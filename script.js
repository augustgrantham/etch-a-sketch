//element reference
const grid = document.querySelector("#container");   
const button = document.querySelector("button");
const root = document.querySelector(":root");
//button event
button.addEventListener("click", resize => {
    grid.innerHTML = "";
    let newSize = prompt("input desired number of squares per side");
    if(newSize > 100) {
        newSize = 100;
    }
    generateGraph(newSize);
    root.style.setProperty("--num-of-squares",newSize);
});
//generate graph'  
function generateGraph(size = 16) {
for(let i = 0; i < (size * size); i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", draw => {
        div.classList.add("draw");
    });
    grid.appendChild(div);
}
}
generateGraph();