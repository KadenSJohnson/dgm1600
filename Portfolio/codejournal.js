// variable - containers  taht store values

var name; // a declacred variable, but not initalized (no value) an dits in  the global scope (bad)

let foo; // a declared ES 6 variable that can be chaned - still no value howerever 

const bar = "bar"; // a declared es 6 constant taht cannot be changed
// '=' is the assigment operator, read it as "is assigned the value of.."

const ANSWER = 42; 

//string - a set of string of charaters

let string1 = "Hello World!"

let string2 = "Hello Utah"

let string3 = new string("hello new world!") //using a string constructor

// numbers 

let myNum = 234632455;

let myNum = 75.25;

"1" // is not a numeber it is a string

// "==" a loose equality check

"1" == 1; // evaluates to true becausse of type coercion and lose eqality checking

"1" === 1; // false because this is strict equality checking

// boolean

let myBool = false;

// need to look further into truthy and falsey values

// Arrays - hold sets of items of any data type 

let myArray = []; // this is an empty array - notice the sqaure brackets


//order matters  ordering 0  1  2  3  4 
let myArray2 = [42, "Bob", myBool]

let secondElement = myArray[1]; //retreive the item at the 1 or second position

myArray2.length // length property of an array is very handy

let lastItem = myArray2[myArray2.legth -1];