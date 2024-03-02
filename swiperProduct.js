async function getProduct(){
const response = await fetch('https://dummyjson.com/products', {method:'GET'})
const data = await response.json()
console.log(data)
const products = data.products
console.log(products)
let result = products.map(function  (ele){
    return ` <div class="swiper-slide">
        <img src="${ele.thumbnail}"/>
    </div>`
}).join("")

// document.querySelectorAll('.swiper-wrapper').innerHtml = result;  
document.querySelector('.swiper-wrapper').innerHTML= result;

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:4 , 
    // spaceBetween: 20 , 
    autoplay: true,
    // speed: 10,
    // effect:  cube   ,
//     effect: 'fade',
//   fadeEffect: {
//     crossFade: true
//   }, 
// slideToClickedSlide: true,

// scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },

clickable: true,
effect: 'flip',
flipEffect: {
  slideShadows: false,
},


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


}


getProduct()