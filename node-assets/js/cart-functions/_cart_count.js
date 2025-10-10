export const updateCartCount = async () => {
  // Request Cart and await json //
  const cartCall = await fetch('/cart.js', { cache: 'no-store' });
  const dataResponse = await cartCall.json();
  // vars //
  let counterElement = document.querySelector('.basket-counter-cst');
  let counterValue = document.querySelector('.basket-counter-cst span');
  // update count //
  if(dataResponse.item_count != 0) {
    counterElement.classList.remove('inactive-bk-cst');
    counterValue.innerHTML = dataResponse.item_count;
  } else {
     counterElement.classList.add('inactive-bk-cst');
     counterValue.innerHTML = 0;
  }
}