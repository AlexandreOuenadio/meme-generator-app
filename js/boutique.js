
let products_json = {};
let template = document.getElementById("boutique-product");
let grid=document.getElementById("boutique-grid");
let clone=template.content.cloneNode(true);
let img=clone.querySelector("img");
let title=clone.querySelector("h1");



fetch("json/boutique.json")
.then(function(response){
    console.log(response);
    return response.json();

})
.then(function(json){
    products_json = json.products;
    let res = decodeURI(img.src);
    img.src = res.replace(/{{image-Product}}/g, products_json[0]["image"]);
    title.textContent=title.textContent.replace(/{{name-Product}}/g,products_json[0]["name"]);
    grid.appendChild(clone);
});

