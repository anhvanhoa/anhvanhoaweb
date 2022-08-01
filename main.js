
// ẩn hiện input search

var box_search = document.querySelector('.box-search')
var search = document.querySelector('.search')

search.onclick = () => {
    box_search.classList.toggle('move-search')
}

// Thư viên slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Btn profile

var btn_profile = document.querySelector('.btn-profile')
var item_profile = document.querySelector('.item-profile')
var close_overlay = document.querySelector('.fa-xmark')
var overlay = document.querySelector('.overlay')

btn_profile.onclick = () => {
  item_profile.classList.add('item-profile-move')
}

function closeProfile() {
  item_profile.classList.remove('item-profile-move')
}

close_overlay.onclick = closeProfile

overlay.onclick = closeProfile
