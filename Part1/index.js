let board = [];

function play(clickedId) {
    let playerSpan = document.getElementById('player');
    let clickedElement = document.getElementById(clickedId);
    let boardFull = true;
    let winner = true;

    winnersMessage = `PLAYER ${playerSpan.innerText} WON!`;

    for (var i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false;
        }
    }

    // ALERTS "CATS GAME" IF BOARD IS FULL AND HAS NO WINNER
    if (boardFull) {return (window.alert('CATS GAME'))}

    
    // -------------------------------------------------------
    if (clickedElement.innerText === '') {
        if (playerSpan.innerText === 'X') {
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X';
            board[clickedId] = 'X';
        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedId] = 'O';
        }
    }

    // CHECKS ALL POSSIBLE WINNING COMBINATIONS
    if (board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {window.alert(winnersMessage); reset()}; // TOP ROW
    if (board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {window.alert(winnersMessage); reset()}; // MIDDLE ROW
    if (board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {window.alert(winnersMessage); reset()}; // BOTTOM ROW
    if (board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {window.alert(winnersMessage); reset()}; // LEFT COLUMN
    if (board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {window.alert(winnersMessage); reset()}; // MIDDLE COLUMN
    if (board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {window.alert(winnersMessage); reset()}; // RIGHT COLUMN
    if (board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {window.alert(winnersMessage); reset()}; // BACKWARD DIAGONAL
    if (board[6] !== undefined && board[6] === board[4] && board[6] === board[2]) {window.alert(winnersMessage); reset()}; // FORWARD DIAGONAL
}

function reset() {
    board = [];
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerText = '';
    }
}