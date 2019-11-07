var charNum;
var ranNumbers = "0123456789".split('');
var ranLetter = "abcdefghijklmnopqrstuvwxyz".split('');
var ranLetterCap = "ZYXWVUTSRQPONMLKJIHGFEDCBA".split('');
var ranSpecChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');
var password = "";
var availableCharacters = [];



var criteria = {

    copyTextToPaste: function() {

    copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange (0,99999);
    document.execCommand ("copy");
    console.log(copyText)
    },



    buttonpressed: function() {
    charNum = prompt("Enter the number of characters needed");
    numbers = confirm("Does it need to have numbers?\nPress ok for Yes or Canel for no. ");
    lowCase = confirm("Does it need to have Lower Case letters?\nPress ok for Yes or Canel for no. ");
    uppCase = confirm("Does it need to have Upper Case letters?\nPress ok for Yes or Canel for no. ");
    specChar = confirm("Does it need to have a special charcter?\nPress ok for Yes or Canel for no. ");
    for (var i = 0; i < parseInt(charNum); i++) {

        

        if ((password.length < charNum) && numbers) {

            for (var j = 0; j < 1; j++) {
                password = password + availableCharacters[Math.floor(Math.random() * availableCharacters.length)];

            }
        }
        
        if ((password.length < charNum) && lowCase)  {

            for (var j = 0; j < 1; j++) {
                password = password + ranLetter[Math.floor(Math.random() * availableCharacters.length)];

            }
        }
        
        if ((password.length < charNum) && uppCase) {

            for (var j = 0; j < 1; j++) {
                password = password + ranLetterCap[Math.floor(Math.random() * availableCharacters.length)];

            }
        }

        if ((password.length < charNum) && specChar) {

            for (var j = 0; j < 1; j++) {
                password = password + ranSpecChar[Math.floor(Math.random() * availableCharacters.length)];

            }
        } document.getElementById('password').value = password;
    }
    }

}

 
    

    availableCharacters = availableCharacters.concat(ranNumbers); //random number generator

   





    console.log(password); 
    console.log(charNum);
    console.log(password.length);







