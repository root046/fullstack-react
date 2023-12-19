import axios from 'axios'

export function getHelloWorld() {
    return axios.get('http://localhost:8080/hello-word', {
        auth: {
            username: 'bader',
            password: '00'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// this is also another way
// export const getHelloWorld = () => axios.get('http://localhost:8080/hello-word', {
//     auth: {
//         username: 'bader',
//         password: '00'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })