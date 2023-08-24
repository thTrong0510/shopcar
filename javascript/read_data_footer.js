function loadDataFooter() {
    (async () => {

        //doc du lieu len 
        var json = await fetch("../data_json/footer.json") 
        json = await json.json()
    
        //details
        var container__details = document.getElementById('container__details')
        for(let i = 0; i < json.length - 3; i++) {
            let list = json[i].list

            const div = document.createElement("div")
            div.classList.add('footer_col')

            const h3 = document.createElement("h3")
            h3.classList.add('title')
            h3.innerHTML += json[i].title

            div.appendChild(h3)

            const ul = document.createElement("ul")
            ul.classList.add('list')

            div.appendChild(ul)

            for(let j = 0; j < list.length; j++) {
                const li = document.createElement("li");

                const a = document.createElement("a");
                // a.href = "#";
                a.innerHTML = list[j];

                li.appendChild(a);

                ul.appendChild(li);
            }
            container__details.appendChild(div);
        }

        //icons footer
        let footer_icons_part = document.querySelector(".footer_icons")
        let footer_icons = json[json.length - 2]
        for(let n = 0; n < footer_icons.footer_social_icon_href.length; n++) {
            let div = document.createElement("div")
            div.setAttribute("class", "footer_social-icon")
            let a = document.createElement("a")
            if( n < 3 )
                a.href = footer_icons.footer_social_icon_href[n]
            a.target = "_blank"
            let i = document.createElement("i")
            i.setAttribute("class", footer_icons.footer_social_icon_icon[n])
            a.appendChild(i)
            div.appendChild(a)
            footer_icons_part.appendChild(div)
        }

        //apps footer
        let footer_apps_part = document.querySelector(".footer_apps")
        let footer_apps = json[json.length - 1]
        for(let h = 0; h < footer_apps.footer_apps_href.length; h++) {
            let div = document.createElement('div')
            div.classList.add("footer_app")
            let a = document.createElement('a')
            if(footer_apps.footer_apps_href[h] != "")
                a.href = footer_apps.footer_apps_href[h]
            let img = document.createElement("img")
            img.src = footer_apps.footer_apps_src[h]
            img.alt = footer_apps.footer_apps_alt[h]
            a.appendChild(img)
            let span = document.createElement("span")
            span.textContent = footer_apps.footer_apps_name[h]
            div.append(a, span)
            footer_apps_part.appendChild(div)
        }


    })()
}

window.onload = loadDataFooter()