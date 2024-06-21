//selecting the Elements
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3

//Generate Random number 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1
if (randomnumber>5)
    {
        randomnumber=randomnumber-5
    }

//Event handler function
function checknumber(){
    if(inputbox.value==randomnumber){
        alert("You got it Right, Congratulations.")
        result.textContent="you are right"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0){
            alert("You Lost, Generated Random number is:"+randomnumber)
        }
        guesscount.textContent="Available Guesses:"+noofguess
        result.textContent="You are Wrong !"
    }

}    