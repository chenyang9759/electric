<style lang="less">
  page{
    width:100%;
    height:100%;
    background: #fff;
    position: relative;
    top:0;
    left:0;
    /*overflow: hidden;*/
  }
  
  .box{
  	width:100%;
  	height:100%;
  	position: relative;
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
  		position:relative;
  		
  		box-shadow:0px 4px 40px rgba(0,0,0,0.1);
    	border-radius:14rpx;
    	top:102rpx;
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
  			font-size:28rpx;
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
    
    <scroll-view scroll-y="true" class="cont" bindscrolltolower="onReachBottom">
    	<view class="cont_w" wx:if="{{ !isExpired }}">
    		<view class="content_list" wx:for="{{payList}}" wx:key="{{id}}">
	  			<view class="list_left">
	  				<view class="list_top">
	  					<view class="list_icon"></view>
	  					<view class="list_tit">{{item.msg}}</view>
	  				</view>
	  				<view class="list_bot">{{item.time}}</view>
	  			</view>
	  			<view class="list_right">¥<text wx:if="{{item.msg == '消费'}}">-</text>{{item.num}}</view>
	  		</view>
	  		
    	</view>
    	<view class="cont_w cont_y" wx:if="{{ isExpired }}">
    		<view class="content_list" wx:for="{{payList}}" wx:key="{{id}}">
	  			<view class="list_left">
	  				<view class="list_top">
	  					<view class="list_icon"></view>
	  					<view class="list_tit">充值</view>
	  				</view>
	  				<view class="list_bot">{{item.time}}</view>
	  			</view>
	  			<view class="list_right">¥{{item.principal}}(赠送：{{item.given}})</view>
	  		</view>
    	</view>
    	<view class="tips" wx:if="{{isShowtips}}">暂无更多明细</view>
    </scroll-view>
    
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'
	import util from '../../utils/util'





  export default class Income extends wepy.page {
    config = {
      navigationBarTitleText: '收支明细',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }

    components = {

    }




    data = {
      isExpired:false,
      pageindex:1,
      fundFlow:'',
      total:1,
      isShowtips:false,
      payList:[
      	{
      		id:1,
      		num:100,
      		time:'123123'
      	}
      ]
    }



    computed = {

    }

    methods = {
      
    	async wExpired(){
    		const self = this
    		self.isExpired = false
    		self.pageindex = 1
    		self.fundFlow = 2
    		self.payList = []
      	await self.getInfo(self.fundFlow,self.pageindex)
    		self.$apply()
    	},
    	async yExpired(){
    		const self = this
    		self.isExpired = true
    		self.pageindex = 1
    		self.fundFlow = 1
    		self.payList = []
      	await self.getInfo(self.fundFlow,self.pageindex)
    		self.$apply()
    	}
			


    }

    events = {

    }

    async onShow() {
      const self = this
      wx.showLoading({
        title: '加载中...'
      })
      self.isExpired = false
			self.pageindex = 1
			self.fundFlow = 2
			self.payList = []
      await self.getInfo(self.fundFlow,self.pageindex)
      self.$apply()
      wx.hideLoading()
    }
    
    async onReachBottom() {

      const self = this
     	wx.showLoading({
        title: '加载中...'
      })
      if(self.pageindex >= self.total){
        await self.getInfo(self.fundFlow,self.pageindex)
        
        wx.hideLoading()
      }else{


        self.isShowtips = true
        wx.hideLoading()
      }



    }
    

 		async getInfo(fundFlow,pageindex){
 			const self = this
      let data = {
      	fundFlow : fundFlow,
				pageIndex : pageindex,
				pageSize : 10
      }
   		wx.showLoading({
        title: '加载中...'
      })
      try {
        let dataInfo = await http({
            method: api.wallet.detail.method,
            url: api.wallet.detail.url,
            data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
        	self.total = Math.ceil(dataInfo.data.data.total/10)
         	console.log(dataInfo)
         	dataInfo.data.data.list.forEach((item,index)=>{
         		let msg = ''
         		if(item.fundFlow == 1){
         			msg = '退款'
         		}else{
         			msg = '消费'
         		}
         		self.payList.push({
         			id:index,
         			num:(parseInt(item.givenAmount + item.principalAmount)/100).toFixed(2),
         			given:(parseInt(item.givenAmount)/100).toFixed(2),
         			principal:(parseInt(item.principalAmount)/100).toFixed(2),
         			time:util.timeFormat(item.addTime),
         			msg:msg
         		})
         		
         	})
         		
         	
          if(self.total <= 1){
          	self.isShowtips = true
          }
          self.pageindex ++
        }
        wx.hideLoading()
        
        self.$apply()
      } catch (e) {
        console.log(e)
      }
 		}
   













  }
</script>
