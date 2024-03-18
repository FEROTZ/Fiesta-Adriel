const playButton = document.getElementById("player-action")

const songPlayer = document.getElementById("song-player")

songPlayer.volume = 0.08;

let played = playButton.addEventListener("click", () => {
  songPlayer.paused ? songPlayer.play() : songPlayer.pause();
})

// window.onload = function() {
//   console.log("entró")
//   played()
// }