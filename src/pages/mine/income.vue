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
  		width:678rpx;
  		box-shadow:0px 4px 40px rgba(0,0,0,0.1);
    	border-radius:14rpx;
    	margin-top:102rpx;
    	margin-left: 36rpx;
  		.content_list{
  			width:650rpx;
  			height:110rpx;
  			margin-left: 24rpx;
  			border-bottom:2rpx dashed #F0F0F0;
  		  
  			position: relative;
  			.list_top{
  				
  				.list_icon{
  					width:20rpx;
  					height:20rpx;
  					background: #00c8b3;
  					border-radius:10rpx;
  					position: absolute;
  					top:24rpx;
  				}
  				.list_tit{
  					font-size:32rpx;
  					width:200rpx;
  					height:32rpx;
  					line-height: 32rpx;
  					color:#484848;
  					position: absolute;
  					top:18rpx;
  					left:46rpx;
  				}  				
  			}
  			.list_bot{
					font-size:24rpx;
					color:#cccccc;
					position:absolute;
					bottom:14rpx;
					left:46rpx;
				}
  		}
  		.list_right{
  			position: absolute;
  			right:20rpx;
  			line-height: 102rpx;
  			color:#FBA51E;
  			font-size:36rpx;
  		}
  	}
  }
  
  .tips{
    width: 100%;
    text-align: center;
    font-size: 28rpx;
    line-height: 110rpx;
    color:#999;
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
    		<view class="content_list">
	  			<view class="list_left">
	  				<view class="list_top">
	  					<view class="list_icon"></view>
	  					<view class="list_tit">消费</view>
	  				</view>
	  				<view class="list_bot">2018 10/05 12:56</view>
	  			</view>
	  			<view class="list_right">¥-450</view>
	  		</view>
    	</view>
    	<view class="cont_w cont_y" wx:if="{{ isExpired }}">
    		<view class="content_list">
	  			<view class="list_left">
	  				<view class="list_top">
	  					<view class="list_icon"></view>
	  					<view class="list_tit">充值</view>
	  				</view>
	  				<view class="list_bot">2018 10/05 12:56</view>
	  			</view>
	  			<view class="list_right">¥450</view>
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
