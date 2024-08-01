const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#checkbox-btn input");
const side = document.querySelector("input[type=range]");

rainbow.checked = false;

side.value = 10;

let rainbowMode = false;

let canvas_size = side.value ** 2;
let blank_size = canvas.offsetWidth / Math.sqrt(canvas_size);

renderCanvas(canvas_size, blank_size);

function renderCanvas() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    };

    for (i = 1; i <= canvas_size; i++) {
        const blank = document.createElement("div");
        blank.className = "blank";
        blank.style.width = `${blank_size}px`;
        blank.style.height = `${blank_size}px`;
        canvas.appendChild(blank);
    };
};

canvas.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (rainbowMode === true) {
        target.className = "rainbowed";
        let color = `${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}`;
        target.style.backgroundColor = `rgb(${color})`;
    } else {
        if (target.className === "blank" || target.className === "rainbowed") {
            target.className = "painted";
            target.style.backgroundColor = "#6fe911";
            target.style.opacity = "0.5";
        } else {
            target.style.opacity -= "-0.05"; // "+=" tries to process values as stings
        };
    };
});

rainbow.addEventListener("change", () => {
    if (rainbow.checked) {
        rainbowMode = true;
    } else {
        rainbowMode = false;
    }
});

clear.addEventListener("click", () => {
    for (const child of canvas.children) {
        child.className = "blank";
        child.style.backgroundColor = "#ece8e5";
    };
});

side.addEventListener("input", () => {
    side.nextElementSibling.innerText = side.value;
    canvas_size = side.value ** 2;
    blank_size = canvas.offsetWidth / Math.sqrt(canvas_size);
    renderCanvas();
});
