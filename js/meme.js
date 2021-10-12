const canvas = document.getElementById('generator-canvas');
const ctx = canvas.getContext('2d');
const generate = document.getElementById('generate');
const imgContainer = document.getElementById('img-container');

async function generateImg(){
  const response = await fetch('https://api.imgflip.com/get_memes', {mode:"cors"});
  const data = await response.json();
  const memes = data.data.memes;
  const randomNumber = Math.floor(Math.random() * memes.length);
  const imgURL = memes[randomNumber].url;
  
  const img = new Image();

  img.src = imgURL;

  img.addEventListener('load', () =>{
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0,0);
  })
  
}


generate.addEventListener('click', generateImg);
