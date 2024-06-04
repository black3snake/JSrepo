// Деструктуризация объекта

const userProfile = {
    name: 'Maxo',
    CommentQty: 23,
    hasSignedAgreement: false
}

const {name, CommentQty} = userProfile
const {hasSignedAgreement} = userProfile

console.log(name)
console.log(CommentQty)
console.log(hasSignedAgreement)


console.log(typeof name)
console.log(typeof CommentQty)
console.log(typeof hasSignedAgreement)
console.log(typeof userProfile)
console.table(userProfile)

// Деструктуризация массива
const array = new Array('One','Two', 3)
const [item1, item2, item3] = array
console.log(typeof item1)
console.log(typeof item3)
console.log(item1 + ' ' + item2 + ' ' + item3)

// Деструктуризация в функциях
// будем использовать уже созданный ранее объект
const userInfo = ({name, CommentQty}) => {   // ({name, CommentQty}) Деструктуризация параметров функции
    if(!CommentQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${CommentQty} comments`
}

console.log(userInfo(userProfile))

