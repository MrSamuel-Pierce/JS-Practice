// Question 1
// Write the function printInt(n)
// taking one parameter n and print all natural numbers
// from 1 to n in console.
function printInt(n) {
    // Using a loop print from 1 to n 
    // start: 1
    var i = 1; 
    // stop: n
    while(i <= n){
        console.log(i)
    // step: +1
        i++;
    }
}
printInt(5);

// Question 2
// Write the function printIntRev(n) taking one // parameter n and  print all natural numbers
// in reverse in console (from n to 1).
function printIntRev(n){
    // Using a loop print in reverse from n to 1
    // start: n
   
   // stop: 1
for(var x=n; x=>1;x--){
    console.log(x)
}

}
// Question 3
// Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
    // Examples:
    // checkInput(5) ====> ‘number’
    // checkInput(‘hello’)======> ‘string’
    // checkInput(‘5’) ======> ‘string’
    // checkInput(true)=====> boolean
    // checkInput([1,2,3,4]) =====> -1
    // Note:
// return the string 'string' if x is a string;
// and return 'boolean' if x is a boolean.
// Otherwise returns -1.
// function checkpoint(x){
    // if x is a boolean, number or string
    // then we return its type
    // otherwise we return -1
function checkInput(x){

// }
// if(x === "number"){
//     return typeof x
// } else if (x is a string){
// return "string"
// {
//     else if (x === "boolean")
// }
    if (typeof x === "number"|| typeof x === "string" || typeof x === "boolean"){
        return typeof x;
    } else {
        return -1;
    }
}
// console.log(checkInput(null))


// Question 4
// Write the function simpleEvenAdding(num)
//taking a number and add up all the numbers from 1 to num.
    // Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
    //simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
    //simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
    // simpleEvenAdding(1) ======> 0
    // simpleEvenAdding(0) =======> 0


function simpleEvenAdding(num){
    // store the answer
    var solution=0;
    // loop over numbers from 1 to num
//     for(var i=1; i<=num;i++){

//         // check if current index is even or odd
//         // if(i % 2 ===0) {
//         //    solution += i;
//         }
//     }

//     return solution;
// }

// console.log(simpleEvenAdding(10))

for(var i=1;i<=num;i+=2){
    solution +=i;
}
return solution;
}

console.log(simpleEvenAdding(12));

// Question 5
// Write the function letterCapitolize(str)
// taking a string and capitolize 
// the first letter of each word. 
// The given words will be separated 
// by only one space
    // Examples:
		//letterCapitalize(“hello world”) ===========> “Hello World”
        //letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
            
        //Hint: There is a built-in function in javaScript that change string into uppercase. There is also a function to separate string into an array of words.
        //.toUpperCase()


function letterCapitolize(str){
    // separate the str into array of words
    // using split 
    //.split()
var words = str.split("");

    //.slice()

    // Store the answer
    var solution = "";

for(var i=0;i<words.length;i++){
    var upperWord = words [i].replace(words[i][0], words[i][0].toUpperCase())
    solution += " " + upperWord;

}
    
return solution.slice(1);
}
console.log(letterCapitolize("hello word"))
    // loop over the array of words

    // capitolize the first character of each word
    //"Hello"[0].toUpperCase + "hello".slice(1)


// Question 6
// Write the function simpleReverse(str) 
// taking a string and return the string 
// in reversed order. 
	// Examples:
    // simpleReverse(‘hello’) ======> ‘olleh’
    // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
function simpleReverse(str){
    // Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

// "hello".split("");
// (5) ["h", "e", "l", "l", "o"]
// function examples include:
// join
// +
// .toString

var strArray = str.split("");

//reverse the array
var  revArray = strArray.reverse();

// transfer array back to string
return revArray.join("");
}
console.log(simpleReverse("Hello goodmorning"))

// Question 7
// Write the function findDiff(arr) 
// taking an array of numbers as parameter
// and return the difference between 
// the maximum number and the minimum number (max - min). 
	//Examples:
	//findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	//findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	//findDiff([1, 1, 1, 1, 1]) =======> 0 
    //findDiff([1]) ======> 0;
    //findDiff([]) =======> 0;
function findDiff(arr) {

    // find maximum number
    var max = Math.max(... arr);
    // find minimum number
    var min = Math.max(... arr)

// find min and max
 return max - min;
}
 console.log(findDiff([1,2,3,5,4,10,2]));


// Question 8
// Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	// Example:
    // timeConvert(61) ======> 1:1
    // timeConvert(63) =======> 1:3
    // timeConvert(120)======> 2:0
    // timeConvert(59)=======> 0:59
    // Hints: Dividing and modulo the number 60.

function timeConvert(num){
    // getting the hour
var hour = parseInt(num/60);
    // getting the minutes
var minutes = num % 60
    // combine the answer
    return hour + ":" + minutes
}


// Question 9
// Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
    // Example:
    //findStr(“hi”, “dasdhidasdahidashi”) =======> 3
    //findStr(“o”, “daodo”) =======> 2
    //findStr(“ha”,”abcde”)=======> 0
    //findStr(“h”, “hihelloho”)======> 3
function findStr(str, long){
    var splittedArray = long.split(str);
    return splittedArray.length - 1;
} 

// Question 10
// Write the function selfDividingNumbers(left, // right) taking two number bound as parameters // and returns an array of every possible self // dividing number between them, 
// including the bounds. 

//Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

    //Examples:
	//selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
	//selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
    //selfDividingNumbers(12, 21) =======> [12, 15]
function selfDividingNumbers(left, right){
// store the answer
    var solution = [];
    for(var i=left;i<=right;i++){
        solution.push(i)
    }

    return solution;
}

function isSelfDividing(num){
    var digits = num.toString().split("");

    for(var i=0; i< digits.length; i++){
        if(num % digits[i] !==0) {
            return false;
        }
    }

    return true;
}
// Question 11
// Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  
    //For example:
    //moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
    //moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
    //moveZeros([0,0,0]) ======> [0,0,0]
    //moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]

function moveZeros(nums){
    // count number of 0s
    var counter = 0;

    // store the solution array
    var solution = [];

    for(i=0;i<nums.length;i++){
        if(nums[i] === 0){
        counter++;
        }else{
        solution.push(nums[i]);
        }
    }
    // adding 0s
    for(var j=counter;j>0;j--){
        solution.push(0);
}
    return solution;
}
    console.log(moveZeros([1,0,21,4,0,0,4]));



// Question 12
// Create an average() function that calculates // the average of an array of numbers.
    //Examples: 
    //average([2, 6]) =====> 4
    //average([2, 3, 3, 5, 7, 10]) ======> 5
    //average([7, 1432, 12, 13, 100]) ======> 312.8
    //average([]) ======> 0

    //Deliverables
    //Create a new repository in your github and named it “JavaScript Practice”. Put all functions into one file called “main.js”. 
function average (nums){
    if(nums.length ===0){
        return 0;
    }

    // adding up all numbers
    var sum = 0;

    for(var i=0;i<nums.length;i++){
    return sum / nums.length
    }
}
    console.log(average([]));
