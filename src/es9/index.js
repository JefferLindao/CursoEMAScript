// EMAScript9
const obj = {
    name: 'Jefferson',
    age: 27,
    country: 'EC'
}

let { country, ...all } = obj
console.log(all)

// Propiedades de propagacion

const obj = {
    name: 'Jefferson',
    age: 27
}

const obj1 = {
    ...obj,
    country: 'EC'
}
console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('HelloWord'), 3000): reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const macth = regexData.exec('2020-04-24')
const year = macth[1]
const month = macth[2]
const day = macth[3]
console.log(year, month, day)