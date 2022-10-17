const userInput = document.getElementById("userInput");
const send = document.getElementById("send");
const content = document.getElementById("content");

const changeColor = (color) =>{
    
    content.style.backgroundColor = color;//zmena barvy
}



send.onclick = () => {
    changeColor(userInput.value);
}
content.onmouseover = (userInput) => {//pri najeti mysi
    changeColor(userInput.value);
}

content.onmouseout = () =>{
    content.innerHTML += "<p>asd</p>"
}



window.onload = () => {

   // content.style.backgroundColor = "pink";
   // content.innerHTML = "aplikace se nacetla";
}
