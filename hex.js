const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
  //  console.log(colorNb);
    
    var theColor = "#"
        for (let x = 0; x < 6; x++) {
            theColor += hex[getRondomNumber()];
            
        }
        color.textContent = theColor;
    document.body.style.backgroundColor = theColor;
});

let getRondomNumber = () => Math.floor(Math.random()* hex.length);