/* ----------fill an array-------- */
let array = new Array(5).fill('Hello');

/* ------remove duplicate an array----- */
let duplicates = [
    'facebook',
    'facebook',
    'google',
    'google',
    'netflix',
    'twitter'
]
let newDuplicate = Array.from(new Set(duplicates));

/* --------merge arrays------- */
let mergeOne = [1, 2, 3, 4];
let mergeTwo = [5, 6, 7, 8];
let newMerge = [...mergeOne, ...mergeTwo]

/* -------function declaration------ */
function namaD(name) {
    return `Hello my name is ${name} || function declaration`
}

/* --function expression or function anonymous-- */
const namaE = function (name) {
    return `Hello my name is ${name} || function expression`
}

/* -------arrow function------- */
const namaA = name => {
    return `Hello my name is ${name} || arrow function`
}

/* --------implisit return------ */
const namaI = name => `Hello my name is ${name} || implisit return`

/* -------map in arrow function------ */
const mapArray = ['Aldi', 'Lukman', 'Maulana', 'Latief'];
// const mapping = mapArray.map(function(map) {
//     return ({nama: map});
// })
const mapping = mapArray.map(map => ({ name: map, length: map.length}))

/* ------constructor function------ */
const Cf = function () {
    this.name = 'Aldi Lukman',
    this.age = 24;
    this.sayHello = function () {
        return `Hello my name is ${this.name} and I'm ${this.age} years old`
    }
    setInterval(() => {
        console.log(this.age++)
    }, 1000)
}

