<style lang="less">
  page{
    width:100%;
    height:100%;
    background: #fff;
    position: relative;
    top:0;
    left:0;
  }

  .box{
    width:100%;
    height:100%;
    .header{
    	width:750rpx;
    	height:242rpx; 
    	position:relative;  	
    	.bg{
    		width:750rpx;
    		height:242rpx;
    	}
    	.avater{
    		position:absolute;
    		top:26rpx;
    		left:314rpx;
    		width:124rpx;
    		height:124rpx;
    		-webkit-border-radius: 50%;
    		-moz-border-radius: 50%;
    		border-radius: 50%;
    		background:#fff;
    		.avater_img{
    			width:116rpx;
    			height:116rpx;
    			background:#E3E3E5;
    			position:absolute;
    			top:4rpx;
    			left:4rpx;
    			-webkit-border-radius: 50%;
    			-moz-border-radius: 50%;
    			border-radius: 50%;
    			overflow:hidden;
    			image{
    				width:116rpx;
    				height:116rpx;
    			}
    		}
    	}
    	.btn{
    		width:100%;
    		position: absolute;
    		top:156rpx;
    		font-size:28rpx;
    		color:#fff;
    		text-align: center;
    		.btn_login{
    		  width:400rpx;
    			height:40rpx;
    			line-height: 40rpx;
    			text-align:center;
    			font-size:28rpx;
    			background: none;
    			color:#fff;
    			overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
    		}
    		.btn_login::after{
    			border:none;
    		}
    		.btn_nickname{
    			width:400rpx;
    			margin-left:175rpx;
    			height:40rpx;
    			line-height: 40rpx;
    			text-align:center;
    			font-size:28rpx;
    			background: none;
    			color:#fff;
    			overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
    		}
    	}
    }
    
    .cont{
    	width:100%;
    	.cont_content{
    		width:658rpx;
    		height:84rpx;
    		display:flex;
    		margin-left:46rpx;
    		margin-top:40rpx;
    		justify-content: space-between;
    		.cont_list{
    			width:220rpx;
    			border-left:1px solid #ECECEC;
    			.list{
    				line-height: 42rpx;
    				font-size:40rpx;
    				color:#333;
    				text-indent:40rpx;
    			}
    			.list_bot{
    				font-size:28rpx;
    				color:#9a9a9a;
    				text-indent:40rpx;
    				margin-top: 6rpx;
    			}
    		}
    		.first_list{
    			border-left:none;
    		}
    	}
    }
    
    .slide{
    	width:666rpx;
    	margin-left:42rpx;
    	margin-top: 50rpx;
    	.slide_first{
    		width:666rpx;
    		height:146rpx;
    		position: relative;
    		line-height: 48rpx;
    		font-size:28rpx;
    		border-top:1px solid #ECECEC;
    		border-bottom:1px solid #ECECEC;
    		.slide_first_left{
    			width:40rpx;
    			height:48rpx;
    			
    			
    			position: absolute;
    			top:38rpx;
    			left:0;
    			.vip{
    				width:40rpx;
    				height:28rpx;
    			}
    		}
    		.slide_first_center{
    			width:400rpx;
    			height:48rpx;
    			position:absolute;
    			top:34rpx;
    			left:56rpx;
    			font-weight:bold;
    			.tips{
    				color:#BBBBBB;
    				font-size:24rpx;
    				
    				font-weight:normal;
    			}
    		}
    		.slide_first_right{
    			width:116rpx;
    			height:48rpx;
    			position:absolute;
    			top:34rpx;
    			right:0;
    			-webkit-border-radius: 8rpx;
    			-moz-border-radius: 8rpx;
    			border-radius: 8rpx;
    			background:#F6D300;
    			color:#2A2000;
    			text-align: center;
    			font-size:24rpx;
    		}
    	}
    	
    	.slide_list{
    		width:666rpx;
    		height:90rpx;
    		position: relative;
    		line-height: 40rpx;
    		font-size:28rpx;
    		border-bottom:1px solid #ECECEC;
    		.slide_list_left{
    			width:40rpx;
    			height:40rpx;
    			position:absolute;
    			top:25rpx;
    			.img{
    				width:40rpx;
    				height:40rpx;
    			}
    		}
    		.slide_list_center{
    			position:absolute;
    			top:25rpx;
    			left:56rpx;
    			font-weight:bold;
    		}
    		.slide_list_right{
    			width:15rpx;
    			height:24rpx;
    			position:absolute;
    			top:33rpx;
    			right:0;
    			.img{
    				width:15rpx;
    				height:24rpx;
    			}
    		}
    	}
    	
    	
    }
    
    

  }

</style>
<template>

  <view class="box">
    <view class="header">
    	<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_header.jpg"></image>
    	<view class="avater">
    		<view class="avater_img">
    			<image src="{{userInfo.headImg}}"></image>
    		</view>
    	</view>
    	<view class="btn">
    		<!--<button>点击登录</button>-->
    		<button class="btn_login" open-type="getUserInfo" wx:if="{{!isPhoneNumber}}" bindgetuserinfo="handleUserInfo" wx:if="{{!islogin}}">点击登录</button>
        <view class="btn_nickname" wx:if="{{islogin}}">{{userInfo.nickName}}</view>
    	</view>
    </view>
    
    <view class="cont">
    	<view class="cont_content">
    		<view class="cont_list first_list" @tap="toWallet">
    			<view class="list">0.00</view>
    			<view class="list_bot">钱包</view>
    		</view>
				<view class="cont_list" @tap="toCard">
					<view class="list">0</view>
    			<view class="list_bot">停车券</view>
				</view>
				<view class="cont_list" @tap="toCoupon">
					<view class="list">0</view>
    			<view class="list_bot">优惠券</view>
				</view>
    	</view>  
    	
    	<view class="slide">
    		<view class="slide_first">
    			<view class="slide_first_left">
    				<image class="vip" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_vip.png"></image>
    			</view>
    			<view class="slide_first_center">
    				<view>开通停车卡，享更多优惠</view>
    				<view class="tips">停车卡低至每月450元</view>
    			</view>
    			<view class="slide_first_right" @tap="toParkcard">立即开通</view>
    		</view>
    		<!--<view class="slide_list">
	    	  <view class="slide_list_left">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/min_vips.png"></image>
	    	  </view>
	    	  <view class="slide_list_center">停车卡</view>
	    	  <view class="slide_list_right">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
	    	  </view>
	    	</view>-->
	    	<view class="slide_list">
	    	  <view class="slide_list_left">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_news.png"></image>
	    	  </view>
	    	  <view class="slide_list_center">消息</view>
	    	  <view class="slide_list_right">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
	    	  </view>
	    	</view>
	    	<!--<view class="slide_list">
	    	  <view class="slide_list_left">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_set.png"></image>
	    	  </view>
	    	  <view class="slide_list_center">设置</view>
	    	  <view class="slide_list_right">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
	    	  </view>
	    	</view>-->
    	</view>
    	
    </view>
    
    
    
  </view>



</template>



<script>
  import wepy from 'wepy'
 	import http from '../utils/request'
  import auth from '../service/auth'
  import {api} from '../config'





  export default class Mine extends wepy.page {
    config = {
      navigationBarTitleText: '我的',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'

    }
    components = {

    }



    data = {
      userInfo:{},
      islogin:false

    }

    computed = {

    }

    methods = {
 			toCard(){
 				wepy.navigateTo({
	        url: '/pages/mine/card'
	      })
 			},
 			toWallet(){
 				wepy.navigateTo({
	        url: '/pages/mine/wallet'
	      })
 			},
 			toCoupon(){
 				wepy.navigateTo({
	        url: '/pages/mine/coupon'
	      })
 			},
 			toParkcard(){
 				wepy.navigateTo({
	        url: '/pages/mine/parkcard'
	      })
 			},
 			async handleUserInfo(e) {
        const self = this
        let msg = e.detail.errMsg
        if (msg === 'getUserInfo:ok') {
          await auth.register(e.detail)
         
          self.userInfo = wepy.getStorageSync('userInfo')
          self.islogin = true
          self.$apply()
        }
      }
 			
 			
 			
 			
    }

    events = {

    }

    async onLoad() {
      const self = this
      self.userInfo = wepy.getStorageSync('userInfo')
      if(self.userInfo.headImg == ''){
      	self.islogin = false
      }else{
      	self.islogin = true
      }
      self.$apply()
    }
  }
</script>
