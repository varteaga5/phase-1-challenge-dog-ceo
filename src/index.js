function init(){
    dogCEO()
}

function dogCEO(){
    // **** challenge 1 ****
    const imgUrl1 = "https://dog.ceo/api/breeds/image/random/4" 
    fetch(imgUrl1)
    .then(resp => resp.json())
    .then(data => displayDogs(data));
    function displayDogs(obj) {
        const dogDiv = document.querySelector('#dog-image-container');
        obj.message.forEach((dogUrl) => {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', dogUrl),
        dogDiv.appendChild(newImg);
        });
    // **** challenge 2 ****
    const dogUl = document.querySelector('#dog-breeds');
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';     
    fetch(breedUrl)
    .then(resp => resp.json())
    .then((json) => {
        for (const element in json.message) {
        const newLi = document.createElement('li');
        const variable = 1;
        newLi.innerHTML = element;
        dogUl.appendChild(newLi);
        };
    });
    // **** challenge 3 ****
    // store li in a variable
    const breedUl = document.querySelector('ul');
    // user clicks li
    breedUl.addEventListener('click', turnRed);
    // font color changes to red
    function turnRed(e) {
        e.target.style.color = 'red';
    }
    // **** challenge 4 ****
    const selectElement = document.querySelector('#breed-dropdown');
    selectElement.addEventListener('change', chooseOption);
    function chooseOption(e) {
        console.log('option selected: ' + e.target.value)
        // get list of dogs 
        const dogList = dogUl.getElementsByTagName('li');
        // create array from dogList
        Array.from(dogList).forEach(function(dog) {
        // if statement to compare 1st chars
        if(e.target.value === dog.textContent.slice(0,1)){
                dog.style.display = 'block';
            } else {
                dog.style.display = 'none';
            }
        })
        if(!e.target.value){
            fetch(breedUrl)
        .then(resp => resp.json())
        .then((json) => {
            for (const element in json.message) {
            const newLi = document.createElement('li');
            const variable = 1;
            newLi.innerHTML = element;
            dogUl.appendChild(newLi);
            };
        });
        }

    }
}
document.addEventListener('DOMContentLoaded', init);
