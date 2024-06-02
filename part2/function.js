function myFun(a, b) {
    let c
    a = ++a
    c = a + b
    return c
}

console.dir(myFun)
console.log(myFun(10, 3))

const personOne = {
    Name: 'Bob',
    Age: 34
}
function increasePersonAge(person) {
    person.Age += 1
    return person
}
increasePersonAge(personOne)
console.log(personOne.Age)

function increasePersonAge2(person) {
    const upadateperson = Object.assign({},person)
    upadateperson.Age += 1
    return upadateperson
}

const upadatepersonOne = increasePersonAge2(personOne)
console.log('Оъект person ' + personOne.Age)
console.log('Объект updatepersonOne ' + upadatepersonOne.Age)

// КолБек Функции
function printMyName() {
    console.log('Maxo')
}
setTimeout(printMyName, 1000)
