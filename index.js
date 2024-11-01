let imgBox = document.getElementById("img-box")
let qrImg = document.getElementById("qr")
let input = document.getElementById("qr-text")
let form  =document.getElementById("form")
let button =document.getElementById("button")

form.addEventListener("submit",function(event){
    event.preventDefault()
})

button.addEventListener("click", generateQR);


function generateQR(){
    if(input.value.length > 0){
        qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value
  imgBox.classList.add("show-img")
    }else{
        input.classList.add("error")
        setTimeout(()=>{
            input.classList.remove("error")
        },1000)
    }
}