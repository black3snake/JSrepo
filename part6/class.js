class Comment {
    // a = 10
    constructor(text) {
        this.text = text
        this.votesQty = 0
        this.a = 10
    }
    vote() {
        this.votesQty += 1
    }
}

const newComment = new Comment('Первый коммент')
console.log(newComment)

Object.keys(newComment).forEach(key => {
    console.log(key, newComment[key])
})

for (const key in newComment) {
    console.log(key, newComment[key])
}
console.log('Проверка принадлежности к классу')
console.log('Comment: ' + `${newComment instanceof Comment}`)
console.log('Object: ' + `${newComment instanceof Object}`)
console.log('Array: ' + `${newComment instanceof Array}`)

newComment.vote()
console.log(newComment.votesQty)
newComment.vote()
console.log(newComment.votesQty)

console.log('ПРоверка принадлежности свойст к экземпляру')
console.log('text: ', newComment.hasOwnProperty('text'))
console.log('vote: ', newComment.hasOwnProperty('vote'))
console.log('votesQty: ', newComment.hasOwnProperty('votesQty'))

class CommentWithStatic {
    constructor(text) {
        this.text = text
        this.votesQty = 0
        this.a = 10
    }
    vote() {
        this.votesQty += 1
    }
    static join(first, second) {
        return `${first} ${second}`
    }
}
console.log('Static метод без создания экземпляра')
console.log(CommentWithStatic.join('First comment', 'Second comment'))


// Расширение других Классов
class NewArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NewArray(2, 6, 8, 10)
console.log(myArray)
console.log('Сложим все элементы массива: ', myArray.sum())