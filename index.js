gsap.from(".heading", {y: 100, opacity: 0, scale: 1.5, duration: 1.5})
gsap.from(".image", {duration: 2,delay: 0.5, rotate: 360, x:300, opacity: 0})
gsap.from(".input",{y: 50, opacity: 0, scale: 1.5, duration: 1, delay: 0.8, stagger: 0.4})
gsap.from("#timeDisplay",{y: 50, opacity: 0, scale: 1.5, duration: 1, delay: 1.5})
gsap.from("#btn",{y: 50, opacity: 0, scale: 1.5, duration: 1, delay: 1.8})

const button = document.querySelector('#btn');
button.addEventListener('click', function(){
    timerFunc();
})
function timerFunc(){
    let input = Number(document.querySelector('#minutes').value) * 60;
    let inputSec = Number(document.querySelector('#seconds').value);
    let amountTime = input + inputSec;

    function countDownFunc(){
        const timeDisplay = document.querySelector('#timeDisplay');
        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        amountTime --;
        timeDisplay.textContent = `${minutes} : ${seconds}`;

        if (amountTime < 0){
            clearInterval(timerId);
        }

        const buttonStop = document.querySelector('#btnStop')
        buttonStop.addEventListener('click', function() {
            stopMusic();
        })
        const audio = document.querySelector('#audio');
        if (amountTime <= 0){
            audio.play();
            gsap.from(".image", {duration: 2, repeat: -1, rotation: 720})
            buttonStop.style.display = "block";
        }
        function stopMusic(){
            audio.pause();
            gsap.from(".image", { rotation: 0, repeat: -1,})
            buttonStop.style.display = "none";
        }
        
    }
    let timerId = setInterval(countDownFunc, 1000);
}



