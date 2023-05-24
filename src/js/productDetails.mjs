import { findProductById } from './productData.mjs';
import { getLocalStorage, setLocalStorage } from '../js/utils.mjs';

let product = {};

export default async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  console.log(product);
  if (!product) {
    document.querySelector('#productName').innerText = `Item not found. Please return to the previous page or the Homepage and try again.`;
  } else {
    // once we have the product details we can render out the HTML
    renderProductDetails();
  }
}

function addProductToCart(product) {
  let cart = getLocalStorage('so-cart');
  if (cart){
      cart.push(product)
    }
  setLocalStorage('so-cart', cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

function renderProductDetails() {
  document.querySelector('#productName').innerText = product.Brand.Name;
  document.querySelector('#productNameWithoutBrand').innerText =
    product.NameWithoutBrand;
  document.querySelector('#productImage').src = product.Image;
  document.querySelector('#productImage').alt = product.Name;
  const finalPriceElement = document.querySelector('#productFinalPrice');
  finalPriceElement.innerHTML = `$${product.FinalPrice} <span class="retail-price">$${product.SuggestedRetailPrice}</span>`;
  document.querySelector('#productColorName').innerText =
    product.Colors[0].ColorName;
  document.querySelector('#productDescriptionHtmlSimple').innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector('.product-detail__add').innerHTML = `<button id="addToCart" data-id="">Add to Cart</button>`
  document.querySelector('#addToCart').dataset.id = product.Id;
  // add listener to Add to Cart button
  document
    .getElementById('addToCart')
    .addEventListener('click', addToCartHandler);
}


