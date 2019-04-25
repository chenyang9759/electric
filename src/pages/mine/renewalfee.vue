<style lang="less">
  page{
    width:100%;
    height:100%;
    background: #f4f5fa;
    position: relative;
    top:0;
    left:0;
    background: #fff;
  }
  
  .box{
    .cont{   	
    	width:678rpx;
    	margin-top:22rpx;
    	margin-left:36rpx;
    	box-shadow:0px 4px 40px rgba(0,0,0,0.1);
    	border-radius:14rpx;
    	.cont_top{
    		width:100%;
    		height:100rpx;
    		line-height: 100rpx;
    		text-align: center;
    		font-size:36rpx;
    		color:#141414;
    		border-bottom:2rpx solid #F1F1F1;
    	}
    	.cont_list{
    		width:658rpx;
    		height:100rpx;
    		margin-left:20rpx;
    		position: relative;
    		border-bottom:2rpx solid #F1F1F1;
    		.list_icon{
    			width:20rpx;
    			height:20rpx;
    			background: #FF9E5A;
    			border-radius: 10rpx;
    			position: absolute;
    			top:40rpx;
    		}
    		.list_tit{
    			font-size:32rpx;
    			color:#333;
    			line-height:100rpx;
    			text-indent:50rpx;
    		}
    	}
    	.cont_des{
    		width:658rpx;
    		height:146rpx;
    		margin-left:20rpx;
    		border-bottom:2rpx solid #F1F1F1;
    		position: relative;
    		.contdes_top{
    			line-height: 32rpx;
    			font-size:32rpx;
    			position: absolute;
    			top:36rpx;
    			left:50rpx;
    			color:#999;
    		}
    		.contdes_bot{
    			font-size:28rpx;
    			color:#BFBFBF;
    			position:absolute;
    			top:84rpx;
    			left:50rpx;
    		}
    	}
    	.cont_last{
    		width:658rpx;
    		height:100rpx;
    		line-height: 100rpx;
    		margin-left:20rpx;
    		position: relative;
    		.contlast_left{
    			font-size:28rpx;
    			color:#999;
    			position:absolute;
    			left:50rpx;    			
    		}
    		.contlast_right{
    			font-size:32rpx;
    			color:#FF680B;
    			position: absolute;
    			right:30rpx;
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
  
  }
  
  




</style>
<template>


  <view class="box">
  	<view class="cont">
  		<view class="cont_top">付款详情</view>
  		<view class="cont_list">
  			<view class="list_icon"></view>
  			<view class="list_tit">年卡权益</view>
  		</view>
  		<view class="cont_des">
  			<view class="contdes_top">尊享特惠价格，一年不限时停车</view>
  			<view class="contdes_bot">仅限广州从化地区停车</view>
  		</view>
  		<view class="cont_list">
  			<view class="list_icon"></view>
  			<view class="list_tit">升级年卡</view>
  		</view>
  		<view class="cont_last">
  			<view class="contlast_left">一年</view>
  			<view class="contlast_right">￥{{yearPrice}}</view>
  		</view>
  	</view>
  	
  	
  	
  	
  	
  	<view class="box_pay">
      <button class="weui-btn green-btn" type="primary" @tap="upgrade">微信支付（{{yearPrice}}）</button>
    </view>
  </view>
    
  


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Renewalfee extends wepy.page {
    config = {
      navigationBarTitleText: '续费',
      
    }

    components = {

    }




    data = {
      userInfo:{},
      yearPrice:''
    }



    computed = {

    }

    methods = {
      
    	
			async upgrade(){
				const self = this 
				await self.getCode(self.yearPrice)
			}


    }

    events = {

    }

    async onLoad() {
      const self = this
      self.userInfo = await wepy.getStorageSync('userInfo')
      await self.package()
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
         	self.yearPrice = dataInfo.data.data.yearStandard / 100
          
          self.$apply()
        }

      } catch (e) {
        console.log(e)
      }
    }
   

		//获取code
    async getCode(money){
      const self = this
      self.isDisable = true
      wx.login({
        success(res){
          self.sendOrder(res.code,money)
        }
      })
    }
    // 下订单
    async sendOrder(code,money){
      const self = this

      let data = {
        
        ownerId:self.userInfo.ownerId,	
        payment : parseInt(money*100),
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.vip.upgrade.method,
          url: api.vip.upgrade.url,
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
                url: '/pages/paySuccess?type=' + 'upgrade'
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
