



const player = (name) => {
return {name};
}

const gameBoard = (() => {
const gameArray = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
function createBoard (array){
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
    spot1.textContent = array[0];
    spot2.textContent = array[1];
    spot3.textContent = array[2];
    spot4.textContent = array[3];
    spot5.textContent = array[4];
    spot6.textContent = array[5];
    spot7.textContent = array[6];
    spot8.textContent = array[7];
    spot9.textContent = array[8];
    let player1 = player(document.getElementById('p1Input').value)
    let player2 = player(document.getElementById('p2Input').value)
    
    startBtn.addEventListener('click',function(){
        //let player1 = player(document.getElementById('p1Input').value)
        //let player2 = player(document.getElementById('p2Input').value)
        form.remove();
        startBtn.remove();
        board.setAttribute('style','background-color: black')

    })
    spot1.addEventListener('click', function(){
        if (spot1.innerHTML === ' '){
            spot1.textContent = 'X'
        } else {
            spot1.textContent = 'O'
        }
    })
}
return {
createBoard,
gameArray

}
})();

gameBoard.createBoard(gameBoard.gameArray)

const gameFlow = (() => {

})

