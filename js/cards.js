document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const productName = card.querySelector(".product-title").textContent; 
        const productImage = card.querySelector(".product-image img").src;
        // const productDescription = card.querySelector(".product-description").textContent;
        const productDescriptionLarge = card.querySelector(".product-description-large").textContent;
        const productPrice = card.querySelector(".product-price").textContent;



        const baseUrl = window.location.origin;
        const productUrl = `${baseUrl}/pages/productos.html?name=${encodeURIComponent(productName)}&image=${encodeURIComponent(productImage)}&description2=${encodeURIComponent(productDescriptionLarge)}&price=${encodeURIComponent(productPrice)}`;
        
        window.open(productUrl, "_blank");
    });
});
// const elemento = document.querySelector('.product-description-large');
// if (elemento) {
//     if (elemento.style.display === 'none' || elemento.style.display === '') {
//         elemento.style.display = 'block';
//     } else {
//         elemento.style.display = 'none'; 
//     }
// }
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productImage = urlParams.get('image');
const productDescription = urlParams.get('description');
const productDescriptionLarge = urlParams.get('description2');
const productPrice = urlParams.get('price');

document.querySelector('.product-name').textContent = productName;
document.querySelector('.product-image img').src = productImage;
// document.querySelector('.product-description').textContent = productDescription;
document.querySelector('.product-description-large').textContent = productDescriptionLarge;
document.querySelector('.product-price').textContent = `Precio: ${productPrice}`;


