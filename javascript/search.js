let names = [
    "Bugatti Bolide",
    "Bugatti Chiron",
    "Hybrid",
    "Farnova Othello",
    "Mercedes-Benz AMG GT",
    "Ferrari SF90 XX"
];

document.querySelector(".search-form > div > a").addEventListener("click", () => {
    document.querySelector(".search-form").style.transform =  "scaleY(0)";
})

let sortedName = names.sort();//sap xep thep thu tu chu 
let inputSearch = document.getElementById("search-box");

inputSearch.addEventListener("keyup", (e) => {
    let flag = false
    //xóa các gợi ý trước đó khi value input thây đổi 
    reomoveElement();
    //duyệt qua các phần tử của sortedName 
    for(let i of sortedName){
        // chuyển i thành chữ thường, kiểm tra input có trong i không
        if((i.toLowerCase().startsWith(inputSearch.value.toLowerCase())) && inputSearch.value != ""){
            flag = true
            let li = document.createElement("li")
            li.classList.add("list-item-li")
            li.style.cursor = "pointer"
            //khi click vào li thì hàm displayName sẽ chạy
            li.setAttribute("onclick", "displayName(`" + i + "`)")
            let work = "<b>"+ i.substr(0,inputSearch.value.length) +"</b>"//Nội dung trong input sẽ được in đậm
            work += i.substr(inputSearch.value.length)
            li.innerHTML = work;
            document.querySelector(".list-search").appendChild(li)
        }
    }
    if(flag == false && inputSearch.value != ""){
        let li = document.createElement("li")
        li.classList.add("list-item-li")
        li.style.cursor = "pointer"
        li.innerHTML = "No results for " + "<i>" + inputSearch.value + "</i>";
        document.querySelector(".list-search").appendChild(li)
    }
})
function displayName(value){  
    inputSearch.value = value;
}
function reomoveElement(){
    let itemLi = document.querySelectorAll(".list-item-li")
    itemLi.forEach((li)=>{
        li.remove();
    })
}