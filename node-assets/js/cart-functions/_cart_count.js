export const updateCartCount = async () => {
  // Request Cart and await json //
  const cartCall = await fetch('/cart.js', { cache: 'no-store' });
  const dataResponse = await cartCall.json();
  // vars //
  let counterElement = document.querySelector('.basket-counter-cst');
  let counterValue = document.querySelector('.basket-counter-cst span');
  let drawerFormInstance = document.querySelector('.cart-drawer-form');
  // update count //
  if(dataResponse.item_count != 0) {
    counterElement.classList.remove('inactive-bk-cst');
    counterValue.innerHTML = dataResponse.item_count;
  } else {
     counterElement.classList.add('inactive-bk-cst');
     counterValue.innerHTML = 0;
  }
  // drawer totals ///
  if(drawerFormInstance) {
    let totalTarget = drawerFormInstance.querySelector('.drawer-footer-cst .top-row-cst h4');
    let itemTarget = drawerFormInstance.querySelector('.cart-itemcount-cst');
    let itemLabelTarget = drawerFormInstance.querySelector('.cart-itemlabel-cst');
    let newTotal = await fetch("/?section_id=current-total-format");
    let totalValue = await newTotal.text();
    // price update and format //
    totalTarget.innerHTML = totalValue;
    // item update and label //
    itemTarget.innerHTML = dataResponse.item_count; 
    if(dataResponse.item_count == 1) {
      itemLabelTarget.innerHTML = 'item';
    } else {
      itemLabelTarget.innerHTML = 'items';
    }
  }
}