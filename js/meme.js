const canvas = document.getElementById('generator-canvas');
const ctx = canvas.getContext('2d');

const generate = document.getElementById('generate');
const downloadBtn = document.getElementById("download-btn");
const memeText = document.getElementById('generator-text');
const textChoice1 = document.getElementById('text1');
const textChoice2 = document.getElementById('text2');
const textChoice3 = document.getElementById('text3');
const textChoice4 = document.getElementById('text4');

const sliderX = document.getElementById('sliderX');
const sliderY = document.getElementById('sliderY');
const memeTextSize = document.getElementById('meme-text-size');

memeTextSize.min = 24;
memeTextSize.max = 96;

let activeText = 0;
let isMeme = false;


const texts = [
  {
    text: " ",
    fontSize: 24,    //Texte 1
    x: 0,
    y: 0
  },

  {
    text: " ",
    fontSize: 24,   //Texte 2
    x: 0,
    y: 0
  },
  {
    text: " ",
    fontSize: 24,   //Texte 3
    x: 0,
    y: 0,
  },
  {
    text: " ",
    fontSize: 24,   //Texte 4
    x: 0,
    y: 0,
  }
];








function updateCanvas(img){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(img, 0,0);
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.fillStyle = "#fff";
  ctx.textAlign = 'center';
  ctx.font = memeTextSize.value + "px sans-serif";


  for (let i=0; i < texts.length; i++){
    ctx.strokeText(texts[i].text, texts[i].x,texts[i].y);
    ctx.fillText(texts[i].text, texts[i].x,texts[i].y);
  }

  ctx.strokeText(memeText.value, sliderX.value,sliderY.value);
  ctx.fillText(memeText.value, sliderX.value,sliderY.value);

  isMeme = true;
}


async function generateImg(){
  const response = await fetch('https://api.imgflip.com/get_memes', {mode:"cors"});
  const data = await response.json();
  const memes = data.data.memes;
  const randomNumber = Math.floor(Math.random() * memes.length);
  const imgURL = memes[randomNumber].url;
  
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgURL;

  img.addEventListener('load', () =>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    canvas.width = img.width;
    canvas.height = img.height;

    sliderX.min = 0;
    sliderX.max = canvas.width;

    sliderY.min = 0;
    sliderY.max = canvas.height;


    ctx.drawImage(img, 0,0);

    textChoice1.addEventListener('click', ()=>{
      saveText(memeText.value,sliderX.value,sliderY.value);
      activeText = 0;
      updateCanvas(img);
      
    })
    
    textChoice2.addEventListener('click', ()=>{
      saveText(memeText.value,sliderX.value,sliderY.value);
      activeText = 1;
      updateCanvas(img);
      
    })
    
    textChoice3.addEventListener('click', ()=>{
      saveText(memeText.value,sliderX.value,sliderY.value);
      activeText = 2;
      updateCanvas(img);
    })
    
    textChoice4.addEventListener('click', ()=>{
      saveText(memeText.value,sliderX.value,sliderY.value);
      activeText = 3;
      updateCanvas(img);
    })

    memeText.addEventListener('change', ()=> {
      updateCanvas(img);

    })

    sliderX.addEventListener('change', ()=> {
      updateCanvas(img);
    })

    sliderY.addEventListener('change', ()=> {
      updateCanvas(img);
    })

    memeTextSize.addEventListener('change', ()=> {
      updateCanvas(img);
    })

    isMeme = true;
    

  })
  
}

function downloadMeme(e){
  if(isMeme){
    downloadBtn.download = 'yourMeme.png';
    downloadBtn.href = canvas.toDataURL();
  }else{
    e.preventDefault();
    console.log("Vous ne pouvez pas télécharger l'image")
  }
  

}

function saveText(text, x, y,size){

    texts[activeText].text = text;
    texts[activeText].x = x;
    texts[activeText].y = y;
    texts[activeText].fontSize = size;



}




generate.addEventListener('click', generateImg);
downloadBtn.addEventListener('click', downloadMeme);

