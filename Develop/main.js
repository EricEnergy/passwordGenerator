var charNum = prompt("Enter the number of characters needed");
var ranNumbers = "0123456789".split('');
var ranLetter = "abcdefghijklmnopqrstuvwxyz".split('');
var ranLetterCap = "ZYXWVUTSRQPONMLKJIHGFEDCBA".split('');
var ranSpecChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');
var numbers = true; //confirm("Does it need to have numbers?\nPress ok for Yes or Canel for no. ");
var lowCase = true; //confirm("Does it need to have Lower Case letters?\nPress ok for Yes or Canel for no. ");
var uppCase = true; //confirm("Does it need to have Upper Case letters?\nPress ok for Yes or Canel for no. ");
var specChar = true; //confirm("Does it need to have a special charcter?\nPress ok for Yes or Canel for no. ");
var password = "";
var availableCharacters = [];
j = charNum;



//if ( true) {
    availableCharacters = availableCharacters.concat(ranNumbers); //random number generator

 // for (var i = 0; i < j; i++) {

        

        if (numbers) {

            for (var i = 0; i < 1; i++) {
                password = password + availableCharacters[Math.floor(Math.random() * availableCharacters.length)];

            }
        }

        if (lowCase) {

            for (var i = 0; i < 1; i++) {
                password = password + ranLetter[Math.floor(Math.random() * availableCharacters.length)];

            }
        }

        if (uppCase) {

            for (var i = 0; i < 1; i++) {
                password = password + ranLetterCap[Math.floor(Math.random() * availableCharacters.length)];

            }
        }

        if (specChar) {

            for (var i = 0; i < 1; i++) {
                password = password + ranSpecChar[Math.floor(Math.random() * availableCharacters.length)];

            }
        } document.getElementById('password').value = password;
   // }
    
//}


    


    console.log(password);
    console.log(j);
    console.log(charNum);







