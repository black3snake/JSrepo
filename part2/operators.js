const arrayF = [
    false, 0, '', undefined, null
]
arrayF.forEach((item) => {
    console.log(Boolean(item))  //ложные значения
})

arrayF.forEach((item) => {
    console.log(typeof item)  //определение типа
})

console.log()
console.log('Сравнение ')
console.log(typeof 10 === 'number')

let isUndefined
console.log('Сравнение ' + isUndefined)
console.log(typeof isUndefined === 'undefined')

//Двойное отрицание !!
const obj1 = {}
console.log('Двойное отрицание !! для пустого объекта')
console.log(!!obj1)

console.log('Maxo' || 'Default value') // при 1 true возвр. резул 1 выр.
console.log('' || 'Default value') // при 1 false возвр. резул 2 выр.
console.log('Maxo' && 'Default value') //при 1 true возвр. резул 2 выр.
console.log('' && 'Default value') //при 1 false возвр. резул 1 выр.

let a1 = 10
a1 && console.log('Выполнено')
let a2
a2 && console.log('Выполнено') // альтернатива IF (короткая запись)


//Оператор … разделение объекта на свойства
console.log('Оператор … разделение объекта на свойства')
const button = {
    width:200,
    test: 'black'
}
console.log(button)
const redButton = {
    ...button,
    color: 'red'
}
console.log(redButton)
console.table(redButton)
console.dir(redButton)


console.log('Объеденение 2 и более объектов путем оператора ... разделение на свойства')
const buttonInfo = { test: 'Buy'}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
const buttonJoin = {  // порядок влияет как будут перезаписываться одинаковые свойства
    ...buttonInfo,
    ...buttonStyle
}
console.table(buttonJoin)

// Шаблонные строки (объеденение строк, слов )
const question1 = 'Как вас зовут:'
const nameP = 'Maxo'
const question2 = 'В каком городе вы проживаете:'
const city = 'БуеноСайрос'
console.log(question1 + ' ' + nameP)
console.log(`${question1} ${nameP}`)
console.log(question2 + ' ' + city)
console.log(`${question2} ${city}`)
