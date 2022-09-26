const restartButton = document.createElement('button');
restartButton.className = 'restartButton';
restartButton.id = 'restartButton';
restartButton.textContent = 'RESTART';
restart.appendChild(restartButton);

document.getElementById('restart').addEventListener('click', restartGame)

function restartGame() {
    restartButton.style.backgroundColor = 'red';
}