// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const animalName = document.getElementById("animal-name")

const catPhoto = document.getElementById('cat-photo')
const catSound = document.getElementById('cat-sound')


catPhoto.addEventListener('click', () => {
        catSound.play();
        animalName.textContent = "cat";
})

const dogPhoto = document.getElementById('dog-photo')
const dogSound = document.getElementById('dog-sound')


dogPhoto.addEventListener('click', () => {
        dogSound.play()
        animalName.textContent = "dog";
})

const horsePhoto = document.getElementById('horse-photo')
const horseSound = document.getElementById('horse-sound')


horsePhoto.addEventListener('click', () => {
        horseSound.play()
        animalName.textContent = "horse";
})



