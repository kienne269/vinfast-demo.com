import axiosClient from './axiosClient'

const accountApi = {
    getAll: () => axiosClient.get('user/ReadAccount.php'),
    create: (params) => axiosClient.post('user/CreateAccount.php', params),
    getOne: (id) => axiosClient.get(`user/ShowAccount.php?id=${id}`),
    update: (id, params) => axiosClient.post(`user/UpdateAccount.php`, params),
    delete: (id) => axiosClient.post(`admin/deleteProduct.php?id=${id}`),
}

export default accountApi