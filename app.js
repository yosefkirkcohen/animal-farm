// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const catPhoto = document.getElementById('cat-photo')
const catSound = document.getElementById('cat-sound')


catPhoto.addEventListener('click', () => {
        catSound.play()
})

const dogPhoto = document.getElementById('dog-photo')
const dogSound = document.getElementById('dog-sound')


dogPhoto.addEventListener('click', () => {
        dogSound.play()
})

const horsePhoto = document.getElementById('horse-photo')
const horseSound = document.getElementById('horse-sound')


horsePhoto.addEventListener('click', () => {
        horseSound.play()
})