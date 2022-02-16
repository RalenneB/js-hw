//The Cat API - search by breed homework
/**
 *You need to use this code as a base https://github.com/AlexOrd/dom-fe-se-test/tree/master/ajax
Create an input field and get data from this field.
You need to implement a search by breed logic.
Use this endpoint https://docs.thecatapi.com/api-reference/breeds/breeds-search

 */

// instead on triggering event on search btn, we trigger it on Enter too
function onEnterPressed(event) {
  if (event.code == "Enter") {
    searchCats();
  }
}

function searchCats() {
  // alert('heehe');
  const searchStr = document.getElementById("site-search").value;
  // console.log(searchStr);

  fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchStr}`)
    .then((response) => response.json())
    .then((cats) => {
      let wrapper = document.getElementById("wrapper");
      let catCards = document.getElementsByClassName("catCard");
      removeCatCards(catCards);
      createCatCards(cats, wrapper);
      if (cats.length == 0) {
        createNoCatsMessage(wrapper, searchStr);
      } else {
        removeNoCatsMessage();
        removeCatsImg();
      }
    });
}

function getAndCreateCatImg(cat, catCards) {
  const refImgId = cat.reference_image_id;
  if (refImgId) {
    fetch(`https://api.thecatapi.com/v1/images/${refImgId}`)
      .then((response) => response.json())
      .then((catImg) => {
        //   console.log(catImg.url);
        let newCardForImgOnly = document.createElement("img");
        newCardForImgOnly.classList.add("imgCard");
        newCardForImgOnly.setAttribute("src", catImg.url);
        catCards.appendChild(newCardForImgOnly);
      })
      .catch((error) => console.warn(error));
  } else {
    //if there is no img in the api, use a generic one
    let newCardForImgOnly = document.createElement("img");
    newCardForImgOnly.classList.add("imgCardUndefined");
    newCardForImgOnly.setAttribute(
      "src",
      "https://i.pinimg.com/474x/73/4c/93/734c9341d62fa7d9ceda5253fc7d9212.jpg"
    );
    catCards.appendChild(newCardForImgOnly);
  }
}

function createCatCards(cats, wrapper) {
  for (const cat of cats) {
    let catCardDiv = document.createElement("div");
    let catCardTitle = document.createElement("h2");
    let catCardText = document.createElement("p");
    let catCardTraits = document.createElement("p");
    let catCardWiki = document.createElement("a");

    catCardTitle.innerText = cat.name;
    catCardText.innerText = cat.description;
    catCardTraits.innerText = `Temperament: ${cat.temperament}`;
    catCardWiki.innerText = `Find out more here `;
    catCardWiki.setAttribute("href", cat.wikipedia_url);

    catCardDiv.classList.add("catCard");
    wrapper.appendChild(catCardDiv);

    catCardDiv.appendChild(catCardTitle);
    catCardDiv.appendChild(catCardText);
    catCardDiv.appendChild(catCardTraits);
    catCardDiv.appendChild(catCardWiki);

    //create inner button
    let addFavCatBtn = document.createElement("button");
    addFavCatBtn.classList.add("btn-fav");
    addFavCatBtn.innerText = "Add to Favorite";
    catCardTitle.appendChild(addFavCatBtn);
    addFavCatBtn.onclick = addCatToFav(cat);

    //add to fav
    // let body = document.getElementById("body");
    // let favContainer = document.createElement("div");

    getAndCreateCatImg(cat, catCardDiv);
  }
}

function removeCatCards(catCards) {
  // Since element.getElementsByClassName returns a live node list, you need to loop through the list in a certain way (since removing them from the DOM removes them from the list as well). For is not working because the length is getting smaller everytime we remove an element.
  while (catCards[0]) {
    catCards[0].remove();
  }
}

function createNoCatsMessage(wrapper, searchStr) {
  let noCatCards = document.getElementsByClassName("noCatCard");
  let currentNoCatCard;
  if (noCatCards.length === 0) {
    let newNoCatCard = document.createElement("p");
    newNoCatCard.classList.add("noCatCard");
    wrapper.appendChild(newNoCatCard);
    currentNoCatCard = newNoCatCard;
  } else {
    currentNoCatCard = noCatCards[0];
  }
  currentNoCatCard.innerText = `😫 No cat breed with '${searchStr}' name found. Please try other name.`;
}

function removeNoCatsMessage() {
  let noCatCards = document.getElementsByClassName("noCatCard");
  if (noCatCards.length > 0) {
    noCatCards[0].remove();
  }
}

function removeCatsImg() {
  let catsImg = document.getElementsByClassName("imgCard");
  while (catsImg[0]) {
    catsImg[0].remove();
  }
}

function addCatToFav(cat) {
    //some sort of closure; this is why we call it with cat as arg
  return function () {
    // Verify if fav-container exists
    let cv = document.getElementsByClassName("fav-container");
    let favList;
    if (cv.length == 0) {
      let favContainer = document.createElement("div");
      let body = document.getElementById("body");
      favContainer.classList.add("fav-container");
      favTitle = document.createElement("h3");
      favTitle.innerText = "Favourite Breeds";
      favList = document.createElement("ol");
      favList.classList.add("ol");
      favContainer.appendChild(favTitle);
      favContainer.appendChild(favList);
      body.appendChild(favContainer);
    }
    favList = document.getElementsByClassName("ol")[0];
    // if fav-container exists, append new list element to fav container list
    // else create fav container and append new list element to fav container list
    let alreadyExist = false;
    for (elem of favList.children) {
      if (elem.children[0].innerText === cat.name) {
        alreadyExist = true;
        break;
      }
    }

    if (!alreadyExist) {
      let favListItem = document.createElement("li");
      favListItem.classList.add("li");
      let favListSpan = document.createElement("span");
      favListSpan.innerText = cat.name;
      favListItem.appendChild(favListSpan);
      favList.appendChild(favListItem);

      let deleteFavBtn = document.createElement("button");
      deleteFavBtn.classList.add("del-btn");
      deleteFavBtn.innerText = "x";
      favListItem.appendChild(deleteFavBtn);
      deleteFavBtn.onclick = deleteFavCat;
      //   deleteFavCat();
    }
  };
}

function deleteFavCat(event) {
  let target = event.target;
  while (target && target.tagName !== "OL") {
    if (target.tagName === "LI") {
      let parent = target.parentNode;
      target.remove();
      if (parent.children.length === 0) {
        let container = document.getElementsByClassName("fav-container")[0];
        container.remove();
      }
    }
    target = target.parentNode;
  }
}
