const num_rows = 4;
const num_cols = 4;

let currentScore = 0;
updateScore(currentScore);


const gameBoard = document.querySelector("#game-board");


//Create a game board
for (let row_num = 0; row_num < num_rows; row_num++) {
  const row = document.createElement("tr");
  gameBoard.append(row);

  for (let col_num = 0; col_num < num_cols; col_num++) {
    const cell = document.createElement("td");
    const cellId = "hole-"+ row_num +col_num;

    cell.classList.add("hole");
    cell.setAttribute("id", cellId);
    row.append(cell);
    cell.addEventListener("click",()=>{
        if(cell.classList.contains("needs-whack")){
            cell.classList.remove("needs-whack");
            currentScore+=1;
            
        }else{
            currentScore-=1;
        }
        updateScore(currentScore);
    })
  }
}
//Every Second, make a molw show up in a random place
setInterval(()=>{
    const element = document.querySelector("#"+getRandomHoleId());
    element.classList.add("needs-whack");
    console.log(element)
},500);


//Give us a random round number from 0 to num -1
function getRandomNumberUpTo(num){
    return Math.floor(Math.random() * num);
}

//Get the Id of a ramdom hole in our game board
function getRandomHoleId(){
    const randomCol = getRandomNumberUpTo(num_cols);
    const randomRow = getRandomNumberUpTo(num_rows);
    return "hole-"+ randomRow + randomCol;
}


function updateScore(newScore){
    const scoreElement = document.querySelector("#update-score");
    scoreElement.textContent = "Score: " + newScore;
}