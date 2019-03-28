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
    position:relative;
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
    min-height:800rpx;
    overflow: scroll;
    position:absolute;
  .list{
    width:750rpx;
    padding-bottom: 24rpx;
    padding-top: 24rpx;
    background:#fff;
    margin-top: 16rpx;
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
  }
  .time{
    font-size:24rpx;
    color:#666;
    margin-top:24rpx;
    line-height: 40rpx;
  }
  .status{
    font-size: 24rpx;
    color:#676767;
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
    margin-top: 20rpx;
  }
  .end{
    font-size:28rpx;
    color:#9A9A9A;
    margin-top: 20rpx;
  }
  }
  }
  }
  }


  .tips{
    width: 100%;
    text-align: center;
    font-size: 28rpx;
    line-height: 60rpx;
    color:#666;
  }

  }


</style>
<template>
  <view class="box">
    <!--<view class="box_header">-->
      <!--共{{total}}条停车记录：-->
    <!--</view>-->
    <scroll-view class="box_cont" scroll-y="true" bindscrolltolower="onReachBottom">
      <view class="list" wx:for="{{listArr}}" wx:key="{{id}}"  @tap="toDetail('{{item.recordId}}')">
        <view class="list_cont">
          <view class="list_cont_top">
            <view class="road">{{item.roadname}}</view>
            <view class="status" wx:if="{{item.parkState == 0 || item.parkState == 20}}">订单完成</view>
            <view class="status_w" wx:if="{{item.parkState == 1 || item.parkState == 10}}">欠费，已取证</view>
            <view class="status_w" wx:if="{{item.parkState == 2 || item.parkState == 11}}">欠费，已取证</view>
          </view>
          <view class="list_cont_top">
            <view class="time">{{item.time}}</view>
            <view class="money" wx:if="{{item.arrearage == 0}}">￥{{item.arrearage}}</view>
            <view class="money money_qf" wx:if="{{item.arrearage > 0}}">￥{{item.arrearage/100}}</view>
          </view>
          <view class="list_cont_bot">
            <view class="busname">{{item.busname}}</view>
            <view class="end">{{item.endtime}}</view>
          </view>
        </view>
      </view>
      <view class="tips" wx:if="{{isShowtips}}">暂无更多记录</view>
    </scroll-view>



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
    <!--</view>-->
  </view>




</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'







  export default class Record extends wepy.page {
    config = {
      navigationBarTitleText: '停车记录',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {

    }



    data = {
      isShowtips:true,
      total:1,
      current:1,
      listArr:[

      ]


    }

    computed = {

    }

    methods = {
      toDetail(recordId){
        // console.log(recordId)
        wepy.setStorageSync('recordId', recordId)
        wepy.navigateTo({
          url: '/pages/recordDetail'
        })
      }

    }

    events = {

    }

    async onShow() {
      const self = this
      await self.getList()





    }
    // 下拉加载
    async onReachBottom() {

      const self = this
      wx.showLoading({
        title: '加载中...'
      })
      if(self.current <= self.total){
        await self.getList()
        wx.hideLoading()
      }else{


        self.isShowtips = true
        wx.hideLoading()
      }



    }

    // 获取列表
    async getList(){
      const self = this


      wx.showLoading({
        title: '加载中...'
      })
      let data = {
        pageIndex:self.current,
        pageSize:10
      }
      try {
        let dataInfo = await http({
          method: api.recordinfo.recordList.method,
          url: api.recordinfo.recordList.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.total = Math.ceil(dataInfo.data.data.total/10)
          dataInfo.data.data.list.forEach((item,index)=>{
            self.listArr.push({
              id:index,
              recordId:item.recordId,
              meterNo:item.meterSN,
              parkState:item.parkState,
              roadname:item.roadName+item.meterNo+'号咪表',
              consume:item.consume,
              payment:item.payment,
              arrearage:item.arrearage>0 ? item.arrearage : item.payment,
              starttime:self.timeFormat(item.startTime),
              endtime:self.timeFormat(item.endTime),
              time:self.timeCalculation(item.endTime - item.startTime),
              evidenceState:item.evidenceState,
              busname:item.busNumber
            })
          })
        }
        self.current ++
        self.$apply()
        wx.hideLoading()
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
