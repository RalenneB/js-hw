// let buildBlocks = () => {
//     const numStr = prompt('Please enter a number');
//     const num = parseInt(numStr);
//     const string = '#';
//     const emptyString = ' ';
//     for (let i = 1; i <= num; i++) {
//       console.log(emptyString.repeat(num - i) + string.repeat(i + 1));
//     }
//   };

//   1   ## i + 1 num - i
//   2  ###
//   3 ####
//   4#####

// exercise from sololearn
//encryptor; input - multiple words --array;
//output: combined words separated by $ sign and $ at the end and start too
//add a print method to the class

class Add {
  constructor(...words) {
    this.words = words;
  }

  // newArr = [];
  print(newArr) {
    newArr = [];
    for (let i = 0; i < this.words.length; i++) {
      newArr.push(`$${this.words[i]}`);
    }
    console.log(newArr);
    let val = newArr.join('');
    return console.log(`${val}$`);
  }

  
  print2() {
    let result = '$';
    for (let word of this.words) {
      result += word + '$';
    }
    return console.log(result);
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
// var y = new Add('this', 'is', 'awesome');
// var z = new Add('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'bla', 'blaa');
x.print2();
// y.print();
// z.print();
