<style lang="less">
  page{
    width:100%;
    height:100%;
    background: #f4f5fa;
    position: relative;
    top:0;
    left:0;
  }
  
  .box{
  	width:100%;
  	height:100%;
  	position:relative;
  	.bg{
  		display: block;
  		width:100%;
  		height:100%;
  	}
  	.gift{
  		width:656rpx;
  		height:710rpx;
  		position:absolute;
  		top:46rpx;
  		left:47rpx;
  	}
  	.cont{
  		width:690rpx;
  		height:526rpx;
  		border-radius:14rpx;
  		background:#FFF0D9;
  		position:absolute;
  		top:560rpx;
  		left:30rpx;
  		.cont_tit{
  			font-size:40rpx;
  			height:110rpx;
  			line-height: 110rpx;
  			text-align: center;
  			color:#AB5E13;
  			font-weight:700;
  		}
  		.cont_list{
  			width:612rpx;
  			height:158rpx;
  			background:#fff;
  			margin-bottom:38rpx;
  			margin-left:38rpx;
  			position:relative;
  			.cont_top{
  				width:85rpx;
  				height:73rpx;
  				position: absolute;
  				top:0;
  				left:0;
  			}
  			.list_left{
  				position: absolute;
  				top:44rpx;
  				left:60rpx;
  				height:36rpx;
  				line-height: 36rpx;
  				font-size:28rpx;
  				color:#333;
  				.left_top{
  					.year{
	  					font-size:36rpx;
	  					font-weight:600;
	  					color:#F95807;
	  				}
  				}
  				.left_bot{
  					font-size:28rpx;
  					color:#666;
  					margin-top: 6rpx;
  				}
  			}
  			.list_right{
  				width:150rpx;
  				height:68rpx;
  				line-height: 68rpx;
  				font-size:28rpx;
  				color:#AA2721;
  				text-align: center;
  				line-height: 68rpx;
  				border-radius:34rpx;
  				background:#FFCC00;
  				position: absolute;
  				right:36rpx;
  				top:50rpx;
  			}
  		}
  	}
  }
  
  




</style>
<template>
  <view class="box">
    <image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_parkcardbg.jpg"></image>
    <image class="gift" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_parkcardlw.png"></image>
    
    <view class="cont">
    	<view class="cont_tit">会员卡</view>
    	<view class="cont_list">
    		<image class="cont_top" src="https://caoke.oss-cn-beijing.aliyuncs.com/tehui.png"></image>
    		<view class="list_left">
    			<view class="left_top"><text class="year">{{yearPrice}}</text>/每年</view>
    			<view class="left_bot">低至每天{{dayPrice}}元，停车不限时</view>
    		</view>
    		<view class="list_right" @tap="toYear">立即开通</view>
    	</view>
    	<view class="cont_list">
    		<view class="list_left">
    			<view class="left_top"><text class="year" style="color:#666;">{{monthPrice}}</text>/每月</view>
    			<view class="left_bot">按月付费，方便灵活</view>
    		</view>
    		<view class="list_right" style="color:#DE7127;background:#FFF0D9;" @tap="toMonth">立即开通</view>
    	</view>
    </view>
    
    
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Card extends wepy.page {
    config = {
      navigationBarTitleText: '开通会员',
      navigationBarBackgroundColor:'#fdb238',
      navigationBarTextStyle:'white'
    }

    components = {

    }




    data = {
      yearPrice:0,
      monthPrice:0,
      dayPrice:0,
      userInfo:{}
    }



    computed = {

    }

    methods = {
      
    	async toYear(){
        const self = this
    		await self.getCode(self.yearPrice,2)
    	},
    	async toMonth(){
        const self = this
    		await self.getCode(self.monthPrice,1)
    	}



    }

    events = {

    }

    async onShow() {
      const self = this 
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      self.userInfo = await wepy.getStorageSync('userInfo')
      await self.package()
      self.$apply()
      wx.hideLoading()
    }


    async package(){
    	const self = this
      let data = {

      }
   
      try {
        let dataInfo = await http({
            method: api.vip.getPackage.method,
            url: api.vip.getPackage.url,
            data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.monthPrice = dataInfo.data.data.monthStandard / 100
          self.yearPrice = dataInfo.data.data.yearStandard / 100
          self.dayPrice = Math.ceil(self.yearPrice / 365)
          self.$apply()
        }

      } catch (e) {
        console.log(e)
      }
    }
    
    //获取code
    async getCode(money,type){
      const self = this
      self.isDisable = true
      wx.login({
        success(res){
          self.sendOrder(res.code,money,type)
        }
      })
    }
    // 下订单
    async sendOrder(code,money,type){
      const self = this

      let data = {
        vipType:type,
        ownerId:self.userInfo.ownerId,	
        payment : parseInt(money*100),
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.vip.pay.method,
          url: api.vip.pay.url,
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
                url: '/pages/paySuccess?type=' + 'open'
              })
            },
            fail:function(e){
              self.isDisable = false           	
            	self.$apply()
            }
          })
        }else if(dataInfo.data.code == -1){
          wx.showToast({
            title: '暂时无法充值，请稍后再试！',
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
