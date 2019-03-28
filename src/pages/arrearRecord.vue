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
    .box_head{
      width:100%;
      height:180rpx;
      background:#00c8b3;
      color:#fff;
      font-size:28rpx;
      text-align: center;
      padding-top:20rpx;
      .box_money{
        font-size:72rpx;
        font-weight: 700;

      }
    }
    .box_header{
      width:100%;
      height:92rpx;
      color:#666;
      line-height: 92rpx;
      font-size:34rpx;
      text-indent: 20rpx;
    }
    .box_cont{
      width:100%;
      .list{
        width:750rpx;
        padding-bottom: 24rpx;
        padding-top: 24rpx;
        background:#fff;
        margin-bottom: 30rpx;
        .list_cont{
          width: 718rpx;
          margin-left: 16rpx;
          .list_cont_top{
            display: flex;
            justify-content: space-between;
            line-height:40rpx;
            .road{
              font-size:36rpx;
              color:#333;
              line-height: 50rpx;
            }
            .time{
              font-size:24rpx;
              color:#666;
              margin-top:24rpx;
              line-height: 40rpx;
            }
            .status_w{
              width:180rpx;
              height:50rpx;
              font-size: 24rpx;
              line-height: 50rpx;
              text-align: center;
              color:#fff;
              background:#FF6600;
              border-radius: 10rpx;
            }
            .status_y{
              width:160rpx;
              height:40rpx;
              font-size: 24rpx;
              line-height: 40rpx;
              text-align: center;
              color:#fff;
              background:#FF6600;
            }
            .money{
              margin-top:24rpx;
              line-height: 40rpx;
              font-size:38rpx;
              color:#00c8b3;
            }
            .money_qf{
              color:#FF6600;
            }
          }
          .list_cont_bot{
            display: flex;
            justify-content: space-between;
            line-height:40rpx;
            margin-top:20rpx;
            border-top:2rpx solid #E1E1E1;
            .busname{
              font-size:28rpx;
              color:#989898;
              margin-top: 15rpx;
            }
            .end{
              font-size:28rpx;
              color:#9A9A9A;
              margin-top: 15rpx;
            }
          }
        }
      }
    }


  }





</style>
<template>
  <view class="box">
    <view class="box_head">
      <view>欠费金额:</view>
      <view class="box_money">{{arrears/100}}元</view>
    </view>
    <view class="box_header">
      {{splate}} 共{{listArr.length}}条欠费记录：
    </view>
    <view class="box_cont">
      <view class="list" wx:for="{{listArr}}" wx:key="{{id}}"  @tap="toDetail('{{item.recordId}}')">
         <view class="list_cont">
           <view class="list_cont_top">
             <view class="road">{{item.roadname}}</view>
             <view class="status_w" wx:if="{{item.evidenceState != 4}}">欠费，已取证</view>
             <view class="status_w" wx:if="{{item.evidenceState == 4}}">欠费，已取证</view>
           </view>
           <view class="list_cont_top">
             <view class="time">{{item.time}}</view>
             <view class="money" wx:if="{{item.arrearage == 0}}">￥{{item.arrearage}}</view>
             <view class="money money_qf" wx:if="{{item.arrearage > 0}}">￥{{item.arrearage/100}}</view>
           </view>
           <view class="list_cont_bot">
             <view class="busname">{{splate}}</view>
             <view class="end">{{item.endtime}}</view>
           </view>
         </view>
      </view>
    </view>



    <!--<view class="box_cont">-->


      <!--<view class="list" wx:for="{{listArr}}" wx:key="{{id}}"  @tap="toDetail('{{item.recordId}}')">-->
        <!--<view class="list_cont">-->
          <!--<view class="cont_top">-->
            <!--<view class="top_left">-->
              <!--{{item.roadname}}-->
            <!--</view>-->
            <!--<view class="top_right" wx:if="{{item.parkState == 0 || item.parkState == 20}}">-->
              <!--<view class="top_btn">已完成</view>-->
            <!--</view>-->
            <!--<view class="top_right" wx:if="{{item.parkState == 1}}">-->
              <!--<view class="top_btn top_btn_qf">欠费，未取证</view>-->
            <!--</view>-->
            <!--<view class="top_right" wx:if="{{item.parkState == 2}}">-->
              <!--<view class="top_btn top_btn_qf">欠费，已取证</view>-->
            <!--</view>-->
          <!--</view>-->
          <!--<view class="cont_bot">-->
            <!--<view class="bot_list">-->
              <!--<view class="blist">应收：{{item.consume/100}}元</view>-->
              <!--<view class="blist">实收：{{item.payment/100}}元</view>-->
              <!--<view class="blist blist_last">欠费：{{item.arrearage}}元</view>-->
            <!--</view>-->
            <!--<view class="bot_list">-->
              <!--<view class="blist">停车：{{item.starttime}}</view>-->
              <!--<view class="blist">驶离：{{item.endtime}}</view>-->
            <!--</view>-->
          <!--</view>-->
        <!--</view>-->
      <!--</view>-->



    </view>
  </view>




</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'







  export default class ArrearRecord extends wepy.page {
    config = {
      navigationBarTitleText: '补缴欠费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {

    }



    data = {

      userInfo:{},
      splate:'',
      listArr:[],
      arrears:0,

    }

    computed = {

    }

    methods = {
      toDetail(recordId){

        wepy.setStorageSync('recordId', recordId)
        wepy.navigateTo({
          url: '/pages/recordDetail'
        })
      },
      toPaySuccess(){
        wepy.navigateTo({
          url: '/pages/paySuccess'
        })
      }
    }

    events = {

    }

    async onShow() {
      const self = this
      self.listArr = []
      self.userInfo = wepy.getStorageSync('userInfo')
      self.splate = wepy.getStorageSync('splate')
      await self.searchInfo()

    }
    
    

    //查询
    async searchInfo(){
      const self = this
      wx.showLoading({
        title: '查询中...'
      })
      let data = {
        busNumber:self.splate,
        // phone:self.userInfo.phone
        // phone:15591166199
      }
      try {
        let dataInfo = await http({
          method: api.recordinfo.searchPlate.method,
          url: api.recordinfo.searchPlate.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.arrears = 0
          
          
          
          dataInfo.data.data.forEach((item,index)=>{
            self.arrears += item.arrearage
            
            if(item.old == 0){
            	self.listArr.push({
	              id:index,
	              recordId:item.recordId,
	              meterNo:item.meterSN,
	              parkState:item.parkState,
	              roadname:item.roadName+item.meterNo+'号咪表',
	              consume:item.consume,
	              payment:item.payment,
	              arrearage:item.arrearage>0 ? item.arrearage : 0,
	              starttime:self.timeFormat(item.startTime),
	              endtime:self.timeFormat(item.endTime),
	              time:self.timeCalculation(item.endTime - item.startTime),
	              evidenceState:item.evidenceState
	            })
            }else if(item.old == 1){
            	self.listArr.push({
	              id:index,
	              recordId:item.lawNo,
	              meterNo:item.meterSN,
	              parkState:item.parkState,
	              roadname:item.meterNo+'号咪表',
	              consume:item.consume,
	              payment:item.payment,
	              arrearage:item.arrearage>0 ? item.arrearage : 0,
	              starttime:self.timeFormat(item.startTime),
	              endtime:self.timeFormat(item.endTime),
	              time:self.timeCalculation(item.endTime - item.startTime),
	              evidenceState:item.evidenceState
	            })
            }
            
            
            
          })
        }
        self.$apply()
        wx.hideLoading()
      } catch (e) {
        console.log(e)
      }
    }

    // 时间转化
    timeFormat(timestamp){
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear()%100;
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
