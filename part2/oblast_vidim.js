'use strict'  // строгий режим , чтобы переменные не создавали автоматически в глобальной ОВ

let a,b

function myFn() {
    let b
    a = true
    b = 10
    console.log(a)   // true  глобальная ОВ
    console.log(b)   // 10  локальная ОВ
    console.log(global.b)   // undefined  обратится к глобальной переменной
}

myFn()
console.log(a)  //true
console.log(b)  //undefined

// цепочки видимости
console.log()
console.log('цепочки видимости')
const bb = 5

function myFn2(){
    function inermyFn2(){
        console.log(bb)
    }
    inermyFn2()
}
myFn2()


console.log()
console.log('Необъявленные переменный и строгий режим')
function myFn3() {
    // 'use strict' 
    aa = true
    console.log(aa)
}
myFn3()