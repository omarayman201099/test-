let header = document.querySelector(".one")
let div = document.querySelector(".two")


window.onscroll = function (){
    if (window.scrollY >= div.offsetTop){
        console.log("hello");
        div.forEacg((div) => {
            div.classList.add("active")
            div.style.width = div.dataset.width;
        })
    }
}