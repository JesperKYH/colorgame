let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector(".message")
let h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
       let clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
       }else{
           this.style.backgroundColor = "#454545";
           messageDisplay.textContent = "Try Again!"
       }
    });
}



function changeColors(color){
   for(let i = 0; i < squares.length; i++){
       squares[i].style.backgroundColor = color;
   }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    let array = []

    for(let i = 0; i < num; i++){
      array.push(randomColor())  
      
    }
    return array;
 }
 
 function randomColor(){
     
     let r = Math.floor(Math.random() * 256); 
     let g = Math.floor(Math.random() * 256); 
     let b = Math.floor(Math.random() * 256);
     
     return "rgb(" + r + ", " + g + ", " + b + ")";
 }

