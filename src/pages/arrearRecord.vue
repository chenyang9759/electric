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
      color:#333;
      line-height: 92rpx;
      font-size:34rpx;
      text-indent: 20rpx;
      background:#fff;
    }
    .box_cont{
      width:100%;
      .list{
		   	.list_content{
		   		width:678rpx;
		   		height:368rpx;
		   		background: #fff;
		   		margin-top: 28rpx;
		   		margin-left: 36rpx;
		   		box-shadow:4px 4px 10px rgba(0,0,0,0.1);
		   		-webkit-border-radius: 14rpx;
		   		-moz-border-radius: 14rpx;
		   		border-radius: 14rpx;
		   		.list_top{
		   			width:620rpx;
		   			height:86rpx;
		   			padding-top: 6rpx;
		   			line-height: 84rpx;
		   			box-sizing: border-box;
		   			margin-left: 30rpx;
		   			border-bottom:2rpx solid #F6F6F6;
		   			display: flex;
		   			justify-content: space-between;
		   			.list_top_left{
		   				font-size:28rpx;
		   				font-weight:bold;
		   				color:#181717;
		   			}
		   			.list_top_right{
		   				text-align: right;
		   				margin-right: 20rpx;
		   				font-size:32rpx;
		   				color:#00C8B3;
		   				.price{
		   					font-size:36rpx;
		   				}
		   			}
		   		}
		   		.list_top_w{
		   			.list_top_left{
		   				color:#FF602C;
		   			}
		   			.list_top_right{
		   				color:#FF602C;
		   			}
		   		}
		   		
		   		.list_center{
		   			width:620rpx;
		   			height:156rpx;
		   			margin-left: 30rpx;
		   			margin-top:20rpx;
		   			.time{
		   				color:#989797;
		   				font-size:24rpx;
		   			}
		   			.list_lib{
		   				width:620rpx;
		   				height:50rpx;
		   				line-height: 50rpx;
		   				font-size:28rpx;
		   				color:#333;
		   				position:relative;
		   			}
		   			.lib_left{
		   				width:10rpx;
		   				height:10rpx;
		   				-webkit-border-radius: 10rpx;
		   				-moz-border-radius: 10rpx;
		   				border-radius: 10rpx;
		   				background:#545F78;
		   				position:absolute;
		   				top:20rpx;
		   				left:0;
		   			}
		   			.lib_left_w{
		   				background:#FF602C;
		   			}
		   			.lib_right{
		   				text-indent: 30rpx;
		   			}
		   		}
		   		
		   		.list_bot{
		   			width:620rpx;
		   			margin-left:30rpx;
		   			height:106rpx;		   			
		   			border-top:2rpx dotted #E8E5E5;
		   			.lib_btn{
		   				width:138rpx;
		   				height:58rpx;
		   				box-sizing: border-box;
		   				border-radius:58rpx;
		   				border:2rpx solid #B5B4B5;
		   				float: right;
		   				margin-top:24rpx;
		   				margin-right:20rpx;
		   				font-size:24rpx;
		   				color:#333;
		   				text-align: center;
		   				line-height: 56rpx;
		   			}
		   			.lib_btn_w{
		   				background:#FF1E00;
		   				color:#fff;
		   				border:none;
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
    	<view class="list" wx:for="{{listArr}}" wx:key="{{id}}">
      	<view class="list_content">
      		<!--<view class="list_top" wx:if="{{item.parkState == 0 || item.parkState == 20}}">
      			<view class="list_top_left">订单完成</view>
      			<view class="list_top_right">￥<text class="price">{{item.arrearage/100}}</text></view>
      		</view>-->
      		<view class="list_top list_top_w">
      			<view class="list_top_left">超时欠费</view>
      			<view class="list_top_right">￥<text class="price">{{item.arrearage/100}}</text></view>
      		</view>
      		
      		<view class="list_center">
      			<view class="time">{{item.endtime}}</view>
      			<view class="list_lib">
      				<view class="lib_left"></view>
      				<view class="lib_left"></view>
      				<view class="lib_right">{{item.roadname}}</view>
      			</view>
      			<view class="list_lib">
      				<view class="lib_left"></view>
      				<view class="lib_left lib_left_w"></view>
      				<view class="lib_right">{{item.time}}</view>
      			</view>
      		</view>
      		
      		<view class="list_bot">
      		<view class="lib_btn lib_btn_w" @tap="toPay('{{item.recordId}}','{{item.meterNo}}','{{item.spaceInnerNo}}','{{item.arrearage}}')" wx:if="{{item.arrearage > 0}}">立即补缴</view>
      			<view class="lib_btn" @tap="toDetail('{{item.recordId}}')">查看详情</view>     			
      		</view>
      	</view>
      </view>
    </view>
    	
    	
      <!--<view class="list" wx:for="{{listArr}}" wx:key="{{id}}"  @tap="toDetail('{{item.recordId}}')">
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
      </view>-->
    



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
  import util from '../utils/util'






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
      recordId:'',
      parkingInfo:{},
      arrearage:''

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
      },
      async toPay(recordId,sn,spaceInnerNo,arrearage){
      	const self = this
      	
      	self.recordId = recordId
      	self.parkingInfo.sn = sn 
      	self.parkingInfo.parkNo = spaceInnerNo
      	self.arrearage = arrearage
      	await self.getCode()
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
          	let arrearslist = 0
          	arrearslist = item.serviceCharge ? item.arrearage + item.serviceCharge + item.fine : item.arrearage
            self.arrears += arrearslist
            
            if(item.old == 0){
            	self.listArr.push({
	              id:index,
	              recordId:item.recordId,
	              meterNo:item.meterSN,
	              parkState:item.parkState,
	              roadname:item.roadName+item.meterNo+'号咪表',
	              consume:item.consume,
	              payment:item.payment,
	              arrearage: item.serviceCharge ? item.arrearage + item.serviceCharge + item.fine : item.arrearage,
	              starttime:util.timeFormat(item.startTime),
	              endtime:util.timeFormat(item.endTime),
	              time:util.timeCalculation(item.endTime - item.startTime),
	              evidenceState:item.evidenceState,
	              spaceInnerNo:item.spaceInnerNo
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
	              arrearage: item.serviceCharge ? item.arrearage + item.serviceCharge + item.fine : item.arrearage,
	              starttime:util.timeFormat(item.startTime),
	              endtime:util.timeFormat(item.endTime),
	              time:util.timeCalculation(item.endTime - item.startTime),
	              evidenceState:item.evidenceState,
	              spaceInnerNo:item.spaceInnerNo
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
    //获取code
    async getCode(){
      const self = this
    
      wx.login({
        success(res){
          self.sendOrder(res.code)
        }
      })
    }
    // 下订单
    async sendOrder(code){
      const self = this
      let data = {}
      console.log(self.arrearage)
	    data = {
	      recordId : self.recordId,
	      meterSN : self.parkingInfo.sn,
	      spaceInnerNo : self.parkingInfo.parkNo,
	      fromSystem : 868,
	      payType : 51,
	      payment : parseInt(self.arrearage),
	      code : code
	    }
     
      


      try {
        let dataInfo = await http({
          method: api.pay.wxpay.method,
//        url: 'http://192.168.134.77:8888/n/pay/scan/weixinPay?noSign=0',
          url: api.pay.wxpay.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.isDisable = true
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
//            console.log(e)
            	self.$apply()
            }
          })
        }else if(dataInfo.data.code == -1){
          wx.showToast({
            title: dataInfo.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
        self.$apply()


      } catch (e) {
      	
        console.log(e)
      }
    }


  }
</script>
