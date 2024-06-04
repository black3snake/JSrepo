// Условные инструкции
let a = 10
if(a > 5) {
    console.log(a + 5)
}

const person = {
    age : 29
}
if(!person.name) {
    console.log('Имя не указано')
}

console.log(person.name)
console.log(!!person.name)  // превратим значение в бул
console.log(Boolean(person.name))
console.log(!person.name) // и отработает блок кода IF


const age = 18
if(age >= 18){
    console.log('Is adult')
} else if(age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is children')
}
console.log('var 2')

if(age >= 18){
    console.log('Is adult')
} 
if(age >= 12 && age <18) {
    console.log('Is teenager')
} 
if(age < 12) {
    console.log('Is children')
}

// IF в функциях
console.log('IF в функциях')
const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' ||  typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a<=0 || b<=0) {
        return 'Numbers are not positive'
    }
    return a + b
}
console.log(sumPositiveNumber(2, 4))
console.log(sumPositiveNumber(-2, 4))
console.log(sumPositiveNumber(true, 4))

// SWITCH
console.log('введи номер зимнего месяца')

const month = 2
switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимние месяцы')
}

// Тернарный оператор
console.log('Тернарный оператор')
const value = 11
value
    ? console.log('Условие истинно')
    : console.log('Условие ложно')

console.log(value >=0 ? value : -value) // 11

const res = value >=0 ? value : -value
console.log(`res: ${res}`)
