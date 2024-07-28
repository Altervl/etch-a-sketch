let canvas = document.querySelector("#container");

let side = prompt("Enter a side length from 2 to 100:");
let canvas_size = side**2;

let pixel_size = canvas.offsetWidth / side;

for (i = 0; i < canvas_size; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = `${pixel_size}px`;
    pixel.style.height = `${pixel_size}px`;
    canvas.appendChild(pixel);
};

canvas.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.className === "pixel") {
        target.className = "painted";
        target.style.opacity = "0.1";
    } else {
        target.style.opacity -= "-0.1";
    };
});
