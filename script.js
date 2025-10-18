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
    let opacity = 0
    div.style.opacity = opacity;
    div.classList.add("square");
    div.addEventListener("mouseenter", draw => {
        console.log("hovered");
        let rgb = "rgb(" + getColor() + ")";
        opacity += .1;
        div.style.opacity  = opacity;
        let currentOpacity = parseFloat(div.style.opacity);
        console.log(currentOpacity);
        div.style.backgroundColor = rgb;
        
    });
    grid.appendChild(div);
}
}

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getColor() {
    let red = getRandomNumberInRange(0,255);
    let green = getRandomNumberInRange(0,255);
    let blue = getRandomNumberInRange(0,255);
    return red + "," + green + "," + blue;
    
}
generateGraph();