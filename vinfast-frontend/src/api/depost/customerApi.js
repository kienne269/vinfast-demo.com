import axiosClient from '../axiosClient'

const customerApi = {
    getAll: () => axiosClient.get('deposit/customer/readCustomer.php'),
    create: (params) => axiosClient.post('deposit/customer/createCustomer.php', params),
    postVNPay: (params) => axiosClient.post('deposit/vnpay_php/vnpay_create_payment.php', params),
    createVNPay: (params) => axiosClient.post('deposit/customer/createCustomerVNpay.php', params),
    getOne: (id) => axiosClient.get(`deposit/customer/readCustomer.php/${id}`),
    update: (id, params) => axiosClient.put(`deposit/customer/readCustomer.php/${id}`, params),
}

export default customerApi