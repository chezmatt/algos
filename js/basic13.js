// Below are "The Basic 13" from Coding Dojo Algorithims:
//    If you notice that the formatting (case, spacing, etc.)
//    is different, it's because it's all been reformatted
//    to comply with JSCS Google requirements...
//

// Get 1 to 255
// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
function getArray() {
  var arr = [];
  //your code here
  for (var i = 1; i <= 255; i++) {
    arr.push(i);
  }
  return arr;
}

// Get even numbers to 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
function sumEvenNumbers() {
  var sum = 0;
  //your code here
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

// Sum odd 5000
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
function sumOdd5000() {
  var sum = 0;
  //your code here
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 === 1) {
      sum = sum + i;
    }
  }
  return sum;
}

// Iterate an array.
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
function iterArr(arr) {
  //your code here
  var sum = 0;
  // the below could also be < without the -1 ?
  for (var i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

// Find Max
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
  //your code here
  var max = 0;
  for (var i = 0 ; i < arr.length; i ++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// Find Average
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findMax(arr) {
  //your code here
  var max = 0;
  for (var i = 0; i < arr.length; i ++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddNumbers() {
  var arr = [];
  //your code here
  for (var i = 1; i <= 50; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  return arr;
}

// Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr, Y) {
  //your code here
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}

// Squares
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareVal(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

// Negatives
function noNeg(arr) {
  //your code here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

// Min/Max/Average
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
  //your code here
  var max = 0;
  var min = 0;
  var sum = 0;
  var avg = 0;
  var arrNew = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
    if (arr[i] <= min) {
      min = arr[i];
    }
    sum = sum + arr[i];
    avg = sum / arr.length;
  }
  arrNew = [max, min, avg];
  return arrNew;
}

// Swap Values
// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr) {
  //your code here
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  var arrnew = arr;
  return arrnew;
}

//Number to string
// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr) {
  //your code here
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
