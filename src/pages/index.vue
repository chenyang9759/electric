<style lang="less">
  page{
    width:100%;
    height:100%;
    background:#f4f5fa;
    position: relative;
    top:0;
    left:0;
  }
  .box{
    width:100%;
    height:100%;
    background:#fff;
  }
  swiper{
    width:100%;
    height:450rpx;
    background: #fff;
    .slider-image{
      width: 100%;
      height:450rpx;

    }
  }

  .box_logo{
    width:150rpx;
    height:150rpx;
    position: absolute;
    top:200rpx;
    left:300rpx;
    border-radius: 50%;
    overflow: hidden;
    image{
      width:100%;
      height: 100%;
    }
  }
  .box_company{
    width:100%;
    color:#333;
    text-align: center;
    font-size:32rpx;
    line-height:80rpx;
    position:absolute;
    top:350rpx;
  }
  .box_des{
    width:100%;
    text-align: center;
    color:#666;
    font-size:28rpx;
    position:absolute;
    top:440rpx;
    .box_des_h{
      font-size:32rpx;
      color:#333;
    }
  }
  .box_btn{
    width:80%;
    height:80rpx;
    margin-left: 10%;
    position:absolute;
    bottom:190rpx;
    .green-btn{
      background-color: #00c8b3;
      color:#fff;

    }
    .green-btn:hover{
  	background:#a1eee6;
  }
    .green-btn::after{
      border:none;
    }

  }
  .list{
    width:718rpx;
    height:170rpx;
    border-radius: 10rpx;
    margin-left:16rpx;
    box-sizing: border-box;
    margin-top: 10rpx;
    margin-bottom: 20rpx;
    position:relative;
    .list_left{
      width:100rpx;
      height:100rpx;
      position: absolute;
      top:35rpx;
      left:50rpx;

      image{
        width:100rpx;
        height:100rpx;
      }
    }
    .list_right{
      position:absolute;
      left:200rpx;
      color:#fff;
      .list_right_top{
        font-size:44rpx;
        margin-top:26rpx;
      }
      .list_right_bot{
        font-size:24rpx;
      }
    }
  }
  .list_tcjf{
    background:#00c8b3;
    box-shadow:0px 4px 40px rgba(0,0,0,0.2);
  }
  .list_bjqf{
    background:#F5b400;
    box-shadow:0px 4px 40px rgba(0,0,0,0.2);
  }
  .list_jjcs{
    background:rgba(255, 153, 0, 1);
    box-shadow:0px 4px 40px rgba(0,0,0,0.2);
  }
  .list_tccs{
    background:#FF3300;
    box-shadow:0px 4px 40px rgba(0,0,0,0.2);
  }
  .line{
    width:100%;
    height:20rpx;
    background:#F2F2F2;
  }
  .line_w{
    background:#fff;
  }
  .adver{
    width:100%;
    height:146rpx;

    image{
      width:100%;
      height:146rpx;
    }
  }
  .adver_bot{
    height:150rpx;
  }
  .wxgzh{
    width:100%;
    position: absolute;
    bottom:0rpx;
  }

  .dia{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index: 99;
    background: rgba(0,0,0,0.4);
    .dia_cont{
      width:600rpx;
      height:420rpx;
      position: absolute;
      top:50%;
      left:75rpx;
      margin-top: -200rpx;
      background:#fff;
      border-radius:10rpx;
      .dia_tit{
        text-align: center;
        font-size:36rpx;
        line-height: 80rpx;
        margin-top: 20rpx;
      }
      .dia_content{
        font-size:28rpx;
        color:#666;
        width:80%;
        margin-left: 10%;
        margin-top: 20rpx;
        line-height: 40rpx;
        text-align: justify;
        text-align-last: left;





      }
  .green-btn{
    width:80%;
    margin-left: 10%;
    background-color: #00c8b3;
    color:#fff;
    margin-top: 60rpx;

  }
   .green-btn:hover{
  	background:#a1eee6;
  }
  .green-btn::after{
    border:none;
  }
    }
  }

</style>
<template>
  <!--<view class="wxgzh" wx:if="{{islogin}}">-->
    <!--<official-account></official-account>-->
  <!--</view>-->
  <!--dialog-->
  <!--<view class="dia" wx:if="{{isDialog}}">-->
    <!--<view class="dia_cont">-->
      <!--<view class="dia_tit">-->
        <!--授权手机号码-->
      <!--</view>-->
      <!--<view class="dia_content">-->
        <!--我们需要您的授权获得您在微信中绑定的手机号码-->
      <!--</view>-->
      <!--<button class="weui-btn green-btn" open-type="getPhoneNumber" @tap="closeDia" bindgetphonenumber="setPhoneNumber">绑定手机号</button>-->
    <!--</view>-->
  <!--</view>-->
  <!--未授权-->
  <!--<view class="box" wx:if="{{islogin}}">-->
    <!--<view class="box_logo">-->
      <!--<image src="https://caoke.oss-cn-beijing.aliyuncs.com/logo.jpg"></image>-->
    <!--</view>-->
    <!--<view class="box_company">-->
       <!--从化停车-->
    <!--</view>-->
    <!--<view class="box_des">-->
      <!--<view class="box_des_h">Hi~请登录</view>-->
      <!--&lt;!&ndash;<view>登录后分时聚合将为您更好服务</view>&ndash;&gt;-->
    <!--</view>-->
    <!--<view class="box_btn">-->

      <!--<button class="weui-btn box_bot green-btn" open-type="getPhoneNumber" wx:if="{{isPhoneNumber}}" bindgetphonenumber="setPhoneNumber">绑定手机号</button>-->
      <!--<button class="weui-btn box_bot green-btn" open-type="getUserInfo" wx:if="{{!isPhoneNumber}}" bindgetuserinfo="handleUserInfo">微信用户快速登录</button>-->

      <!--&lt;!&ndash;<button class="weui-btn box_bot green-btn" @tap="userLogin">微信用户快速登录</button>&ndash;&gt;-->
    <!--</view>-->
  <!--</view>-->
  <!--已授权-->

  <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
    <block class="slider">
      <swiper-item>
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/sli.png" class="slider-image" mode='aspectFit'/>
      </swiper-item>
    </block>
  </swiper>
  <!--停车缴费-->
  <view class="page">
    <view class="list list_tcjf" wx:if="{{tcjf}}" @tap="toParkingPay('{{tcjfId}}')">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/tcjf.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">停车缴费</view>
        <view class="list_right_bot">点击为您的车辆缴纳停车费用</view>
      </view>
    </view>
    <!--停车中-->
    <view class="list list_tcjf list_tcz" wx:if="{{tcz}}" @tap="toRenewal">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/tcjf.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">停车中</view>
        <view class="list_right_bot">可停放至：{{tctime}}</view>
      </view>
    </view>
    <!--即将超时续费-->
    <view class="list list_jjcs" wx:if="{{jjcs}}" @tap="toRenewal">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/jjcs.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">即将超时续费</view>
        <view class="list_right_bot">您有停车中的订单即将超时，点击进行续费</view>
      </view>
    </view>
    <!--超时续费-->
    <view class="list list_tccs" wx:if="{{tccs}}"  @tap="toreDe">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/tccs.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">停车超时续费</view>
        <view class="list_right_bot">您有停车中的订单已经超时，点击进行续费</view>
      </view>
    </view>
    <!--补缴欠费-->
    <view class="list list_bjqf" wx:if="{{bjqf}}" @tap="tosearch('{{bjqfId}}')">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/bjqf.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">补缴欠费</view>
        <view class="list_right_bot">输入车牌查询您是否有欠费的记录</view>
      </view>
    </view>
    <!--广告-->
    <view class="line line_w"></view>
    <view class="line"></view>
    <view class="adver">
      <image src="https://caoke.oss-cn-beijing.aliyuncs.com/adv1.jpg"></image>
    </view>
    <view class="line"></view>
    <!--<view class="adver adver_bot">-->
      <!--<image src="https://caoke.oss-cn-beijing.aliyuncs.com/ad2.jpg"></image>-->
    <!--</view>-->
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import auth from '../service/auth'
  import {api} from '../config'
  import qrcode from '../service/qrcode'
  import util from '../utils/util'





  export default class Index extends wepy.page {
    config = {
      navigationBarTitleText: '从化停车',

    }
    components = {

    }



    data = {
      phoneInfo:{

      },
//    timeout:'',
      isDialog:false,
      isArrears:false,    //是否欠费
      exdata:{
        scan_pre_day:0,
        scan_pre_buy:0
      },
      timer:'',
      isEnd:false,
      islogin:false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      isPhoneNumber:false,
      parkingInfo:{

      },
      userInfo:{

      },
      tcjf:false,
      bjqf:true,
      jjcs:false,
      tccs:false,
      tcz:false,
      recordId:'',
      slideNews: [
        'https://caoke.oss-cn-beijing.aliyuncs.com/sli.png'
      ],
      tctime:''

    }

    computed = {

    }

    methods = {
      toParkingPay(recordId) {
        const self = this
       
    		wepy.setStorageSync('recordId', self.recordId)
        wepy.navigateTo({
          url: '/pages/parkingPay'
        })
        
        
        
      },
      toRenewal() {
        const self = this
        wepy.setStorageSync('recordId', self.recordId)
        wepy.navigateTo({
          url: '/pages/renewal'
        })
      },
      toreDe(){
        const self = this
        wepy.setStorageSync('recordId', self.recordId)
        wepy.navigateTo({
          url: '/pages/recordDetail'
        })
      },
      tosearch(recordId) {
        wepy.setStorageSync('recordId', recordId)
        wepy.navigateTo({
          url: '/pages/search'
        })
      },
      toAllHour(recordId) {
        wepy.setStorageSync('recordId', recordId)
        wepy.navigateTo({
          url: '/pages/allHour'
        })
      },
      closeDia(){
        const self = this
        self.isDialog = false
      },
      async setPhoneNumber(e) {

        const self = this
        let msg = e.detail.errMsg

        self.$apply()
        let dataInfo = await auth.setMobilePhone(e)
        console.log(dataInfo)
        console.log(dataInfo)



      },
      async handleUserInfo(e) {
        const self = this
        let msg = e.detail.errMsg
        if (msg === 'getUserInfo:ok') {
          await auth.register(e.detail)
          // self.isPhoneNumber = true
          // self.isDialog = true
          // self.islogin = false
          await self.getInfo(self.parkingInfo.sn)
          await self.getStatus()
          self.$apply()
          if(self.parkingInfo.payType1){
            if(self.parkingInfo.payType1 == 1){
              wx.navigateTo({
                url: '/pages/allHour'
              })
            }else if(self.parkingInfo.payType1 == 2){
              wx.navigateTo({
                url: '/pages/allDay'
              })
            }
          } else if (self.parkingInfo.parkNo) {
            if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 0){
              wepy.navigateTo({
                url: '/pages/allDay'
              })
            }else if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 1){
              wepy.navigateTo({
                url: '/pages/allHour'
              })
            }else{
              wx.navigateTo({
                url: '/pages/checkPay'
              })
            }
          } else if (self.parkingInfo.sn) {
            wx.navigateTo({
              url: '/pages/listDetail'
            })
          } else if (self.parkingInfo.recordId) {
            wx.navigateTo({
              url: '/pages/recordDetail'
            })


          }
          wx.showTabBar()

          self.$apply()




        }

      }
      
      
    }

    events = {

    }


    async onReady(){


    }

    async onUnload() {
      const self = this
      clearInterval(self.timer)
    }

    async onHide() {
      const self = this
      clearInterval(self.timer)
      
    }

    
    
    async onShow(){
      const self = this
      
      await self.getArrears()
	    await self.getStatus()
	    self.timer = setInterval(function() {
	        	
	      self.getStatus()
	    },60000)
//    self.timeout = setTimeout(function(){
////    	auth.login()
//	      self.userInfo = wepy.getStorageSync('userInfo')
//	      console.log(self.userInfo.openId)
//	      console.log(self.isArrears)
//	      console.log(self.userInfo)
//	      if(self.userInfo.openId) {
//	
//	        
//	        
//	      }
//    },500)
      





      // wx.setTabBarBadge({
      //   index: 1,
      //   text: '1'
      // })
    }
    
    

    async onLoad(options) {
      const self = this
      await self.getPhoneType()

      wx.showLoading({
        title: '加载中...',
        mask:true
      })

      wepy.removeStorageSync('recordId')

      console.log("xxxx")
      console.log(self.isEnd)
      // let yy = 0
      if(options.q && self.isEnd == false){
        wepy.removeStorageSync('parkingInfo')
        // let xx = encodeURIComponent('http://ourmrc.com/pay/?recordId=2080144')
        let theRequest = qrcode.getQrcode(options.q)
        console.log(theRequest)
        // console.log(theRequest)
        if(theRequest['sn']){
          self.parkingInfo.sn = theRequest['sn']
        }
        if(theRequest['parkNo']){
          self.parkingInfo.parkNo = theRequest['parkNo']
        }
        if(theRequest['payType']){
          self.parkingInfo.payType1 = theRequest['payType']
        }
        if(theRequest['recordId']){
          self.parkingInfo.recordId = theRequest['recordId']
        }
        console.log(self.parkingInfo)
        wepy.setStorageSync('recordId', self.parkingInfo.recordId)
        wepy.setStorageSync('parkingInfo', self.parkingInfo)
      }

      await auth.login(self.phoneInfo)

      self.userInfo = wepy.getStorageSync('userInfo')
      console.log(self.userInfo)

      if(self.userInfo.openId){


        // self.islogin = false


        await self.getArrears()
        await self.getStatus()
        console.log(self.isArrears)
        
        if(self.isEnd == false && self.isArrears == false){
          await self.getInfo(self.parkingInfo.sn)
          await self.getStatus()
          if(self.parkingInfo.payType1){
            if(self.parkingInfo.payType1 == 1){
              wx.navigateTo({
                url: '/pages/allHour'
              })
            }else if(self.parkingInfo.payType1 == 2){
              wx.navigateTo({
                url: '/pages/allDay'
              })
            }
          } else if(self.parkingInfo.parkNo){
            if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 0){
              wepy.navigateTo({
                url: '/pages/allDay'
              })
            }else if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 1){
              wepy.navigateTo({
                url: '/pages/allHour'
              })
            }else{
              wx.navigateTo({
                url: '/pages/checkPay'
              })
            }



          }else if(self.parkingInfo.sn){
            wx.navigateTo({
              url: '/pages/listDetail'
            })
          }else if(self.parkingInfo.recordId){
	          wx.navigateTo({
	            url: '/pages/recordDetail'
	          })
	
	        }
        }else if(self.isEnd == false && self.isArrears == true){
          console.log(self.recordId)
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '您有停车欠费尚未完成支付，支付欠费后方可正常缴费停车！',
            confirmColor:'#00c8b3',
            confirmText:'缴纳欠费',
            success(res) {
              if (res.confirm) {
                const self = this
                // wepy.setStorageSync('recordId', self.recordId)
                wepy.navigateTo({
                  url: '/pages/parkingPay'
                })
              }
            }
          })
        }


      }else{
        // self.islogin = true
        self.$apply()
      }
      wx.hideLoading()

      self.$apply()

















    }

    // 获取手机型号
    async getPhoneType(){
      const self = this
      try {
        const res = wx.getSystemInfoSync()

        self.phoneInfo.phoneType = res.brand               //手机品牌
        self.phoneInfo.phoneModel = res.model              //设备型号
        self.phoneInfo.phoneVersion = res.version          //微信版本号
        self.phoneInfo.phoneSystem = res.system            //操作系统及版本
        self.phoneInfo.phoneSDKVersion = res.SDKVersion   //客户端基础库版本

      } catch (e) {
        console.log(e)
      }

    }




    // set timer
    async setTimer(){
      const self = this
      self.timer = setInterval(function() {
        self.getStatus()
      },60000)
      self.$apply()
    }
    // 查看是否欠费
    async getArrears(){
      const self = this
      let data = {

      }
      try{
        const dataInfo = await http({
          method: api.home.arrearsStatus.method,
          url: api.home.arrearsStatus.url,
          data:JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.data){
            self.recordId = dataInfo.data.data.recordId
            wepy.setStorageSync('recordId', self.recordId)
            self.tcjf = true
            self.tccs = false
            self.tcz = false
            self.jjcs = false
            self.isArrears = true
          }else{
            self.isArrears = false
          }

        }
        self.$apply()
      } catch(e){
        console.log(e)
      }
    }



    // 获取当前用户状态
    async getStatus(){
      const self = this
      let data = {

      }
      try{
        const dataInfo = await http({
            method: api.home.homeStatus.method,
            url: api.home.homeStatus.url,
            data:JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.data.length>0){
            let realtime = dataInfo.data.data[0].expireTime - dataInfo.data.data[0].serverDate
            console.log(realtime)
            console.log(dataInfo.data.exData)
            if(dataInfo.data.data[0].endTime){
              self.tcjf = true
              self.tccs = false
              self.tcz = false
              self.jjcs = false
              self.recordId = dataInfo.data.data[0].recordId
            }else{
              self.tcjf = false
              self.tccs = false
              self.tcz = false
              self.jjcs = false
              self.isEnd = true
              if(realtime < 0){
                self.tccs = true
                self.recordId = dataInfo.data.data[0].recordId
              }else if(realtime >= 0 && realtime <= dataInfo.data.exData){
                self.jjcs = true
                self.recordId = dataInfo.data.data[0].recordId
              }else{
                self.tcz = true
                self.recordId = dataInfo.data.data[0].recordId
                self.tctime = util.timeFormat(dataInfo.data.data[0].expireTime)
              }
            }

          }else{
            self.tcjf = true
          }

        }
        self.$apply()
      } catch(e){
        console.log(e)
      }
    }


 
    getSceneType(options){
      console.log(options)
      let sceneType = options.scene
      console.log(sceneType)
      return sceneType
    }

    // 获取车位信息
    async getInfo(sn) {
      const self = this

      let data = {
        meterSN: sn
      }
      try {
        let dataInfo = await http({
          method: api.sninfo.parkmeter.method,
          url: api.sninfo.parkmeter.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.exData){
            self.exdata.scan_pre_day = dataInfo.data.exData.scan_pre_day
            self.exdata.scan_pre_buy = dataInfo.data.exData.scan_pre_buy
          }
          self.$apply()

        }
      } catch (e) {
        console.log(e)
      }
    }





  }
</script>
