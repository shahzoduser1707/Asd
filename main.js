// //  function sum(num1, num2) {
// //     var summa = num1 + num2 
// //     return summa 
// //  }
// //  console.log(sum(16,32));
// //  console.log(sum(6,9));
// //  console.log(sum(7,7));



// //  console.log(myRandom(20, 30));
// //  let num1 = +prompt('kichik sonni kiriting')
// //  let num2 = +prompt('katta sonni kiriting')

// //  for (let i = 0; i < 2; i++) {
// //      let rand1 = myRandom(num1, num2)
// //      let rand2 = myRandom(num1, num2)
// //      let userAnswer = +prompt(rand1 + ' + ' + rand2 + ' = ? ')
// //      let trueAns = rand1 + rand2 == userAnswer ? 'siz togri topdiz' : 'siz xato xisobladiz!' + 'togri javob esa: ' + (rand1 + rand2);
// //      console.log(trueAns);
// //  }

// // function myRandom(min, max) {
// //     return Math.floor(Math.random() * (max + 1 - min) + min)
// // }
// // let com = myRandom(1, 100)
// // for (let i = 6; i > 0; i--) {
// //     let user = +prompt(`1 dan 100 gacha sonni toping! sizda ${i} imkoniyatiz bor`)
// //     while (user < 1 || user > 100 || isNaN(user)) {
// //         user = +prompt(`1 dan 100 gacha sonni kiriting!!!`)
// //     }
// //     if (com == user) {
// //         alert(`yutdiz!!!`)
// //         break;
// //     }
// //     else if (i == 1) {
// //         alert(`topomadiz!!!. javob ${com} `)
// //     }
// //     else if (com - user <= 3 && com - user >= -3) {
// //         alert(`yonidasiz`)
// //     }
// //     else if (com - user <= 6 && com - user >= -6) {
// //         alert(`azgina qoldi`)
// //     }
// //     else if (com - user <= 10 && com - user >= -10) {
// //         alert(`yaqinidasiz`)
// //     }
// //     else if (com - user <= 15 && com - user >= -15) {
// //         alert(`xali uzodasiz`)
// //     }
// //     else if (com - user <= 30 && com - user >= -30) {
// //         alert(`ni v temu`)
// //     }
// //     else {
// //         alert(`yana urunib koring`)
// //     }
// // }
// let line = ''
// for (let k = 0; k < 6; k++) {
//     for (let i = 0; i < 8; i++) {
//         if (i % 2 == 0 && k % 2 == 0 || k % 2 != 0 && i % 2 != 0) {
//             line +='⬜'
//         }else{
//             line += '⬛'
//         }
        
//     }
//     console.log(line);
//     line = ''
// }
