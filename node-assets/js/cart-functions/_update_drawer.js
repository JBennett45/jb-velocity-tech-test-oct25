import { updateCartCount } from "../cart-functions/_cart_count";
import { activateLoadingState, endLoadingState } from "../general-functions/_control_loading_states";


export const buildCartDrawer = async () => {
  const drwElement = document.getElementById('drawer-master-wrap-cst');
  const targetElement = document.getElementById('drawer-dynamic-wrap-cst');
  if(drwElement) {
    const sectionFetch = await fetch("/?section_id=cart-drawer");
    const sectionRes = await sectionFetch.text();
    targetElement.innerHTML = sectionRes;
    // cart interactions //
    drawerQuantityControl();
  }
}

const drawerQuantityControl = () => {
  document.querySelectorAll('.cart-product-entry-cst .prod-qunatity-update').forEach((productupdate) => {
    productupdate.addEventListener('click', async (e) => {
        // vars //
        let productWrap = productupdate.closest('.cart-product-entry-cst');
        let productKey = productWrap.getAttribute('data-product-key');
        let changeType = productupdate.getAttribute('data-quantype');
        let currentInput = productWrap.querySelector('.quant-btns-wrap-cst input');
        let currentValue = Number(currentInput.value);
        let updatedValue = null;
        // Loader //
        activateLoadingState(productWrap); 
        // control //
        if(changeType === 'minus') {
          if(currentValue == 0) {
            updatedValue = 0;
          } else {
            updatedValue = currentValue - 1;
            currentInput.value = updatedValue;
          }
        }
        // addition //
        else {
          updatedValue = currentValue + 1;
          currentInput.value = updatedValue;
        }

        const updateRes = await fetch("/cart/update.js", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ updates: { [productKey]: updatedValue } }),
        });
        const newCart = await updateRes.json();
        await updateCartCount();
        // remove this item if needed //
        if(updatedValue == 0) {
           productWrap.remove();
        }
        // check cart state //
        if(newCart.item_count == 0) {
          const drwElement = document.getElementById('drawer-master-wrap-cst');
          drwElement.classList.remove('drawer-cst-active')
          buildCartDrawer();
        }
        else {
          await endLoadingState(productWrap); 
        }
    });
  });
}

