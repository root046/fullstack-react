import {apiClient2} from "./ApiClient";

export function getHelloWorld() {
    return apiClient2.get('/hello-word'
    //     , {
    //     auth: {
    //         username: 'bader',
    //         password: '00'
    //     },
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    )
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
    return apiClient2.get(`/hello-word/path-variable/${name}`)
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