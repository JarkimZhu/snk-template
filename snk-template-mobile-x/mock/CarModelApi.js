/**
 * Created by zhujiaqi on 2017/8/11.
 */

import { ArrayUtils } from 'snk-libs';

const CAR_MODELS = [
  {
    carName:'比亚迪·唐',
    carCode:'NB123',
    seatCount:5
  }
];

export default {
  'GET /carModels': (req, rsp) => {
    const page = req.query.frameNo;
    rsp.json({
      code: 0,
      data: {
        total: CAR_MODELS.length,
        carModels: CAR_MODELS
      },
    });
  },
};
