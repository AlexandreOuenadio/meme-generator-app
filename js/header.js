fetch("../header.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        const header = document.getElementById("header")
        header.innerHTML = texte;
        feather.replace();
        if (location.pathname=="/index.html" || location.pathname=="/"){
            header.style.position="absolute";
            header.style.backgroundColor = 'transparent';
            const navHTMLCollection = document.querySelectorAll(".header-navigation-list-item");
            const nav = Array.prototype.slice.call(navHTMLCollection);
            nav.forEach(
                (element, index) =>{
                    element.style.color = "white";
                    element.style.background ="transparent";
                }
            )
        }


})

