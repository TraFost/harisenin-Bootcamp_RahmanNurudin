const modal = document.querySelector(".myown-modal");
const modalBtn = [...document.querySelectorAll("#modal-button")];
const modalClose = document.querySelector(".close-button");
const indicator = document.querySelector(".indicator-item");
const buttonProduct = [...document.querySelectorAll(".button-shopping")];
const navbar = document.querySelector(".navbar-sticky");
const cart = document.querySelector(".cart-modal");
const cartBtn = document.querySelector(".cart-popup");
const upCart = [...document.querySelectorAll(".up")];
const downCart = [...document.querySelectorAll(".down")];
const itemCart = [...document.querySelectorAll(".item-cart")];
const priceCart = [...document.querySelectorAll(".price-cart")];
const contentCart = document.querySelector(".content-cart");
const productCart = document.querySelector(".cart-list");
const checkoutEl = document.querySelector(".checkout-content");

buttonProduct.forEach((button) => {
  button.addEventListener("click", function () {
    indicator.textContent++;
  });
});

modalBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.classList.add("modal-popup");
    document.body.style.position = "fixed";
    document.body.style.top = `-${3800}px`;
  });
});

modalClose.addEventListener("click", function () {
  modal.classList.remove("modal-popup");
  document.body.style.position = "static"; // untuk kembali ke halaman sebelumnya.
  document.body.style.top = `${0}px`;
});

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// cart-popup
cartBtn.addEventListener("click", function () {
  cart.classList.add("cart-show");
  document.body.style.position = "fixed";
  document.body.style.top = `-${0}px`;
});

// up-cart
upCart.forEach((up) => {
  up.addEventListener("click", function () {
    itemCart.forEach((item) => {
      item.textContent++;
    });
  });
});

// down-cart
downCart.forEach((down) => {
  down.addEventListener("click", function () {
    itemCart.forEach((item) => {
      item.textContent--;
      if (item.textContent < 0) {
        item.textContent = 0;
      }
      if (item.textContent == 0) {
        cart.classList.remove("cart-show");
        document.body.style.position = "static";
        document.body.style.top = `${0}px`;
        productCart.textContent = "You Have 0 Item, sad :(";
        contentCart.remove();
        checkoutEl.remove();

        priceCart.forEach((price) => {
          price.textContent = 0;
        });
      }
    });
  });
});
