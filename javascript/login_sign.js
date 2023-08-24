function init() 
{
    signUpLoginDelete();
    setAccount();
    login();
    iconAccount();
    signUpFromLogin();
}

function signUpFromLogin() {
    let login_line = document.querySelector(".login_line > button")
    login_line.addEventListener("click", function() {
        document.querySelector(".login_error_text").innerHTML = "";
        document.getElementById("login_email").value = "";
        document.getElementById("login_password").value = "";
        //pseudo
        let login_container = document.querySelector(".login_container")
        login_container.style.display = "none"

        let sign_container = document.querySelector(".sign_container")
        sign_container.style.opacity = 1;
        sign_container.style.display = "block";
    })
}

//sign up
function setAccount() {
    let sign_btn = document.querySelector(".sign_btn")
    sign_btn.addEventListener("click", function() {
        let error_text = document.querySelector(".sign_error_text");
        error_text.innerHTML = "";
        let username = document.getElementById("username").value;
        let email = document.getElementById("sign_email").value;
        let password = document.getElementById("sign_password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if(username.match("^[A-Z a-z]{2,15}$") == null)
            error_text.innerHTML += "Username(only characters, length: 2-15)<br>"
        if(email.match("^[A-Za-z0-9]*@gmail.com$") == null)
            error_text.innerHTML += "Email(<strong>'@gmail.com'</strong>)<br>"
        if(password.match("^[a-z]{8,15}$") == null)
            error_text.innerHTML += "Password(only characters, length: 8-15)<br>"
        if(confirmPassword == "") 
            error_text.innerHTML += "Confirm password is not filled<br>"
        if(confirmPassword !== password)
            error_text.innerHTML += "Confirm password is not match<br>";

        if(error_text.innerHTML == "") {
            if(localStorage.accounts == undefined) {
                let accounts = `[{"Username" : "${username}", "Email" : "${email}", "Password" : "${password}"}]`
                localStorage.accounts = accounts; 

                let sign_container = document.querySelector(".sign_container")
                    sign_container.classList.add("sign_opacity")
        
                setTimeout(() => {
                    sign_container.style.display = "none";
                    sign_container.classList.remove("sign_opacity");

                    //negative to login
                    let login_container = document.querySelector(".login_container")
                    login_container.classList.add("login_opacity_prev")
                    login_container.style.display = "block";
                    document.querySelector("#account").style.display = "none"
                }, 1000)
            }
            else {
                let accounts = JSON.parse(localStorage.accounts);

                for(let i = 0; i < accounts.length; i++) {
                    if(username == accounts[i].Username || email == accounts[i].Email) {
                        error_text.innerHTML = "This account existed<br>"
                    }
                }
                if(error_text.innerHTML == "") {
                    accounts.push({Username : username, Email : email, Password : password})
                    localStorage.accounts = JSON.stringify(accounts);

                    let sign_container = document.querySelector(".sign_container")
                    sign_container.classList.add("sign_opacity")
        
                    setTimeout(() => {
                        sign_container.style.display = "none";
                        sign_container.classList.remove("sign_opacity");

                        //negative to login
                        let login_container = document.querySelector(".login_container")
                        login_container.classList.add("login_opacity_prev")
                        login_container.style.display = "block";
                        document.querySelector("#account").style.display = "none"
                    }, 1000)
                }
            }
            document.getElementById("username").value = "";
            document.getElementById("sign_email").value = "";
            document.getElementById("sign_password").value = "";
            document.getElementById("confirmPassword").value = "";
        }
   })
}

//sign up, login delete btn
function signUpLoginDelete() {
    let login_delete = document.querySelector(".login_delete");
    login_delete.addEventListener("click", function() {
        document.querySelector(".login_error_text").innerHTML = "";
        let login_container = document.querySelector(".login_container")
        login_container.style.display = "none"
        document.querySelector("#account").style.display = "block"
        document.querySelector(".disable_all").style.display = "none"
        document.getElementById("login_email").value = "";
        document.getElementById("login_password").value = "";
    })

    let sign_delete = document.querySelector(".sign_delete");
    sign_delete.addEventListener("click", function() {
        let sign_container = document.querySelector(".sign_container")
        sign_container.classList.toggle("sign_opacity")
        document.querySelector(".sign_error_text").innerHTML = "";
        document.getElementById("username").value = "";
        document.getElementById("sign_email").value = "";
        document.getElementById("sign_password").value = "";
        document.getElementById("confirmPassword").value = "";
        setTimeout(() => {
            sign_container.style.display = "none"
            sign_container.classList.remove("sign_opacity")
        }, 1000)
        document.querySelector("#account").style.display = "block"
        document.querySelector(".disable_all").style.display = "none"
    })
}


function login() 
{
    let login_btn = document.querySelector(".login_btn");
    login_btn.addEventListener("click", function() {
        let email = document.getElementById("login_email").value;
        let password = document.getElementById("login_password").value;
        let error_text = document.querySelector(".login_error_text");
        error_text.innerHTML = "";

        if(localStorage.accounts == undefined) {
            error_text.innerHTML = "Email or Password is wrong"
            return;
        }
        let accounts = JSON.parse(localStorage.accounts);

        //to save comment
        let position = -1;

        for(let i = 0; i < accounts.length; i++) {
            if(password == accounts[i].Password && email == accounts[i].Email) {
                error_text.innerHTML = "";
                position = i; //save position of account that was loged in

                //save comment
                let account_logined = {user : accounts[i].Username, order : i}
                localStorage.account_logined = JSON.stringify(account_logined);
                break;
            }
            error_text.innerHTML = "Email or Password is wrong"
        }   
        if(error_text.innerHTML == "") {
            document.getElementById("login_email").value = "";
            document.getElementById("login_password").value = "";

            let account = document.getElementById("account")
            account.removeChild(document.querySelector("#account > a"))
           
            account.innerHTML = `<label for="log_out_checkbox">
                                    <img src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p86x86&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=pYLa-lN8pc4AX8VAikU&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfC-TzMn9hnCEz7MufAy72HA7uJGMGKMXKpuZYkJco3JMg&oe=64F071B8">
                                    <input type="checkbox" id="log_out_checkbox">
                                </label>`
            
            let logOut = document.querySelector("#account > label > img")
            logOut.addEventListener("click", function() {
                document.querySelector("#account > label > input").checked = true;
                if(document.querySelector("#account > label > input").checked) {
                    document.querySelector(".account_log_out").style.display = "block"
                    document.querySelector("#account > label > input").checked = false;
                }
            })

            document.querySelector(".disable_all").style.display = "none"

            //add comment
            if(localStorage.comments != undefined) {
                let commentsJson = JSON.parse(localStorage.comments);
                //parent comments
                let comments = document.querySelector(".comments")
                
                //check exist content of comment
                let commentDesContent = document.querySelectorAll(".comment_des > span")    
                //check exist name account
                let commentInformationUser = document.querySelectorAll(".comment_information > span")
                //add delete comment
                let checkCommentDelete = document.querySelectorAll(".comment")

                //comment existing => remove
                for(let n = 5; n < commentDesContent.length; n++) 
                    comments.removeChild(checkCommentDelete[n])

                for(let i = 0; i < commentsJson.length; i++) {
                    //child comment
                    let div_comment = document.createElement("div")
                    div_comment.classList.add("comment")
                    //add comment
                    comment = `
                            <div class="comment_des">
                                <span>${commentsJson[i].comment}</span>
                                <div class="comment_information">
                                    <span>@${commentsJson[i].UserName}</span>
                                </div>
                            </div>
                            <div class="comment_image">
                                <img src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p86x86&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=pYLa-lN8pc4AX8VAikU&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfC-TzMn9hnCEz7MufAy72HA7uJGMGKMXKpuZYkJco3JMg&oe=64F071B8">
                            </div>
                        `   
                    div_comment.innerHTML = comment;
                    if(position == commentsJson[i].order) {

                        //them delete
                        let div_delete = document.createElement('div')
                        div_delete.classList.add("comment_delete")
                        div_delete.title = "Delete Your Comment"
                        let btn_delete =  document.createElement("button")
                        let i_delete = document.createElement("i")
                        i_delete.setAttribute("class", "fa-solid fa-trash-can");
                        btn_delete.appendChild(i_delete)
                        div_delete.appendChild(btn_delete)
                        div_comment.appendChild(div_delete)

                        btn_delete.addEventListener("click", function() {
                            let commentStore = JSON.parse(localStorage.comments);
                            for(let k = 0; k < commentStore.length; k++) {
                                if(commentsJson[i].comment == commentStore[k].comment && commentsJson[i].UserName == commentStore[k].UserName) {
                                    commentStore.splice(k, 1);
                                    localStorage.comments = JSON.stringify(commentStore);
                                }
                            }

                            comments.removeChild(div_comment)
                        })
                    } 
                    comments.appendChild(div_comment);
                }
            }    
            //pseudo
            let login_container = document.querySelector(".login_container")
            login_container.classList.remove("login_opacity_prev") 
            login_container.style.display = "none"
            document.querySelector("#account").style.display = "block"
        }
    })
}

function iconAccount() 
{
    let account_btn = document.querySelector("#account > a")
    account_btn.addEventListener("click", function() {
        let login_container = document.querySelector(".login_container")
        login_container.classList.add("login_opacity_prev")
        login_container.style.display = "block";
        document.querySelector(".disable_all").style.display = "block"

        document.querySelector("#account").style.display = "none"
    })
}

window.onload = init()