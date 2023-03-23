const imgDehya = document.querySelector("#img-dehya")
const descDehya = document.querySelector("#desc-dehya")
const imgMika = document.querySelector("#img-mika")
const descMika = document.querySelector("#desc-mika")
imgDehya.addEventListener("mouseover", function() {
    // console.log(1)
    descDehya.style.display = "block"
    imgMika.style.opacity = "0"
})

imgDehya.addEventListener("mouseout", function() {
    // console.log(1)
    descDehya.style.display = "none"
    imgMika.style.opacity = "1"
})

imgMika.addEventListener("mouseover", function() {
    // console.log(1)
    descMika.style.display = "block"
    imgDehya.style.opacity = "0"
})

imgMika.addEventListener("mouseout", function() {
    // console.log(1)
    descMika.style.display = "none"
    imgDehya.style.opacity = "1"
})

