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
      .cont_oper{
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
        margin-bottom:40rpx;
        .cont_oper_list{
          width:280rpx;
          height:80rpx;
          text-align: center;
          line-height: 80rpx;
          background:#00c8b3;
          margin-top: 20rpx;
          color:#fff;
          font-size:36rpx;
          -webkit-border-radius: 10rpx;
          -moz-border-radius: 10rpx;
          border-radius: 10rpx;
        }
        .cont_oper_list_act{
          background:#ddd;
        }
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
      <!--<view class="cont_des" style="color:#00c8b3;" wx:if="{{ minBuytime == 0 }}">当前车位已付费尚未到期，请选择续费时长</view>-->
      <!--<view class="cont_des" style="color:red;" wx:if="{{ minBuytime != 0 }}">已超时{{ timeout }}，最少需购买{{ minBuytime }}</view>-->
      <view class="cont_des">已选择购买时长</view>
      <view class="cont_money">{{ mintime_show }}</view>
      <view class="cont_oper">
        <view class="cont_oper_list cont_oper_list_act" @tap="lessM">-{{ interval_show }}</view>
        <view class="cont_oper_list" @tap="plusM">+{{ interval_show }}</view>
        <view class="cont_oper_list cont_oper_list_act" @tap="lessH">-1小时</view>
        <view class="cont_oper_list" @tap="plusH">+1小时</view>
      </view>
      <view class="cont_time">开始时间：{{ starttime_show }}</view>
      <view class="cont_time">可停放至：{{ expire_show }}</view>

    </view>

    <view class="box_pay">
      <button class="weui-btn green-btn" type="primary" disabled="{{isDisable}}" @tap="toPaySuccess">微信支付（{{ money }}元）</button>
    </view>
  </view>

</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'






  export default class AllHour extends wepy.page {
    config = {
      navigationBarTitleText: '停车缴费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'

    }
    components = {

    }



    data = {
      isDisable:false,
      timeout:'',
      minBuytime:'',
      licensePlate:'000000',
      parkingInfo:{
        sn:'',
        parkNo:'',
        payType:'',
        roadname:''
      },
      mintime_dis:0,
      interval:0,
      expire:0,
      mintime:0,
      starttime:0,
      interval_show:'',
      expire_show:'',
      mintime_show:'',
      starttime_show:'',
      money:0
    }

    computed = {

    }


    methods = {
      async plusM(){
        const self = this
        self.mintime += self.interval
        self.expire += self.interval
        self.getPrice()
        self.init()
      },
      lessM(){
        const self = this
        if(self.mintime > self.mintime_dis){
          self.mintime = self.mintime - self.interval
          self.expire = self.expire - self.interval
          self.getPrice()
          self.init()
        }else{
          wx.showToast({
            title: '不能再少了',
            icon: 'none',
            duration: 2000
          })
        }
      },
      plusH(){
        const self = this
        self.mintime += 3600000
        self.expire += 3600000
        self.getPrice()
        self.init()
      },
      lessH(){
        const self = this
        if(self.mintime > self.mintime_dis + 3599999){
          self.mintime = self.mintime - 3600000
          self.expire = self.expire - 3600000
          self.getPrice()
          self.init()
        }else{
          wx.showToast({
            title: '不能再少了',
            icon: 'none',
            duration: 2000
          })
        }
      },
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
      await self.getMinTime()
      await self.firstInit()
      await self.getInfo(self.parkingInfo.sn)
      await self.getPrice()
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
    //计算时间
    calculation(num){
      let H = parseInt(num/60)
      let M = num%60
      this.time = H+'小时'+M+'分'
      this.price = num/15
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
          self.mintime_dis = dataInfo.data.data.minimumTime
          self.interval = dataInfo.data.data.timeInterval
          self.expire = dataInfo.data.data.expireTime
          self.mintime = dataInfo.data.data.minimumTime
          self.starttime = dataInfo.data.data.startTime
          self.timeout = self.timeCalculation(dataInfo.data.data.timeout)
          if(dataInfo.data.data.minimumTime == dataInfo.data.data.interval && dataInfo.data.data.expireTime != dataInfo.data.data.startTime){
            self.minBuytime = 0
          }else{
            self.minBuytime = self.timeCalculation(dataInfo.data.data.minimumTime)
          }
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
    // 时间转化
    timeFormat(timestamp){
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear();
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
      let D = date.getDate()  < 10 ? '0'+date.getDate():date.getDate();
      let h = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
      let m = date.getMinutes() < 10?'0'+date.getMinutes() : date.getMinutes();
      return Y+'年'+M +'月'+D+'日'+' '+ h+':'+m;
    }
    timeCalculation(time){
      let T = time/60000
      let H = parseInt(T/60)
      let M = T%60 > 9 ? T%60 : '0' + T%60
      let str = H+'小时'+Math.ceil(M)+'分钟'
      return str
    }
    timeMincal(time){
      let T = time/60000 > 9 ? time/60000 : '0' + time/60000
      let str = T +'分钟'
      return str
    }
    //第一次加载
    async firstInit(){
      const self = this
      self.interval_show = self.timeMincal(self.interval)
      self.expire_show = self.timeFormat(self.expire + self.mintime_dis)
      self.mintime_show = self.timeCalculation(self.mintime)
      self.starttime_show = self.timeFormat(self.starttime)


      self.$apply()
    }
    // 页面首次加载
    async init(){
      const self = this
      self.interval_show = self.timeMincal(self.interval)
      self.expire_show = self.timeFormat(self.expire + self.mintime_dis)
      self.mintime_show = self.timeCalculation(self.mintime)
      self.starttime_show = self.timeFormat(self.starttime)
      self.$apply()
    }
    // 计算价格
    async getPrice(){
      const self = this

      let data = {
        meterSN:self.parkingInfo.sn,
        spaceInnerNo:self.parkingInfo.parkNo,
        time:self.mintime
      }
      try {
        let dataInfo = await http({
          method: api.pay.buyHour.method,
          url: api.pay.buyHour.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          let price = parseInt(dataInfo.data.data)/100
          self.money = price.toFixed(2)
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
        payType : 3,
        payment : parseInt(self.money*100),
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.pay.wxpay.method,
          url:  api.pay.wxpay.url,
          data: JSON.stringify(data),
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
            title: '暂不支持预买时！',
            icon: 'none',
            duration: 2000
          })
        }
      } catch (e) {
        console.log(e)
      }
    }

  }
</script>
