// let age = 18;
// let hasVoterId = "Yes";

// if (age >= 18) {
//   if (hasVoterId === "Yes") {
//     console.log("You can vote");
//   } else {
//     console.log("Get Your voter id card");
//   }
// } else {
//   console.log("you can't vote");
// }


// let isLoggedIn  = "0";


// if (isLoggedIn === "0") {
//     document.write("Log In")
// }
// else{
//     document.write("Log Out")
// }

// let isLoggedIn = 0;
// let option = isLoggedIn == 1 ? "Login" : "LogOut";
// console.log(option);


// let user;
// alert(user ?? "Guest")
//for loop:
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop:
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//do while loop:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//forEach loop:
let numbers = [1,2,3,4,5];
numbers.forEach(function(num) {
  console.log(num);
});

//for-in loop:
let person = {
  name: 'John',
  age: 25
};

for (let key in person) {
  console.log(key, person[key]);
}

//for-of loop:
let numbers = [1,2,3,4,5];
for (let num of numbers) {
  console.log(num);
}

A variable in JavaScript is a named storage location for data. It can be used to store a value or an expression. Variables are declared with the "var" keyword, followed by a name and an optional assignment.

Example:

var myName = "John";