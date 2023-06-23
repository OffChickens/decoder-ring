// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // set up the values for the polybius square
  let polybiusAlpha = {'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22, 'h': 32, 'i': 42, 'j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54,
                  'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55};
  function polybius(input, encode = true) {
    // your solution code here
    // if decoding
    if (encode == false){
      let newMessage = ''; // set up a variable for the new message
      // Check for duplicate chars in the new alphabet
      let numCount = 0;
      for (let i = 0; i < input.length; i++) {
        // if the current char is a number increase the numCount
        if (!isNaN(parseInt(input[i]))) {
          numCount += 1;
        }
      }
      // if there is an odd number of numbers to decode, return false 
      if (numCount % 2) {
        return false;
      }
      const pairs = input.match(/\d{2}|\S(?=\s|$)|\s/g); // break up the message to decode into pairs of nums, separating the spaces and special characters into their own element
      for (let pair of pairs) { //loop through the elements in pairs
        if (pair == ' ' || !Object.values(polybiusAlpha).includes(parseInt(pair))) { // if the character is a space or a special character
          newMessage = newMessage.concat(pair);
        } else if (pair == '42') {  // If the current num pair is 42 
          newMessage = newMessage.concat('(i/j)');
        } else { 
          // associate the current pair of nums with a letter in polybiusAlpha and add it to the new message
          for (let encoded in polybiusAlpha) {
            let currentCheck = polybiusAlpha[encoded];
            if (parseInt(pair) == currentCheck){
            newMessage = newMessage.concat(encoded);
            }
          }
        }
      }
      return newMessage;
    } else {
      let message = input.toLowerCase(); // change the input message to lowercase
      let newMessage = '' // set up the variable to hold the new message
    for(let i = 0; i < message.length; i++){
      let currentChar = message[i];
      if (currentChar == ' '){ // if the current character is a space
        newMessage = newMessage.concat(" ");
      } else if (!Object.keys(polybiusAlpha).includes(currentChar)) { // if the current character is a special character
        newMessage = newMessage.concat(currentChar);
      } else {
        newMessage = newMessage.concat(polybiusAlpha[currentChar]);
      }
    }
    return newMessage;
  }
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };