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
        
    }
    console.log(currentMode);
}

function fillBlack() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", black)})
    pieces.forEach((piece) => {piece.addEventListener("mouseover", black)});
}

function black() {
    this.style.background = "black";
}

function erasePen() {
    this.style.background = "pink";
}
function undo() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", erasePen)})
    pieces.forEach((piece) => {piece.addEventListener("mouseover", erasePen)});
}

function fillBlack() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.removeEventListener("mouseover", black)})
    pieces.forEach((piece) => {piece.addEventListener("mouseover", black)});
}

drawState()
// wrap subfunctions into decision making func -> which sub to call