// Циклы
for (let i = 0; i < 5; i++) {
    console.log(i)
}

const array = new Array('One', 'Two', 'Three')
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach((elememt, index) => {
    console.log(`${elememt} : ${index} `)
})

console.log('Цикл while')
let a = 0
while (a <= 5) {
    console.log(a)
    a++
}

console.log('Цикл do while')
a = 0
do {   // Выполнится хотя бы один раз!!
    console.log(a)
    a++
} while (a <= 5)



console.log('Цикл FOR IN')
for (const key in array) {
    console.log(key, array[key])
}


console.log('Цикл FOREACH  with key , value (Object.value) ')
Object.keys(array).forEach(key => {
    console.log(key, array[key])
})

console.log('Цикл FOR OF')  // перебор всех символов в строке
const myStr = 'Join'
for (const letter of myStr) {
    console.log(letter)
}

for (const elememt1 of array) { // итерироваться по массиву
    console.log(elememt1)
}


console.log('Самый лучший вариант')  // перебор всех элементов в массиве
array.forEach(elememt => {
    console.log(elememt)
})