const choices=document.querySelectorAll(".symbol");
let userscore=0;
let compscore=0;
const msg=document.getElementById('msg');
const message=document.querySelector(".message");

const beat=document.getElementById('beat'); 
const you=document.getElementById('you'); 
const bot=document.getElementById('bot');
const setuser=document.querySelector("#user-score");
const setcomp=document.querySelector("#comp-score");

const generate=() =>{
    const options= ["rock","paper","scissor"];
    const i= Math.floor(Math.random()*3); 
    return options[i];
}

function gameplay(userchoice){
    console.log(userchoice);
    let compchoice=generate();
    console.log(compchoice);

    let win=true;
    if(userchoice===compchoice){
        draw(userchoice,compchoice);
    }
    else{
        if(userchoice==="rock"){
            win=(compchoice==="paper")?false:true;
        }
        if(userchoice==="paper"){
            win=(compchoice==="scissor")?false:true;
        }
        if(userchoice==="scissor"){
            win=(compchoice==="rock")?false:true;
        }
        winner(win,userchoice,compchoice);
    }
}
function draw(userchoice,compchoice){
    console.log("draw");
    msg.innerText= "It is a Draw";
    message.style.backgroundColor ="rgb(169, 154, 87)";
    beat.innerText=`${userchoice} draws ${compchoice}`;

}
function winner(user,userchoice,compchoice){
    if(user){
        userscore++;
        setuser.innerText= userscore; console.log("win");
        msg.innerText= "You Win!";
        message.style.backgroundColor ="rgb(29, 189, 136)"; 
        beat.innerText=`${userchoice} beats ${compchoice}`;
    }
    else{
        compscore++;
        setcomp.innerText= compscore; console.log("lose");
        msg.innerText= "You lose";
        message.style.backgroundColor ="#6e0d25"; 
        beat.innerText=`${compchoice} beats ${userchoice}`;
    }
    if(userscore>compscore){
        bot.style.boxShadow= "10px 7px 20px black inset"; 
        you.style.boxShadow= "10px 7px 20px black";}
    else if(userscore===compscore){
        bot.style.boxShadow= "10px 7px 20px black"; 
        you.style.boxShadow= "10px 7px 20px black";
    }
    else{
        bot.style.boxShadow= "10px 7px 20px black"; 
        you.style.boxShadow= "10px 7px 20px black inset";
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",function(){
        const userchoice=choice.getAttribute("id");
        gameplay(userchoice);
    })
})
