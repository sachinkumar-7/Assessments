// var i = 10;
// var j = 5;
// if (i>j) {
//     document.write("i is the largest");
// }
// else if(j < i){
//     document.write("j is the largest")
// }
// else{
//     document.write("Both are equal")
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`2 * {i} = {2*i}`);
// }
// var i = 1;
// while(i <= 10){
//     console.log(i)
//     i++;
// }
// while(true){
//     var fullName = prompt("What is your name?");
//     if(fullName == "q"){
//         break;
//     }
//     console.log("Hi" + fullName);
// }

// while(true){
//     var emailId = prompt("Enter your Email Id");
//     var password = prompt("Enter your password");

//     if(emailId =="sample@gmail.com" && password == "123@sk"){
//         console.log("login successful");
//         break;
//     }
//     else{
//         console.error("Invalid login details");

//     }

// }

// function greet(name) {
//     console.log("Hello" + name);
// }
// greet("Jane");

// var person = {
//     fullName : "John Doe",
//     age : 25,
//     email : 'john@doe.com'
// }
// person.fullName = 'New Name';
// person.planet = 'Earth';

// console.log(person.fullName);
// console.log(person['age']);

// var student = {
//     id : 1,
//     mark1 : 45,
//     mark2 : 50,
//     total : function(){
//         var extraMark = 5;
//         return this.mark1 + this.mark2 + extraMark;
//     }
// }
// console.log(student.total);

// Arrays

// var data = ["My name", 25]


// var person = {
//     fullName : 'Sachin Kumar',
//     emailId : 'sample@gmail.com',
//     phoneNumber : [6387189236,6387193634],
    
// }
// console.log(person.phoneNumber[1]);

// var numbers = []; //var numbers = new array()
// for(var i = 0; i < 10; i++){
//     let num = parseInt(prompt('Enter the number'));
//     numbers.push(num);


// }

largest = numbers[0];
 for (let i = 0; i < numbers.length; i++) {
    const element = array[i];
    if(element > largest){
        largest = element;
    }
    
 }
 console.log(largest)