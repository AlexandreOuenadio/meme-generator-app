class Cart {
    static addProducts(products){

        products.forEach((product) => {
            const rowArticleTemplate = document.getElementById('rowArticleTemplate');
            const cloneTemplate = document.importNode(rowArticleTemplate.content, true);
            const productImage = cloneTemplate.querySelector('.product img');
            const productName = cloneTemplate.querySelector('.product-card p:first-child');
            const productPrice = cloneTemplate.querySelector('.product-card p:last-child');
            const productSubtotal = cloneTemplate.querySelector('.product-subtotal');
            productImage.src = product.imgURL;
            productName.textContent = "Nom du produit: " + product.name;
            productPrice.textContent = "Prix unitaire: " + product.price + "€";
            productSubtotal.textContent = product.price + ",00€";
            const quantity= cloneTemplate.querySelector(".quantityInput");
            
            quantity.addEventListener('input', () =>{
                console.log('lolo')
            })    
                
            
            document.querySelector('.table-articles').appendChild(cloneTemplate);
        });
    }


}

const products = JSON.parse(localStorage.getItem('products'));
const nbArticles = document.getElementById('nb-articles');
nbArticles.textContent = "" + products.length;

Cart.addProducts(products);












