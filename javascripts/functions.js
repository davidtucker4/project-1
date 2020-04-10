//jshint esversion: 7

//Req 3-B  NOT DONE
let arrAvg = (arr) => {
  let total = 0;
  let i = 0;

  for (i; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};
console.log(arrAvg([2, 3, 5, 7, 9]));



//Req 3-C NOT DONE
let arrMax = (arr) => {
  let max = arr[0];

  arr.forEach(x => {
    if (x > max) {
      max = x;
    }
  });
  return max;
};
console.log(arrMax([2, 3, 5, 7, 9]));


//Req 3-D
let sumEvens = (arr) => {
  let sum = 0;
  for (let x of arr) {
    if (x % 2 == 0) {
      sum += x;
    }
  }
  return sum;
};
console.log(sumEvens([1, 2, 3, 4, 5]));
