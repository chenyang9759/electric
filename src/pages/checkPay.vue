<style lang="less">
  page{
    width:100%;
    height:100%;
    position: relative;
    background:#f4f5fa;
    top:0;
    left:0;
  }

  .box {
    .box_header {
      width: 100%;
      height: 230rpx;
      padding-top: 20rpx;
      background: #00c8b3;
      color: #fff;
      font-size: 28rpx;
      text-align: center;
      .box_tit{
        margin-top: 20rpx;
        font-size:40rpx;
        font-weight: 700;
      }
      .box_des{
        margin-top: 10rpx;
      }
    }
    .box_cont {
      width: 718rpx;
      margin-left: 16rpx;
      .box_cont_tit {
        display: flex;
        justify-content: space-between;
        font-size: 34rpx;
        color:#666;
        line-height: 108rpx;
        .tit_right {
          height:108rpx;
          .tit_btn{
            width:164rpx;
            height:56rpx;
            background:#00c8b3;
            color:#fff;
            -webkit-border-radius: 10rpx;
            -moz-border-radius: 10rpx;
            border-radius: 10rpx;
            text-align: center;
            line-height: 56rpx;
            margin-top: 26rpx;
            font-size:32rpx;
          }
        }
      }
    }
    .box_bot{
      width: 718rpx;
      padding: 16rpx;
      padding-bottom: 56rpx;
      display: flex;
      background:#fff;
      justify-content: space-around;
      flex-wrap:wrap;
      .bot_list{
        width:718rpx;
        height:150rpx;

        box-sizing: border-box;
        margin-top: 40rpx;
        -webkit-border-radius: 10rpx;
        -moz-border-radius: 10rpx;
        border-radius: 10rpx;
        color:#fff;
        text-align:center;
        line-height:50rpx;
        overflow:hidden;
        .list_top{
          margin-top: 30rpx;
          font-size: 40rpx;
        }
        .list_bot{
          font-size:28rpx;
        }
        .list_cent{
          line-height:150rpx;
          font-size: 40rpx;

        }
      }
      .bot_list_a{
        background:#00c8b3;
      }
      .bot_list_b{
        background:#FF9900;
      }
      .bot_list_lx{
        font-size: 16px;
        text-align: center;
        line-height: 100rpx;
        color:red;
      }


    }
  }

</style>
<template>

  <view class="box">
    <view class="box_header">
      <view class="box_tit">{{ parkingInfo.roadname }}</view>
      <view class="box_des">请选择支付方式</view>
    </view>
    <view class="box_cont">
      <view class="box_cont_tit">
        <view class="tit_left">选择购买方式：</view>
        <view class="tit_right">

        </view>
      </view>
    </view>
    <view class="box_bot">
      <view class="bot_list bot_list_b" wx:if="{{ payType == 0 || payType == 11 || payType == 12 || payType == 13 && exdata.scan_pre_day==1 }}" @tap="toAllDay">
        <view class="list_top">[推荐]预付{{dayPrice}}元</view>
        <view class="list_bot">驶离后自动结算，原路退还多付金额</view>
      </view>
      <view class="bot_list bot_list_a" wx:if="{{ payType == 0 || payType == 2 || payType == 3 || payType == 4 }}" @tap="toAllHour">
        <view class="list_cent">购买停车时间</view>
      </view>
      <view class="bot_list_lx" wx:if="{{ payType == 40 }}">本次停车免费!</view>
    </view>
  </view>

</template>

<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'

  export default class CheckPay extends wepy.page {
    config = {
      navigationBarTitleText: '停车缴费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }

    components = {

    }

    data = {
      parkingInfo:{
        sn:'',
        parkNo:'',
        payType:'',
        roadname:''
      },
      exdata:{
        scan_pre_day:0,
        scan_pre_buy:0
      },
      payType:'',
      dayPrice:0,
      spaceState:'',
      spaceState_Text:''
    }

    computed = {

    }

    methods = {
      toAllDay(spaceState){
        const self = this
        if(self.spaceState_Text == '超时停车'){
          wx.showToast({
            title: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
            icon: 'none',
            duration: 2000
          })
          return
        }

        if(self.spaceState == 71 || self.spaceState == 72 || self.spaceState==73){
          console.log(self.payType)
          wepy.navigateTo({
            url: '/pages/allDay'
          })
        }else{
          wx.showToast({
            title: '当前车位暂未检测到车辆驶入，请稍后再试！',
            icon: 'none',
            duration: 2000
          })
        }
      },
      toAllHour(){
        const self = this
        if(self.spaceState_Text == '超时停车'){
          wx.showToast({
            title: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
            icon: 'none',
            duration: 2000
          })
          return
        }

        if(self.spaceState == 71 || self.spaceState == 72 || self.spaceState==73){
          wepy.navigateTo({
            url: '/pages/allHour'
          })
        }else{
          wx.showToast({
            title: '当前车位暂未检测到车辆驶入，请稍后再试！',
            icon: 'none',
            duration: 2000
          })
        }

      }
    }

    events = {

    }

    async onLoad() {
      const self = this
      self.parkingInfo = wepy.getStorageSync('parkingInfo')
      await self.getDayMoney()
      await self.getInfo(self.parkingInfo.sn)
    }
    //获取全天费用
    async getDayMoney(){
      const self = this
      let data = {

      }
      try {
        let dataInfo = await http(
          {
            method: api.pay.parkDayprice.method,
            url: api.pay.parkDayprice.url,
            data: JSON.stringify(data)
          }
        )
        if(dataInfo.data.code == 0){

          let price = parseInt(dataInfo.data.data)/100
          self.dayPrice = price.toFixed(2)
          self.$apply()
        }
      } catch (e) {
        console.log(e)
      }
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
          self.parkingInfo.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + self.parkingInfo.parkNo + '车位'



          self.equipPark = []





          dataInfo.data.data.equipParkspaces.forEach((item, index) => {
            if(item.spaceInnerNo == self.parkingInfo.parkNo){
              self.payType = item.payType
              self.spaceState = item.spaceState
              self.spaceState_Text = item.spaceState_Text
            }
          })
          wepy.setStorageSync('parkingInfo', self.parkingInfo)
          if(self.spaceState_Text == '超时停车'){

            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
              confirmColor:'#00c8b3',
              confirmText:'其它车位',
              success(res) {
                if (res.confirm) {
                  const self = this

                  wepy.redirectTo({
                    url: '/pages/listDetail'
                  })
                }
              }
            })


            self.payType = 999
            self.$apply()
            return
          }





          if(dataInfo.data.exData){
            self.exdata.scan_pre_day = dataInfo.data.exData.scan_pre_day
            self.exdata.scan_pre_buy = dataInfo.data.exData.scan_pre_buy
          }
          if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 0){
            wepy.redirectTo({
              url: '/pages/allDay'
            })
          }else if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 1){
            wepy.redirectTo({
              url: '/pages/allHour'
            })
          }

          self.$apply()

        }
      } catch (e) {
        console.log(e)
      }
    }


  }
</script>
