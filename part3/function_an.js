console.log('Функциональные выражения')

const myFn = function(a,b) {
    let c
    ++a
    return c = a + b
}
console.log(myFn(5,4))

setTimeout(function(){ console.log('Отложенное сооьщение') },3000)