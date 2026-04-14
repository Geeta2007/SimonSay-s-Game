let gameSeq =[];
let userSeq =[];
let btns = [ "one", "two", "three", "four"]

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("Game started")
        started=true;

        levelUp();
    };       
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");}, 250);
};

 function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    //for random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randBtn);
    btnFlash(randBtn);
 }

 function checkAns(idx){
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length === gameSeq.length){
            setTimeout(levelUp, 500);
        };
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        }, 150)
        reset();
    };
 };

 function btnPress(){
    let btn = this;
    btnFlash(btn);
    // console.log("Button wad pressed");

    userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);
    console.log(userSeq)
    checkAns(userSeq.length-1);
 };

 let allBtns = document.querySelectorAll(".btn");
 for ( btn of allBtns){
    btn.addEventListener("click", btnPress)
 };

 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
 }
