anime({
    targets: '.generator-buttons',
    scale: [0,1],
    duration: 1000,
});

const generateBtn = document.querySelector('.generator-button-generate');
const insertBtn = document.querySelector('.generator-button-insert');
const orText = document.querySelector('.generator-or')
const btnContainer = document.querySelector('.generator-buttons');
const memeCreationContainer = document.querySelector('.generator-creation');
const memeGeneratorModeTitle = document.getElementById('generator-mode-title');
const memeGeneratorModeAction = document.getElementById('generator-mode-action');
const labels = document.querySelectorAll('.generator-text-choice-item label');
const textField = document.getElementById('generator-text');
const dlBtn = document.getElementById('download-btn');
const positionContainer = document.getElementById('text-position-container');
const positionTitle = document.querySelector('.generator-positionText');
const rangeSliders = document.querySelectorAll('.generator-rangeSlider');
const fileInputBtn = document.querySelector("label[for='file-input']");

let isGenerate;
const blue = '#168aad';
const border = "1px solid " + blue;


generateBtn.addEventListener('click', () => {
    insertBtn.style.pointerEvents = 'none';
    orText.style.pointerEvents = 'none';
    generateBtn.style.pointerEvents = 'none';
    btnContainer.classList.add('generator-animate-fadeout');
    isGenerate = true;
    //Changement du contenu + css
    memeGeneratorModeTitle.textContent = "Générer votre meme !";
    memeGeneratorModeAction.textContent = 'Générer un meme';
    setTimeout(() =>{
        btnContainer.style.display = "none";
        memeCreationContainer.style.display = "flex";
    }, 1000)


    
    
})

insertBtn.addEventListener('click', () => {
    insertBtn.style.pointerEvents = 'none';
    orText.style.pointerEvents = 'none';
    generateBtn.style.pointerEvents = 'none';
    btnContainer.classList.add('generator-animate-fadeout');
    isGenerate = false;
    //Changement du contenu + css
    memeGeneratorModeTitle.textContent = "Uploader votre meme !";
    memeGeneratorModeTitle.style.backgroundColor = blue;
    memeGeneratorModeAction.style.display = 'none';
    memeGeneratorModeAction.style.color = blue;
    labels.forEach(label => {label.style.color = blue});
    textField.style.border = border ;
    positionContainer.style.border =  border;
    positionTitle.style.color = blue;
    dlBtn.style.color = blue;
    rangeSliders.forEach(rangeSlider => {
        rangeSlider.style.backgroundColor = blue;
        rangeSlider.classList.add('generator-rangeSliderBlue');
        
    })
    fileInputBtn.style.color = blue;
    

    setTimeout(() =>{
        btnContainer.style.display = "none";
        memeCreationContainer.style.display = "flex";
    }, 1000)


})
