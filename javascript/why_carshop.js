function init(){
   let icons = document.querySelectorAll(".icon-plus")
   let square = document.querySelectorAll(".square")
   let square_div = document.querySelectorAll(".square .square-des")
   let des = [
    "Not only is there no negotiation, we do not pay our salespeople based on the profit made.",
    "No negotiations! We post our lowest price on the window of every car, along with the Kelley.",
    "Buying from CarShop is not like dealing with anyone else. We believe in maximizing.",
    "You don’t have to just take our word for the quality of our cars. We offer you a free CARFAX.",
    "CarShop Certified vehicles are hard to tell from new. We start with the best used cars.",
    "From coupes to SUVs, Chevrolet to Subaru — we have virtually every make and model in stock."
   ]
   let des_origin = [
    "Our people aren’t paid based on the profit made.",
    "We post our lowest price on the window of every car.",
    `<div class="title-bar">
    <div class="filler"></div>
    <div style="display:flex; justify-content:space-between">
        <div>Facebook</div>
        <div>4.7<i class="fa-solid fa-star" style="font-size: 10px; color:#f4cd00"></i></div>
    </div>
</div>
<div class="title-bar">
    <div class="filler"></div>
    <div style="display:flex; justify-content:space-between">
        <div>Google</div>
        <div>4.7<i class="fa-solid fa-star" style="font-size: 10px; color:#f4cd00"></i></div>
    </div>
</div>
<div class="title-bar">
    <div class="filler"></div>
    <div style="display:flex; justify-content:space-between">
        <div>DealerRater</div>
        <div>4.7<i class="fa-solid fa-star" style="font-size: 10px; color:#f4cd00"></i></div>
    </div>
</div>`,
    "We offer a free CARFAX with each vehicle.",
    "We pick the best cars and make them better.",
    "Virtually every make and model in stock."
   ]
   for(let i = 0 ;i< icons.length; i++){
    let isIcon = false;
    icons[i].addEventListener('click', function(){
        icons[i].classList.toggle("handle-icon")
        if(isIcon == false){
            square[i].classList.add("show-des")
            square_div[i].innerHTML = des[i]
            isIcon = true;
        }
        else{
            square[i].classList.remove("show-des")
            square_div[i].innerHTML = des_origin[i]
            isIcon = false;
        }
    })
   }
}

window.onload = init();