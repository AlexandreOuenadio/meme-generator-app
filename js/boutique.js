
let products_json = {};
let template = document.getElementById("boutique-product");
let grid=document.getElementById("boutique-product-container");


function cloner(prod){
    clone=template.content.cloneNode(true);
    let img=clone.querySelector("img");
    let title=clone.querySelector("h1");
    let price=clone.querySelector("h2");
    let id=clone.querySelector("a");
    let res = decodeURI(img.src);
    img.src = res.replace(/{{image-Product}}/g, prod["image"]);
    title.textContent=title.textContent.replace(/{{name-Product}}/g,prod["name"]);
    price.textContent=price.textContent.replace(/{{price-Product}}/g,prod["price"]);
    id.href=id.href.replace(/{{id-Product}}/g,prod["id"]);
    grid.appendChild(clone);
}

/*On prend les informations du fichier JSON et on les ajoute sur la page*/ 
fetch("json/boutique.json")
.then(function(response){
    return response.json();

})
.then(function(json){
    products_json = json.products;
    for (const x of products_json){
        cloner(x)
    }

});

 