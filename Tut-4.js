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

// filter 
const students = [
    {
        name: "Student 1",
        mark: 45
    },
    {
        name: "Student 2",
        mark: 60
    },
    {
        name: "Student 3",
        mark: 35
    }
];

const failed = students.filter((student)=>{
    if (student.mark < 45) {
        return true;
        
    }
    else{
        return false;
    }
})
console.log(failed);