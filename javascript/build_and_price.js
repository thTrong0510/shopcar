
function init(){
   loadData();
   loadId();
}
function handle(){
   $(".list_build_and_price > div > div > a").click(function(event){
      event.preventDefault();//hàm thuần js không thể sử dụng $(this)
      $(".right div").removeClass("show")
      $(" " + $(this).attr("href") + " ").addClass("show")
     })
}
function handleBefore(){
   $(".list_build_and_price > div > div").click(function(){
      $(".list_build_and_price > div > div").removeClass("show_before")
      $(this).addClass("show_before")
   })
}

function loadId(){
   (async ()=>{
      var json = await fetch("../data_json/name_car_build_and_price.json")
      json = await json.json()
      const divList = document.querySelector('.list_build_and_price')
      for(let i = 0;i <json.id.length; i++){
         const div = document.createElement("div")
         const a = document.createElement("a")
         a.innerHTML = json.des[i]
         a.href = json.id[i]
         const divChild = document.createElement("div")
         if(i == 0) divChild.classList.add("show_before")
         divChild.appendChild(a)
         div.appendChild(divChild)
         divList.appendChild(div)
      }
      handleBefore();
      handle();      
   })()  
}

function loadData(){
   (async ()=>{
      var json = await fetch("../data_json/build_and_price.json")
      json = await json.json()
      for(let i = 0; i<json.length; i++){
         const divRight = document.querySelector(".right")
         const divId = document.createElement("div")

         
         divId.classList.add("active_build_price")
         const div = document.createElement("div")

         div.setAttribute("id",`${json[i].id}`)
         if(i == 0) div.classList.add("show")
         div.appendChild(divId)
         divRight.appendChild(div)
         for(let j = 0; j< json[i].name.length; j++){

            const divItem = document.createElement("div")
            divItem.classList.add("item_build_and_price")

            const img = document.createElement("img")
            img.src = "../img_build_price/img0_1.jpg"

            const divContent = document.createElement("div")
            divContent.classList.add("content_build_price")

            const divName = document.createElement("div")
            divName.classList.add("name_car_build_price")
            divName.innerHTML = json[i].name[j] 
            
            const divDes = document.createElement("div")
            divDes.classList.add("des_build_and_price")
            divDes.innerHTML = json[i].price[j]

            divContent.appendChild(divName)
            divContent.appendChild(divDes)

            const div = document.createElement("div")
            div.appendChild(img)
            div.appendChild(divContent)
            divItem.appendChild(div)
            divId.appendChild(divItem)
         }
      
      }

   })()
}
window.onload = init();