/**
 * Created by zhujiaqi on 2017/4/20.
 */

import PolicyService from '../services/PolicyService';

export default {
  namespace: 'policy',
  state: {
    frameNo: null,
    carInfo: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, frameNo: payload.frameNo.value };
    },
    setCarInfo(state, { payload: { carInfo } }) {
      return { ...state, carInfo };
    },
  },
  effects: {
    *getPolicyInfo(action, { call, put, select }) {
      const frameNo = yield select(state => state.policy.frameNo);
      const data = yield call(PolicyService.getPolicyInfo, frameNo);
      yield put({ type: 'setCarInfo', payload: { carInfo: data.carModels[0] } });
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, query }) => {
    //     if (pathname === '/policy') {
    //       dispatch({ type: 'getPolicyInfo', payload: query });
    //     }
    //   });
    // },
  },
};
