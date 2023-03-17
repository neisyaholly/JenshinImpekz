const arrowL = document.getElementById('arrowL')
const imgSS = document.getElementById('imgSS')
const arrowR = document.getElementById('arrowR')

let imgSS_Arr = [
    'asset/AssetAboutGame/content-ss1.png',
    'asset/AssetAboutGame/content-ss2.png',
    'asset/AssetAboutGame/content-ss3.png',
    'asset/AssetAboutGame/content-ss4.png',
    'asset/AssetAboutGame/content-ss5.png'
]

console.log(imgSS_Arr[0])

imgSS.style.backgroundImage = 'url(' + imgSS_Arr[0]  +')'

// imgSS.src = 'url(' + imgSS_Arr[0]  +')'

let position = 0;

const arrowMoveToRight = ()=>{
    if(position >= imgSS_Arr.length-1){
        position = 0;
        imgSS.style.backgroundImage = 'url(' + imgSS_Arr[position]  +')'
    }
    imgSS.style.backgroundImage = 'url(' + imgSS_Arr[position+1]  +')'
    position++
}

const arrowMoveToLeft = ()=>{
    if(position < 1){
        position = imgSS_Arr.length-1;
        imgSS.style.backgroundImage = 'url(' + imgSS_Arr[position]  +')'
    }
    imgSS.style.backgroundImage = 'url(' + imgSS_Arr[position-1]  +')'
    position--
}

arrowL.addEventListener("click", arrowMoveToLeft)
arrowR.addEventListener("click", arrowMoveToRight)
