// in class javascript Algorithims examples
// please note this code is formatted for Google JSCS
// so it might look different...
// if you submit a merge request, use Google JSCS please...
// my linter will thank you.
//
// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if valueat [0] is less than array's length, print "too small!"; otherwise print "Just right!".
function FitTheFirstValue(arr) {
  if (arr[0] > arr.length) {
    console.log('Too Big!');
  } else if (arr[0] < arr.length) {
    console.log('Too Small!');
  } else {
    console.log('Just Right!');
  }
}

// Count Positives
// Given an array of number of positve values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}

// Reverse Array **** ????? *****
// Given an array, write a function that reverses values, in-place. Example: reverseArr([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].
function reverseArray(array) {
  var swap = array[i];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[array.length - i];
    array[array.length - i] = swap;
  }
  return array;
}

// Fibonacci Sequence
// Create a function to generate Fibonacci numbers. In thiss famoous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later,etc.). Examples: fibonacci (0) = 0 given, fibinanci(1) = 1 given, fibonacci (2) =1 (fib(0) + fib(1), or 0+1), fibonacci(3) = 2 (fib (1) + fib(2), or 1+1), fibonacci (4) =3 )1+2), fibonacci (5) = (2+3), fibonacci (6) = 8 (3+5), fibinacci (7) =13 (5+8), etc.
function fibonacci(n) {
  var fib = [0,1];
  for (var i = 0; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib[n]);
}

// Sigma
// Implement function sigma (num) that given a number, returns  the sum of all postive integers up to number (inclusive), Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4_+ 5).
function sigma(num) {
  var sum = 0;
  for (var i = num; i > 0; i--) {
    sum += i;
  }
  console.log(sum);
}

// Factorial
// Just the Facts, ma'am. Factorials, that is. Write a function factorial (num) that, given anumber, returns the product (multiplication) of all ppostive integers from 1 up to number (inclusive). For example, factorial (3) = 6 (or 1 1* 2 * 3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(n) {
  var sum = 1;
  while (num > 0) {
    sum *= num;
  }
}

// Array: Insert At
//Given array, index and addtional value, insert the value into array at given index. Dothis without using built-in array methods. You can think PushFront (arr,va) as equivelent to insertAt (arr, 0, val).
function insertAt(arr, index, value) {
  var temp = 0;
  for (i = arr.length; i >= index; i--) {
    temp = arr[--i];
    arr[i] = temp;
  }
  arr[index] = value;
  return arr;
}
/****************************
  notes regarding the above.
  input arr, indexm value from user
  declare temp varuse for loop to access arr
  assign temp var arr[i-1]
  set arr[i] to the temp (shifts the value right)
  assign value to arr[index]
  return arr
******************************/

// Array: Remove At
// Given array and an idex into array, remove and return the array value at that index. OD this without using built-in array mthods except pop(). think of popFront(arr) as quivelent to removeAt (arr,0).
//write code here

// Array Swap Pairs
// Swap postions of successive pairs of values of given array. if length is odd, do not change the final element. For [1,2,3,4] return [2,1,4,3]. For example, cahnge input ["brendan",true, 42] to  [true, "brendan",42]. As with all array challenges, do this without any built-in array methods.
// write code here.

// Array Second Largest
//Return the second-largest element of an array. Given [42,1,4,Math.pi, 71] return 7 if the array is too short, return null. (no sorting)
// write code here
//***** this is not valid ***/
function secondToLargest(arr) {
  var max = arr[0];
  var sec = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (var n = 0; n < arr.length; n++) { // i already defined
    if (arr[n] < sec && arr[n] < max) {
      sec = arr[n];
    }
  }
  return sec;
}

/*** option 2 waay better ****/
function secondToLargest(arr) {
  var max = arr[0];
  var sec = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      temp = max;
      max = arr[i];
    }
    if (temp > sec) {
      sec = temp;
    }
  }
  return sec;
}
// Array: Nth-Largest
// Jimmy has "n" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger, Return null if needed.
/******** this one needs help !! ********/
function nthLargest(arr, x) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
    }
    var kmax = arr[0]; // this shoule be at the head of the function
    count = 0; ///reassignment or declaration? ?????
    for (var i = 0; i < arr.length; i++) { // ERROR i already defined! ---> NOT VALID
      if (arr[i] > kmax) {
        kmax = arr[i];
        count ++;
        if (count > k - 1) {
          break;
        } //????
      }  // ???
    } //???
  } //???
} // function close - ok

/****** next one incomplete *****/
function nthLg(arr, x) {
  var max = arr[o];
  var newArr = [];
  newArr[0] = arr[0]; /// is this right??
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      newArr[i].push();
    } else if (arr[i] < max) {
      newArr[i].unshift();
    }
  }
  return newArr[newArr.length - (x - 1)]; // is this right ???
}

// zip it
//?
