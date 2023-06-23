// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //set up the alphabet array in order to assign new values to the characters in the given string
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) return false; // Check to make sure that the shift value is valid
    //If decoding
    if (encode == false){
      let message = input.toLowerCase(); //change the input to lower case
      let newMessage = ''; //set up the new variable to hold the caesar message
      for (let i = 0; i < message.length; i++) { //loop through every character in input
        //find the character that matches the current character in the alphabet array
        let currentLetter = message[i];
        // if the current character is a space
        if (currentLetter == " ") {
            newMessage = newMessage.concat(" ");
        // if the current character is a special character
        } else if (!alphabet.includes(currentLetter)) {
          newMessage = newMessage.concat(currentLetter);
        } else {
          if (shift < 0) {
            let newIndex = (alphabet.indexOf(currentLetter) - shift + alphabet.length) % alphabet.length; //create a new index that will wrap around the alphabet using the current index and shift
            let newLetter = alphabet[newIndex]; // find the letter assigned to the new index
            newMessage = newMessage.concat(newLetter);
          } else {
            let newIndex = (alphabet.indexOf(currentLetter) - shift) % alphabet.length; //create a new index that will wrap around the alphabet using the current index and shift
            if (newIndex < 0){
              newIndex = alphabet.length + newIndex;
            }
            let newLetter = alphabet[newIndex]; // find the letter assigned to the new index
            newMessage = newMessage.concat(newLetter);
          }
        }
      }
      return newMessage;
    } else {
    let message = input.toLowerCase();
    let newMessage = ''; //set up the new variable to hold the caesar message
    for (let i = 0; i < message.length; i++) { //loop through every character in input
      //find the character that matches the current character in the alphabet array
      let currentLetter = message[i];
      // if the current character is a space
      if (currentLetter == " ") {
          newMessage = newMessage.concat(" ");
      // if the current character is a special character
      } else if (!alphabet.includes(currentLetter)) {
        newMessage = newMessage.concat(currentLetter);
      } else {
        if (shift < 0) {
          let newIndex = (alphabet.indexOf(currentLetter) + shift + alphabet.length) % alphabet.length; //create a new index that will wrap around the alphabet using the current index and shift
          let newLetter = alphabet[newIndex]; // find the letter assigned to the new index
          newMessage = newMessage.concat(newLetter);
        } else {
          let newIndex = (alphabet.indexOf(currentLetter) + shift) % alphabet.length; //create a new index that will wrap around the alphabet using the current index and shift
          let newLetter = alphabet[newIndex]; // find the letter assigned to the new index
          newMessage = newMessage.concat(newLetter);
        }
      }
    }
    return newMessage;
  };
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

