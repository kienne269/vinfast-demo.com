import axiosClient from './axiosClient'

const accountApi = {
    getAll: () => axiosClient.get('user/ReadAccount.php'),
    create: (params) => axiosClient.post('user/CreateAccount.php', params),
    getOne: (id) => axiosClient.get(`user/ReadAccount.php/${id}`),
    update: (id, params) => axiosClient.put(`user/ReadAccount.php/${id}`, params),
}

export default accountApi