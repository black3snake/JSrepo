// Promise

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(json => console.log(json))
  .catch(error => console.error(error))
// response.json()

fetch('https://jsonplaceholder.typicode.com/todos/60')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error))

fetch('https://jsonplaceholder.typicode.com/todos/60')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error.message))

// Упростим

const getDate = (url) => new Promise((resolve, reject) =>   // можно в отдельный модуль
  fetch(url)
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
)
getDate('https://jsonplaceholder.typicode.com/todos/60')    // просто импортировать
  .then(data => console.log(data))
  .catch(error => console.log(error.message))


//Перепишем нащу промис используя асинк, авейт
const getData2 = async (url) => {
  const res = await fetch(url) 
  const json = await  res.json()
  return json
}

const url = 'https://jsonplaceholder.typicode.com/todos/61'
try {
  const data = await getData2(url)
  console.log(data)

} catch (error) {
  console.log(error.message)
}