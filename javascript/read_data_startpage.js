function loadDataStartPage() {
    (  async () => {
        var json = await fetch("../data_json/start_page.json") 
        json = await json.json()

        var figure_head_slide = document.getElementById("figure-head_slide");

        for(let j = 0; j < json[0].image_car_start_page.length; j++) {

            var div = document.createElement("div")
            div.setAttribute("class", "figure-head_item")
            div.setAttribute("style", `background-image: url(${json[0].image_car_start_page[j]})`)

            var divChild = document.createElement("div")
            divChild.setAttribute("class", "figure-head_content")

            var divChild_ = document.createElement("div")
            divChild_.setAttribute("class", "figure-head_name")
            divChild_.textContent = `${json[1].name_car_start_page[j]}`

            divChild.appendChild(divChild_)
            div.appendChild(divChild)

            figure_head_slide.appendChild(div)
        }
    }
    )()
}

window.onload = loadDataStartPage()