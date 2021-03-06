import Taro, { Component } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
/**
 * // NOTE Taro 的 RN 端还未提供 WebView 组件，可以引入原生组件来解决
 * （备注：Taro v1.2.16 已支持，这块代码还是保留作为演示）
 *
 * Taro 有开启了 tree shaking，对于未用到的内容编译时会自动去除
 * 因此可以把相应端的内容都 import 进来，再根据环境进行调用即可
 *
 * 另外 1.2.17 版本有提供了统一接口方式 https://nervjs.github.io/taro/docs/envs.html
 * 可以参考 ./src/pages/user-login 中的实现
 */

// import WebViewRN from './rn'
import './index.scss'

export default class extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: ''
  }


  state = {
    url: '',
    title: ''
  }

  componentWillMount() {
    const url = decodeURIComponent(this.$router.preload.url || '')
    const title = decodeURIComponent(this.$router.preload.title || '')
    this.setState({ url: url })
    Taro.setNavigationBarTitle({ title: title })
  }

  render() {
    return (
      <View className='webview'>
        <WebView src={this.url} />
      </View>
    )
  }
}
