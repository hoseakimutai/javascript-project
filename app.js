// let num = 1;
// while(num<=100){

//     // Print each number
//     console.log(num);

//     // Increase num by 1 
//     num = num + 1;
// }
for (i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5) {
        console.log("Buzz");
    } else {
        console.log("FizzBuzz")
    }
}





// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }





let i, a = 100;
let count = 0;
console.log("count of All odd numbers from 1 to 100")
for (i = 1; i <= a; i++) {
    if (i % 2 != 0) {
        count++;

    }
}
console.log(count);





function myFunction() {
    switch (prompt("what is your grade")) {
      case "90>":
        console.log(A)
        break;
      case "85-90":
        console.log(`A-`)
        break;
      case "80-84":
        console.log(`B+`)
        break;
      case "75-79":
        console.log(`B`)
        break;
      case "70-74":
        console.log(`B-`)
        break;
      case "60-69":
        console.log(`C+`)
        break;
      case "50-59":
        console.log(`C`)
        break;
      case "<50":
        console.log(`fail`)
        break;
    }
  }




// function myFunction() {
//     switch (prompt("what is your grade")) {
//         case "90>":
//             result=("A")
//             break;

//             case "85-90":
//             result=('A-')
//             break;

//             case "80-84":
//             result=('B+')
//             break;

//             case "75-79":
//             result=('B')
//             break;

//             case "70-74":
//             result=('B-')
//             break;

//             case "60-69":
//             result=('C+')
//             break;

//             case "50-59":
//             result=('C')
//             break;

//             case "<50":
//             result=('fail')
//             break;
//     }
// }
// }
// console.log(result);
// // function myFunction(){
// // switch (new Date().getDay()) {
// //     case 0:
// //       day = "Sunday";
// //       break;
// //     case 1:
// //       day = "Monday";
// //       break;
// //     case 2:
// //        day = "Tuesday";
// //       break;
// //     case 3:
// //       day = "Wednesday";
// //       break;
// //     case 4:
// //       day = "Thursday";
// //       break;
// //     case 5:
// //       day = "Friday";
// //       break;
// //     case 6:
// //       day = "Saturday";
// //   }
// // }  