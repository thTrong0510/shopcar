function init()
{
    let logOutDelete = document.querySelector(".log_out_delete button")
    logOutDelete.addEventListener("click", function() {
        document.querySelector(".account_log_out").style.display = "none"
    })

    let logOut = document.querySelector(".account_log_out button")
    logOut.addEventListener("click", function() {
        let account = document.getElementById("account")
        account.innerHTML = `<a><i class="fa-solid fa-user-plus"></i></a>`
        document.querySelector(".account_log_out").style.display = "none"
         //remove input(comment) when loging out
         document.querySelector("#check_yours_comment_ span").textContent = "Comment"
         document.querySelector("#yours_comment").style.display = "none"; 
         document.querySelector("#yours_comment input").value = "" 
         document.getElementById("check_comment_yours").checked = false;
 
         let account_btn = document.querySelector("#account > a")
         account_btn.addEventListener("click", function() {
             let login_container = document.querySelector(".login_container")
             login_container.classList.add("login_opacity_prev")
             login_container.style.display = "block";
             document.querySelector("#account").style.display = "none"
            document.querySelector(".disable_all").style.display = "block";
        })
        limitedDeleteComment()
    })
}

function limitedDeleteComment() 
{
    let comment_informations = document.querySelectorAll(".comment_delete")

    for(let i = 0; i < comment_informations.length; i++) {
        comment_informations[i].style.display = "none"
    }
    
}


window.onload = init() 