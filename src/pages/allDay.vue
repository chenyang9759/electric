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
    .nav{
    	width:100%;
    	margin-top: 20rpx;
    
    	background:#fff;
    	.nav_list{
    		width:678rpx;
    		height:126rpx;
    		position:relative;
    		line-height: 126rpx;
    		font-size:32rpx;
    		margin-left:36rpx;
    		color:#424558;
    		border-bottom:2rpx solid #f4f5fa;
    		.nav_left{
    			
    		}
    		.nav_right{
    			.bg{
    				width:36rpx;
    				height:36rpx;
    				position: absolute;
    				top:45rpx;
    				right:8rpx;
    			}
    		}
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
     
    <view class="nav">
    	<view class="nav_list" wx:if="{{isCard}}">
    		<view class="nav_left">停车卡支付</view>
    		<view class="nav_right" @tap="checkCard">   			
    			<image class="bg" wx:if="{{cardCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checky.png"></image>
    			<image class="bg" wx:if="{{!cardCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checkn.png"></image>
    		</view>
    	</view>
    	<view class="nav_list" wx:if="{{isWallet}}">
    		<view class="nav_left">钱包支付（余额：{{balance}}元）</view>
    		<view class="nav_right" @tap="checkWallet">
    			<image class="bg" wx:if="{{walletCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checky.png"></image>
    			<image class="bg" wx:if="{{!walletCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checkn.png"></image>
    		</view>
    	</view>   	
    	<view class="nav_list" wx:if="{{isWx}}">
    		<view class="nav_left">微信支付</view>
    		<view class="nav_right" @tap="checkWx">
    			<image class="bg" wx:if="{{wxCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checky.png"></image>
    			<image class="bg" wx:if="{{!wxCheck}}" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checkn.png"></image>
    		</view>
    	</view>
    </view> 

    <view class="box_pay">
    	<button class="weui-btn green-btn" wx:if="{{walletCheck}}" type="primary" disabled="{{isDisable}}" @tap="walletPay">钱包支付（{{dayPrice}}元）</button>
    	<button class="weui-btn green-btn" wx:if="{{cardCheck}}" type="primary" disabled="{{isDisable}}" @tap="cardPay">确认停车</button>
      <button class="weui-btn green-btn" wx:if="{{wxCheck}}" type="primary" disabled="{{isDisable}}" @tap="toPaySuccess">微信支付（{{dayPrice}}元）</button>
    </view>
  </view>

</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'
  import util from '../utils/util'
  import payresult from '../service/pay'

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
      expire_show:'',
      walletCheck:false,
      cardCheck:false,
      wxCheck:false,
      isWallet:true,
      isCard:true,
      isWx:true,
      userInfo:{},
      balance:0,
      vipStatus:'',
      code:''
    }

    computed = {

    }

    methods = {
      async toPaySuccess(){
        const self = this
        let data = {
	        meterSN : self.parkingInfo.sn,
	        spaceInnerNo : self.parkingInfo.parkNo,
	        fromSystem : 868,
	        payType : 12,
	        payment : parseInt(self.dayPrice*100)	        
	      }
        await self.getCode(data)
      },
      checkWallet(){
      	const self = this
      	if(self.balance >= self.dayPrice){
      		self.walletCheck = true
	      	self.cardCheck = false
	      	self.wxCheck = false
	      	self.$apply()
      	}else{
      		wx.showToast({
            title: '余额不足！',
            icon: 'none',
            duration: 2000
          })
      	}
      	
      },
      checkCard(){
      	const self = this
      	if(self.vipStatus > 0){
      		self.walletCheck = false
      		self.cardCheck = true
      		self.wxCheck = false
      	}else{
      		wx.showToast({
            title: '会员卡未开通或已过期！',
            icon: 'none',
            duration: 2000
          })
      	}
      	
      	self.$apply()
      },
      checkWx(){
      	const self = this
      	self.walletCheck = false
      	self.cardCheck = false
      	self.wxCheck = true
      	self.$apply()
      },
      async walletPay(){
      	const self = this
      	let data = {
	    		payType : 14,
	    		ownerId : self.userInfo.ownerId,
	    		weixinOpenid : self.userInfo.openId,
	    		fromSystem : 868,   		
	        meterSN : self.parkingInfo.sn,
	        spaceInnerNo : self.parkingInfo.parkNo,        
	        payment : parseInt(self.dayPrice*100),
	      }
   		  await self.getCode(data)
      },
      async cardPay(){
      	const self = this
      	let paytype = ''
      	if(self.vipStatus == 1){
      		paytype = 71
      	}else if(self.vipStatus == 2){
      		paytype = 72
      	}
      	let data = {
	    		payType : paytype,
	    		ownerId : self.userInfo.ownerId,
	    		weixinOpenid : self.userInfo.openId,
	    		fromSystem : 868,   		
	        meterSN : self.parkingInfo.sn,
	        spaceInnerNo : self.parkingInfo.parkNo,        
	        payment : parseInt(self.dayPrice*100),
	      }
   		  await self.getCode(data)
      }
      
    }

    events = {

    }

    async onLoad(option) {
      const self = this
      
      self.parkingInfo = await wepy.getStorageSync('parkingInfo')
      self.userInfo = await wepy.getStorageSync('userInfo')
      await self.getDayMoney()
      await self.getInfo(self.parkingInfo.sn)
      await self.getMinTime()
      self.balance = parseInt(self.userInfo.principalBalance + self.userInfo.givenBalance)/100
      self.vipStatus = self.userInfo.vipStatus
      
      if(self.vipStatus > 0){
      	self.cardCheck = true
      }else if(self.vipStatus == 0 && self.balance >= self.dayPrice){
      	self.walletCheck = true
      }else{
      	self.wxCheck = true
      }
      if(option.buyType == 'allday'){
      	self.isWallet = true
      	self.isCard = false
      	self.isWx = false
      }
      
      
      
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
    getCode(data){
      const self = this
      self.isDisable = true
      let codeInfo = ''
      wx.login({
        success(res){
        	
        	self.pay(res.code,data)
        	
        }
      })
      
      
    }
    
//  zhifu
    async pay(code,data){
    	const self = this
      let datas = data
      datas.code = code
    	const payInfo = await payresult.payInfo(datas)
      console.log(payInfo)
      if(payInfo.status == 0){
      	console.log('xxxxxxx')
      	wx.redirectTo({
       	  url: '/pages/paySuccess'
     		})
      }else{
      	self.isDisable = false
	      self.$apply()
	      wx.requestPayment({
	        timeStamp: payInfo.timeStamp,
	        nonceStr: payInfo.nonceStr,
	        package: payInfo.package,
	        signType: payInfo.signType,
	        paySign: payInfo.paySign,
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

		//获取code
//  async payCode(paytype){
//    const self = this
//    self.isDisable = true
//    wx.login({
//      success(res){
//        self.pay(res.code,paytype,)
//      }
//    })
//  }
		// 钱包,月卡,年卡支付
//		async pay(){
//			const self = this
//
//    let data = {
//      payItem : 1,
//      ownerId : self.userInfo.ownerId,	
//      payment : parseInt(self.checkMoney),
//      recordId : self.checkId,
//      code : code
//    }
//    try {
//      let dataInfo = await http({
//        method: api.wallet.recharge.method,
//        url: api.wallet.recharge.url,
//        data: JSON.stringify(data)
//      })
//      if(dataInfo.data.code == 0){
//        self.isDisable = false
//        self.$apply()
//        wx.requestPayment({
//          timeStamp: dataInfo.data.data.timeStamp,
//          nonceStr: dataInfo.data.data.nonceStr,
//          package: dataInfo.data.data.package,
//          signType: dataInfo.data.data.signType,
//          paySign: dataInfo.data.data.paySign,
//          success:function(data){
//            wx.redirectTo({
//              url: '/pages/paySuccess'
//            })
//          },
//          fail:function(e){
//            self.isDisable = false           	
//          	self.$apply()
//          }
//        })
//      }else if(dataInfo.data.code == -1){
//        wx.showToast({
//          title: '支付失败，请稍后再试！',
//          icon: 'none',
//          duration: 2000
//        })
//      }
//    } catch (e) {
//      console.log(e)
//    }
//		}
    // 页面首次加载
    async init(){
      const self = this

      self.starttime_show = util.timeFormat(self.starttime)
      self.expire_show = util.timeFormat(self.expire)
      
      
      
      
      self.$apply()
    }
    
   

  }
</script>
