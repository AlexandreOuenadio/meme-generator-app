fetch("../header.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        const header = document.getElementById("header")
        header.innerHTML = texte;
        if (location.pathname=="/index.html" || location.pathname=="/"){
            document.getElementsByClassName("header-title")[0].style.visibility= 'hidden' 
            header.style.position="absolute";
            header.style.backgroundColor = 'transparent';
            const navHTMLCollection = document.querySelectorAll(".header-navigation-list-item");
            const nav = Array.prototype.slice.call(navHTMLCollection);
            nav.forEach(
                (element, index) =>{
                    element.style.background ="transparent"
                }
            )
        }


})
