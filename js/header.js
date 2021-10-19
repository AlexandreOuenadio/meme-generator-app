fetch("../header.html")
    .then(contenu=>contenu.text())
    .then(texte=>{
        document.getElementById("header").innerHTML = texte;
        if (location.pathname==("/index.html")){
            document.getElementsByClassName("header-title")[0].style.visibility= 'hidden' 
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
