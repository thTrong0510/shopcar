function autoMoveSlide() {
    setInterval(() => {
        let lists = document.querySelectorAll('.figure-head_item');
        document.getElementById('figure-head_slide').prepend(lists[lists.length - 1]);  
    }, 5000)
}

function init() {
    autoMoveSlide()
}

window.onload = init()