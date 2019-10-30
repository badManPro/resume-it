import axios from 'axios'

export function getData() {
    const url = '/api/cnMsg'
    return axios.get(url).then((res) => {
        return Promise.resolve(res.data)
    })
}