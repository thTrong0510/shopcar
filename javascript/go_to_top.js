let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    scrollProgress.style.opacity = 1;
    let pos = document.documentElement.scrollTop; // lay do dai da keo tu vi tri bottom 
    let calcHeight =
    document.documentElement.scrollHeight - // chieu cao thuc te cua HTML 
    document.documentElement.clientHeight; // chieu cao fix cua view port 
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        document.querySelector("header").style.position = "fixed"
        document.querySelector("header").style.right = "0"
        document.querySelector("header").style.left = "0"
        document.getElementById("account").style.bottom = "7rem";
        scrollProgress.style.display = "block";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        $("html, body").stop().animate({ scrollTop: 0 }, "slow");
    });
    if(pos == 0) {
        document.getElementById("account").style.bottom = "2rem";
    }
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    //%blue se chiem truoc -> %xam = hoac < %blue de no chiem phan con lai <-> lon hon -> nhoe mau

    
};
window.onscroll = calcScrollValue;