'use strict';


// const getNames = (studentsList) => {
//         const names = studentsList.map((student) => {
//             return student.name;
//         });
//         return names;
//     }


//Refactorizado
const getNames = studentsList => studentsList.map(student => student.name);

module.exports = getNames;