

let totalAttempts=5;
let attempt=0;
let won=0;
let lost=0;


const cardBody=document.querySelector(".card-body");
const form=document.querySelector("form");
const userValue=form.querySelector("#guessNumber");
const checkButton=form.querySelector("#btn");
const gameResultParagraph=cardBody.querySelector("#game-result");
const remainChanceParagraph=cardBody.querySelector("#remaining-chance");
const finalResult=document.createElement("p");
finalResult.classList.add("finalResultParagraph");
cardBody.appendChild(finalResult);

form.addEventListener("submit", function(event){

event.preventDefault();

attempt++;
if(attempt>5){
      userValue.disabled=true;
      checkButton.dispatchEvent=true;
}
else{
  checkRandomValue();
 remainChanceParagraph.innerHTML=`Remaining attempts : ${totalAttempts-attempt}`;
 finalResult.innerHTML=`Won : ${won} times ____ Lost : ${lost} times`;
}

userValue.value="";
});

function checkRandomValue(){

    const randomNum=randomNumber();

    if(userValue.value==randomNum){
        gameResultParagraph.innerHTML=`Congratulations! You have own.`;
        won++;
    }
    else{
        gameResultParagraph.innerHTML=`Oops! You have lost. The random number is ${randomNum} `;
        lost++;
    }
}

const randomNumber=()=>{
    return Math.floor(Math.random()*5+1);
}

