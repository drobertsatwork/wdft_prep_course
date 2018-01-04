// Exercise #1
// Write your solution below


/* 
Write your explanation for Exercise #1 here

var line, triangle;
line = triangle = "";

for (var row = 1; row <= 7; row++) {
  for (var x = 0; x < row; x++) {
    line += "#";
  }
  triangle += line + "\n";
}

console.log(triangle);

*/





// Exercise #2
// Write your solution below


/* 
Write your explanation for Exercise #2 here

*/
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};

evenNumbers(nums);
alert(evens);
alert(odds);
