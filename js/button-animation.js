anime({
    targets: '.generator-buttons',
    scale: [0,1],
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 1000,
});

const generateBtn = document.querySelector('.generator-button-generate');
const insertBtn = document.querySelector('.generator-button-insert');
const orText = document.querySelector('.generator-or')
const btnContainer = document.querySelector('.generator-buttons');
const memeCreationContainer = document.querySelector('.generator-creation');





generateBtn.addEventListener('click', () => {
    insertBtn.style.pointerEvents = 'none';
    orText.style.pointerEvents = 'none';
    generateBtn.style.pointerEvents = 'none';
    btnContainer.classList.add('generator-animate-fadeout');
    setTimeout(() =>{
        btnContainer.style.display = "none";
        memeCreationContainer.style.display = "block";
    }, 1000)

    
    
})

insertBtn.addEventListener('click', () => {
    insertBtn.style.pointerEvents = 'none';
    orText.style.pointerEvents = 'none';
    generateBtn.style.pointerEvents = 'none';
    btnContainer.classList.add('generator-animate-fadeout');
    setTimeout(() =>{
        btnContainer.style.display = "none";
        memeCreationContainer.style.display = "block";
    }, 1000)
})
