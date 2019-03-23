import Taro from '@tarojs/taro';
// eslint-disable-next-line import/prefer-default-export
export const logError = (name, action, info) => {
  if (!info) {
    info = 'empty'
  }
  try {
    let deviceInfo = Taro.getSystemInfo() // 这替换成 taro的
    var device = JSON.stringify(deviceInfo)
  } catch (e) {
    console.error('not support getSystemInfoSync api', e.message)
  }
  let time = new Date()
  console.error(time, name, action, info, device)
  // 如果使用了 第三方日志自动上报
  // if (typeof action !== 'object') {
  // fundebug.notify(name, action, info)
  // }
  // fundebug.notifyError(info, { name, action, device, time })
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }

}
