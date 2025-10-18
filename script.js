//element reference
const grid = document.querySelector("#container");   
//generate graph'   
for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", draw => {
        div.classList.add("draw");
    });
    grid.appendChild(div);
}

