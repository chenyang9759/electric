<style lang="less">
  page{
    width:100%;
    height:100%;
    background: #00c8b3;
    position: relative;
    top:0;
    left:0;
  }
  
  .box{
  	width:100%; 
  	padding-top: 20rpx;
  	.header{
  		width:690rpx;
  		height:872rpx;
  		padding-top:28rpx;
  		-webkit-border-radius: 12rpx;
  		-moz-border-radius: 12rpx;
  		border-radius: 12rpx;
  		background:#fff;
  		margin-left:30rpx; 		
  		text-indent:32rpx;
  		.header_tit{
  			font-size:32rpx;
  			color:#3F3F46;
  		}
  		.header_end{
  			font-size:32rpx;
  			color:#3F3F46;
  			.endtime{
  				color:#00c8b3;
  			}
  		}
  		.header_tips{
  			font-size:24rpx;
  			color:#929292;
  		}
  		.header_line{
  			width:662rpx;
  			height:2rpx;
  			background: #EEEDED;
  			margin-left: 14rpx;
  			margin-top:30rpx;
  		}
  		.ticketcode{
  			width:500rpx;
  			height:94rpx;
  			background:#EEEDED;
  			margin:0 auto;
  			margin-top:70rpx;
  			font-size:36rpx;
  			color:#202020;
  			text-indent:0;
  			text-align: center;
  			line-height: 94rpx;
  		}
  		.barcode{
  			width:484rpx;
  			height:84rpx;
  		  margin:0 auto;
  		  margin-top:20rpx;
  		  font-size:0;  		 
  			image{
  				display: block;
  				width:484rpx;
  				height:84rpx;  				
  			}
  			
  		}
  		.qrcode{
  			width:356rpx;
  			height:356rpx;
  		  margin:0 auto;
  		  margin-top:20rpx;
  		  font-size:0;  		 
  			image{
  				display: block;
  				width:356rpx;
  				height:356rpx;  				
  			}
  		}
  	}
  	
  	.cont{
  		width:690rpx;
  		height:180rpx;
  		margin-top:20rpx;
  		-webkit-border-radius: 12rpx;
  		-moz-border-radius: 12rpx;
  		border-radius: 12rpx;
  		background:#fff;
  		margin-left:30rpx; 		
  		text-indent:32rpx;
  		padding-top: 20rpx;
  		.cont_tit{
  			color:#3F3F46;
  			font-size:32rpx;
  			font-weight: 600;
  			
  			margin-bottom: 10rpx;
  		}
  		.cont_des{
  			font-size:28rpx;
  			color:#929292;
  		}
  	}
  	
  	
  	
  	
  	
  }
  
  




</style>
<template>
  <view class="box">
    <view class="header">
      <view class="header_tit">
      	同城酒库10元红酒劵
      </view>
      <view class="header_end">
                         有效期：<text class="endtime">2019.08.12-1019.09.12</text>                      
      </view>
      <view class="header_tips">
      	自领劵起7日内有效
      </view>
      <view class="header_line"></view>
      <view class="ticketcode">
      	劵码：122292829291
      </view>
      <view class="barcode">
      	<image src="https://caoke.oss-cn-beijing.aliyuncs.com/barcode.png"></image>
      </view>
      <view class="qrcode">
      	<image src="https://caoke.oss-cn-beijing.aliyuncs.com/qrcode.jpg"></image>
      </view>
    </view>
    
    <view class="cont">
    	<view class="cont_tit">优惠劵规则说明</view>
    	<view class="cont_des">使用地点：创新路时尚家居对面同城酒库</view>
    	<view class="cont_des">红酒品类满50可用，请在制定地点店铺使用。</view>
    </view>
    
    
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Coupondetail extends wepy.page {
    config = {
      navigationBarTitleText: '优惠券详情',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }

    components = {

    }




    data = {
      
    }



    computed = {

    }

    methods = {
      
    	



    }

    events = {

    }

    async onLoad() {
      
    }


   













  }
</script>
