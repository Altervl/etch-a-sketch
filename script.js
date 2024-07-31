const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#checkbox-btn input");

let rainbowMode = false;

let side = 0;
while (side < 1 || side > 100) {
    side = prompt("Enter a side length from 1 to 100:");
    if (side === "0") side = 0;
};

for (i = 1; i <= side; i++) {
    const row = document.createElement("div");
    row.className = "blank";
    row.style.display = "flex";
    row.style.width = `${canvas.offsetWidth}px`;
    row.style.height = `${canvas.offsetHeight / side}px`;
    row.style.flexDirection = "row";
    row.style.flexWrap = "wrap";
    canvas.appendChild(row);

    for (j = 1; j <= side; j++) {
        const blank = document.createElement("div");
        blank.className = "blank";
        blank.style.width = `${row.offsetWidth / side}px`;
        row.appendChild(blank);
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
    for (const row of canvas.children) {
        for (const blank of row.children) {
            blank.className = "blank";
            blank.style.backgroundColor = "#ece8e5";
        };
    };
});
