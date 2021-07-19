const cart = JSON.parse(localStorage.getItem("cart"));
console.log("cart:", cart);

var section = document.getElementById("section");

function showProducts(p) {
  section.innerHTML = null;

  let products = p;

  products.forEach(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src =
      "https://www.avtaara.com/wp-content/uploads/2019/07/AVT5a-W-v1.jpg";

    img.addEventListener("mouseover", function () {
      img.src = "https://cdn.shiels.com.au/25000169-a.jpg";
    });

    img.addEventListener("mouseleave", function () {
      img.src =
        "https://www.avtaara.com/wp-content/uploads/2019/07/AVT5a-W-v1.jpg";
    });

    let brand = document.createElement("p");
    brand.innerHTML = el.brand;

    let name = document.createElement("p");
    name.innerHTML = el.item;

    let price = document.createElement("p");
    price.innerHTML = `Rs. ${el.price}`;

    let btn = document.createElement("button");
    btn.innerText = "Remove";

    div.append(img, brand, name, price, btn);

    section.append(div);
  });
}
showProducts(cart);

var count = 0;
function promo() {
  var promo = document.getElementById("promo").value;
  if (count > 0) {
    alert("Promocode already applied!");
  } else {
    if (promo == "masai30") {
      count++;
      alert("Success");
      for (var i = 0; i < cart.length; i++) {
        cart[i].price = Math.ceil(cart[i].price * 0.7);
      }
    } else {
      alert("invalid PromoCode!");
    }
    showProducts(cart);
  }
}

function checkout() {
  window.location.href = "checkout.html";
}
