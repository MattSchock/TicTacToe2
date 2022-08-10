const player1 = 'X';
const player2 = 'O';
let heading = $("#heading");
let currentPlayer = player1;
let allDivs = $('.col-4')



let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');


let moveOptions = ['box0', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8'];

const boxIdArr = [
    box0, box1, box2, box3, box4, box5, box6, box7, box8
];

// console.log(boxIdArr);

// const winningCombos = [
// [box0, box1, box2], 
// [box3, box4, box5],  
// [box6, box7, box8],  
// [box0, box3, box6],  
// [box1, box4, box7],  
// [box2, box5, box8],  
// [box0, box4, box8],
// [box2, box4, box6]
// ];


let xPlayerSelections = []
let oPlayerSelections = []

// function winChecker(x) {
//     for(let i = 0; i < winningCombos.length; i++) {
//         if(winningCombos[i].every(x => xPlayerSelections.includes(x)));
//     }
// }


function resetButton () {
    allDivs.text(' ')
    allDivs.attr('onClick', 'clickSelector(this.id)')
    xPlayerSelections.splice(0, xPlayerSelections.length);
    oPlayerSelections.splice(0, oPlayerSelections.length);
    moveOptions.splice(0, moveOptions.length);
    moveOptions.push('box0', 'box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8');
}




function clickSelector(clicked_Id) {
    // console.log(clicked_Id);
    let boxId = clicked_Id;
     console.log(boxId);
    document.getElementById(boxId).innerHTML = currentPlayer;
    document.getElementById(boxId).removeAttribute("onClick");
    // console.log(document.getElementById(boxId).innerHTML);
    for(let i =0; i < moveOptions.length; i++) {
        if (moveOptions[i] == boxId) {
            moveOptions.splice(i, 1);
        }
    };
    console.log("available moves", moveOptions);
    
    if (currentPlayer == player1) {
        heading.text('It is O turn.');
        xPlayerSelections.push(boxId);
        console.log('xPlayer', xPlayerSelections);
        if(xPlayerSelections.includes('box0') && xPlayerSelections.includes('box1') && xPlayerSelections.includes('box2') 
        || xPlayerSelections.includes('box3') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box5') 
        || xPlayerSelections.includes('box6') && xPlayerSelections.includes('box7') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box3') && xPlayerSelections.includes('box6')
        || xPlayerSelections.includes('box1') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box7')
        || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box5') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box6')) {
            allDivs.removeAttr("onClick");
            heading.text("X Wins!!!!!!!")
        } else if (moveOptions.length == 0) {
            heading.text('Tie game')
        }
        currentPlayer = player2
        return currentPlayer;
    } else {
        heading.text('it is X turn');
        oPlayerSelections.push(boxId);
        console.log('oPlayer', oPlayerSelections);
        if(xPlayerSelections.includes('box0') && xPlayerSelections.includes('box1') && xPlayerSelections.includes('box2') 
        || xPlayerSelections.includes('box3') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box5') 
        || xPlayerSelections.includes('box6') && xPlayerSelections.includes('box7') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box3') && xPlayerSelections.includes('box6')
        || xPlayerSelections.includes('box1') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box7')
        || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box5') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box0') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box8')
        || xPlayerSelections.includes('box2') && xPlayerSelections.includes('box4') && xPlayerSelections.includes('box6')) {
            allDivs.removeAttr("onClick");
            heading.text("O Wins!!!!!!!")
        } else if (moveOptions.length == 0) {
            heading.text('Tie game')
        }
        currentPlayer = player1;
        return currentPlayer;

    };
};


// if (currentPlayer == 'X') {
//     xPlayerSelections.push(boxId);
//     heading.text('Current Player is X')
//     console.log(xPlayerSelections);
//     return currentPlayer;
// } else if (currentPlayer == 'O') {
//     heading.text('Current Player is O')
//     oPlayerSelections.push(boxId);
//     return currentPlayer;

// }




// function checkForWinner() {

// }
