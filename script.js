const form = document.querySelector('form');
const list = document.querySelector('#list');
const button = document.querySelector('#button');
const reset = document.querySelector('#reset');

const bestRated = document.querySelector('#best');
const worstRated = document.querySelector('#worst');
const allMovies = document.querySelector('#all');

let movies = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let newMovie = {
        name: form.elements.name.value,
        rating: form.elements.rating.value,
        year: form.elements.year.value        
    };

    movies.push(newMovie);

    let newItem = document.createElement('li');
    newItem.innerText = `You have added the movie ${newMovie.name}, it was rated ${newMovie.rating} and released in ${newMovie.year}`;

    if (newMovie.rating < 60) {
        newItem.classList.add('badMovie');
    } else {
        newItem.classList.add('goodMovie');
    }

    list.appendChild(newItem);
    newMovie = {};

    bestRated.addEventListener('click', function () {
        if(newItem.classList.contains('badMovie')) {
            newItem.style.display = 'none';
        } else{
            newItem.style.display = 'list-item';
        }
    });

    worstRated.addEventListener('click', function () {
        if(newItem.classList.contains('goodMovie')) {
            newItem.style.display = 'none';
        } else{
            newItem.style.display = 'list-item';
        }
    });

    allMovies.addEventListener('click', function () {
        if(newItem.style.display === 'none'){
            newItem.style.display = 'list-item';
        }
    });

    reset.addEventListener('click', function () {
        list.removeChild(newItem);
        movies = [];
    });

    button.onclick = document.getElementById('name').value = '', document.getElementById('rating').value = '', document.getElementById('year').value = '';     
});

