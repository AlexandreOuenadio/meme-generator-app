fetch("../header.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        const header = document.getElementById("header")
        header.innerHTML = texte;
        if (location.pathname==("/index.html")){
            document.getElementsByClassName("header-title")[0].style.visibility= 'hidden' 
            header.style.position="absolute";
            header.style.backgroundColor = 'transparent';
            const navHTMLCollection = document.querySelectorAll(".home-navigation-list-item");
            const nav = Array.prototype.slice.call(navHTMLCollection);
            console.log(nav)
            nav.forEach(
                (element, index) =>{
                    element.style.background ="transparent"
                }
            )
        }


})
