// add a loading start when carts being updated or added to //
export const activateLoadingState = (parentEl) => {
  let loadingInstance = parentEl.querySelector('.entry-loading-state-cst');
  loadingInstance.classList.add('active-loading-state-cst');
}
// remove state when action is complete - added second value to check if add to cart button is active to remove and reset states //
export const endLoadingState = (parentEl, atcBtn) => {
  atcBtn = atcBtn || null;
  let loadingInstance = parentEl.querySelector('.entry-loading-state-cst');
  loadingInstance.classList.remove('active-loading-state-cst');
  if(atcBtn) {
    let currentInput = parentEl.querySelector('.quant-btns-wrap-cst input');
    let addToCart = parentEl.querySelector('.addtocart-btn-cst');
    currentInput.value = 0;
    addToCart.style.display = "none";
  }
}