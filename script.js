const loadNum = document.querySelector(".loading-text")
const backGround = document.querySelector(".bg")

let load = 0
let int = setInterval(blurring, 20)

function blurring(){
    load++

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    if(load > 99){
        clearInterval(int)
    }
    loadNum.innerHTML = `${load}%`
    loadNum.style.opacity = scale(load, 0, 100, 1, 0)
    backGround.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  
}
