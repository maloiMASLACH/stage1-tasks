const inputs = document.querySelectorAll('.main .filters label input');
const reset = document.querySelector('.btn-reset');
const oninputs = document.querySelectorAll('output');
const load=document.querySelector('.btn-next');
var i='01'
const fileInput = document.querySelector('input[type="file"]');
const imageContainer = document.querySelector('img');


const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const download = document.querySelector('.btn-save');

  function drawImage() {
    const img = new Image();  
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = document.querySelector('img').src;
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
    }; 
  }
  
  


fileInput.addEventListener('change', function(e) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      imageContainer.src =reader.result ;
      imageContainer.append(img);
    }
    reader.readAsDataURL(file);
  });

  
  
function handleUpdate(){
    const suffix=this.dataset.sizing || "";
   document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

function resetfun(){
    document.documentElement.style.setProperty(`--blur`,0);
    document.documentElement.style.setProperty(`--invert`,0);
    document.documentElement.style.setProperty(`--sepia`,0);
    document.documentElement.style.setProperty(`--saturate`,1);
    document.documentElement.style.setProperty(`--hue`,0);
    inputs.forEach(input => input.value=0);
    const sat= document.querySelectorAll('.sat')
    sat.forEach(input => input.value=100);
    oninputs.forEach(output => output.value=0)
    const satout= document.querySelectorAll('.satout')
    satout.forEach(output => output.value=100);
}
function loadfun(){
    i++
    if(i==21){
        i=i-20
    }
    if(i<10){
        i="0"+i
    }
    Data = new Date();
    let hour=Data.getHours()
    let time
    if((hour>17)&&(hour<24)){
        time='evening'
    }
    if((hour>=0)&&(hour<7)){
        time='night'
    }
    if((hour>6)&&(hour<13)){
        time='morning'
    }
    if((hour>12)&&(hour<18)){
        time='day'
    }
    document.querySelector('img').src=`https://github.com/rolling-scopes-school/stage1-tasks/blob/assets/images/${time}/${i}.jpg?raw=true`
    console.log(document.querySelector('img'))
    console.log(hour)
    
}

function toggleScreen(){
    if(document.fullscreenElement===null){
        document.documentElement.requestFullscreen();
    }
    else{
        if(document.fullscreenEnabled)
        document.exitFullscreen()
    }
}

inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
reset.addEventListener('click',resetfun);
load.addEventListener('click',loadfun);
load.addEventListener('click',drawImage);

document.querySelector('.openfullscreen').addEventListener('click',toggleScreen);