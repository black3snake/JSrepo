// Стрелочные функции
const myFn = (a, b) => {
    let c
    ++a
    return c = a + b
}

console.log(myFn(5,4))

setTimeout(() => { console.log('Отложенное сооьщение') },3000)

{
    console.log('Сокращенная запись стоелочной функции')
    let sum = (a1,b1) => a1 + b1
    console.log(sum(5,7))
}
