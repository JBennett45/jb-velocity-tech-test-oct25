import { updateDrawerItems } from "../cart-functions/_update_drawer";
document.querySelectorAll('.collection-product-entry-cst .addtocart-btn-cst').forEach((addToCart) => {
  addToCart.addEventListener('click', async (e) => {
    // vars //
    let productWrap = addToCart.closest('.collection-product-entry-cst');
    let productID = productWrap.getAttribute('data-prodid');
    let selectedVariant = productWrap.querySelector('.product-variant-select-cst').value;
    let currentInput = productWrap.querySelector('.quant-btns-wrap-cst input');
    let requestedQuantity = Number(currentInput.value);
    const drwElement = document.getElementById('drawer-master-wrap-cst');
    // setup data to add //
    let cartData = {
      'items': [{
        'id': selectedVariant,
        'quantity': requestedQuantity
      }]
    };
    // post to cart //
    await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartData)
    });
    updateDrawerItems();
    if(drwElement) {
      drwElement.classList.add('drawer-cst-active');
    }
  });
});