const player1 = 'X';
const player2 = 'O';
let heading = $("#heading");
let currentPlayer = player1;




function clickSelector(clicked_Id) {
    console.log(clicked_Id);
    let boxId = clicked_Id;
    console.log(boxId);
    document.getElementById(boxId).innerHTML = currentPlayer;
    document.getElementById(boxId).removeAttribute("onClick");
    if (currentPlayer == player1) {
        currentPlayer = player2;
        heading.text('It is O turn.');
        return currentPlayer;
    } else {
        currentPlayer = player1;
        heading.text('it is X turn');
        return currentPlayer;
    };
};



