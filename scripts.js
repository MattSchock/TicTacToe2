const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;




function clickSelector(clicked_Id) {
    console.log(clicked_Id);
    let boxId = clicked_Id;
    console.log(boxId);
    document.getElementById(boxId).innerHTML = currentPlayer;
    if (currentPlayer == player1) {
        currentPlayer = player2
        return currentPlayer;
    } else {
        currentPlayer = player1;
        return currentPlayer;
    };
};