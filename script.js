
// create button to restart the game
const restartButton = document.createElement('button');
restartButton.className = 'restartButton';
restartButton.id = 'restartButton';
restartButton.textContent = 'RESTART';
restart.appendChild(restartButton);


// clean all grid elements when restarting the game and set the score for player X turn
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

function changePlayer() {
    if (document.getElementById('score').textContent == 'Player X Turn') {
        document.getElementById('score').textContent = 'Player O Turn';
    }
    else {
        document.getElementById('score').textContent = 'Player X Turn';
    }
}


document.getElementById('grid1').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid1').textContent == '') {
        document.getElementById('grid1').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid1').textContent == ''){
        document.getElementById('grid1').textContent = 'O';
        changePlayer();
    }
})

document.getElementById('grid2').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid2').textContent == '') {
        document.getElementById('grid2').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid2').textContent == '') {
        document.getElementById('grid2').textContent = 'O';
        changePlayer();
    }

})

document.getElementById('grid3').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid3').textContent == '') {
        document.getElementById('grid3').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid3').textContent == ''){
        document.getElementById('grid3').textContent = 'O';
        changePlayer();
    }
})

document.getElementById('grid4').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid4').textContent == '') {
        document.getElementById('grid4').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid4').textContent == ''){
        document.getElementById('grid4').textContent = 'O';
        changePlayer();
    }
})

document.getElementById('grid5').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid5').textContent == '') {
        document.getElementById('grid5').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid5').textContent == ''){
        document.getElementById('grid5').textContent = 'O';
        changePlayer();
    }
    
})

document.getElementById('grid6').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid6').textContent == '') {
        document.getElementById('grid6').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid6').textContent == ''){
        document.getElementById('grid6').textContent = 'O';
        changePlayer();
    }
})

document.getElementById('grid7').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid7').textContent == '') {
        document.getElementById('grid7').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid7').textContent == ''){
        document.getElementById('grid7').textContent = 'O';
        changePlayer();
    }
})
document.getElementById('grid8').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid8').textContent == '') {
        document.getElementById('grid8').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid8').textContent == ''){
        document.getElementById('grid8').textContent = 'O';
        changePlayer();
    }
})

document.getElementById('grid9').addEventListener('click', function (){
    if (document.getElementById('score').textContent == 'Player X Turn' && document.getElementById('grid9').textContent == '') {
        document.getElementById('grid9').textContent = 'X';
        changePlayer();
    }
    else if (document.getElementById('score').textContent == 'Player O Turn' && document.getElementById('grid9').textContent == ''){
        document.getElementById('grid9').textContent = 'O';
        changePlayer();
    }
})