const scoreP1H = document.querySelector(".scoreLine#scoreP1");
const scoreP2H = document.querySelector(".scoreLine#scoreP2");
const scoreSelect = document.querySelector("select[id='maxScoreSelect']");

//console.log(scoreP1H);
//console.log(scoreP2H);
//console.log(scoreSelect);

const buttonP1 = document.querySelector(".button#buttonP1");
const buttonP2 = document.querySelector(".button#buttonP2");
const buttonReset = document.querySelector(".button#buttonReset");

buttonP1.addEventListener("click",function(e){
    let currentP1 = parseInt(scoreP1H.innerText);
    //console.log(currentP1);
    let newP1 = currentP1 + 1;
    scoreP1H.innerText = newP1;
    let maxScore = parseInt(scoreSelect.value);
    //console.log(maxScore,newP1);
    if (newP1 === maxScore){
        scoreP1H.style.color = "green";
        //console.log("reached",maxScore);
        scoreP2H.style.color = "red";
        buttonP1.disabled = true;
        buttonP2.disabled = true;
    }


});

buttonP2.addEventListener("click",function(e){
    let currentP2 = parseInt(scoreP2H.innerText);
    //onsole.log(currentP1);
    let newP2 = currentP2 + 1;
    scoreP2H.innerText = newP2;
    let maxScore = parseInt(scoreSelect.value);
    //console.log(maxScore,newP1);
    if (newP2 === maxScore){
        scoreP1H.style.color = "red";
        console.log("reached",maxScore);
        scoreP2H.style.color = "green";
        buttonP1.disabled = true;
        buttonP2.disabled = true;
    }
});

buttonReset.addEventListener("click",function(e){
    scoreP1H.innerText = 0;
    scoreP1H.style.color = "black";
    scoreP2H.innerText = 0;
    scoreP2H.style.color = "black";
    buttonP1.disabled = false;
    buttonP2.disabled = false;
})