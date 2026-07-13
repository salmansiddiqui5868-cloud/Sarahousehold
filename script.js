let qty = 1;

const qtyText = document.getElementById("qty");
const totalText = document.getElementById("total");
const orderBtn = document.getElementById("orderBtn");

const productName = document.getElementById("productName").innerText;

const productPrice = parseInt(
document.getElementById("price").dataset.price
);

const productImage =
document.getElementById("productImage").src;

function update(){

qtyText.innerHTML = qty;

totalText.innerHTML =
"Total : ₹" + (qty * productPrice);

orderBtn.href =
"https://wa.me/918446429045?text=" +
encodeURIComponent(

`🛍️ Sarahousehold Order

📦 Product : ${productName}

🔢 Quantity : ${qty}

💰 Price : ₹${productPrice}

💵 Total : ₹${qty * productPrice}

🖼️ Image :
${productImage}`

);

}

document.getElementById("plus").onclick=function(){

qty++;

update();

};

document.getElementById("minus").onclick=function(){

if(qty>1){

qty--;

update();

}

};

// Popup

const popup=document.getElementById("popup");

const popupImg=document.getElementById("popupImg");

const img=document.getElementById("productImage");

const close=document.getElementById("close");

img.onclick=function(){

popup.style.display="flex";

popupImg.src=img.src;

};

close.onclick=function(){

popup.style.display="none";

};

popup.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

};

update();
