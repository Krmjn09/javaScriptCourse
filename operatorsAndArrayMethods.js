//Js operators 
 var num1 = 10;
 var num2 = 40;
 console.log(num1+num2);

// short hand operator
 var a=7;
 var b=89;
 a+=b;
 console.log("a :", a);

//  Increament and decreament

var num=10;
console.log(num);
 num++;  //post increament
console.log(num);
console.log(++num)

// similarly we can do the decreament
console.log(--num);//prefix

// Comparison Operators

var a=9;
var b=9;

// == is for just value
// === is for value and data type

console.log(a==b);

var isCrt=true;
console.log(!isCrt);

// if else
var age=39;
if(age>=18)
{
    console.log("eligible to vote");

}
else
console.log("not eligible");


//Ternary OPerators

age>18 ? console.log("eligible") :console.log("not eligible");

//Functions : group of instructions

var obj1 ={
  name:"TVS",
  bikeName: function(){
  console.log("hello this is bike name");
  }
};
console.log(obj1.name);
obj1.bikeName();

// Nmed Functions
function sum(a,b){
    console.log(a+b);
}
sum(2,3);

//Anonymous function

var sum = function(a,b){
    console.log(a+b);
}
sum(5,5);
