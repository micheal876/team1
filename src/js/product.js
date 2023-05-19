import { findProductById } from '../js/productData.mjs';
import { setLocalStorage, getParam, getLocalStorage } from '../js/utils.mjs';
import productDetails from '../js/productDetails.mjs';

const productId = getParam('product');
productDetails(productId);


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

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
  


 