export const useResource = () => {
  return {
    posts: wrapPromise(fetchPosts()),
    users: wrapPromise(fetchUsers())
  }
}

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

const wrapPromise = promise => {
  let result
  let status = 'pending'

  const suspender = promise
    .then(data => {
      result = data
      status = 'success'
    }, e => {
      result = e
      status = 'error'
    })
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    }
  }
}

const fetchPosts = () => {
  return delay(2000)
    .then(() => fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'))
    .then(r => r.json())
}

const fetchUsers = async () => {
  await delay(1000)
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return await res.json()
}