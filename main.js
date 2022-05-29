var submitButton = document.querySelector(".submit")
var affirmationRadio = document.querySelector("#affirmation")
var mantraRadio = document.querySelector("#mantra")
var bellImage = document.querySelector("#bell-image")
var textbox = document.querySelector(".text-box")
var clearButton = document.querySelector("#clear")
var audio = document.querySelector("#audio")
var playButton = document.querySelector("#play")
var stopButton = document.querySelector("#stop")
var audioCount = 0

// Event Listeners //
submitButton.addEventListener('click', getInput)
clearButton.addEventListener('click', clearBox)
playButton.addEventListener('click', playAudio)

function playAudio() {
  if(audioCount === 0){
    audioCount = 1
    audio.play()
    playButton.innerHTML = "| | pause"
  } else {
    audioCount = 0
    audio.pause()
    playButton.innerHTML = "&#9658 play"
  }
}

function getInput() {
  if (affirmationRadio.checked === true) {
    randomizeAffirmations()
  } else if (mantraRadio.checked === true) {
    randomizeMantras()
  } else {
    alert(`Hmmm.... 
    Don't you want to make a selection?`)
  }
}

  function clearBox() {
  var toBeCleared = textbox.innerText
  alert(`"${toBeCleared}" has been cleared! Please make another selection.`)
  textbox.innerText = ``
  bellImage.classList.remove('hidden')
  textbox.classList.add('hidden')
  clearButton.classList.add('hidden')
}

function randomizeAffirmations() {
  var singleAff = affirmations[Math.floor(Math.random() * affirmations.length)];
  showBox()
  textbox.innerText = singleAff
  }

function randomizeMantras() {
  var singleMan = mantras[Math.floor(Math.random() * mantras.length)];
  showBox()
  textbox.innerText = singleMan
}

function showBox() {
  bellImage.classList.add('hidden')
  textbox.classList.remove('hidden')
  clearButton.classList.remove('hidden')
}
