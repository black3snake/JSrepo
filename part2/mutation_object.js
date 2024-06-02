const person = {
    name: 'Ivan',
    Old: 40,
    isMarr: false,
    info: {
        test: 'One'
    }
}
// вар 1
// создание копии объекта но только не вложенных объектов!!
const person2 = Object.assign({}, person)

person2.Old = 43
person2.info.test = 'Two'

console.log('создание копии объекта, но только не вложенных объектов!!')
console.log('первый объект: ' + person.Old)
console.log('второй объект: ' + person2.Old)
console.log('первый объект: ' + person.info.test)
console.log('второй объект: ' + person2.info.test)

// вар 2
// разделение объекта на свойства и сборку его заного и создание нового объекта
// такие же нюанысы с копированием, что и в вар1
const person3 = { ...person }
person3.name = 'Alice'
person2.info.test = 'Three'
console.log('разделение объекта на свойства и сборку его заного и создание нового объекта, но только не вложенных объектов!!')
console.log('первый объект: ' + person.name)
console.log('третий объект: ' + person3.name)
console.log('первый объект: ' + person.info.test)
console.log('третий объект: ' + person3.info.test)

// вар 3
// создание нового объекта через конвертацию JSON
const person4 = JSON.parse(JSON.stringify(person))
person4.name = 'MAxo'
person4.info.test = 'Four'
console.log('создание нового объекта через конвертацию JSON')
console.log('первый объект: ' + person.name)
console.log('четвертый объект: ' + person4.name)
console.log('первый объект: ' + person.info.test)
console.log('четвертый объект: ' + person4.info.test)

