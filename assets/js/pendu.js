const myWords = ["volkswagen", "tapis", "plafond", "bureau", "poteau", "livre", "mobile", "recharge", "cyber", "escalier"]
const randomWord = myWords[Math.floor(Math.random() * myWords.length)];
const myLetters = document.querySelectorAll('button[data-button="letter"]');
const arrayRandomWord = randomWord.split('');
let resultWord = document.getElementById('resultWord');
let myError = 0


//fonction permettant qu'au clic sur les lettres, si la touche ne correspond pas à une lettre dans le mot alors on rajoute 1 au compteur myError sinon
// tu crées letter+index  
myLetters.forEach(element => {
  element.addEventListener('click', function () {
    let touch = this.dataset.val
    if (!randomWord.match(touch)) {
      myError++
    } else {
      arrayRandomWord.forEach((element, index) => {
        if (element == touch) {
          let letter = "letter" + index
          document.getElementById(letter).innerHTML = element;
        }
      })
    } // fonction permettant de passer la lettre ne rouge au clic
    myLetters.forEach(function (e) {
      e.addEventListener('click', function () {
        this.style.backgroundColor = "red";
      })
    });// fonction permettant d'afficher les images après chaque erreur
    switch (myError) {
      case 1:
        myImage.src = "./assets/img/evo001bg.png";
        break;
      case 2:
        myImage.src = "./assets/img/evo002bg.png";
        break;
      case 3:
        myImage.src = "./assets/img/evo003bg.png";
        break;
      case 4:
        myImage.src = "./assets/img/evo004bg.png";
        break;
      case 5:
        myImage.src = "./assets/img/evo005bg.png";
        break;
      case 6:
        myImage.src = "./assets/img/evo006bg.png";
        break;
      case 7:
        myImage.src = "./assets/img/evo007bg.png";
        break;
      case 8:
        myImage.src = "./assets/img/Anne.png";
        break;
      default:
        window.alert("Game Over !");
    }
  })
});


// fonction permettant de créer des span pour chaque lettre du mot
arrayRandomWord.forEach((element, index) => {
  let createSpan = document.createElement("span")
  createSpan.setAttribute("id", "letter" + index);
  createSpan.innerHTML = "_ "
  resultWord.appendChild(createSpan)
})
