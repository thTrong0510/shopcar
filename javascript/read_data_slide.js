function a(){
    var slide = document.querySelectorAll('#slide a')
    for(let i=0; i< slide.length; i++){
        slide[i].addEventListener('click', function(){
            sessionStorage.number = i
        })
    }   
} 

function loadDataSlide(){
    (async () => {
        var json = await fetch("../data_json/slider.json")
        json = await json.json()
        for(let i = 0; i < json.length; i++){
            const divYear = document.createElement("div")
            const divName = document.createElement("div")
            const divprice = document.createElement("div")
            const divCountry= document.createElement("div")
            const divSpeed = document.createElement("div")
            var sliderMain = document.getElementById('slide')
            const div_content = document.createElement("div")
            const img = document.createElement("img")
            const div = document.createElement("div")
            const a = document.createElement("a")

            
            divYear.classList.add("year")
            divYear.innerHTML = "2023"
            divName.classList.add("slide-name-car")
            divName.innerHTML = json[i].name_car
            divprice.classList.add("slide-price-car")
            divprice.innerHTML = json[i].price
            divCountry.classList.add("slide-name-country")
            divCountry.innerHTML = json[i].name_country
            divSpeed.classList.add("speed")
            divSpeed.innerHTML = "max speed: 200km/h"

            div_content.classList.add('slide-content')
            div_content.appendChild(divYear)
            div_content.appendChild(divName)
            div_content.appendChild(divprice)
            div_content.appendChild(divCountry)
            div_content.appendChild(divSpeed)

            img.src = json[i].img

            img.classList.add('img')
            
            div.classList.add('item')
            div.value = "1"

            a.href = "tab_child.html"

            
            div.appendChild(img)
            div.appendChild(div_content)
            a.appendChild(div)
            sliderMain.appendChild(a)
        }
        a();
    })()
}
window.onload = loadDataSlide();    