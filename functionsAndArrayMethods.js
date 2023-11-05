// arrow functions
var sum = (a,b) => console.log(a+b);
sum(4,5); 

// Array Methodology/Methods

var array=[1,2,3,4,5];
console.log("current array => ", array);

// 1. map (to modify a  array)
// call back functions
var newArray = array.map((data) => data+2);
console.log("new array => with map=>", newArray);


// 2. Filter
const newArray2 = array.filter((data) => data<=3);
console.log("Filter => ",newArray2);

// 3. Find
var   newArray3= array.find((data)=> data>3);
console.log("Find => ", newArray3)


// 4. Reduce 
var newArray4 =   array.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
})
console.log(newArray4)

var FlipkartCart = [
    {
       price: 200,
       quantity: 2
    },
    {
        price: 400,
        quantity: 1
     },
     {
        price: 100,
        quantity: 4
     },
     {
        price: 1200,
        quantity: 2
     }
];

var totalCost = FlipkartCart.reduce((accumulator,currentValue) => {
    return accumulator+ currentValue.price * currentValue.quantity;
},0);

console.log(totalCost);

// Promises
// It is an object that returns that we hope to receive in the future but not immediatley

// Syntax : var myPromise = new Promise(() =>{})

// var myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Success");
//     },3000);
    
//     reject("Error Occured");

// });
// myPromise
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});



//Async And Await in Js

//  setTimeout(function(){
//     console.log("1");
//  },3000); 
//  console.log("2");


//  var myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("success")
//     },3000);
//  });

//  var getOurPromise = async () =>{
//     var getOurPromiseResult = await myPromise;
//     console.log(getOurPromiseResult);
//  } ;

//  getOurPromise()