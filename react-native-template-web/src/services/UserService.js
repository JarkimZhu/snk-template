import HttpUtils from '../utils/HttpUtils';

export default {
  queryUsers(page) {
    return HttpUtils.get(`/users?page=${page}`);
  },
  remove(id) {
    return HttpUtils.delete(`/users/${id}`);
  },
  update(id, value) {
    return HttpUtils.patch(`/users/${id}`, value);
  },
  create(value) {
    return HttpUtils.post('/users', value);
  },
};
