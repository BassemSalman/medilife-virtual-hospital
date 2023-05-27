var slides = document.querySelectorAll('.slide')
let currentSlide = 1
let active = document.getElementsByClassName('current')
var i = 1

const repeat = () => {
    [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('current')
    })
    slides[i].classList.add('current')
    i = (i + 1) % slides.length
}

setInterval(repeat, 3000)