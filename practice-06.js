userName = prompt('What is your name?');
userAge = prompt('How old are you?');
function greet () {
    console.log(`Hello, I'm ${userName} and I am ${userAge} years old`);
}

const myObj = {
    name: userName,
    age: userAge,
    greet: greet(),
}

myObj.greet;
