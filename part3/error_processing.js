// Обработка ошибок

const ftWithError = () => {
    throw new Error('Какая та ошибка')
}

try {
    ftWithError()

} catch (error) {
    console.error(error)
    console.log(error.message)
}
console.log('Continue..')

