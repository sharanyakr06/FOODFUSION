function addReview(){

let name = document.getElementById("name").value;
let rating = document.getElementById("rating").value;
let reviewText = document.getElementById("reviewText").value;

let container = document.getElementById("reviewContainer");

let newReview = document.createElement("div");
newReview.className = "review-card";

newReview.innerHTML = `
<p>${rating}</p>
<p>"${reviewText}"</p>
<h4>- ${name}</h4>
`;

container.appendChild(newReview);

document.getElementById("name").value="";
document.getElementById("reviewText").value="";

}
