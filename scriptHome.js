// const moreInfoMapsMondstadt = document.querySelector("#maps-mondstadt")
// const moreInfoMapsMondstadtDetail = document.querySelector("#more-info-mondstadt")
// const exitInfoButtonMondstadt = document.querySelector("#exit-info-mondstadt")

// moreInfoMapsMondstadt.addEventListener("click", function() {
//     // console.log(moreInfoMapsMondstadtDetail)
//     moreInfoMapsMondstadtDetail.style.display = "block"
// })

// exitInfoButtonMondstadt.addEventListener("click", function() {
//     moreInfoMapsMondstadtDetail.style.display = "none"
// })

const dehya = document.getElementById("deh")
const descDehya = document.querySelector("#desc-deh")
const mika = document.querySelector("#mik")
dehya.addEventListener("mouseover", function() {
    console.log(1)
    descDehya.style.display = "block"
    mika.style.display = "none"
})

