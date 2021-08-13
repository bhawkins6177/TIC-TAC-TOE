



const player = (name) => {
    
return {'name':name};
}
let player1 = '';
let player2 = '';
let turn = 0;
let player1S = 0;
let player2S = 0; 

const gameFlow = (() => {
    const player1Score = document.querySelector('#player1Score');
    const player2Score = document.querySelector('#player2Score');
    player1Score.textContent = player1S;
    player2Score.textContent = player1S;
    const winCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    const spots = document.querySelectorAll('.spot')
    function winner (array) {
        
        for(let i = 0; i<winCondition.length; i++) {
            if (array[winCondition[i][0]] === 'X' && array[winCondition[i][1]] === 'X' && array[winCondition[i][2]] === 'X' ) {
                alert(`${player1.name} has won!`)
                clearBoard();
                turn = 0;
                player1S++;
                player1Score.textContent = player1S;
                player2Score.textContent = player2S;
            } else if (array[winCondition[i][0]] === 'O' && array[winCondition[i][1]] === 'O' && array[winCondition[i][2]] === 'O'){
                alert(`${player2.name} has won!`)
                clearBoard();
                turn = 0;
                player2S++;
                player1Score.textContent = player1S;
                player2Score.textContent = player2S;
            }
        }
    }
    //function keepScore() {
    //}
    function clearBoard (){
        //gameFlow.clearBoard(gameBoard.gameArray)
        gameBoard.gameArray = [' ',' ',' ',' ',' ',' ',' ',' ',' ',]
        // find a way to updatw the Spots id with the gameArray
        spot1.textContent = gameBoard.gameArray[0];
        spot2.textContent = gameBoard.gameArray[1];
        spot3.textContent = gameBoard.gameArray[2];
        spot4.textContent = gameBoard.gameArray[3];
        spot5.textContent = gameBoard.gameArray[4];
        spot6.textContent = gameBoard.gameArray[5];
        spot7.textContent = gameBoard.gameArray[6];
        spot8.textContent = gameBoard.gameArray[7];
        spot9.textContent = gameBoard.gameArray[8];
        console.log('test')
        turn = 0;
        for (let i = 0; i<spots.length; i++) {
            gameBoard.gameArray[i] = spots[i].textContent;
        }
    }
    function newGame () {

    }
    return {
        winner,
        winCondition,
        clearBoard
        
    }
    })();
    const bottomHalf = document.querySelector('#bottomHalf')

const gameBoard = (() => {
let gameArray = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
function createBoard (array){                   // all of the querySelecters 
    const spot1 = document.querySelector('#spot1');
    const spot2 = document.querySelector('#spot2');
    const spot3 = document.querySelector('#spot3');
    const spot4 = document.querySelector('#spot4');
    const spot5 = document.querySelector('#spot5');
    const spot6 = document.querySelector('#spot6');
    const spot7 = document.querySelector('#spot7');
    const spot8 = document.querySelector('#spot8');
    const spot9 = document.querySelector('#spot9');
    const startBtn = document.querySelector('#startBtn');
    const board = document.querySelector('#board');
    const formDiv = document.querySelector('#formDiv');
    const form = document.querySelector('#form');
    const player1Name = document.querySelector('#player1Name');
    const player2Name = document.querySelector('#player2Name');
    const player1Display = document.querySelector('#player1Display')
    const player2Display = document.querySelector('#player2Display')
    const bottomHalf = document.querySelector('#bottomHalf')
    const newGameBtn = document.createElement('button');
    const clearButton = document.createElement('button');
    spot1.textContent = array[0];
    spot2.textContent = array[1];
    spot3.textContent = array[2];
    spot4.textContent = array[3];
    spot5.textContent = array[4];
    spot6.textContent = array[5];
    spot7.textContent = array[6];
    spot8.textContent = array[7];
    spot9.textContent = array[8];
    
    function addBoard (){
        player1 = player(document.getElementById('p1Input').value)
        player2 = player(document.getElementById('p2Input').value)
        formDiv.remove();
        startBtn.remove();
        board.classList.remove('boardBefore');
        board.classList.add('boardAfter');
        player1Display.classList.remove('player1DisplayBefore');
        player1Display.classList.add('player1DisplayAfter')
        player2Display.classList.remove('player2DisplayBefore');
        player2Display.classList.add('player2DisplayAfter')
        //board.style.removeProperty('display')                       
        board.setAttribute('style','background-color: black')
        player1Name.textContent = player1.name;
        player2Name.textContent = player2.name;
       
        clearButton.setAttribute("id","clearButton");
        newGameBtn.setAttribute("id","newGameBtn")
        bottomHalf.appendChild(newGameBtn);
        bottomHalf.appendChild(clearButton);
        clearButton.textContent = 'Clear Board';
        newGameBtn.textContent = 'New Game';

    }
    
    startBtn.addEventListener('click',function(){
        addBoard()
    })
    clearButton.addEventListener('click', function(){
        gameFlow.clearBoard();
        turn = 0;
    })
    
    const spots = document.querySelectorAll('.spot')
    
    for (let i = 0; i<spots.length; i++){                       
        spots[i].addEventListener('click', function() {         
            
            if (turn%2 ===0 && spots[i].textContent == ' '){
                spots[i].textContent = 'X'
                turn++
            } else if (turn%2 !==0 && spots[i].textContent == ' '){
                spots[i].textContent = 'O'
                turn++;
            } else {
                spots[i].textContent == spots[i].textContent;
            }
            console.log(turn)
            gameBoard.gameArray[i] = spots[i].textContent;
            gameFlow.winner(gameBoard.gameArray);

                       
        })
    }
}
return {
createBoard,
gameArray,



}
})();

gameBoard.createBoard(gameBoard.gameArray)




