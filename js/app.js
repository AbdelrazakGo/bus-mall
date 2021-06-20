'use strict'


let imgArry = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg']

let limg = document.getElementById('limg')
let mimg = document.getElementById('mimg')
let rimg = document.getElementById('rimg')
let counter = 0;
let click = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

console.log(limg,mimg,rimg);

function imgs(name,src) {
    this.name = name;
    this.src = `./img/${src}`;     
    imgs.all.push(this); 
    this.show = 0; 
    this.click = 0; 
     
}

imgs.all = [];

for(let i=0;i<imgArry.length;i++){
    
  new imgs (imgArry[i].split('.')[0],imgArry[i]);
}


function render(){

   
    let lindex ; 
    let mindex ; 
    let rindex ;

    do{
         lindex = getRandomInt(0,imgArry.length -1)
         mindex = getRandomInt(0,imgArry.length -1)
         rindex = getRandomInt(0,imgArry.length -1)

    }
    
    
    while (lindex === mindex || mindex === rindex || lindex === rindex );
   


    limg.src = imgs.all[lindex].src;
    mimg.src = imgs.all[mindex].src;
    rimg.src = imgs.all[rindex].src;
}



function eventhandler(evt){

   if (counter < 25){
       render();
       counter++;
    
   }
    
}





limg.addEventListener('click',eventhandler)
mimg.addEventListener('click',eventhandler)
rimg.addEventListener('click',eventhandler)


render();


// let index = getRandomInt(0,imgArry.length -1)

// limg.setAttribute('src', imgs.all[index].src);
// mimg.src = imgs.all[index].src;
// rimg.src = imgs.all[index].src;



// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }