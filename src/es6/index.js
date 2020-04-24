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