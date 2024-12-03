let btn = document.querySelector('button')
let vid = document.querySelector("#video")
let video = document.querySelector("video")
let loader = document.querySelector('#loader')
let ending = document.querySelector("#ending-page")
btn.addEventListener('click',()=>{
    loader.style.zIndex = 1;
    loader.style.opacity = 1;
    btn.style.opacity = 0;
    setTimeout(()=>{
        vid.style.zIndex = 1;
        vid.style.opacity  = 1;
        video.play();
    },3000)
    setTimeout(()=>{
        ending.style.zIndex = 1;
        ending.style.opacity = 1;
    },11000)

})