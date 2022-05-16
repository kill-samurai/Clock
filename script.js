console.log("This is connected")


window.setInterval(clock, 1000)

function clock (){
    const d = new Date()
    hours = d.getHours()
    minutes = d.getMinutes()
    seconds = d.getSeconds()
    if (hours < 10){
        document.getElementById("hours").innerHTML = "0" + hours
    } else{
        document.getElementById("hours").innerHTML = hours}
    
    if (minutes < 10) {
        document.getElementById("minutes").innerHTML ="0" + minutes
    } 
        else{document.getElementById("minutes").innerHTML = minutes}
    
        if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds
    }    else{
        document.getElementById("seconds").innerHTML = seconds
    }
}

