import { findProductById } from '../js/productData.mjs';
import { setLocalStorage, getParam } from '../js/utils.mjs';
import productDetails from '../js/productDetails.mjs';

const productId = getParam('product');
productDetails(productId);


function addProductToCart(product) {
  setLocalStorage('so-cart', product);
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
  


 