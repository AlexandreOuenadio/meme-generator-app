const canvas = document.getElementById('generator-canvas');
const ctx = canvas.getContext('2d');

const generate = document.getElementById('generate');
const downloadBtn = document.getElementById("download-btn");
const memeText = document.getElementById('generator-text');


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

    ctx.drawImage(img, 0,0);
    memeText.addEventListener('change', ()=> {
      ctx.clearRect(0,0, canvas.width, canvas.height);
      ctx.drawImage(img, 0,0);
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.font = '48px sans-serif';
      ctx.fillStyle = "#fff";
      ctx.textAlign = 'center';
      ctx.strokeText(memeText.value,canvas.width/2,canvas.height/2);
      ctx.fillText(memeText.value,canvas.width/2,canvas.height/2);
    })
    

  })
  
}

function downloadMeme(){
  downloadBtn.download = 'yourMeme.png';
  console.log(canvas.toDataURL());
  downloadBtn.href = canvas.toDataURL();

}




generate.addEventListener('click', generateImg);
downloadBtn.addEventListener('click', downloadMeme);
