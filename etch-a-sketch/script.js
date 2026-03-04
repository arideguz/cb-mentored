const size = 10;
const totalSize = 650;
const board = document.getElementById("board");
board.style.width = totalSize;
board.style.height = totalSize;
const erase = document.getElementById("erase");
const blackPen = document.getElementById("black-pen");
const secret = document.getElementById("secret");
const clear = document.getElementById("clear");


for (let i = 0; i < size * size; i++) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.border = "thin solid #000000";
    piece.style.borderWidth = "1px";
    piece.style.height = totalSize / size;
    piece.style.width = totalSize / size;
    board.appendChild(piece);
}

function drawState() {
    blackPen.addEventListener("click", fillBlack);
    erase.addEventListener("click", undo);
}

function fillBlack() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.addEventListener("mouseover", black)});
}

function black() {
    this.style.background = "black";
}

function erasePen() {
    this.style.background = "white";
}
function undo() {
    const pieces = document.querySelectorAll(".piece");
    pieces.forEach((piece) => {piece.addEventListener("mouseover", erasePen)})
}

drawState()
// wrap subfunctions into decision making func -> which sub to call