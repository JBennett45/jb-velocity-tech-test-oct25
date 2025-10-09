import { updateCartCount } from "../core-functions/_cart_count";

document.querySelectorAll('.collection-product-entry-cst .addtocart-btn-cst').forEach((addToCart) => {
  addToCart.addEventListener('click', async (e) => {
    // vars //
    let productWrap = addToCart.closest('.collection-product-entry-cst');
    let productID = productWrap.getAttribute('data-prodid');
    let selectedVariant = productWrap.querySelector('.product-variant-select-cst').value;
    let currentInput = productWrap.querySelector('.quant-btns-wrap-cst input');
    let requestedQuantity = Number(currentInput.value);
    // setup data to add //
    let cartData = {
      'items': [{
        'id': selectedVariant,
        'quantity': requestedQuantity
      }]
    };
    // post to cart //
    await fetch("/cart/add.js", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartData)
    });
    updateCartCount();
  });
});