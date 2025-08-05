let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
//  let inputName1 = document.querySelector(".input-1");
//  let inputName2 = document.querySelector(".input-2");

//  const player = (inputName1) => {
// inputName1.innerText = "Player 1- " ,inputName1;
//  }
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () =>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
    console.log("box was clicked");
    if(turnO){
        box.innerText = "O"
     turnO=false;
}
    else
    {
        box.innerText = "X"
        turnO=true;
    }
    box.disabled= true;
    winnerCheck();
    });
});
const disabledBtn = ()  => {
    for(let box of boxes){
    box.disabled = true;    
}
};
const enableBoxes = () => {
    for (let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) =>
{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn(); 
};
 
const winnerCheck =() =>{
    for(let pattern of winPatterns){
console.log(pattern[0], pattern[1], pattern[2]);
console.log(
    boxes[pattern[0]].innerText, 
    boxes[pattern[1]].innerText, 
    boxes[pattern[2]].innerText
    );
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;   
    if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value===pos2Value && pos2Value===pos3Value){
            console.log("Winner");
            
            showWinner(pos1Value);
          
        }
        
    }
    }};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);