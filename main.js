const myIds = (idname)=>{
    return document.querySelector(idname);
}
const hour = myIds('#hr'),
    minutes = myIds('#min'),
    seconds = myIds('#sec'),
    deg = 6;

function myClock(){
    let day = new Date();
    let hr = day.getHours() * 30; //30 is for rotation
    let min = day.getMinutes() *deg; //deg for rotation too
    let sec = day.getSeconds()* deg; //like 3secs * 6 = 18deg thus dynamic rotaion according to seconds

    hour.style.transform = `rotateZ(${hr+(min/12)}deg)`;
    minutes.style.transform = `rotateZ(${min}deg)`;
    seconds.style.transform = `rotateZ(${sec}deg)`;
}
setInterval(myClock);//automatically adjusts to rotation of theclock
