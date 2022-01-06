import axiosClient from './axiosClient'

const userEndpoint = 'admin'

const userApi = {
    getAll: () => axiosClient.get(userEndpoint),
    create: (params) => axiosClient.post(userEndpoint, params),
    getOne: (id) => axiosClient.get(`${userEndpoint}/${id}`),
    update: (id, params) => axiosClient.put(`${userEndpoint}/${id}`, params),
}

export default userApi

console.log(userApi)