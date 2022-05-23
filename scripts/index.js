document
.querySelector("form")
.addEventListener("submit", sendToLocal);
document
.querySelector("#show_products")
.addEventListener("click", gotoanotherpage);

var user_data = JSON.parse(localStorage.getItem("data")) || [];
function sendToLocal() {
event.preventDefault();






 
  var usersObj = {
    Type: document.getElementById("type").value,
    Description: document.getElementById("desc").value,
    Price: document.getElementById("price").value,
    Image: document.getElementById("image").value,
  };
  user_data.push(usersObj);
  localStorage.setItem("data", JSON.stringify(user_data));

//   window.location.href = "./login.html";

}
function gotoanotherpage(){
    window.location.href = "./inventory.html";
}