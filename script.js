const restartButton = document.createElement('button');
restartButton.className = 'restartButton';
restartButton.id = 'restartButton';
restartButton.textContent = 'RESTART';
restart.appendChild(restartButton);

document.getElementById('restart').addEventListener('click', restartGame)

function restartGame() {
    document.getElementById('grid1').textContent = '';
    document.getElementById('grid2').textContent = '';
    document.getElementById('grid3').textContent = '';
    document.getElementById('grid4').textContent = '';
    document.getElementById('grid5').textContent = '';
    document.getElementById('grid6').textContent = '';
    document.getElementById('grid7').textContent = '';
    document.getElementById('grid8').textContent = '';
    document.getElementById('grid9').textContent = '';
    document.getElementById('score').textContent = 'Player X Turn';
}

