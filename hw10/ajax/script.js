const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
    img: "https://www.w3schools.com/howto/img_avatar.png"
  },
];

// document.body.onload = addElement;

function createCard(songDescription) {
  //
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card');
  //
  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', songDescription.img);
  cardImg.setAttribute('alt', songDescription.author);
  cardImg.setAttribute('style', 'width: 100%');
  //
  const cardTextWrapper = document.createElement('div');
  cardTextWrapper.classList.add('card__text-container');
  //
  const artistName = document.createElement('h4');
  artistName.innerText = songDescription.author;  // innerText
  //
  const songName = document.createElement('p');
  songName.innerText = songDescription.song;  // innerText
  //
  cardTextWrapper.appendChild(artistName);
  cardTextWrapper.appendChild(songName);
  //
  cardWrapper.appendChild(cardImg);
  cardWrapper.appendChild(cardTextWrapper);


  return cardWrapper; // Node DOM
}

function newCard(songDescription) {
  return `
    <div class="card">
    <img src="${songDescription.img}" alt="${songDescription.author}" style="width:100%">
    <div class="card__text-container">
      <h4>${songDescription.author}</h4>
      <p>${songDescription.song}</p>
    </div>
  </div>
  `;
}

function createCardsWithContainer(songsList) {
  const cardsContainer = document.createElement('main');
  cardsContainer.classList.add('cards-container');

  for (song of songsList) {
    // {
    //   author: "LED ZEPPELIN",
    //   song: "STAIRWAY TO HEAVEN",
    //   img: "https://www.w3schools.com/howto/img_avatar.png"
    // },

    const newSongCard = createCard(song);
    cardsContainer.appendChild(newSongCard);

    // const newSongCard = newCard(song);
    // cardsContainer.innerHTML += newSongCard;
  }

  return cardsContainer;
}

function loadAndCreateCards() {
  const entryPoint = document.getElementById('entryPoint');
  const cards = createCardsWithContainer(playList);
  // !!!!!! DOM updates
  entryPoint.appendChild(cards);

}

function showCatsImg(data) {
  const entryPoint = document.getElementById('entryPoint');

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', data[0].url);
  cardImg.setAttribute('style', 'height: 100vh');

  entryPoint.appendChild(cardImg);
}

function loadAndCreateCat() {
  fetchCb('https://api.thecatapi.com/v1/images/search', showCatsImg)
}

// window.addEventListener('DOMContentLoaded', loadAndCreateCards);
window.addEventListener('DOMContentLoaded', loadAndCreateCat);

///////////new practice

function showCatData (data) {
  const entryPoint = document.getElementById('entryPoint');

}

function loadCat (url, cb) {
  fetchCb(`https://api.thecatapi.com/v1/breeds/search?q=${breed.name}`, showCatData);
}



