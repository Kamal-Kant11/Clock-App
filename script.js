setInterval(()=>{
    let d = new Date()
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    let h = document.querySelector("#hr"); 
    let m = document.querySelector("#min");
    let s = document.querySelector("#sec");

    hrsRot = 30*hrs + mins/2;
    minsRot = 6*mins;
    secsRot = 6*secs;

    document.querySelector(".hhand").style.transform = `rotate(${hrsRot}deg)`;
    document.querySelector(".mhand").style.transform = `rotate(${minsRot}deg)`;
    document.querySelector(".shand").style.transform = `rotate(${secsRot}deg)`;

    h.innerHTML = hrs <10 ? `0${hrs}` : hrs;
    m.innerHTML = mins <10 ? `0${mins}` : mins;
    s.innerHTML = secs <10 ? `0${secs}` : secs;
},1000)


