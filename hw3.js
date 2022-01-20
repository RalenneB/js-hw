userInput = prompt('Choose the number that is corresponding to the code you want to run:');

/* \n \n \
 1. Write a program that requests a number from a user and finds the summation \
 of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10. \n \n\
 2. Request two numbers and find only their largest common divisor.\n \n\
 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2,\
 4, and 8.\n \n \
4. Define the number of digits in a requested number. For example, there are 4 digits in the \
number 6834.\n \n\
5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also,\
 count odd and even. Display the statistics. There’s only one variable (not 10) needed for \
 input by a user. \n \n\
6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and \
ask if the user wants one more. The loop continues until the user refuses. \
7. Request a number from a user and ask by how many digits to move it. Move the digits and\
 display the result (if the number 123456 needs to be moved by 2 digits, the result will be\
     345612). \n \n\
8. Loop day input like this: «Day of the week. Would you like to see the next one?» which\
 continues as long as the user clicks OK.\
9. Display the multiplication table of all numbers from 2 to 9. Every number has to be \
multiplied by 1 to 10. \n \n \
10. “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it\
 in the following way: every loop iteration needs to divide the range of numbers in half, \
 you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on\
  what the user said, narrow down the range. So the starting range is 0 to 100, divided in\
   half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on,\
    until the user chooses == N. ' */

function wrapper(userInput) {
    if (parseInt(userInput) == 1) {
        //gauss formula
        noInput = prompt('Enter a number.');
        return summationofNos(parseInt(noInput));
    }

    else if (parseInt(userInput) ==2) {
        noInput2 = prompt('Enter the first number.');
        noInput3 = prompt('Enter the second number.');
        return greatestDivisor(parseInt(noInput2), parseInt(noInput3));
    }

    else if (parseInt(userInput) == 3) {
        //gauss formula
        noInput = prompt('Enter a number.');
        return getDivisors(parseInt(noInput));
    }


    else {
        return 'Sorry, your number is not in 1 to 10 range, try again';
    }


}

console.log(wrapper(userInput));

// each function from the exercise

function summationofNos(no) {
    return (no * (no + 1)) / 2;
}

function greatestDivisor (a, b) {
    // euclidean algorithm + recursive function usage
    if (!b) {
        return a;
      }
      return greatestDivisor(b, a % b);
    }

function getDivisors(n){

    let divisors = [];
    for (let i = 2; i < n; i ++) {
        if (n % i === 0){
            divisors.push(i)
        }
    }
    return divisors.length > 1 ? divisors : `${n} is a prime number`;
    
}
