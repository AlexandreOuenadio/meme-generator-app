fetch("../footer.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        const footer = document.getElementById("footer")
        footer.innerHTML = texte;
        feather.replace();
        


})

