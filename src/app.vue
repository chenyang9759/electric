<style lang="less">


  @import 'style/weui.wxss';
  page{
  	background:#f4f5fa;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
</style>

<script>
  import wepy from 'wepy'
  import update from './service/update'
  import 'wepy-async-function'
  import {api} from './config'
  import http from './utils/request'


  export default class extends wepy.app {
    config = {
      pages: [
        'pages/index',
        'pages/record',
        'pages/mine',
        'pages/parkingPay',
        'pages/chooseParking',
        'pages/listDetail',
        'pages/recordDetail',
        'pages/arrearRecord',
        'pages/checkPay',
        'pages/allDay',
        'pages/allHour',
        'pages/paySuccess',
        'pages/search',
        'pages/renewal',
        'pages/mine/card',
        'pages/mine/wallet',
        'pages/mine/income',
        'pages/mine/coupon',
        'pages/mine/coupondetail',
        'pages/mine/parkcard'








      ],
      "permission": {
        "scope.userLocation": {
          "desc": "你的位置信息将被使用"
        }
      },
      "networkTimeout": {
        "request": 6000
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#808082',
        selectedColor: '#00c8b3',
        borderStyle: 'black',
        backgroundColor: '#fff',
        list: [
          {
            pagePath: 'pages/index',
            text: '首页',
            iconPath: 'assets/images/icon/home.png',
            selectedIconPath: 'assets/images/icon/home_selected.png'
          },
          {
            pagePath: 'pages/record',
            text: '停车记录',
            iconPath: 'assets/images/icon/action.png',
            selectedIconPath: 'assets/images/icon/action_selected.png'
          },
          {
            pagePath: 'pages/mine',
            text: '我的',
            iconPath: 'assets/images/icon/user.png',
            selectedIconPath: 'assets/images/icon/user_selected.png'

          }

        ]
      }


    }



    globalData = {
      userInfo: null,
      timout:''
    }

    constructor () {
      super()
      this.use('requestfix')
      this.use('promisify')
      this.intercept('request', {
        // 发出请求时的回调函数
        config (p) {
          // 对所有request请求中的OBJECT参数对象统一附加时间戳属性
          // p.timestamp = +new Date();
          // console.log('config request: ', p);
          // 必须返回OBJECT参数对象，否则无法发送请求到服务端
          return p;
        },
        // 请求成功后的回调函数
        success (p) {
          // 可以在这里对收到的响应数据对象进行加工处理
          // console.log('request success: ', p);
          // 必须返回响应数据对象，否则后续无法对响应数据进行处理
          const self = this
          if(p.statusCode == 502 || !p){
            wx.hideLoading()
           
//          wx.showToast({
//            title: '网络连接失败，请稍后再试！',
//            icon: 'none',
//            duration: 3000
//          })
//          clearTimeout(self.timeout)
//          self.timeout = setTimeout(function(){
//          	let data = {
//	              "sendSMS":"sms_server_fault",
//	              "phone":"15332428516",
//	              "templateType":2,
//	              "message":"支付异常(ourmrc)"
//	            }
//	            try{
//	              const dataInfo = wepy.request({
//	                method: api.pay.sendMsg.method,
//	                url: api.pay.sendMsg.url,
//	                data:JSON.stringify(data)
//	              })
//	              
//	
//	            } catch(e){
//	              console.log(e)
//	            }
//          },6000)
            




          }

          return p;
        },
        //请求失败后的回调函数
        fail (p) {
          console.log('request fail: ', p);
          wx.showToast({
            title: '网络连接失败，请稍后再试！',
            icon: 'none',
            duration: 3000
          })
//        let data = {
//          "sendSMS":"sms_server_fault",
//          "phone":"15332428516",
//          "templateType":2,
//          "message":"支付异常"
//        }
//        try{
//          const dataInfo = wepy.request({
//            method: api.pay.sendMsg.method,
//            url: api.pay.sendMsg.url,
//            data:JSON.stringify(data)
//          })
//          // console.log(dataInfo)
//          if(dataInfo.data.code == 0){
//
//          }
//
//        } catch(e){
//          console.log(e)
//        }
          // 必须返回响应数据对象，否则后续无法对响应数据进行处理
          return p;
        },
        // 请求完成时的回调函数(请求成功或失败都会被执行)
        complete (p) {
          // console.log('request complete: ', p);
        }
      })

    }

    onLaunch() {
      this.testAsync()
    }

    async onShow(){
      await update.getupdate()
    }

    sleep (s) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('promise resolved')
        }, s * 1000)
      })
    }

    async testAsync () {
      const data = await this.sleep(3)
      console.log(data)
    }

    getUserInfo(cb) {
      const that = this
      if (this.globalData.userInfo) {
        return this.globalData.userInfo
      }
      wepy.getUserInfo({
        success (res) {
          that.globalData.userInfo = res.userInfo
          cb && cb(res.userInfo)
        }
      })
    }
  }
</script>
