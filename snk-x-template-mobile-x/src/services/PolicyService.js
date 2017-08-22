/**
 * Created by zhujiaqi on 2017/4/20.
 */
import HttpUtils from '../utils/HttpUtils';

export default class PolicyService {
  static getPolicyInfo(frameNo) {
    return HttpUtils.get(`carModels?frameNo=${frameNo}`);
  }
}
