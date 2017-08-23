/**
 * Created on 2017/4/28.
 * @author JarkimZhu
 */

const prefix = window.location.protocol === 'https:' ? 'https://' : 'http://';
export default {
  SERVER: SERVER ? prefix + SERVER.split('://')[1] : SERVER,
};
