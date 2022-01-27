let buildBlocks = () => {
    const numStr = prompt('Please enter a number');
    const num = parseInt(numStr);
    const string = '#';
    const emptyString = ' ';
    for (let i = 1; i <= num; i++) {
      console.log(emptyString.repeat(num - i) + string.repeat(i + 1));
    }
  };
  
//   1   ## i + 1 num - i
//   2  ###
//   3 ####
//   4#####
  