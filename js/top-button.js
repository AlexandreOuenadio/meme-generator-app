fetch("../top-button.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        const body = document.querySelector("body");
        body.innerHTML+=texte;
        let button= document.getElementById("top-button");
        button.style.visibility="hidden";
        button.style.opacity=0;
        function buttonState(){
            if (document.documentElement.scrollTop>20){
                button.style.visibility="visible";
                button.style.opacity=1;
            }
            else {
                button.style.opacity=0;
                button.style.visibility="hidden";
            }
        }
        window.onscroll = function(){buttonState()};


        
        
})


function ScrollTop(){
    document.documentElement.scrollTop = 0;
}



