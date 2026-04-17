/* Mood Selector */

function suggestFood(){

let mood = document.getElementById("mood").value;

let result="";

if(mood==="happy"){
result="Try Chocolate Cake 🍰";
}
else if(mood==="tired"){
result="Have a Hot Coffee ☕";
}
else if(mood==="hungry"){
result="Eat a Cheese Burger 🍔";
}
else if(mood==="party"){
result="Enjoy Pizza 🍕";
}
else{
result="Please select a mood";
}

document.getElementById("moodResult").innerHTML=result;

}


/* Shop Open Close */

function checkShopStatus(){

let hour=new Date().getHours();

let status="";

if(hour>=9 && hour<22){
status="Shop is OPEN 🟢";
}
else{
status="Shop is CLOSED 🔴";
}

document.getElementById("shopStatus").innerHTML=status;

}

checkShopStatus();

function calculateBill(){

let burger=document.getElementById("burger").value;
let cake=document.getElementById("cake").value;
let coffee=document.getElementById("coffee").value;

let total=(burger*120)+(cake*350)+(coffee*30);

document.getElementById("totalBill").innerHTML="Total Bill: ₹"+total;

}

function showMessage(event){
    event.preventDefault();

    document.getElementById("successMsg").innerHTML = "Message sent successfully ✅";

    document.querySelector("form").reset();
}