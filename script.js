console.log("Type a secret number here, and I'll try to guess it.");
const secretNumber = parseInt(prompt("Pick a single digit number please!"));

for (let i = 0; i < 10; i++) {
  if (i < secretNumber) {
    console.log("Looks like it's not " + i + ", so I'll keep guessing...");
  } else if (i === secretNumber) {
    console.log("OH! Your number is " + i + "!");
    break;
  }
}
