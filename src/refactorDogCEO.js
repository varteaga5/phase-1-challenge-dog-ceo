function init() {
    fetchDogs()
    fetchBreeds()
    attachColorChangeListener()
    addChangeListener()
}
function attachColorChangeListener() {
    // **** challenge 3 ****
    // store ul in a variable
    const breedUl = document.querySelector('ul');
    // user clicks li
    breedUl.addEventListener('click', turnRed);
}
// font color changes to red
function turnRed(e) {
    e.target.style.color = 'red';
}
// **** challenge 1 ****

function fetchDogs() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => renderImages(data.message));
}

function renderImages(dogUrls) {
    const dogDiv = document.querySelector('#dog-image-container');
    dogUrls.forEach((dogUrl) => {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', dogUrl),
            dogDiv.appendChild(newImg);
    });
}
// **** challenge 2 ****
// global object breed that holds the breeds so it dont have to be re-fetched.
let breeds = {}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(resp => resp.json())
        .then((data) => {
            renderBreeds(data.message)
            breeds = data.message
        });
}

function renderBreeds(breeds) {
    const dogUl = document.querySelector('#dog-breeds');
    console.log(breeds)
    dogUl.innerHTML = "";
    for (const breed in breeds) {
        const newLi = document.createElement('li');
        newLi.innerHTML = breed;
        dogUl.appendChild(newLi);
    };
}

function renderFilteredBreeds(letter) {
    const dogUl = document.querySelector('#dog-breeds');
    dogUl.innerHTML = ""
    for (const breed in breeds) {
        if (breed[0] === letter) {
            const newLi = document.createElement('li');
            newLi.innerHTML = breed;
            dogUl.appendChild(newLi);
        };
    }
}

// **** challenge 4 ****
function addChangeListener() {
    const selectElement = document.querySelector('#breed-dropdown');
    selectElement.addEventListener('change', breedLetters)
}
function breedLetters(e) {
    if (!e.target.value) {
        renderBreeds(breeds)
    } else {
        renderFilteredBreeds(e.target.value);
    }
}

document.addEventListener('DOMContentLoaded', init);