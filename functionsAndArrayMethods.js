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
var newArray4 =   array.reduce((data,index)=>{
    return data + index;
})
console.log(newArray4)

var FlipkartCart = [
    {
        
    }
]



