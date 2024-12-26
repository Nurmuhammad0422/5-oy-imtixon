let elForm = document.querySelector(".sign-form")
let elHandleBtnClick = document.querySelector(".sign-btn")

elForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    if(data.username = "Nurmuhammad" && data.password == "0422"){
        setTimeout(() =>{
            elHandleBtnClick.innerHTML = `SIGN IN`
            localStorage.setItem("user", JSON.stringify(data))
            location.pathname = "list.html"
        },1000)
    }
    else{
        setTimeout(() => {
            elHandleBtnClick.innerHTML = `Login not found`
        },1000)
        setTimeout(() => {
            elHandleBtnClick.innerHTML = `SIGN IN`
        },2500)
    }
})