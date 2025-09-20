// where we're going to store our 
// random variables for the password 
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let array1 = [];
let array2 = [];


function generate() {
    for (let i = 0; i < 15; i++) {
        array1 += characters[Math.floor(Math.random() * characters.length)];
        array2 += characters[Math.floor(Math.random() * characters.length)];
    }
    pwd1.textContent = array1;
    pwd2.textContent = array2;
    array1 = [];
    array2 = [];
}


