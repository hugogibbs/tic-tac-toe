
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


// Swith between players and check the score to determine if there is a winner after each play
function changePlayer() {
    if (document.getElementById('score').textContent == 'Player X Turn') {
        document.getElementById('score').textContent = 'Player O Turn';
        
    }
    else {
        document.getElementById('score').textContent = 'Player X Turn';
        
    }
    checkScore();
}

function checkScore () {

    // 8 scenarios where X can be the winner

    if (document.getElementById('grid1').textContent == 'X' && document.getElementById('grid2').textContent == 'X' && document.getElementById('grid3').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }
    
    if (document.getElementById('grid4').textContent == 'X' && document.getElementById('grid5').textContent == 'X' && document.getElementById('grid6').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }
    
    if (document.getElementById('grid7').textContent == 'X' && document.getElementById('grid8').textContent == 'X' && document.getElementById('grid9').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }

    if (document.getElementById('grid1').textContent == 'X' && document.getElementById('grid4').textContent == 'X' && document.getElementById('grid7').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }

    if (document.getElementById('grid2').textContent == 'X' && document.getElementById('grid5').textContent == 'X' && document.getElementById('grid8').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }

    if (document.getElementById('grid3').textContent == 'X' && document.getElementById('grid6').textContent == 'X' && document.getElementById('grid9').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }

    if (document.getElementById('grid1').textContent == 'X' && document.getElementById('grid5').textContent == 'X' && document.getElementById('grid9').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }

    if (document.getElementById('grid3').textContent == 'X' && document.getElementById('grid5').textContent == 'X' && document.getElementById('grid7').textContent == 'X') {
        document.getElementById('score').textContent = 'Player X Wins!';
        return;
    }


    // 8 scenarios where O can be the winner


    if (document.getElementById('grid1').textContent == 'O' && document.getElementById('grid2').textContent == 'O' && document.getElementById('grid3').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }
    
    if (document.getElementById('grid4').textContent == 'O' && document.getElementById('grid5').textContent == 'O' && document.getElementById('grid6').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }
    
    if (document.getElementById('grid7').textContent == 'O' && document.getElementById('grid8').textContent == 'O' && document.getElementById('grid9').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid1').textContent == 'O' && document.getElementById('grid4').textContent == 'O' && document.getElementById('grid7').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid2').textContent == 'O' && document.getElementById('grid5').textContent == 'O' && document.getElementById('grid8').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid3').textContent == 'O' && document.getElementById('grid6').textContent == 'O' && document.getElementById('grid9').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid1').textContent == 'O' && document.getElementById('grid5').textContent == 'O' && document.getElementById('grid9').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid3').textContent == 'O' && document.getElementById('grid5').textContent == 'O' && document.getElementById('grid7').textContent == 'O') {
        document.getElementById('score').textContent = 'Player O Wins!';
        return;
    }

    if (document.getElementById('grid1').textContent != '' && document.getElementById('grid2').textContent != '' 
    && document.getElementById('grid3').textContent != '' && document.getElementById('grid4').textContent != '' 
    && document.getElementById('grid5').textContent != '' && document.getElementById('grid6').textContent != '' 
    && document.getElementById('grid7').textContent != '' && document.getElementById('grid8').textContent != ''
    && document.getElementById('grid9').textContent != '') {
        document.getElementById('score').textContent = 'It\'s a tie!'
    }


    else {
        console.log('no winner yet');
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