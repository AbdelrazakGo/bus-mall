'use strict'


let imgArry = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg']

const imgSection = document.getElementById('imgSection')
const limg = document.getElementById('limg');
const mimg = document.getElementById('mimg');
const rimg = document.getElementById('rimg');
const viewResult = document.getElementById('viewResult')
const listofresult = document.getElementById('listofresult')
let vote = 25;
let counter = 0;

    let lindex;
    let mindex ;
    let rindex ;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

// console.log(limg,mimg,rimg);

function imgs(name,src) {
    this.name = name;
    this.imgSrc = `./img/${src}`;     
    imgs.all.push(this); 
    this.view = 0; 
    this.click = 0; 
     
}

imgs.all = [];

for(let i=0;i<imgArry.length;i++){
    let imgName = imgArry[i].split('.')[0]
    new imgs (imgName,imgArry[i]);

    
}

// console.log(imgs.all);

function renderimgs(){

    lindex = getRandomInt(0,imgArry.length -1)

    do{

         
         mindex = getRandomInt(0,imgArry.length -1)
         rindex = getRandomInt(0,imgArry.length -1)

    }
    while (lindex === mindex || mindex === rindex || lindex === rindex );

    limg.src = imgs.all[lindex].imgSrc;
    mimg.src = imgs.all[mindex].imgSrc;
    rimg.src = imgs.all[rindex].imgSrc;

    imgs.all[lindex].view++;
    imgs.all[mindex].view++;
    imgs.all[rindex].view++;



}

console.log(imgArry);

function clickfunction(event){

    if ((event.target.id === 'limg' || event.target.id === 'mimg' || event.target.id === 'rimg') && counter < vote) {

        if (event.target.id === 'limg'){
            imgs.all[lindex].click++;
        }

       if (event.target.id === 'mimg') {
        imgs.all[mindex].click++;

       }

       if (event.target.id === 'rimg'){
        imgs.all[rindex].click++;

       }
       renderimgs();
       counter++;
    }
}









function showResult(evt){
    for (let i=0;i<imgs.all.length;i++){
        let li = document.createElement('li')
        listofresult.appendChild(li);
        li.textContent = `${imgs.all[i].name} had ${imgs.all[i].click} votes, and was seen ${imgs.all[i].view} times`
    }
}

 
viewResult.addEventListener('click',showResult)

imgSection.addEventListener('click',clickfunction)
renderimgs();