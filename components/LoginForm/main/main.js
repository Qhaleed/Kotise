var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');
var first = document.getElementById('firstUl');
var second = document.getElementById('secondUl');
window.onscroll = function (){
    scrollFuncntion()

}

function scrollFuncntion () {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        navbar.style.backgroundColor = "white";
        navbar.style.transition = "500ms";
        
    }
    else  {
        navbar.style.backgroundColor = "rgba(73, 70, 70, 0)";
    }
}



nextImage.addEventListener('click', function next () {
    
})

var faqButton = document.getElementById('faqButton');
var faqP = document.getElementById('faqP');

faqButton.addEventListener('click', function () {
    faqP.style.display = 'none';
})


