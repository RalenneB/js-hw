class Card {
  constructor(element, age, name, avatarUrl, description) {
    this.element = element;
    this.age = age;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.description = description;
  }

  // Method
  render() {
    //  Create and append new div block as child for element. Add some text inside this block.
    // const parent = document.getElementsByClassName("wrapper");
    const div = document.createElement("div");
    div.setAttribute("id", "card");
    const image = document.createElement("img");
    const name = document.createElement("h2");
    const age = document.createElement("p");
    const description = document.createElement("p");
    age.innerText = `Age: ${this.age}`;
    image.setAttribute("src", this.avatarUrl);
    name.innerText = this.name;
    description.innerText = `About: ${this.description}`;
    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(age);
    div.appendChild(description);
    this.element.appendChild(div);
  }
}

const el = document.getElementById("entryPoint");

// const card = new Card(el, 20, "Ana", "./img/avatar.jpg", "Lorem Ipsum");
const card2 = new Card(
  el,
  22,
  "Elisabeth",
  "./img/avatar2.png",
  "Lorem Ipsum but different"
);
// const card3 = new Card(el, 42, "Tanta", "./img/avatar3.png", "Faculty member");

// card.render();
card2.render();
// card3.render();

// const myUser = new Card(element, age, name, avatarUrl, description);
// myUser.render();
