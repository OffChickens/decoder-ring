// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //  set up a regular alphabet
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false; // if there is no new alphabet or it isnt 26 chars long, return false
    let seen = []
    // if the new alphabet contains non-unique chars, return false
    for (let char of alphabet) { 
      if (seen.includes(char)) {
        return false;
      } else {
        seen.push(char);
      }
    }
    let message = input.toLowerCase(); // Change the input message to lowercase
    let newMessage = ''; // create a variable to hold the new message
    // if decoding
    if (encode == false){
      for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ' || !alphabet.includes(message[i])) { // if the current character is a space or special character
          newMessage = newMessage.concat(message[i]);
        // obtain the index of the character in the alphabet and use that index in the original alphabet to find the correct letter
        } else { 
          let currentIndex = alphabet.indexOf(message[i]);
        let newLetter = alpha[currentIndex];
        newMessage = newMessage.concat(newLetter);
        }
      }
      return newMessage;
    } else {
    for (let i = 0; i < message.length; i++) {
      if (message[i] == ' ' || !alpha.includes(message[i])) { // if the current character is a space or special character
        newMessage = newMessage.concat(message[i]);
      // obtain the index of the character in the alphabet and use that index in the new alphabet to find the correct letter
      } else { 
        let currentIndex = alpha.indexOf(message[i]);
      let newLetter = alphabet[currentIndex];
      newMessage = newMessage.concat(newLetter);
      }
    }
    return newMessage;
  }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
