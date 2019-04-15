<style lang="less">

  page{
    width:100%;
    height:100%;
    position: relative;
    top:0;
    left:0;
    background:#f4f5fa;
  }


  .dox{
    width:100%;
    height:100%;
    position:relative;
    top:0;
    left:0;
    .dox_header{
      width:100%;
      height:280rpx;
      background:#00c8b3;
      .dox_tit{
        font-size:40rpx;
        color:#fff;
        text-align: left;
        text-indent:46rpx;
      }

      .dox_inp{
        width:660rpx;
        height:126rpx;
        margin-left:45rpx;
        margin-top:40rpx;
        position:relative;
        .dox_inp_list{
          width:660rpx;
          height:126rpx;
          position:absolute;
          top:0;
          left:0;
          display: flex;
          justify-content: space-between;
          .list{
            width:100rpx;
            height:126rpx;
            background:#fff;
            color:#00c8b3;
            font-size:84rpx;
            font-weight:700;
            line-height: 126rpx;
            text-align: center;
          }
        }

      }
    }

    .dox_cont{
      width:718rpx;
      padding:16rpx;
      background:#fff;
      margin-top:20rpx;
      text-align:center;
      .cont_tit{
        font-size:36rpx;
        color:#666;
        line-height: 60rpx;
      }
      .cont_money{
        font-size:72rpx;
        color:#00c8b3;
        font-weight:700;
      }
      .cont_des{
        font-size:28rpx;
        color:#666;
      }
  .cont_time{
    color:#666;
    font-size: 32rpx;
  }



    }

  }

  .box_pay{


    width:100%;
    height:120rpx;
    position: fixed;
    bottom:0;
    left:0;
    z-index: 9999;
    background:#fff;
  .green-btn{
    background-color: #00c8b3;
    color:#fff;
    font-size:32rpx;
  }
  .green-btn:hover{
  	background:#a1eee6;
  }
  .green-btn::after{
    border:none;
  }
  .green-btn[disabled] {
		background:#a1eee6 !important;
	}
  button{
    width:680rpx;
    height:80rpx;
    line-height: 80rpx;
    position: absolute;
    top:20rpx;
    left:35rpx;
  }
  }


</style>
<template>


  <!--停车缴费-->
  <view class="dox">
    <view class="dox_header">
      <view class="dox_tit">车位编号</view>

      <view class="dox_inp">
        <view class="dox_inp_list">
          <view class="list" wx:for="{{licensePlate}}" wx:key="{{index}}">{{item}}</view>

        </view>

      </view>

    </view>
    <view class="dox_cont">
      <view class="cont_tit">{{parkingInfo.roadname}}</view>
      <view class="cont_money">{{dayPrice}}元</view>
      <view class="cont_des">预付全天停车费用，车辆离开后自动结算，多余金额将原路返还至您的支付账户。</view>
      <view class="cont_time">开始时间：{{ starttime_show }}</view>
      <view class="cont_time">可停放至：{{ expire_show }}</view>

    </view>

    <view class="box_pay">
      <button class="weui-btn green-btn" type="primary" disabled="{{isDisable}}" @tap="toPaySuccess">微信支付（{{dayPrice}}元）</button>
    </view>
  </view>

</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'
  import util from '../utils/util'

  export default class AllDay extends wepy.page {
    config = {
      navigationBarTitleText: '停车缴费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'

    }

    components = {

    }

    data = {
      isDisable:false,
      licensePlate:'000000',
      dayPrice:0,
      parkingInfo:{

      },
      starttime:'',
      starttime_show:'',
      expire:'',
      expire_show:''
    }

    computed = {

    }

    methods = {
      async toPaySuccess(){
        const self = this
        await self.getCode()

      }
    }

    events = {

    }

    async onLoad() {
      const self = this
      self.parkingInfo = wepy.getStorageSync('parkingInfo')
      await self.getDayMoney()
      await self.getInfo(self.parkingInfo.sn)
      await self.getMinTime()
      if(self.parkingInfo.payType1 == 2){
        await self.getCode()
      }
      self.$apply()
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
              self.licensePlate = item.spaceNo
            }
          })
          wepy.setStorageSync('parkingInfo', self.parkingInfo)

          self.$apply()

        }
      } catch (e) {
        console.log(e)
      }
    }
    // 获取全天费用
    async getDayMoney(){
      const self = this
      let data = {

      }
      try {
        let dataInfo = await http({
            method: api.pay.parkDayprice.method,
            url: api.pay.parkDayprice.url,
            data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          let price = parseInt(dataInfo.data.data)/100
          self.dayPrice = price.toFixed(2)
          self.$apply()
        }

      } catch (e) {
        console.log(e)
      }
    }
    //获取code
    async getCode(){
      const self = this
      self.isDisable = true
      wx.login({
        success(res){
          self.sendOrder(res.code)
        }
      })
    }
    // 下订单
    async sendOrder(code){
      const self = this

      let data = {
        meterSN : self.parkingInfo.sn,
        spaceInnerNo : self.parkingInfo.parkNo,
        fromSystem : 868,
        payType : 12,
        payment : parseInt(self.dayPrice*100),
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.pay.wxpay.method,
          url: api.pay.wxpay.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.isDisable = false
          self.$apply()
          wx.requestPayment({
            timeStamp: dataInfo.data.data.timeStamp,
            nonceStr: dataInfo.data.data.nonceStr,
            package: dataInfo.data.data.package,
            signType: dataInfo.data.data.signType,
            paySign: dataInfo.data.data.paySign,
            success:function(data){
              wx.redirectTo({
                url: '/pages/paySuccess'
              })
            },
            fail:function(e){
              self.isDisable = false           	
            	self.$apply()
            }
          })
        }else if(dataInfo.data.code == -1){
          wx.showToast({
            title: '暂不支持全天购买！',
            icon: 'none',
            duration: 2000
          })
        }
      } catch (e) {
        console.log(e)
      }
    }


    // 获取交费最短时间
    async getMinTime(){
      const self = this

      let data = {
        meterSN: self.parkingInfo.sn,
        spaceInnerNo: self.parkingInfo.parkNo
      }
      try {
        let dataInfo = await http({
          method: api.sninfo.minTime.method,
          url: api.sninfo.minTime.url,
          data: JSON.stringify(data)
        })

        if(dataInfo.data.code == 0){

          self.starttime = dataInfo.data.data.startTime
          self.expire = parseInt(dataInfo.data.data.expireTime) + 86400000

          self.init()
        }else if(dataInfo.data.code == -1){
          wx.showToast({
            title: '此订单不存在，请重试！',
            icon: 'none',
            duration: 2000
          })
          setTimeout(function() {
            wepy.navigateTo({
              url: '/pages/listDetail'
            })
          },2000)

        }
      } catch (e) {
        console.log(e)
      }
    }

    // 页面首次加载
    async init(){
      const self = this

      self.starttime_show = util.timeFormat(self.starttime)
      self.expire_show = util.timeFormat(self.expire)
      self.$apply()
    }

   

  }
</script>
