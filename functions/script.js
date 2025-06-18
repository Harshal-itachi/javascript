


//simple function
function a(){
     console.log("simple function");
}
a();



//function expression


let b=function abc()
{
    console.log("function expression");
    return "hello a ";
}
b();


//paramter function


let num1=5;
let num2=5
function add(num1,num2)
{
    let num3=num1+num2;
    return num3;
}
let num4=add(num1,num2);
console.log("Addition by using paramiterized function",num4);


//ARROW FUNCTION

let c= ()=>{
    console.log("arrow function ");
}
c();
//IIFE
(function(){
    console.log("i am immediately invoked function expression")
})()




//VALUES FROM IIFE

let result=(function(){
    var name="harshal";
    console.log("iife");
    return name;
})();

console.log("name=",result);

//higher order function
function xx(){
    console.log("hello from x inside y");
}
function y(xx){
    xx();
}
y(xx);


//diff in arrow and function statement

const user={
   
    harshal:"10",
    
    heh:function b(){
        console.log(this.harshall);
    },
    aw:()=>{
        console.log(this.harshal);
    }
}
user.heh();
user.aw();

//closure



function welcome(name){
    var greetinginfo=function(message){
        console.log(message," ",name);
        
    };
    return greetinginfo;
}
var myfunction=welcome("harshal");
myfunction("closure");
myfunction("hello mr");



//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}



//while loop
let num=1;
while(num<=10)
{
    console.log(num)
    num++;
}

//do while

let z=10;
do{
    console.log(z);
z++;
}
while(z<=20);

//for each loop


let arr=["simran","simar","charn","hrshal"];
arr.forEach((element,index) => {
    console.log(`${element} at index${index}`);
});


//for of loop




for(let name of arr ){
    console.log(name);
}


//for in loop



let usr={
    username:"harshal",
    password:"123"
}
for(let user in usr){
    console.log(`${user} value :${usr[user]}`);
}


//ternanry operator


let x=100;
(x<40)?console.log("ture"):console.log("false");

//nullish operator


var username=null;
let name=username??"harshal";
console.log(name);


//optional chaining

let animal={
    dog:{
        name:"pugg"
    }
}
let name2=animal.dog?.name;
console.log(name2);



//switch statement


let sw=50;



switch(sw)
{
    case 20:
    case 50 :console.log("exact");
    break;
    default:
        console.log("not exact");
}