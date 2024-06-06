const asyncFn = async () => {
    return 'Success'
}

asyncFn()
    .then(value => console.log(value))


// Если Асинхронная функция выбрасывает ошибку
const asyncFnError = async () => {
    throw new Error('There was an error!')
}
asyncFnError()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

    
const timerPromise = () => 
    new Promise((resolve, reject) => 
    setTimeout(() => resolve(),2000))

// const asyncFn2 = async () => {
//     console.log('Timer starts')
//     await timerPromise()
//     console.log('Timer ended')
// }
const asyncFn2 = async () => {
    console.log('Timer starts')
    const startTimer = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended :', endTime - startTimer)
}

asyncFn2()
