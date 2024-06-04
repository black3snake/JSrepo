console.log('Создание оъекта массив')

const array1 = [1,2,3]
console.log(array1)

const array2 = new Array(1,2,3)
console.log(array2)
console.log(array2[0])
console.log(array2.length)

//array2[4] = false
array2.push(false)
array2.push(100)
console.table(array2) 
const remElem = array2.pop()
array2.pop()
console.log(array2) 
console.table(array2) 
console.log(array2.length)
console.log(remElem)

array2.unshift(true)  // добавляет элемент в начало массива
console.log(array2) 

array2.forEach(el => console.log(el))
array2.shift()  // удаляет первый элемент в массиве
console.log(array2) 

const newArray = array1.map(el => el * 3)
const newArray2 = array1.map((el) => {   // если отсутсвует return то функция ничего не возвращает
    el * 3
    // return el * 3  // нужно поставить вместо строки выше  (возврят результата явно)
})
const newArray3 = array1.map(function(el) {  
    return el * 3 
})
console.log(newArray)
console.log(newArray2)
console.log(newArray3)

