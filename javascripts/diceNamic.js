//jshint esversion: 7

let rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let controller = function() {
  console.log('controller');
  let target, die1, die2, rollCount = 0,
    die1URL, die2URL, imgElem1, imgElem2, cheeryMsg;

  target = document.querySelector("input").value;
  console.log(target);

  do {
    die1 = rollDie();
    die2 = rollDie();
    rollCount++;
    console.log(`${die1} ${die2} ${rollCount}`);
  } while (die1 + die2 != target);

  die1URL = `images/die${die1}.gif`;
  console.log(die1URL);
  imgElem1 = document.querySelector("img");
  imgElem1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  console.log(die2URL);
  imgElem2 = document.querySelectorAll("img")[1];
  imgElem2.setAttribute("src", die2URL);

  //display number of rolls on webpage

  cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}!`;
  document.querySelector("div").innerHTML = cheeryMsg;

};

window.addEventListener("Load", function() {
  console.log('load');

  let button = document.querySelector("button");

  button.addEventListener("click", controller);
});
