const container = document.querySelector(".bg")
const img = [
    "asset/AssetCharacters/individualBG1.png",
    "asset/AssetCharacters/individualBG2.jpeg"
]

var i = 0

setInterval(()=>{
    container.style.backgroundImage = "url(" + img[i%2] +")"
    console.log(i)
    i += 1
}, 5000)