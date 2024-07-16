const main = document.querySelector("#main-container");

const size = prompt("Enter a side size from 2 to 100:");

for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);

    for (j = 0; j < size; j++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        row.appendChild(pixel);
    };
};
