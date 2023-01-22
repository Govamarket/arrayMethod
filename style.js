// Here's your today’s task:
// Given an array of numbers ranging from 0 to 25: [0, 1, 2, 3, 4, 5, 6...] :
// filter the even numbers
// filter the odd numbers
// Given an array of people in a hall: [{name: "John", age: 20}, {name: "Mary", age: 15}, {name: "Bob", age: 25}, {name: "Chioma", age: "19"}, {name: "Chima", age: "18"}]
//  find the adults (people from age 18 and above)
// find the first adult (the first person whose age is above 18)
//  Given an array of numbers: [1, 2, 3, 4, 5]
// use the map()  to create an array of the square of each number in an array
// join the two arrays and sort in an ascending order
// use the reduce()  to find the sum of all the numbers in the new array



// First question is to given an array of numbers ranging from 0 to 25

var numbers = ([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])

var evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log("Even Numbers: " + evenNumbers);

var oddNumbers = numbers.filter(function(number) {
  return number % 2 !== 0;
});

console.log("Odd Numbers: " + oddNumbers);


// Second question;
let people = [

  {name: "John", age: 20},
  {name: "Mary", age: 15},
  {name: "Bob", age: 25},
  {name: "Chioma", age: "19"},
  {name: "Chima", age: "18"}
];

var adults = people.filter(person => person.age >= 18);
console.log(adults);

var adults = []
people.forEach(person =>{
  if(person.age == 18) {
    adults.push(person);
  }
});
console.log(adults);


// The third question 
var numbers = [1,2,3,4,5]
let squaredNumbers = numbers.map(num => num * num);
let combinedAndSorted = squaredNumbers.concat(numbers).sort((a, b) => a - b);
let sum = combinedAndSorted.reduce((acc, val) => acc + val, 0);
console.log(sum);

//  Given an array of numbers: [1, 2, 3, 4, 5]
// use the map()  to create an array of the square of each number in an array
// join the two arrays and sort in an ascending order
// use the reduce()  to find the sum of all the numbers in the new array