import axiosClient from '../axiosClient'

const customerApi = {
    getAll: () => axiosClient.get('post/readPost.php'),
    create: (params) => axiosClient.post('deposit/customer/insertcustomer.php', params),
    getOne: (id) => axiosClient.get(`post/readPost.php/${id}`),
    update: (id, params) => axiosClient.put(`post/readPost.php/${id}`, params),
}

export default customerApi