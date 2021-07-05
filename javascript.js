const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
const skipJokeBtn = document.getElementById('skipJokeBtn');
let punchline = '';
let setup = '';


punchlineBtn.addEventListener('click', getPunchline);
newJokeBtn.addEventListener('click', getJoke);
skipJokeBtn.addEventListener('click', skipJoke);

function skipJoke() {
    getJoke()
    
    punchlineBtn.classList.toggle('hidden')
    newJokeBtn.classList.toggle('hidden')
    skipJokeBtn.classList.toggle('hidden')
}

function getPunchline() {
    punchlineDiv.innerHTML = punchline;
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
    skipJokeBtn.classList.toggle('hidden');
}

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();
    
    //storing the setup inside our first bubble
    setup = joke[0].setup;
    setupDiv.innerHTML = setup;
    
    //assigning the punchline string inside the punchline variable
    punchline = joke[0].punchline;
    
    //clearing punchline div and remove the "bubble" class from the punchline div
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.remove('bubble');
    
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
    skipJokeBtn.classList.toggle('hidden');
}

getJoke();