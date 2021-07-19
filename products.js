const products = [
  {
    item: "Diamond Ring",
    brand: "Tanishq",
    image: [""],
    price: 2450,
  },
  {
    item: "Diamond Ring",
    brand: "Voylla",
    image: [""],
    price: 2320,
  },
  {
    item: "Gold Ring",
    brand: "Tanishq",
    image: [""],
    price: 1450,
  },
  {
    item: "Gold Ring",
    brand: "Voylla",
    image: [""],
    price: 1320,
  },
  {
    item: "Earrings",
    brand: "Tanishq",
    image: [""],
    price: 350,
  },
  {
    item: "Earrings",
    brand: "Voylla",
    image: [""],
    price: 310,
  },
  {
    item: "Diamond Neclace",
    brand: "Tanishq",
    image: [""],
    price: 10450,
  },
  {
    item: "Diamond Neclace",
    brand: "Voylla",
    image: [""],
    price: 10000,
  },
  {
    item: "Gold Neclace",
    brand: "Tanishq",
    image: [""],
    price: 8450,
  },
  {
    item: "Gold Neclace",
    brand: "Voylla",
    image: [""],
    price: 7500,
  },
];

if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify(products));
}

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
    price.innerHTML = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";

    btn.addEventListener("click", function () {
      alert("Added to cart");
      let cart = localStorage.getItem("cart");
      if (cart == null) {
        cart = [];
      } else {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push(el);

      localStorage.setItem("cart", JSON.stringify(cart));
    });

    div.append(img, brand, name, price, btn);

    section.append(div);
  });
}
showProducts(JSON.parse(localStorage.getItem("products")));

//Price range sorting;
function priceSort(e) {
  e.preventDefault();
  let form = document.getElementById("priceSort");

  let i = +form.from.value;
  let j = +form.to.value;

  let products = JSON.parse(localStorage.getItem("products"));

  let filtered = products.filter(function (el) {
    return el.price >= i && el.price <= j;
  });

  showProducts(filtered);
}

//Brand wise sorting;
function brandSort(e) {
  e.preventDefault();
  let form = document.getElementById("brandSort");

  let checkbox = document.querySelectorAll("input[type=checkbox]:checked");
  let checkboxValue = [];
  for (var i = 0; i < checkbox.length; i++) {
    checkboxValue.push(checkbox[i].value);
  }

  let products = JSON.parse(localStorage.getItem("products"));

  if (checkboxValue.length == 1) {
    var filtered = products.filter(function (el) {
      return el.brand == checkboxValue[0];
    });
    showProducts(filtered);
  } else {
    var filtered = products.filter(function (el) {
      return el.brand == checkboxValue[0] || el.brand == checkboxValue[1];
    });
    showProducts(filtered);
  }
}

var cartImg = document.getElementById("cart");

cartImg.addEventListener("click", function () {
  window.location.href = "cart.html";
});
