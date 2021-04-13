const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    var colorNb = getRondomNumber();
  //  console.log(colorNb);
    color.textContent = colors[colorNb];
    document.body.style.backgroundColor = colors[colorNb];
});

let getRondomNumber = () => Math.floor(Math.random()* colors.length);