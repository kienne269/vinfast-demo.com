import axiosClient from '../axiosClient'

const dashboardApi = {
    getCustomerAll: (from, to) => axiosClient.get(`admin/fromDayToDay.php?from=${from}&to=${to}`),
    getAccountAll: (from, to) => axiosClient.get(`admin/fromDayToDayAccount.php?from=${from}&to=${to}`),
    // getTotal: () => axiosClient.get('admin/readMonth.php'),
    // create: (params) => axiosClient.post('user/CreateAccount.php', params),
    // getOne: (id) => axiosClient.get(`user/showAccount.php?id=${id}`),
    // update: (params) => axiosClient.post(`user/UpdateAccount.php`, params),
    // delete: (id) => axiosClient.post(`admin/deleteProduct.php?id=${id}`),
}

export default dashboardApi