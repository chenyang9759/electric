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
  	.header{
  		width:100%;
  		height:88rpx;
  		background:#fff;
  		position: fixed;
  		z-index: 99;
  		top:0;
  		.header_cont{
  			width:640rpx;
  			height:88rpx;
  			margin-left: 55rpx;
  			display: flex;
  			justify-content: space-between;
  			.header_list{
  				width:304rpx;
  				height:88rpx;
  				line-height:84rpx;
  				font-size:28rpx;
  				text-align: center;
  				box-sizing: border-box; 
  				color:#666; 				
  			}
  			.header_list_act{
  				color:#00c8b3;
  				border-bottom:4rpx solid #00c8b3;
  			}
  		}
  	}
  	
  	.cont{
  		width:100%;
  		position:absolute;
  		top:88rpx;
  		.cont_w{
  			width:710rpx;
  			margin-left:20rpx;
  			
  			margin-top:6rpx;
  			background:#fff;
  		  .list{
  		  	width:710rpx;
  		  	height:98rpx;  		  	
  		  	position:relative;
  		  	.list_cont{
  		  		width:678rpx;
  		  		height:98rpx;
  		  		border-bottom:2rpx solid #E9E9E9;
  		  		position: absolute;
  		  		right:0;
  		  		.cont_left{
  		  			width:380rpx;
  		  			height:98rpx;
  		  			position: absolute;
  		  			top:0;
  		  			left:0;
  		  			.cont_left_top{
  		  				font-size:28rpx;
  		  				color:#666;
  		  				margin-top:10rpx;
  		  			}
  		  			.cont_left_bot{
  		  				font-size:18rpx;
  		  				color:#A1A1A1;
  		  			}
  		  		}
  		  		.cont_right{
  		  			width:270rpx;
  		  			height:98rpx;
  		  			position: absolute;
  		  			top:0;
  		  			right:30rpx;
  		  			text-align: right;
  		  			line-height: 98rpx;
  		  			color:#666;
  		  			font-size:28rpx;
  		  		}
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




</style>
<template>
  <view class="box">
    <view class="header">
    	<view class="header_cont">
    		<view class="header_list {{ !isExpired ? 'header_list_act' : '' }}" @tap="wExpired">支付</view>
    		<view class="header_list {{ isExpired ? 'header_list_act' : '' }}" @tap="yExpired">充值</view>
    	</view>
    </view>
    
    <scroll-view scroll-y="true" class="cont">
    	<view class="cont_w" wx:if="{{ !isExpired }}">
    		<view class="list">
    			<view class="list_cont">
    				<view class="cont_left">
    					<view class="cont_left_top">支付</view>
    					<view class="cont_left_bot">2018-01-11 16:00</view>
    				</view>
    				<view class="cont_right">
    					-100元
    				</view>
    			</view>
    			
    		</view>    		
    		<view class="list">
    			<view class="list_cont">
    				<view class="cont_left">
    					<view class="cont_left_top">支付</view>
    					<view class="cont_left_bot">2018-01-11 16:00</view>
    				</view>
    				<view class="cont_right">
    					-100元
    				</view>
    			</view>
    			
    		</view>    		
    	</view>
    	<view class="cont_w cont_y" wx:if="{{ isExpired }}">
    		<view class="list">
    			<view class="list_cont">
    				<view class="cont_left">
    					<view class="cont_left_top">充值</view>
    					<view class="cont_left_bot">2018-01-11 16:00</view>
    				</view>
    				<view class="cont_right">
    					+200元
    				</view>
    			</view>
    			
    		</view>    
    	</view>
    	<view class="tips">暂无更多明细</view>
    </scroll-view>
    
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Income extends wepy.page {
    config = {
      navigationBarTitleText: '收支明细',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }

    components = {

    }




    data = {
      isExpired:false
      
    }



    computed = {

    }

    methods = {
      
    	wExpired(){
    		const self = this
    		self.isExpired = false
    		self.$apply()
    	},
    	yExpired(){
    		const self = this
    		self.isExpired = true
    		self.$apply()
    	}



    }

    events = {

    }

    async onLoad() {
      
    }


   













  }
</script>
