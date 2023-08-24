function loadDataTabChild(){
    (async()=>{
        var json = await fetch("../data_json/img_tab-child.json") 
        json = await json.json()
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        h1.innerHTML = json[sessionStorage.number].name
        div.appendChild(h1)
        const divDes = document.querySelector('.des')
        divDes.prepend(div)
        //===================================
        const slideMainImg = document.querySelector('.main-img')
        const slideButtonImg = document.querySelector('.button-img')
        for(let j=0; j < json[sessionStorage.number].img.length; j++){
            const div = document.createElement("div")
            div.classList.add("item-img")
            const img = document.createElement("img")
            img.src = json[sessionStorage.number].img[j]
            div.appendChild(img)
            slideMainImg.appendChild(div)

            const div_button = document.createElement("div")
            div_button.classList.add('button-c')
            div_button.setAttribute("value", j)
            if(j == 0) div_button.classList.add('active-img')
            const img_button = document.createElement("img")
            img_button.src = json[sessionStorage.number].img[j]

            div_button.appendChild(img_button)
            slideButtonImg.appendChild(div_button)
        }
        //======== xu ly ==============
        const mainImg = document.querySelector(".main-img");
        const prev_c = document.querySelector(".prev-c");
        const next_c = document.querySelector(".next-c");
        //const itemImg = document.querySelectorAll(".item-img");
        //const widthItem = itemImg[0].offsetWidth;// độ dài của một item
        var buttonImg = document.querySelectorAll(".button-c")
        let index = 0;
        let postionX = 0;
        next_c.addEventListener('click', function(){
            handleChangeSlide(1);
        })
        prev_c.addEventListener('click', function(){
            
            handleChangeSlide(-1);
        })
        function handleChangeSlide(dir){
            const itemImg = document.querySelectorAll(".item-img");
            const widthItem = itemImg[0].offsetWidth;
            if(dir === 1){
                if(postionX === -(3*widthItem)) return 
                index++            
                postionX = postionX - widthItem
                clearActive_img()
                mainImg.style = `transform: translateX(${postionX}px)`
                addActive_img(index)
            }
            else if(dir === -1){
                if(postionX === 0) return 
                index--            
                postionX = postionX + widthItem
                clearActive_img()
                mainImg.style = `transform: translateX(${postionX}px)`
                addActive_img(index)
            }
        }
        function clearActive_img(){
            buttonImg.forEach(e =>{
                e.classList.remove("active-img")
            })
        }
        function addActive_img(index){
            buttonImg[index].classList.add("active-img")
        }
        $(".button-c").click(function() {
            const itemImg = document.querySelectorAll(".item-img");
            const widthItem = itemImg[0].offsetWidth;
            index = $(this).attr("value")
            postionX = index * (-widthItem)
            clearActive_img()
            mainImg.style = `transform: translateX(${postionX}px)`
            addActive_img(index)   
        })
        //==============
        
        //khi click vào thông tin sẽ show bảng thông tin ra
        $(".info").click(function(){
            $(".tab-ts").slideToggle();
            $(".i").toggleClass('show_info');
            var displayValue = $(".tab-tb").css("display");//lấy giá trị của thuộc tính display
            if(displayValue !== "none"){//nếu là none thì không hiện ra 
            $(".tab-tb").slideToggle(); 
            $(".e").toggleClass('show_info');
            }   
        })
        //khi click vào trang bị
        $(".equipment").click(function(){
            $(".tab-tb").slideToggle();
            $(".e").toggleClass('show_info');
            var displayValue = $(".tab-ts").css("display");//lấy giá trị của thuộc tính display
            if(displayValue !== "none"){//nếu là none thì không hiện ra 
            $(".tab-ts").slideToggle(); 
            $(".i").toggleClass('show_info');
            }   
            //hiệu ứng cuả nuts thông tin
        
    })
    })()
}
window.onload = loadDataTabChild();