var navbar = document.getElementById('navbar');

window.onscroll = function (){
    scrollFuncntion()

}

function scrollFuncntion () {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        navbar.style.backgroundColor = "rgba(71, 50, 70, 0.364)";
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
    faqP.style.display = 'block';
})