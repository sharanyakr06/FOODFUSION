function addToBill(name, price) {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({ item: name, cost: price });

localStorage.setItem("cart", JSON.stringify(cart));

let msg = document.getElementById("message");

msg.innerText =  name + " added to bill!";

msg.style.display = "block";

setTimeout(function(){
msg.style.display = "none";
},2000);

}