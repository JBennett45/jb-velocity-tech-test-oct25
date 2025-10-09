document.querySelectorAll('.product-cst-quant-wrap-cst .quant-btns-wrap-cst .prod-qunatity-update').forEach((productupdate) => {
  productupdate.addEventListener('click', (e) => {
    e.preventDefault();
    // vars //
    let productWrap = productupdate.closest('.collection-product-entry-cst');
    let productID = productWrap.getAttribute('data-prodid');
    let changeType = productupdate.getAttribute('data-quantype');
    let currentInput = productWrap.querySelector('.quant-btns-wrap-cst input');
    let currentValue = Number(currentInput.value);
    let addToCart = productWrap.querySelector('.addtocart-btn-cst');
    // control //
    if(changeType === 'minus') {
      if(currentValue != 0) {
        currentInput.value = currentValue - 1;
      } 
    }
    // addition //
    else {
      currentInput.value = currentValue + 1;
    }
    // check for Add to cart instance and show based on input //
    if(addToCart) {
       if(currentInput.value > 0) {
        addToCart.style.display = "block";
      } else {
        addToCart.style.display = "none";
      }
    }
  });
});