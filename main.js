var navbar = document.getElementById('navbar');

window.onscroll = function (){
    scrollFuncntion()

}

function scrollFuncntion () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "rgb(19, 24, 63)";
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