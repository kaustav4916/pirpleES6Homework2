// what is hoisting?
// Basically, when Javascript compiles all of your code, all variable declarations 
// using var are hoisted/lifted to the top of their functional/local scope
//  (if declared inside a function) or to the top of their global scope 
//  (if declared outside of a function) regardless of where the actual declaration has been made.
//   This is what we mean by “hoisting”.
//how does hoisting work in Javascript?
/* Hoisting is  an unknown or overlooked behavior of JavaScript.
 Hoisting is the javascript mechanism where variable and function declared at the top of the scope
 before code executes.
it is necessary to reduce the bug in the code*/
//When would each be appropriate too use?
//`const` means that the identifier can’t be reassigned.It is always better use const than other
// declaration so that it does not change.
//`let` is needed  to reassign a variable.The variable may be reassigned if it is declared earlier.
//`var` is needed to declare a variable.

// Difference between var,let and const
//var(It is scoped to the nearest function block.)
var valueofnum=10;
function bar(){   
  if(valueofnum==10){
    console.log("hii");    
  }else{
    console.log("bye");
  }
}
bar();
bar();//output hii
//let (It is scoped to the nearest enclosing block, which can be smaller than a function block.)
var num=10;
function bar(){
  let name="kaustav";
  let greeting="bye";
   
  if(num==10){ 
  //or let name="kaustav"; 
    console.log(name);
    
  }else{
  	//or let greeting="bye";
    console.log(greeting);
  }
}
bar();
// const-(it is used to create immutable variables .The value cann't be changed once it is declared.)
const num=10;
function bar(){
  let name="kaustav";
  let greeting="bye";
  //if we try to change the value of const later point of time it will throw an error    
  if(num==1){ 
  //if we try to change the value of const later point of time it will throw an error   
    console.log(name);
    
  }else{
  	//if we try to change the value of const later point of time it will throw an error   
    console.log(greeting);
  }
}
bar();//output:bye

