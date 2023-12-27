'use strict';

const score0=document.getElementById("score--0")
const score1=document.querySelector("#score--1")
const dice=document.querySelector(".dice")
const btnRollDice= document.querySelector(".btn--roll")
const btnNew= document.querySelector(".btn--new")
const btnHold= document.querySelector(".btn--hold")
const cur_score0=document.getElementById("current--0")
const cur_score1=document.getElementById("current--1")
const player0=document.querySelector(".player--0")
const player1=document.querySelector(".player--1")



const switch_player= function(){
    document.getElementById(`current--${active_player}`).textContent=0
    current_score=0
 active_player=active_player === 0 ? 1:0
 player0.classList.toggle("player--active")
 player1.classList.toggle("player--active")
}

let scores , current_score,active_player, playing


const init =function () {
   
     scores=[0,0]
    current_score=0
     active_player=0
     playing=true


    dice.style.display="none"
    score0.textContent=0
    score1.textContent=0
    cur_score0.textContent=0
    cur_score1.textContent=0


    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player0.classList.add("player--active")
    player1.classList.remove("player--active")

  }
  init()

score0.textContent=0
score1.textContent=0
dice.style.display="none"

btnRollDice.addEventListener("click",function(){
    if(playing){
        let random_num=Math.trunc(Math.random()*6)+1
        console.log(random_num)
        dice.style.display="block"
        dice.src=`dice-${random_num}.png`
    
        if(random_num != 1){
            current_score+=random_num
            document.getElementById(`current--${active_player}`).textContent=current_score
    
        
    
        }else{ 
            switch_player()
        }
    }



}) 


btnHold.addEventListener("click",function(){
    if(playing){
        scores[active_player]+=current_score
        document.getElementById(`score--${active_player}`).textContent=scores[active_player]
    
        
    
        if(scores[active_player]>=20){
            playing=false
            dice.style.display="none"
            document.querySelector(`.player--${active_player}`).classList.add("player--winner")
            document.querySelector(`.player--${active_player}`).classList.remove("player--active")
        }else{
            switch_player()
        }

    }


      
})

btnNew.addEventListener("click",init)