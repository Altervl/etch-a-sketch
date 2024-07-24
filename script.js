let canvas = document.createElement("div");
canvas.setAttribute("id", "container");
document.body.appendChild(canvas);

let side = prompt("Enter a side length from 2 to 100:");
let size = side**2;

let pixel_size = canvas.offsetWidth / side;

for (i = 0; i < size; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = `${pixel_size}px`;
    pixel.style.height = `${pixel_size}px`;
    canvas.appendChild(pixel);
};
