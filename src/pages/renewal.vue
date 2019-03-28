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
    .list{
      background:#fff;
      .weui-cells::before{
        border:none;
      }
      .weui-cells::after{
        border:none;
      }
      .weui-cells{


        width:718rpx;
        margin:0 auto;
        padding-bottom:10rpx;

      }
      .weui-cell{
        padding:6rpx 0rpx;
        font-size:24rpx;
        color:#666;
      }
      .weui-cell::before{
        border:none;
      }
      .tit{
        font-size:34rpx;
        line-height: 80rpx;

        background:#fff;
        margin-top: 30rpx;

        color:#333;
        .tit_cont{
          width:718rpx;
          margin:0 auto;


        }
      }
    }
    .list_bot{
       background:#fff;
      .weui-cells::before{
        border:none;
      }
      .weui-cells::after{
        border:none;
      }
      .weui-cells{
        width:718rpx;
        margin:0 auto;
        padding-bottom:10rpx;
      }
      .weui-cell{
        padding:12rpx 0rpx;
        font-size:28rpx;
        color:#666;
        border-bottom:2rpx solid #eee;
      }
      .weui-cell::before{
        border:none;
      }
      .tit{
        font-size:34rpx;
        line-height: 80rpx;

        background:#fff;
        margin-top: 30rpx;

        color:#333;
        .tit_cont{
          width:718rpx;
          margin:0 auto;
          border-bottom: 2rpx solid #eee;

        }
      }
    }



  }

  .box_pay {

    width: 100%;
    height: 120rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #fff;

  .green-btn {
    background-color: #00c8b3;
    color: #fff;
    font-size: 32rpx;
  }
   .green-btn:hover{
  	background:#a1eee6;
  }

  .green-btn::after {
    border: none;
  }
.green-btn[disabled] {
		background:#a1eee6 !important;
	}
  button {
    width: 680rpx;
    height: 80rpx;
    line-height: 80rpx;
    position: absolute;
    top: 20rpx;
    left: 35rpx;
  }

  }


</style>
<template>
  <view class="box">
    <view class="list">
      <view class="tit">
        <view class="tit_cont">{{roadname}}</view>
      </view>
      <view class="weui-cells">
        <view class="weui-cell">
          <view class="weui-cell__bd">车牌号：</view>
          <view class="weui-cell__ft">{{busNumber}}</view>
        </view>
        <view class="weui-cell">
          <view class="weui-cell__bd">位置：</view>
          <view class="weui-cell__ft">{{address}}</view>
        </view>
        <view class="weui-cell">
          <view class="weui-cell__bd">停车时间：</view>
          <view class="weui-cell__ft">{{startTime}}</view>
        </view>
        <view class="weui-cell">
          <view class="weui-cell__bd">可停放至：</view>
          <view class="weui-cell__ft">{{extime}}</view>
        </view>
        <view class="weui-cell">
          <view class="weui-cell__bd">剩余时间：</view>
          <view class="weui-cell__ft" wx:if="{{cstime}}">{{sytime}}</view>
        </view>
      </view>
    </view>

    <view class="list_bot" wx:if="{{payArr.length>0}}">
      <view class="tit">
        <view class="tit_cont">缴费记录</view>
      </view>
      <view class="weui-cells">
        <view class="weui-cell" wx:for="{{payArr}}" wx:key="{{type}}">
          <view class="weui-cell__bd">{{item.time}}</view>
          <view class="weui-cell__ft">{{item.type}} ：{{item.money/100}}元</view>
        </view>
      </view>
    </view>

  </view>

  <cover-view class="box_pay" @tap="toCheckPay">
    <button class="weui-btn green-btn" type="primary">续费</button>
  </cover-view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'







  export default class Renewal extends wepy.page {
    config = {
      navigationBarTitleText: '续费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {

    }



    data = {
      iscomeplate:true,
      evidenceState:'',
      busNumber:'',
      consume:'',
      payment:'',
      roadname:'',
      startTime:'',
      endTime:'',
      time:'',
      buytime:'',
      sytime:'',
      cstime:'',
      address:'',
      mbimg:[

      ],
      extime:'',
      xcimg:[

      ],
      video:'',
      isShow:false,
      arrearage:0,
      parkingInfo:{},
      payArr:[]
    }

    computed = {

    }

    methods = {
      toCheckPay(){
        const self = this
        if(self.parkingInfo.payType == 3){
          wepy.navigateTo({
            url: '/pages/allHour'
          })
        }else if(self.parkingInfo.payType == 12){
          wepy.navigateTo({
            url: '/pages/allDay'
          })
        }

      }
    }

    events = {

    }

    async onLoad() {
      const self = this
      let recordId = wepy.getStorageSync('recordId')
      await self.getRecord(recordId)
      await self.getPayRecord(recordId)


    }


    // 查询是否欠费
    async getRecord(recordId){
      const self = this
      let data = {
        recordId : recordId
      }
      try {
        let dataInfo = await http({
          method: api.recordinfo.recordInfo.method,
          url: api.recordinfo.recordInfo.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0) {
          let chaoshi = 0
          dataInfo.data.data.endTime - dataInfo.data.data.expireTime > 0 ? chaoshi = dataInfo.data.data.endTime - dataInfo.data.data.expireTime : chaoshi = 0
          console.log(chaoshi)
          //已欠费，未取证
          self.ispay = true
          self.isDox = true
          self.evidenceState = '欠费，已取证'                //是否取证
          self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
          self.consume = dataInfo.data.data.consume        //应付
          self.payment = dataInfo.data.data.payment        //实付
          self.roadname =dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
          self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
          self.endTime = dataInfo.data.data.endTime ? self.timeFormat(dataInfo.data.data.endTime) : '停车中'        //停车结束时间
          self.extime = self.timeFormat(dataInfo.data.data.expireTime)
          self.sytime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? '已超时' + self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) : self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.serverDate)
          self.time = dataInfo.data.data.endTime ? self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime) : self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime)     //停车时长
          self.buytime = self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime)
          self.cstime = dataInfo.data.data.endTime ? self.timeCalculation(chaoshi) : self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) //超时时长
          self.parkingInfo.sn = dataInfo.data.data.meterSN
          self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
          self.parkingInfo.payType = dataInfo.data.data.payType
          self.arrearage = dataInfo.data.data.arrearage>0 ? dataInfo.data.data.arrearage : 0
          self.address = dataInfo.data.data.countyName + dataInfo.data.data.streetName + dataInfo.data.data.roadName
          self.parkingInfo.sn = dataInfo.data.data.meterSN
          self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
        }
        wepy.setStorageSync('parkingInfo', self.parkingInfo)
        self.$apply()
      } catch (e) {
        console.log(e)
      }
    }
    // 获取交费记录
    async getPayRecord(recordId){
      const self = this
      let data = {
        recordId : recordId
      }
      try {
        let dataInfo = await http({
          method: api.pay.payRecord.method,
          url: api.pay.payRecord.url,
          data: JSON.stringify(data)
        })
        console.log(dataInfo)
        if(dataInfo.data.code == 0) {
          dataInfo.data.data.forEach((item)=>{
            let paytype = ''
            if(item.payType == 3 || item.payType == 12){
              paytype = '微信支付'
            }else if(item.payType == 4 || item.payType == 13){
              paytype = '支付宝支付'
            }else if(item.payType == 1){
              paytype = '预买时'
            }else if(item.payType == 2){
              paytype = '银联卡（预买时）'
            }else if(item.payType == 10){
              paytype = '预付费'
            }else if(item.payType == 11){
              paytype = '银联卡买一天（预付费）'
            }else if(item.payType == 30){
              paytype = '停车卡（柳银卡）'
            }else if(item.payType == 31){
              paytype = '包月卡（B卡）'
            }else if(item.payType == 32){
              paytype = '包月卡（C卡）'
            }else if(item.payType == 33){
              paytype = '柳银代扣（普通卡）'
            }else if(item.payType == 40){
              paytype = '离线订单'
            }
            let obj = {
              money:item.actualAmount,
              type:paytype,
              time:self.timeFormat(item.addTime)
            }
            self.payArr.push(obj)
          })
        }
        self.$apply()
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

      return Y+'-'+M +'-'+D+' '+ h+':'+m;
    }
    timeCalculation(time){
      let T = time/60000
      let H = parseInt(T/60)
      let M = T%60 > 9 ? T%60 : '0' + T%60
      let str = H+'小时'+Math.ceil(M)+'分钟'
      return str
    }




  }
</script>
