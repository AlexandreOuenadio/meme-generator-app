const canvas = document.getElementById('generator-canvas');
const ctx = canvas.getContext('2d');

const generate = document.getElementById('generate');
const downloadBtn = document.getElementById("download-btn");
const memeText = document.getElementById('generator-text');
const textsContainer = document.getElementById('texts-container');
const textOptionsNodeList = document.querySelectorAll('input[name=textOption]');
const textOptions = Array.prototype.slice.call(textOptionsNodeList);
const textPositionContainer = document.getElementById('text-position-container');

const sliderX = document.getElementById('sliderX');
const sliderY = document.getElementById('sliderY');
const memeTextSize = document.getElementById('meme-text-size');

memeTextSize.min = 16;
memeTextSize.max = 96;

//Valeurs par défaut
memeText.value = "";
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
    y: 0
  },
  {
    text: " ",
    fontSize: 24,   //Texte 4
    x: 0,
    y: 0
  }
];
function findActiveText(){

  return +textOptions.filter(text => text.checked == 1)[0].id;

}

function updateTextsObjects(id){
  console.log(memeText.value,memeTextSize.value,sliderX.value, sliderY.value);
  texts.forEach(text => text.fontSize = memeTextSize.value);
  console.log(texts);
  switch(id){
    case 0:
      console.log('0 !');
      texts[0].text = memeText.value;
      texts[0].x = sliderX.value;
      texts[0].y = sliderY.value;
      break;
    case 1:
      console.log('1 !');
      texts[1].text = memeText.value;
      texts[1].x = sliderX.value;
      texts[1].y = sliderY.value;
      break;
    case 2:
      console.log('2 !');
      texts[2].text = memeText.value;
      texts[2].x = sliderX.value;
      texts[2].y = sliderY.value;
      break;
    case 3:
      console.log('3 !');
      texts[3].text = memeText.value;
      texts[3].x = sliderX.value;
      texts[3].y = sliderY.value;
      break;
  }
}






function updateCanvas(img){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(img, 0,0);
  ctx.lineWidth = Math.floor(texts[0].fontSize/4);
  ctx.lineJoin = 'round';
  ctx.fillStyle = "#fff";
  ctx.font =  texts[0].fontSize + "px sans-serif";


  for (let i=0; i < texts.length; i++){
    ctx.strokeText(texts[i].text, texts[i].x,texts[i].y);
    ctx.fillText(texts[i].text, texts[i].x,texts[i].y);
  }

  isMeme = true;
}


async function generateImg(){
  //RESET INPUTS
  texts.forEach(text => {
    text.text = '';
    text.fontSize = 24;
    text.x = 0;
    text.y = 0;
  })
  memeText.value = '';

  //REQUETE A L'API

  const response = await fetch('https://api.imgflip.com/get_memes', {mode:"cors"});
  const data = await response.json();
  const memes = data.data.memes;
  const randomNumber = Math.floor(Math.random() * memes.length);
  const imgURL = memes[randomNumber].url;
  
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgURL;

  activeImg = img;


  img.addEventListener('load', () =>{
    //On néttoie le canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    //Le canvas prend les dimensions de l'image à charger
    canvas.width = img.width;
    canvas.height = img.height;
    texts.forEach(text => {
      text.x = canvas.width/2;
      text.y = canvas.height/2;
    });
    //Les extremums des sliders sont définis à partir des dimensions du canvas
    sliderX.min = 0;
    sliderX.max = canvas.width;
    sliderY.min = 0;
    sliderY.max = canvas.height;

    downloadBtn.style.display = 'block';
    textsContainer.style.display = 'flex';
    //On déssine l'image sur le canvas
    ctx.drawImage(img, 0,0);

    //dès qu'on a choisi un texte on affiche ses options
    textOptions.forEach((text,id) => {
      text.addEventListener('click', () =>{
        text.checked = 'true';
        memeText.style.display = 'block';
        textPositionContainer.style.display = 'block';
        memeText.value = texts[id].text;
        memeTextSize.value = texts[id].fontSize;
        sliderX.value = texts[id].x;
        sliderY.value = texts[id].y;
        
      });
    });

    //dès qu'on modifie un texte on cherche lequel c'est puis on le réactualise dans le canvas
    memeText.addEventListener('change', ()=> {
      const activeText = findActiveText();
      console.log('activeText:', activeText);
      updateTextsObjects(activeText);
      console.log(texts);
      updateCanvas(img);

    });

    sliderX.addEventListener('change', ()=> {
      const activeText = findActiveText();
      updateTextsObjects(activeText);
      console.log(texts);
      updateCanvas(img);
    });

    sliderY.addEventListener('change', ()=> {
      const activeText = findActiveText();
      updateTextsObjects(activeText);
      console.log(texts);
      updateCanvas(img);
    });

    memeTextSize.addEventListener('change', ()=> {
      const activeText = findActiveText();
      updateTextsObjects(activeText);
      console.log(texts);
      updateCanvas(img);
    });

    isMeme = true;
    

  });
  
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

