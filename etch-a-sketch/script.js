const size = 10;
const totalSize = 650;
const board = document.getElementById("board");
board.style.width = totalSize;
board.style.height = totalSize;
const erase = document.querySelector("#erase");
const blackPen = document.querySelector("#black-pen");
const secret = document.querySelector("#secret");
const clear = document.querySelector("#clear");


for (let i = 0; i < size * size; i++) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.border = "thin solid #000000";
    piece.style.borderWidth = "1px";
    piece.style.height = totalSize / size;
    piece.style.width = totalSize / size;
    board.appendChild(piece);
}

// variable ting

const defaultMode = "classic";
let currentMode = defaultMode;

function setMode(newMode) {
    currentMode = newMode;
    drawState();
}

erase.onclick = () => setMode("eraseMode");
blackPen.onclick = () => setMode("classic");
secret.onclick = () => setMode("secretMode");
clear.onclick = () => setMode("clearMode");

function drawState() {
    if (currentMode == "classic") {
        fillBlack();
    }
    else if (currentMode == "eraseMode") {
        undo();
    }
    else if (currentMode == "clearMode") {
        const pieces = document.querySelectorAll(".piece");
        pieces.forEach((piece) => {piece.style.background = "pink"});
    }
    else if (currentMode == "secretMode") {
        randomPen();
    }
    console.log(currentMode);
}

function fillBlack() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", () => piece.style.background = "black")});
    pieces.forEach((piece) => {piece.addEventListener("mouseover", () => piece.style.background = "black")});
}

function undo() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", () => piece.style.background = "pink")});
    pieces.forEach((piece) => {piece.addEventListener("mouseover", () => piece.style.background = "pink")});
}

function randomPen() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", () => piece.style.background = randomColor())});
    pieces.forEach((piece) => {piece.addEventListener("mouseover", () => piece.style.background = randomColor())});
}

function randomColor() {
    var colors = ["#fbf8cc","#fde4cf","#ffcfd2","#f1c0e8","#cfbaf0","#a3c4f3","#90dbf4","#8eecf5","#98f5e1","#b9fbc0"]
    var color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
    return color;
}

drawState()
