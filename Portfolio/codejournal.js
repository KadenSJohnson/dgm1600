// variable - containers  taht store values

var name; // a declacred variable, but not initalized (no value) an dits in  the global scope (bad)

let foo; // a declared ES 6 variable that can be chaned - still no value howerever

const bar = "bar"; // a declared es 6 constant taht cannot be changed
// '=' is the assigment operator, read it as "is assigned the value of.."

const ANSWER = 42;

//string - a set of string of charaters

let string1 = "Hello World!";

let string2 = "Hello Utah";

let string3 = new string("hello new world!"); //using a string constructor

// numbers

let myNum = 234632455;

let myNum = 75.25;

("1"); // is not a numeber it is a string

// "==" a loose equality check

"1" == 1; // evaluates to true becausse of type coercion and lose eqality checking

"1" === 1; // false because this is strict equality checking

// boolean

let myBool = false;

// need to look further into truthy and falsey values

// Arrays - hold sets of items of any data type

let myArray = []; // this is an empty array - notice the sqaure brackets

//order matters  ordering 0  1  2  3  4
let myArray2 = [42, "Bob", myBool];

let secondElement = myArray[1]; //retreive the item at the 1 or second position

myArray2.length; // length property of an array is very handy

let lastItem = myArray2[myArray2.legth - 1];

// arrays -hold sets of items of any data type

let myArray = [42, "Bob", myBool, ANSWER, ture];

let secondElement = myArray2[1]; //retreive the item at the 1 or second position of the array

myArray2.length; // the length property of an array is very handy

let lastItem = myArray2[myArray2.length - 1];

// objects

let minObject = {};

let myCar = {
  make: "chevrolet",
  color: "green",
  year: "1964",
  vin: "1256195186196846",
};

myCar.numDoors = 4;

const anotherObject = {
  wordz: ["foo", "bar", "baz"],
  car: {
    make: "McLaren",
    model: "720",
  },
  awesomness: true,
};

// functons

function myfunction() {
  return "my greeting to you is what I return to you!";
}

function sumTwoThings(thingOne, thingTwo) {
  return thingOne + thingTwo;
}

const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");

const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire";
});

let filmURLs = [
  "https://swapi.co/api/films/",
  "https://swapi.co/api/films/5/",
  "https://swapi.co/api/films/4/this one is longer... even longer",
  "https://swapi.co/api/films/6/",
  "https: ",
  "https://swapi.co/api/films/1/",
];

const filmLengths = filmURLs.map((filmURL) => filmURL.length);

const filmPlusMore = filmURL.map((filmURL) => {
  let filmObj = {
    url: filmURL,
    createdDate: Date.now(),
  };
  return filmObj;
});

const pilotNames = pilots.map((pilot) => pilot.name); // new array just contains pilot's names

// Ternary operator syntax: condition ? exprIfTrue : exprIfFalse

// Reduce example

const swpilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

const totalYears = swpilots.reduce((acc, pilot) => acc + pilot.years, 0); // totalYears should === 82

const mostExpPilot = swpilots.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
