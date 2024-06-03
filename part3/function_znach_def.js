function myFn(value, multipir=1) {
    return value*multipir
}
const myFn2 = function(value, multipir=1) {
    return value*multipir
}
const myFn3 = (value, multipir=1) => {
    return value*multipir
}
const array = [myFn, myFn2, myFn3]

array.forEach((item) => {
    console.log(item.name + ': ' , item(5,3))
    console.log(item.name + ': ', item(5))

})

const newPost = (post, addedAt = Date()) => ({  //неявно возвращаем объект (должен быть обернуть в круглые скобки)
   ...post,
   addedAt  // сокращенная запись
})
const newPost2 = (post, addedAt = Date()) => {  // 
    return {...post, addedAt}
}

const firstPost = {
    id: 1,
    author: 'Maxo'
}

console.table(newPost(firstPost))
console.table(newPost2(firstPost))


