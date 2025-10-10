import { updateCartCount } from "../cart-functions/_cart_count";
// general //
// import './core-functions/_clear_all_items';
export const updateDrawerItems = async () => {
  const drwElement = document.getElementById('drawer-master-wrap-cst');
  const targetElement = document.getElementById('drawer-dynamic-wrap-cst');
  if(drwElement) {
    const sectionFetch = await fetch("/?section_id=cart-drawer");
    const sectionRes = await sectionFetch.text();
    targetElement.innerHTML = sectionRes;
    //
    document.querySelectorAll('.cart-product-entry-cst .prod-qunatity-update').forEach((productupdate) => {
      productupdate.addEventListener('click', (e) => {
        alert('cart quantity');
      });
    });
    updateCartCount();
  }
}