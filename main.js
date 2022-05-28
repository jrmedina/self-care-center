var submitButton = document.querySelector("button")
var affirmation = document.querySelector("#affirmation")
var mantra = document.querySelector("#mantra")
var bell = document.querySelector("#bell-image")
var textbox = document.querySelector(".text-box")
var deleteButton = document.querySelector("#delete")
var image = document.querySelector(".image")
// E V E N T S //
submitButton.addEventListener('click', getInput)
deleteButton.addEventListener('click', clearBox)


function getInput() {
  if (affirmation.checked === true) {
    randomizeAffirmations()
  } else if (mantra.checked === true) {
    randomizeMantras()
  } else {
    alert(`Make a selection!`)
  }
}

  function clearBox() {
  var toBeDeleted = textbox.innerText
  alert(`"${toBeDeleted}" has been cleared! Please make another selection.`)
  textbox.innerText = ``
  bell.classList.remove('hidden')
  textbox.classList.add('hidden')
  deleteButton.classList.add('hidden')
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
  bell.classList.add('hidden')
  textbox.classList.remove('hidden')
  deleteButton.classList.remove('hidden')
}
