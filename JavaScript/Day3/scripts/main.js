// var btn = document.getElementsByTagName('button');
// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.backgroundColor = 'skyblue';

// var tab = document.createElement('table');
// var tabR = document.createElement('tr');
// var tabH1 = document.createElement('th');
// var tabH2 = document.createElement('th');
// tabH1.innerText = "Name";
// tabH2.innerText = "Email";
// tabR.appendChild(tabH1);
// tabR.appendChild(tabH2);
// tab.appendChild(tabR);
// document.body.appendChild(tab);

// var target = document.getElementById('square');

// function btnShow(){
//     target.style.display = 'block';
// }
// function btnHide(){
//     target.style.display = 'none';
// }
// // function btnMouseHover(){
// //     alert("Mouse over the button");
// // }

// document.querySelectorAll('button').forEach(e=>{
//     e.addEventListener('click', ()=>{
//         console.log("Button Clicked");
//     })
// })

// document.querySelectorAll('button').forEach(e=>{
//     e.classList.add('bg-primary');
//     e.classList.remove('text-whi');
// })

// function validate(e){
//     e.preventDefault();
//     var data = document.form['loginform']['name'].value;
//     alert(nameValue);
//     if(nameValue.length <= 2){
//         document.getElementById('name').style.borderColor = 'red';
//         document.getElementById('error-name').innerText = 'Invalid Name';

//     } 
// }

// var array = [1,2,3,4,5,6,7,8,9];
// console.log(array.slice(4,8));

function add(x,y){
    return x+y;
}
// add(5,2)
var sum = add(3,4);
console.log(sum)
