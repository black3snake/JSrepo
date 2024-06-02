const arrayF = [
    false,0,'',undefined, null
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
