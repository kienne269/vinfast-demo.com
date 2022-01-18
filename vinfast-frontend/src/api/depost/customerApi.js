import axiosClient from '../axiosClient'

const customerApi = {
    getAll: () => axiosClient.get('deposit/customer/readCustomer.php'),
    create: (params) => axiosClient.post('deposit/customer/createCustomer.php', params),
    getOne: (id) => axiosClient.get(`deposit/customer/readCustomer.php/${id}`),
    update: (id, params) => axiosClient.put(`deposit/customer/readCustomer.php/${id}`, params),
}

export default customerApi