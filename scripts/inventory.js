
var user_data = JSON.parse(localStorage.getItem("data")) || [];

console.log(user_data)






for(var i = 0 ; i <user_data.length;i++)

{
    var x = document.querySelector("#all_products")
    var div1= document.createElement("div")
div1.setAttribute("class","container")


    var img= document.createElement("img")
    img.setAttribute("id","photo")
    img.src= user_data[i].Image
    
    var type= document.createElement("h4")
    type.setAttribute("id","type")
    type.innerText= user_data[i].Type
    
    var desc= document.createElement("h4")
    desc.setAttribute("id","desc")
    desc.innerText= user_data[i].Description
    
    var price= document.createElement("h4")
    price.setAttribute("id","price")
    price.innerText= user_data[i].Price
    
    var button= document.createElement("button")
    button.setAttribute("id","del")
    button.innerText= "Delete"
    button.addEventListener("click",deldata)

    
    
    
    div1.append(img,type,desc,price,button)
    x.append(div1)

}

document
.querySelector("#add_more_product")
.addEventListener("click", gotohomepage);

function gotohomepage(){
    window.location.href = "./index.html";
}
function deldata(){
    event.target.parentNode.remove();
  }



