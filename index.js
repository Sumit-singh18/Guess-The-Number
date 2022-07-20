// document.querySelector('.Start-guess').textContent = 'You are correct';
// document.querySelector('.input').value = 85 ;
// document.querySelector('.score').textContent =45;

const SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let High_score = 0;
document.querySelector(".high-score").textContent = High_score;
document.querySelector(".score").textContent = score;
document
  .querySelector(".check")
  .addEventListener("click", function checkAnswer() {
    const guess = Number(document.querySelector(".input").value);

    // When you clicked on the PlAy Again button
    document
      .querySelector(".try-again")
      .addEventListener("click", function rest() {
        let score = 10;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".Start-guess").textContent = " Start Guessing";
        document.querySelector(".input").value = 0;
        document.querySelector('.number').textContent ='?';
      });

    //  When the input value is misiing
    if (!guess) {
      document.querySelector(".Start-guess").textContent = " 💡Value Missing";
    }

    //  When guessed number is correct
    else if (guess === SecretNumber) {
      document.querySelector(".Start-guess").textContent = " 🎉Correct Number";
      document.querySelector("body").style.backgroundColor = " rgb(190, 198, 79)";
      document.querySelector(".number").textContent = SecretNumber;
       if(score> High_score){
         High_score=score;
         document.querySelector(".high-score").textContent = High_score;
       }
    }

    //  When the guessed number is high
    else if (guess > SecretNumber) {
      if (score > 0) {
        document.querySelector(".Start-guess").textContent = " 📈Too High Number";
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".high-score").textContent = 0;
      } else {
        document.querySelector(".Start-guess").textContent =
          "You lost The Game ";
      }
    }

    //  when the guessed number is low
    else if (guess < SecretNumber) {
      if (score > 0) {
        document.querySelector(".Start-guess").textContent = "📉Too Low Number";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".Start-guess").textContent =
          " 😥You lost The Game";
      }
    }
  });
