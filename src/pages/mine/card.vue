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
  			width:690rpx;
  			margin-left:30rpx;
  			padding-bottom: 20rpx;
  			.list{
  				width:690rpx;
  				height:190rpx;
  				margin-top:20rpx;
  				position:relative;
  				
  				.bg{
  					width:690rpx;
  					height:190rpx;
  				}
  				.list_left{
  					width:220rpx;
  					height:190rpx;
  					position: absolute;
  					left:0;
  					top:0;
  					color:#fff;
  					.list_left_top{
  						font-size:28rpx;
  						text-align:center;
  						margin-top:10rpx;
  						.num{
  							font-size:64rpx;
  							/*font-weight:bold;*/
  						}
  					}
  					.list_left_bot{
  						font-size:28rpx;
  						text-align: center;
  					}
  				}
  				.list_right{
  					width:418rpx;
  					height:190rpx;
  					position: absolute;
  					left:248rpx;
  					top:0;
  				  background:#fff;
  					.list_right_top{
  						font-size:32rpx;
  						color:#666;
  						margin-top: 20rpx;
  					}
  					.list_right_center{
  						font-size:28rpx;
  						line-height:68rpx;
  						color:#999;
  						box-sizing: border-box;
  						border-bottom:1px solid #E4E4E4;
  					}
  					.list_right_bot{
  						font-size:24rpx;
  						color:#999;
  						line-height: 48rpx;
  					}
  				}
  				.seal{
  					width:138rpx;
  					height:138rpx;
  					position:absolute;
  					top:18rpx;
  					right:28rpx;
  				}
  			}
  			
  		}
  	}
  }
  
  




</style>
<template>
  <view class="box">
    <view class="header">
    	<view class="header_cont">
    		<view class="header_list {{ !isExpired ? 'header_list_act' : '' }}" @tap="wExpired">未使用</view>
    		<view class="header_list {{ isExpired ? 'header_list_act' : '' }}" @tap="yExpired">已过期</view>
    	</view>
    </view>
    
    <scroll-view scroll-y="true" class="cont">
    	<view class="cont_w" wx:if="{{ !isExpired }}">
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardw.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardwg.png"></image>
    		</view>
    	</view>
    	<view class="cont_w cont_y" wx:if="{{ isExpired }}">
    		<view class="list">
    			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardy.png"></image>
    			<view class="list_left">
    				<view class="list_left_top">￥<text class="num">100</text></view>
    				<view class="list_left_bot">停车券</view>
    			</view>
    			<view class="list_right">
    				<view class="list_right_top">停车券</view>
    				<view class="list_right_center">适用于单笔订单使用</view>
    				<view class="list_right_bot">截止日期：2018-10-21</view>
    			</view>
    			<image class="seal" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_cardyg.png"></image>
    		</view>
    	</view>
    </scroll-view>
    
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Card extends wepy.page {
    config = {
      navigationBarTitleText: '我的卡券',
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
