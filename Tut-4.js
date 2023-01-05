// Arrays and loops in js
// const language = ['javascript','python','c'];
// console.log(language.length);
// console.log(language[2]);
// language.push('dart');
// language.unshift('java');
// language.pop();
// console.log(language.pop());
// language.shift();
// console.log(language);

// const actors = [
//   {
//     name: "Actor 1",
//     payment: 100,
//   },

//   {
//     name: "Actor 2",
//     payment: 200,
//   },

//   {
//     name: "Actor 3",
//     payment: 150,
//   }
// ];

// for (let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment - 10;
// }
// console.log(actors);

// actors.forEach(actors => {
//     actors.payment = actors.payment - 10;

// });
// console.log(actors);

// for (let actor of actors) {
//     actor.payment = actor.payment - 10;
// }

// console.log(actors);

// // filter
// const students = [
//     {
//         name: "Student 1",
//         mark: 45
//     },
//     {
//         name: "Student 2",
//         mark: 60
//     },
//     {
//         name: "Student 3",
//         mark: 35
//     }
// ];

// const failed = students.filter((student)=>{
//     if (student.mark < 45) {
//         return true;

//     }
//     else{
//         return false;
//     }
// })
// console.log(failed);

// map
// const users = [
//   {
//     fname: "john",
//     lname: "Doe",
//   },
//   {
//     fname: "nike",
//     lname: "Doe",
//   },
// ];

// const result = users.map((user) => {
//     return {
//         fullname: `${user.fname} ${user.lname}`,
//     };
// });
// console.log(result);


// reduce 
// const movies = [
//     {
//         name: "Interstellar",
//         buget: 100
//     },
//     {
//         name: "social",
//         buget: 150
//     },
//     {
//         name: "matrix",
//         buget: 300
//     }
// ];


// const acc = movies.reduce((total,movie) => {
// total = total + movie.buget
// return total;
// }, 0);
// console.log(acc);

// let total = 0;
// movies.forEach((movie) => {
//     total +=  movie.buget;
// });
// console.log(total);


// indexOf 
// const admin = [2,1,5]
// const users = {
//     name: 'xyz',
//     id: 2
// }
// console.log(admin.indexOf(users.id));

// includes 
// const admin = [2,1,5]
// const users = {
//     name: 'xyz',
//     id: 5
// }
// console.log(admin.includes(users.id));

// find 
// const users = [
//     {
//         name: 'xyz',
//         id:1
//     },
//     {
//         name: 'abc',
//         id:2
//     },
//     {
//         name: 'pqr',
//         id:3
//     }
// ];

// const myuser = users.find((user) => {
//     if(user.id === 2){

//         return true;
//     }
//     return false;
// })
// console.log(myuser);


// sort 
// const names = ['john', 'fred', 'fin','alex', 'alice', 'hales'];
// names.sort();
// console.log(names);

// splice 
const names = ['john', 'fred', 'fin','alex', 'alice', 'hales'];
names.splice(2,1);
console.log(names);