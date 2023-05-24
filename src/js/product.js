import getParam from '../js/utils.mjs';
import productDetails from '../js/productDetails.mjs';

const productId = getParam('product');
productDetails(productId);