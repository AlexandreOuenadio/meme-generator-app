const canvas = document.getElementById('generator-canvas');
const ctx = canvas.getContext('2d');

const generate = document.getElementById('generate');
const downloadBtn = document.getElementById("download-btn");
const memeText = document.getElementById('generator-text');

const sliderX = document.getElementById('sliderX');
const sliderY = document.getElementById('sliderY');

const memeTextSize = document.getElementById('meme-text-size');

memeTextSize.min = 24;
memeTextSize.max = 96;


let isMeme = false;

function updateCanvas(img){
  ctx.clearRect(0,0, canvas.width, canvas.height);
      ctx.drawImage(img, 0,0);
      
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.font = memeTextSize.value + "px sans-serif";
      ctx.fillStyle = "#fff";
      ctx.textAlign = 'center';
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




generate.addEventListener('click', generateImg);
downloadBtn.addEventListener('click', downloadMeme);
