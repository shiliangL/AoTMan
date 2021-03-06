import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/index/index',
      'pages/my/index',
      'pages/course/index',
      'pages/coach/index',
      'pages/login/index',
      'pages/placeOrder/index',
      'pages/order/index',
      'pages/webview/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle:'custom',
    },
    tabBar: {
      color: "#666",
      selectedColor: "#24d75f",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/icon/home.png",
        selectedIconPath: "./assets/icon/home.png",
        text: "首页"
      }, {
        pagePath: "pages/my/index",
        iconPath: "./assets/icon/my.png",
        selectedIconPath: "./assets/icon/my.png",
        text: "个人"
      }]
    },
  }

  componentDidMount() {
    console.log('componentDidMount app');

  }



  componentDidShow() {
    console.log('componentDidShow app');
  }

  componentDidHide() {
    console.log('componentDidHide app');
  }

  componentDidCatchError() {
    console.log('componentDidCatchError app');
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
