let canvas = document.querySelector("#main-container");

let size = prompt("Enter a side size from 2 to 100:");
size = parseInt(size);

for (i = 0; i < size**2; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";

    let pixel_size = canvas.offsetWidth / size;
    pixel.style.width = `${pixel_size}px`;
    pixel.style.height = `${pixel_size}px`;
    canvas.appendChild(pixel);
};
