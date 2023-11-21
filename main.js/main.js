let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = [...document.getElementsByClassName('box')]

const oText = "O"
const xText = "X"
let currentPlayer = xText
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
