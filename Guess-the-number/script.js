let  randomnumber=(parseInt(Math.random()*2000+1))
const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guesslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")

const loworhigh=document.querySelector(".lowOrHi")
const Startover=document.querySelector(".resultParas")
  let p=document.createElement('p')

  let prevguess=[]
  let numguess=1  //number of guesses stat=rting from1

  let playgame=true

 if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        console.log(guess)
        validateguess(guess)
    })
 }

    function validateguess(guess){
      if(isNaN(guess)){
        alert(" please enter a valid number")
          }
          else if(guess<1){
            alert("please enter a valid number")
          }
          else if(guess>2000){
            alert("please enter a valid number")
          }
          else{
            prevguess.push(guess)
            if(numguess===11){
              displayguess(guess)
              displaymessage(`Game over,random number was ${randomnumber}`)
              endgame()
            }
            else {
              displayguess(guess)
              checkguess(guess)
            }
          }


  }

  function checkguess(guess){
    if(guess===randomnumber){
      displaymessage("you have guessed it right")
      endgame()
    }
    else if(guess<randomnumber){
      
      displaymessage("your number is too low")
   
  }
   else if(guess>randomnumber)
    {
    displaymessage("your number is too much high ")
    
   }

    

  }

  function displayguess(guess){
    userinput.value=''
    guesslot.innerHTML+=` ${guess}  `
    numguess++
    remaining.innerHTML=`${11-numguess}`



  }


  function displaymessage(message){
      loworhigh.innerHTML=`<h2>${message}</h2>`

    }




  function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add("button")
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`
    Startover.appendChild(p)
    playgame=false
    newgame()    
  }

  
  function newgame(){
      const newgamebutton=document.querySelector('#newgame')
      newgamebutton.addEventListener('click',(e)=>{
        randomnumber=(parseInt(Math.random()*2000+1))
        prevguess=[]
        numguess=1
        guesslot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
       userinput.removeAttribute('disabled')
       Startover.removeChild(p)
       playgame=true;
       
      })
  }
