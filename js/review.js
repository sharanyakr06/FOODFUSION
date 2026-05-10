/* Load saved reviews when page opens */

window.onload = function () {

let savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

savedReviews.forEach(review => {
displayReview(review.name, review.rating, review.text);
});

};

/* Add Review Function */

function addReview(){

let name = document.getElementById("name").value;
let rating = document.getElementById("rating").value;
let reviewText = document.getElementById("reviewText").value;

/* Validation */

if(name === "" || rating === "" || reviewText === ""){

alert("Please fill all fields");

return;

}

let reviewData = {
name: name,
rating: rating,
text: reviewText
};

/* Save reviews */

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

reviews.push(reviewData);

localStorage.setItem("reviews", JSON.stringify(reviews));

/* Display review */

displayReview(name, rating, reviewText);

/* Clear form */

document.getElementById("name").value = "";
document.getElementById("rating").selectedIndex = 0;
document.getElementById("reviewText").value = "";

}

/* Display Review Function */

function displayReview(name, rating, reviewText){

let container = document.getElementById("reviewContainer");

let newReview = document.createElement("div");

newReview.className = "review-card";

newReview.innerHTML = `
<p>${rating}</p>
<p>"${reviewText}"</p>
<h4>- ${name}</h4>
`;

container.appendChild(newReview);

}