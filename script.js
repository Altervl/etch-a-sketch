let canvas = document.querySelector("#container");
let clear = document.querySelector("#clear");

let side = prompt("Enter a side length from 2 to 100:");
let canvas_size = side**2;

let blank_size = canvas.offsetWidth / side;

for (i = 1; i <= canvas_size; i++) {
    let blank = document.createElement("div");
    blank.className = "blank";
    blank.style.width = `${blank_size}px`;
    blank.style.height = `${blank_size}px`;
    canvas.appendChild(blank);
};

canvas.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.className === "blank") {
        target.className = "painted";
        target.style.opacity = "0.5";
    } else {
        target.style.opacity -= "-0.05"; // "+=" tries to process values as stings
    };
});

clear.addEventListener("click", () => {
    for (const child of canvas.children) {
        child.className = "blank";
    };
});