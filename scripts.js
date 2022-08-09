const player1 = 'X';
const player2 = 'O';
let heading = $("#heading");
let currentPlayer = player1;

let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');



const boxIdArr = [
    box1, box2, box3, box4, box5, box6, box7, box8, box9
];












const winningCombos = [

]









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



