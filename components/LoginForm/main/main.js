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

var nextImage = document.getElementById('next-image');

nextImage.addEventListener('click', function next () {
    
})

var arrayOfContents = [
    
]