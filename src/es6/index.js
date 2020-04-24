function newFunction(name, age, country) {
    var name = name || 'Jefferson'
    var age = age || 27
    var country = country || 'EC'
    console.log(name, age, country)
}

// es6
function newFunction2(name = 'Jefferson', age = 27, country = 'EC') {
    console.log(name, age, country)
}
newFunction2()
newFunction2('Felipe', '26', 'MX')

let hello = "Hello"
let word = "Word"
let concadenacion = hello + ' ' + word

let concadenacion1 = `${hello} ${word}`
console.log(concadenacion1)

//let y const, Multilinea, Spread Operator y Desestructura

let lorem = "lorem noinsjf jndkn \n" +
    "otra frase"
let lorem2 = `otra frase epica,
pues es otra`
console.log(lorem)
console.log(lorem2)

// desestructuracion
let person = {
    name: 'Jefferson',
    age: 27,
    country: 'EC'
}
console.log(person.name, person.age, person.country)
let { name, age, country } = person
console.log(name, age, country)

// Spread Operator
let team1 = ['Oscar', 'Jefferson', 'Leon']
let team2 = ['Valeria', 'Maria', 'Fiorella']
let education = ['David', ...team1, ...team2]
console.log(education)

// let var const
{
    var globalVar = 'variable global'
}

{
    let global1 = 'letGlobal'
    console.log(global1)
}
console.log(globalVar)

// Parámetros en objetos
let name = 'Jefferson'
let age = 27
obj = { name: name, age: age }
obj1 = { name, age }
console.log(obj)
console.log(obj1)

//Arrow Function
const names = [
    { name: 'Fiorella', age: 25 },
    { name: 'Jefferson', age: 27 }
]
let listOfName = names.map(function(item) {
    console.log(item.name)
})
let listOfName1 = names.map(item => console.log(item.name))
    /* const listOfName2 = (name, age, country) => {
        ...
    }
    const listOfName3 = name => {
        ...
    }
    const listOfName4 = num => num * num */

// Promesas
const helloPromesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!!')
        }
    })
}

helloPromesa()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))