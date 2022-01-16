import axiosClient from './axiosClient'

const postApi = {
    getAll: () => axiosClient.get('post/readPost.php'),
    create: (params) => axiosClient.post('post/CreatePost.php', params),
    getOne: (id) => axiosClient.get(`post/readPost.php/${id}`),
    update: (id, params) => axiosClient.put(`post/readPost.php/${id}`, params),
}

export default postApi