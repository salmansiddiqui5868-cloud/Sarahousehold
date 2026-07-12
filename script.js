
let qty = 1;
const price = 99;

const qtyText = document.getElementById("qty");
const totalText = document.getElementById("total");

function update() {
  qtyText.textContent = qty;
  totalText.textContent = "Total : ₹" + (qty * price);

  const orderBtn = document.getElementById("orderBtn");

  orderBtn.href =
    "https://wa.me/918446429045?text=" +
    encodeURIComponent(
`🛍️ Sarahousehold Order

📦 Product: Fridge Bottle
🔢 Quantity: ${qty}
💰 Price: ₹${price}
💵 Total: ₹${qty * price}

🖼️ Image:
https://salmansiddiqui5868-cloud.github.io/Sarahousehold/bottle.jpg`
    );
}

document.getElementById("plus").onclick = function () {
  qty++;
  update();
};

document.getElementById("minus").onclick = function () {
  if (qty > 1) {
    qty--;
    update();
  }
};

// Image Popup
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const productImage = document.getElementById("productImage");
const closeBtn = document.getElementById("close");

productImage.onclick = function () {
  popup.style.display = "flex";
  popupImg.src = productImage.src;
};

closeBtn.onclick = function () {
  popup.style.display = "none";
};

popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};

update();
