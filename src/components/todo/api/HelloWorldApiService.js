import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);

export function getHelloWorld() {
    return apiClient.get('/hello-word', {
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
// export const getHelloWorld = () => apiClient.get('http://localhost:8080/hello-word', {
//     auth: {
//         username: 'bader',
//         password: '00'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

export function getHelloWorldPathVariable(name) {
    return apiClient.get(`/hello-word/path-variable/${name}`, {
        auth: {
            username: 'bader',
            password: '00'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// export const getHelloWorldPathVariable = (name) => apiClient.get(`/hello-word/path-variable/${name}`, {
//     auth: {
//         username: 'bader',
//         password: '00'
//     },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })