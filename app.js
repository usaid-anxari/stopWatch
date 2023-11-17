let timeDisplay = document.getElementById("timeDisplay");
let [seconds,minutes,hours] = [0,0,0]
let timer = null

let displayWatch = ()=>{
    seconds++;
    if (seconds === 60) {
        seconds = 0 
        minutes++
    }
    if (minutes === 60) {
        minutes=0
        hours++
    }
    let h = hours < 10 ? '0' + hours : hours 
    let m = minutes < 10 ? '0' + minutes : minutes 
    let s = seconds < 10 ? '0' +seconds :seconds
    timeDisplay.innerHTML = h +":"+ m +":"+ s;
}


let startWatch = ()=>{
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(displayWatch,1000)
}

let stopWatch =()=>{
    clearInterval(timer)
}

let  resetWatch =()=>{
    clearInterval(timer)
    seconds = 0
    minutes = 0
    hours = 0
    timeDisplay.innerHTML = "00:00:00"
}