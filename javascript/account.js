function init() {
    let account_btn = document.querySelector("#account > a")
    account_btn.addEventListener("click", function() {
        let login_container = document.querySelector(".login_container")
        login_container.classList.add("login_opacity_prev")
        login_container.style.display = "block";

        document.querySelector("#account").style.display = "none"
    })
}


window.onload = init()