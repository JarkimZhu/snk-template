
import UserService from '../services/UserService';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { users: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *queryUsers({ payload: { page } }, { call, put }) {
      const { users, total } = yield call(UserService.queryUsers, page);
      yield put({ type: 'save', payload: { users, total, page } });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(UserService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({ type: 'queryUsers', payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(UserService.update, id, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'queryUsers', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(UserService.create, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'queryUsers', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'queryUsers', payload: query });
        }
      });
    },
  },
};
