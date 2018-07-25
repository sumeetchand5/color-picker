let bodyElement = document.getElementsByTagName("body")[0];
body.addEventListener("input",function(){
    let colorPicker = document.getElementById("color-picker");
    bodyElement.style.background = colorPicker.value;
}); 