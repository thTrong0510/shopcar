
//hiệu ứng khi hover menu con
$(document).ready(function(){
  $('#phone').hover(function(){
    $('#child_phone').toggle(200,);
    })
// gán menu khi click vào phần tử
    const toggle = document.getElementById('toggle'),
          nav = document.getElementById('main')
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('show-icon')
      nav.classList.toggle('show-menu')
    })
    // Lấy phần tử từ DOM
var childMenu = document.querySelector('#child_menu');
var hover = document.querySelector('#hover');
var hover1 = document.querySelector('#hover1');
var searchButtom = document.querySelector('#search-buttom');
var searchForm =  document.querySelector('#search');
var searchInput =  document.querySelector('#search-box');

// Biến để xác định xem phần tử có đang hiển thị hay không
var isMenuVisible = false;//menu
var isSearchVisible = false;//search
// Xử lý sự kiện click
document.onclick = function(event) {
  var target = event.target;
  var listSearch = document.querySelectorAll(".list-search li"); 
  for(let i = 0; i<listSearch.length; i++){
    return;
  }
  //kiểm tra khi click vào search
  if(target === searchInput) return//nếu click vào input search thì thanh tìm kiếm sẽ không ẩn
  else{
    if(target === searchButtom){
      if(isSearchVisible){
        searchForm.classList.toggle('show-search');
        isSearchVisible = false;
      }
      else{
        searchForm.classList.toggle('show-search');
        isSearchVisible = true;
      }
    }
    else{
      if(isSearchVisible){
        searchForm.classList.remove('show-search');
        isSearchVisible = false;
      }
  }
  }
  // Kiểm tra nếu click vào button toggle
  if (target === hover || target === hover1) {
    // Nếu menu đang hiển thị thì ẩn đi, ngược lại thì hiển thị
    if (isMenuVisible) {
      childMenu.classList.toggle('active');
      isMenuVisible = false;
    } else {
      childMenu.classList.toggle('active');
      isMenuVisible = true;
    }
  } else {
    // Nếu click vào chỗ khác không liên quan đến menu và button toggle, ẩn menu đi (nếu đang hiển thị)
    if (isMenuVisible) {
      childMenu.classList.toggle('active');
      isMenuVisible = false;
    }
  }
};
//xử lý button của slider
  $("#prev").click(function(){
    const widthItem = document.querySelector(".item").offsetWidth;// lấy độ dài của một item
    document.getElementById('formLide').scrollLeft -= widthItem;// kéo về trái một khoản widthItem
  })
  $("#next").click(function(){
    const widthItem = document.querySelector(".item").offsetWidth;// lấy độ dài của một item
    document.getElementById('formLide').scrollLeft += widthItem;// kéo về trái một khoản widthItem
  })
  let temp
    var slide = document.querySelectorAll('#slide a')
    for(let i=0; i< slide.lenght; i++){
       slide[i].addEventListener('click', function(){
       temp = i
       alert(temp)
       })
    }
})

  