// let age = 25;
// let price = 12.9;
// let gpa = 2.43;

// console.log(`Your Age is: ${age}`);
// console.log(`Your Price is: ${price}`);
// console.log(`Your GPA is : ${gpa}`);

// let firstName = 'Sadik';
// let age = 23;
// let isStudent = true;

// document.getElementById('p1').textContent = (`Your Name Is ${firstName}`);

// let students = 30;

// students += 2;
// students -= 2;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;


// console.log(students);

// let username ;
// username = window.prompt("what is your username?");
// console.log(username);


// let username;
// document.getElementById("mySumbit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username); 
// }

// let username;
// document.getElementById("mySumbit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);
// }

// let username;
// document.getElementById("mySumbit").onclick = function() {
//     username = document.getElementById("myText").value;
//      console.log(username); 
// }


// const PI = 3.14159;
// let radius;
// let cir;

// document.getElementById("btn").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     cir = 2 * PI * radius;
//     document.getElementById("myH3").textContent = cir + "cm";
// }


const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}