import { buildCartDrawer } from "../cart-functions/_update_drawer";
import { updateCartCount } from "../cart-functions/_cart_count";
const drwElement = document.getElementById('drawer-master-wrap-cst');
if(drwElement) {
  // populate drawer on init //
  buildCartDrawer();
  // vars //
  const openDrw = document.getElementById('cart-drawer-init-cst');
  const closeDrw = document.getElementById('close-drawer-instance-cst');
  const clearCartElement = document.getElementById('clear-all-cart-cst');
  // open drawer //
  openDrw.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    drwElement.classList.add('drawer-cst-active');
  });
  // close drawer //
  closeDrw.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.overflow = "auto";
    drwElement.classList.remove('drawer-cst-active')
  });
  // clear drawer //
  clearCartElement.addEventListener('click', async (e) => {
    e.preventDefault();
    // post to cart //
    await fetch("/cart/clear.js", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    drwElement.classList.remove('drawer-cst-active');
    buildCartDrawer();
    updateCartCount();
  });
}

