let winningno=15;
let guessno =+prompt("guess a no");  //prompt will take input and by default it takes input in string so we add +before it so it convert to int
if(guessno===winningno){
    console.log("you won");
}
else{
    if(guessno<winningno){
        console.log("too low");
    }
    else{
        console.log("too high");
    }
}