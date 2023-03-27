const container = document.querySelector(".container-page")
const img = [
    "asset/AssetCharacters/individualBG1.jpg",
    "asset/AssetCharacters/individualBG2.jpg"
]

var i = 0

setInterval(()=>{
    container.style.backgroundImage = "url(" + img[i%2] +")"
    console.log(i)
    i += 1
}, 5000)