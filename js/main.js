













const navEl =document.querySelector('.navbar')

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 800){
        navEl.classList.add('nabar-scroled')
    }else if (window.scrollY <800){
        navEl.classList.remove('nabar-scroled')
    }
})