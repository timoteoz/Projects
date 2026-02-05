const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset")
const pauseEl = document.getElementById("pause")
const sound = new Audio('radio.mp3')

let interval;
let timeLeft = 1500;

function updateTimer() {
   let minutes = Math.floor(timeLeft / 60);
   let seconds = timeLeft % 60;
   let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`;

   timerEl.innerHTML = formattedTime;
}

function startTimer() {
   interval = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
         clearInterval(interval);
         alert("Time's up!")
         timeLeft = 1500;
         updateTimer();
      }
   }, 1000);
}
function stopTimer() {
   clearInterval(interval);
}
function resetTimer() {
   clearInterval(interval);
   timeLeft = 1500;
   updateTimer();
}

startEl.addEventListener("click", () => {
    startTimer();
    sound.play();
});
resetEl.addEventListener("click" , () => {
  resetTimer();
  sound.play();  
});
pauseEl.addEventListener("click" , () => {
   stopTimer();
   sound.play();
})