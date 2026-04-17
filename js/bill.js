function loadBill(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let billDiv = document.getElementById("billItems");
let total = 0;

billDiv.innerHTML = "";

cart.forEach(function(item,index){

billDiv.innerHTML += "<p>" + item.item + " - ₹" + item.cost + "<button onclick='removeItem(" + index + ")'>Remove</button></p>";
total += item.cost;

});

document.getElementById("totalAmount").innerText = 
"Total Amount: ₹" + total;

}

function removeItem(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    location.reload();
}

function clearBill(){
localStorage.removeItem("cart");
location.reload();
}

loadBill();

