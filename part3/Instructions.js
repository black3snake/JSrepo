// Инструкции

function myFn(a) {
    console.log(a);  // выражение =инструкция
}

const b = true; // инст
let c = 10;     // инст

myFn(2 + 3)   // выражение
myFn(b)     // вы
myFn(c = c + 1) // выр
myFn(c = c + 1;) // Uncaught syntax err
myFn(let d)         // Uncaught syntax err 



