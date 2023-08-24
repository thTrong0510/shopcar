function dealingCheckBox() {
    let divs = document.querySelectorAll(" li > label > div")
    let lis = document.querySelectorAll("li")
    for(let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            let checkboxs = document.querySelectorAll("input[type='checkbox']")
            if(checkboxs[i].checked)
                lis[i].style.outline = "1px solid black";
            else
                lis[i].style.outline = "none";

            let number = 0;
            for(let i = 0; i < checkboxs.length; i++) {
                if(checkboxs[i].checked)
                    number++;
            }
            if(number == 3) {
                for(let i = 0; i < checkboxs.length; i++) {
                    if(!checkboxs[i].checked)
                        checkboxs[i].disabled = true;
                }
            }
            else {
                for(let i = 0; i < checkboxs.length; i++) {
                    if(!checkboxs[i].checked)
                        checkboxs[i].disabled = false;
                }
            }

        })
    }
}
dealingCheckBox();
chosen();
nextButton();

function nextButton() 
{
    let container = document.querySelector(".container")
    let nextButton = document.querySelector(".negative > div > div:not(:first-child) > button")
    nextButton.addEventListener("click", function() {
        let checkboxs = document.querySelectorAll("input[type='checkbox']")
        let number = 0;
        for(let i = 0; i < checkboxs.length; i++) {
            if(checkboxs[i].checked)
                number++;
        }
        if(number == 3) {
            container.removeChild(document.querySelector("ul"))
            let div = document.createElement("div")
            div.classList.add("car_examples")

            let nameCars = ["Bugatti Bolide", "Bugatti Chiron", "Hybrid", "Farnova"]

            for(let i = 0; i < 4; i++) {

                let a = document.createElement("a");
                a.href = "tab_child.html";
                a.target = "_SELF";

                let div_img = document.createElement("div")
                div_img.classList.add("car_example")
                let img = document.createElement("img")
                img.src = `./image/img${i+1}.jpg`
    
                let h2 = document.createElement("h2")
                h2.textContent = nameCars[i];
    
                a.append(img, h2)
                div_img.appendChild(a)
                div.appendChild(div_img)
    
                container.appendChild(div)
            }
            $(".container").height(1000);
            container.classList.remove("reponse")
            container.classList.add("reponse_ex")

            document.querySelector(".negative > div > div:not(:first-child)").style.display = "none";
            let as = document.querySelectorAll(".car_example a")
                for(let i=0; i< as.length; i++){
                    as[i].addEventListener('click', function(){
                        sessionStorage.number = i
                    })
                }   
        }
    })


}

function chosen() 
{
    let container = document.querySelector(".container")

    let backButton = document.querySelector(".negative > div").children[0].children[0];

    
    backButton.addEventListener("click", function() {
        console.log(backButton)
        let ul = document.querySelector("ul")
        if(ul == null) {
            document.querySelector(".negative > div > div:not(:first-child)").style.display = "block";
            container.removeChild(document.querySelector(".car_examples"))
            container.innerHTML += 
                `
                <ul>
                    <li>
                        <label for="checkbox1">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox1">
                                    <span>Good gas mileage</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox2">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox2">
                                    <span>Interior cargo space</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox3">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox3">
                                    <span>Performance and handling</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox4">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox4">
                                    <span>Features and accessories</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox5">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox5">
                                    <span>Interior style</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox6">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox6">
                                    <span>Passenger space</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox7">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox7">
                                    <span>Affordability</span>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label for="checkbox8">
                            <div>
                                <div>
                                    <input type="checkbox" id="checkbox8">
                                    <span>Driving in Snow</span>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>

                `
            dealingCheckBox();  
        }
        else
            window.location.href = "bai_tap_lon.html";  
    })
}