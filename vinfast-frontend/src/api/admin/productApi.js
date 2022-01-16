import axiosClient from '../axiosClient'

const productApi = {
    getAll: () => axiosClient.get('admin/readProducts.php'),
    create: (params) => axiosClient.post('admin/createProducts.php', params),
    getOne: (id) => axiosClient.get(`admin/showProducts.php?id=${id}`),
    update: (params) => axiosClient.post("admin/updateProducts.php", params),
    delete: (id) => axiosClient.post(`admin/deleteProduct.php?id=${id}`),
}

export default productApi