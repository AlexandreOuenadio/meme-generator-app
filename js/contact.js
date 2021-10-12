fetch("../header.html")
    .then(contenu=>contenu.text())
    .then(texte=>{document.getElementById("header").innerHTML = texte
})