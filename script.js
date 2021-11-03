"use strict"

class Horses {
    element
    x

    constructor(element,y, color) {
        element.style.top = y + "px"
        element.style.backgroundColor = color
        element.classList.add("horse")
        document.body.appendChild(element)

        this.element = element
        this.x = 0
    }

    move (){
        this.element.style.left = this.x + "px"
        this.x += Math.floor(Math.random()*10)
    }

    checkForWin (){

    }
}


const numHorses = 5

 let horses=[]
let horseX=[]

let colors=["red", "blue", "orange", "cyan", "magenta", "yellow", "black", "turquoise", "gray", "lilac",]

function startRace(){
    setInterval(move,50)
}

//setup all the horses 
for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")    
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*45 + "px" //Set the vertical position of each horse
    horses[h].style.backgroundColor=colors[h]  //sete the colour .. from the array of colours we created earlier
    horseX[h]=0 //We must set each horses initial position (otherwise it will be 'undefined' and break when we run the race)
    document.body.appendChild(horses[h]) //The DIV element we created, MUST be added to the document
}

const finish = 500

function move(){    
    for(let h=0;h<numHorses;h++){ ///for every horse ...
        horses[h].style.left=horseX[h] +"px"    //set the horizonatal position
        horseX[h] += Math.floor(Math.random()*10) //move is by some small random amount
        if(horseX[h] >=finish){alert( ` ${colors[h]}  horse wins`);resetRace();}    //check if THIS horse crossed the finish line
    }        
}

function resetRace(){
    for(let h=0;h<numHorses;h++){
        horseX[h]=0
    }   
} 
