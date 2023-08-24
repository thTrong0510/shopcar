function init() {
    limitComment();
    //checkViewLike();
    createComment();
    focusBlurInput();
    loadComment();
}

function loadComment() {
    if(localStorage.comments != undefined) {
        let commentsJson = JSON.parse(localStorage.comments);
        let comments = document.querySelector(".comments")
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
            comments.appendChild(div_comment);
        }
    }
}

function focusBlurInput() {
    let input = document.querySelector("#yours_comment input")
    input.addEventListener("focus", function() {
        input.placeholder = ""
    })

    input.addEventListener("blur", function() {
        input.placeholder = "Comment Here..."
    })
}

function pseudo() {
    let login_container = document.querySelector(".login_container")
    login_container.classList.add("login_opacity_prev")
    login_container.style.display = "block";
    document.querySelector(".disable_all").style.display = "block"

    document.querySelector("#account").style.display = "none"
}

function limitComment() {
    let input = document.querySelector("#comment_limit input[type=checkbox]")
    input.addEventListener("click", function() {
        let comments = document.querySelector(".comments")
        if(input.checked == true) {
            comments.style.overflow = "auto";
            document.querySelector("#comment_limit span").textContent = "Hide Away"
        }
        else {
            document.querySelector("#comment_limit span").textContent = "See All Comment"
            $(".comments").animate({ scrollTop: 0 }, "slow");
            comments.style.overflow = "hidden";   
        }
    })

    let input_ = document.getElementById("check_comment_yours");
    input_.addEventListener("click", function() {
        let comments = document.querySelector("#yours_comment")
        if(input_.checked == true) {
            let account = document.querySelector("#account")
            if(account.innerHTML == '<a><i class="fa-solid fa-user-plus"></i></a>') {
                pseudo();
                input_.checked = false;
            }
            else {
                comments.style.display = "flex";
                document.querySelector("#check_yours_comment_ span").textContent = "Cancel"
            }
        }
        else {
            document.querySelector("#check_yours_comment_ span").textContent = "Comment"
            comments.style.display = "none"; 
            document.querySelector("#yours_comment input").value = ""     
        }
    })
}

function createComment() {
    let button = document.querySelector("#yours_comment button");
    button.addEventListener("click", function() {
        if(document.querySelector("#yours_comment input").value == "") {
            document.querySelector("#yours_comment input").placeholder = "Enter Your Comment Here!!!"
            document.querySelector("#yours_comment input").classList.add("comment_input")

            setTimeout(() => {
                document.querySelector("#yours_comment input").placeholder = "Comment Here..."
                document.querySelector("#yours_comment input").classList.remove("comment_input")
            }, 2000)
        }
        else {
            setTimeout(() => {
                let comments = document.querySelector(".comments")
                let comment = ""
                let input = document.querySelector("#yours_comment input").value
    
                //read comment
                let json = JSON.parse(localStorage.account_logined)
                let user = json.user

                //save comment
                let positionAccount = json.order
                let userName = user
                if(localStorage.comments == undefined) {
                    let commentAccounts = [{order : positionAccount, comment : input, UserName : userName}]
                    localStorage.comments = JSON.stringify(commentAccounts)
                }
                else {
                    let comments = JSON.parse(localStorage.comments);
                    comments.push({order : positionAccount, comment : input, UserName : userName})
                    localStorage.comments = JSON.stringify(comments)    
                }
                
                let div_comment = document.createElement("div")
                div_comment.classList.add("comment")

                comment = `
                        <div class="comment_des">
                            <span>${input}</span>
                            <div class="comment_information"><span>@${user}</span></div>
                        </div>
                        <div class="comment_image">
                            <img src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p86x86&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=pYLa-lN8pc4AX8VAikU&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfC-TzMn9hnCEz7MufAy72HA7uJGMGKMXKpuZYkJco3JMg&oe=64F071B8">
                        </div>
                        <div class="comment_delete" title="Delete">
                                <button><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    `   

                div_comment.innerHTML = comment;

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
                        if(input == commentStore[k].comment && user == commentStore[k].UserName) {
                            commentStore.splice(k, 1);
                            localStorage.comments = JSON.stringify(commentStore);
                        }
                    }
                    comments.removeChild(div_comment)
                })
                

                comments.appendChild(div_comment);
                document.querySelector("#yours_comment input").value = ""     
                
                comments.style.overflow = "auto";
                document.querySelector("#comment_limit span").textContent = "Hide Away"
                document.querySelector("#comment_limit input[type=checkbox]").checked = true

                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                if(vw < 800) {
                    $(".comments").animate({ scrollTop: $(".comment").height() * ($(".comment").length - 1)}, "slow");  
                }
                else {
                    if(($(".comment").length % 2 == 0)) {
                        $(".comments").animate({ scrollTop: $(".comment").height() * ($(".comment").length / 2 + 1)}, "slow");
                    }
                    else {
                        $(".comments").animate({ scrollTop: $(".comment").height() * ($(".comment").length / 2)}, "slow");
                    }
                }
                
                setTimeout(() => {
                    button.textContent = "Sent"
                    button.classList.add("yours_comment_button_toggle")
                }, 500)
    
                setTimeout(() => {
                    button.textContent = "Send"
                    button.classList.remove("yours_comment_button_toggle")
                }, 1500)
            }, 1000)
        }
    })
}



window.onload = init()