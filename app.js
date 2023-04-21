// document.getElementById("myBtn").addEventListener("click", displaygrade);

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}





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
  let score = prompt("enter your grade")

  switch (true) {
    case (score > 90 && score <= 100):
      console.log("A")
      break;
    case (score >= 85 && score <= 90):
      console.log("A-")
      break;
    case (score >= 80 && score <= 84):
      console.log("B+")
      break;
    case (score >= 75 && score <= 79):
      console.log("B")
      break;
    case (score >= 70 && score <= 74):
      console.log("B-")
      break;
    case (score >= 60 && score <= 69):
      console.log("C+")
      break;
    case (score >= 50 && score <= 59):
      console.log("C")
      break;
    case (score <= 50):
      console.log("fail")
      break;
  }
}

myFunction()

