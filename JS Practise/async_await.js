const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('done!'))




const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
    console.log('fetch todo started.')
    return delay(2000).then(() => {
        return fetch(url)
    })
        .then(response => response.json())
}


fetchTodos()
    .then(data => {
        console.log(data)
    })
    .catch(e => { console.log(e) })




async function fetchAsyncTodos() {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('data', data)
    } catch (e) {
        console.error(e)
    } finally {

    }
}
fetchAsyncTodos()