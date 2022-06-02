function solve() {
   document.getElementsByClassName("shopping-cart")[0].addEventListener('click', onClick);
   document.getElementsByClassName("checkout")[0].addEventListener('click', checkout);

   let cart = [];
   let output = document.getElementsByTagName('textarea')[0];
   output.value = '';

   function onClick(event) {
      if (event.target.tagName == 'BUTTON' && event.target.classList.contains('add-product')) {
         let product = event.target.parentNode.parentNode;
         let name = product.querySelector(".product-title").textContent;
         let price = Number(product.querySelector(".product-line-price").textContent);

         cart.push({
            name,
            price
         });

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function checkout() {
      let products = new Set();
      cart.forEach(p => products.add(p.name));

      let total = cart.reduce((t, c) => t + c.price, 0);
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`

      let buttons = Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = true);
   }
}