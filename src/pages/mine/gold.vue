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
  	.header{
  		width:714rpx;
  		height:370rpx;
  		margin-left:18rpx;
  		position:relative;
  		.header_bg{
  			width:714rpx;
  			height:370rpx;
  		}
  		.header_tit{
  			position:absolute;
  			top:56rpx;
  			left:66rpx;
  			font-size:60rpx;
  			color:#635F58;
  		}
  		.header_icon{
  			width:176rpx;
  			height:180rpx;
  			position:absolute;
  			top:56rpx;
  			right:64rpx;
  			.icon_bg{
  				width:176rpx;
  				height:180rpx;
  			}
  			.icon_tit{
  				width:108rpx;
  				height:86rpx;
  				position:absolute;
  				top:46rpx;
  				left:34rpx;
  			}
  		}
  		.header_start{
				font-size:32rpx;
				color:#635F58;
				position: absolute;
			  top:220rpx;
			  left:72rpx;
			}
			.header_end{
				font-size:32rpx;
				color:#635F58;
				position: absolute;
			  top:266rpx;
			  left:72rpx;
			}
  	}
  	
  	.content{
  		width:678rpx;
  		margin-left: 36rpx;
  		padding-bottom: 120rpx;
  		background:#fff;
  		border-top:2rpx dashed #F0F0F0;
  		border-bottom:2rpx dashed #F0F0F0;
  		.content_top{
  			width:678rpx;
  			height:102rpx;
  			line-height: 102rpx;
  		
  			position:relative;
  			
  			.contenttop_icon{
  				width:8rpx;
  				height:28rpx;
  				position:absolute;
  				top:36rpx;
  				background:#00c8b3;
  			}
  			.contenttop_tit{
  				font-size:28rpx;
  				color:#A9A9A9;
  				text-indent: 24rpx;
  			}
  		}
  		.content_list{
  			width:650rpx;
  			height:102rpx;
  			margin-left: 24rpx;
  			border-top:2rpx dashed #F0F0F0;
  		
  			position: relative;
  			.list_top{
  				
  				.list_icon{
  					width:20rpx;
  					height:20rpx;
  					background: #00c8b3;
  					border-radius:10rpx;
  					position: absolute;
  					top:20rpx;
  				}
  				.list_tit{
  					font-size:32rpx;
  					width:400rpx;
  					height:32rpx;
  					line-height: 32rpx;
  					color:#484848;
  					position: absolute;
  					top:14rpx;
  					left:46rpx;
  				}  				
  			}
  			.list_bot{
					font-size:24rpx;
					color:#cccccc;
					position:absolute;
					bottom:10rpx;
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
  	
  	<view class="header">
  		
  		<image class="header_bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mycard_bg.png"></image>
  		<view class="header_tit">包年停车卡</view>
  		<view class="header_icon" wx:if="{{vipStatus == 2}}">
  			<image class="icon_bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mycard_icon_bg.png"></image>
  			<image class="icon_tit" src="https://caoke.oss-cn-beijing.aliyuncs.com/mycard_icon_tit.png"></image>
  		</view>
  		<view class="header_start">签约日期 {{startTime}}</view>
  		<view class="header_end">有效期至 {{endTime}}</view>
  	</view>
  	
  	<view class="content">
  		<view class="content_top">
  			<view class="contenttop_icon"></view>
  			<view class="contenttop_tit">停车卡信息</view>
  		</view>
  		<view class="content_list" wx:for="{{payList}}" wx:key="{{id}}">
  			<view class="list_left">
  				<view class="list_top">
  					<view class="list_icon"></view>
  					<view class="list_tit">{{item.paytype}}</view>
  				</view>
  				<view class="list_bot">{{item.time}}</view>
  			</view>
  			<view class="list_right">¥{{item.payment}}</view>
  		</view>
  	</view>
  	
  	
  	
  	
  	
  	
  	
  	
  	<view class="box_pay">
      <button class="weui-btn green-btn" type="primary" @tap="continue">续费</button>
    </view>
  </view>
    
  


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'
	import util from '../../utils/util'




  export default class Gold extends wepy.page {
    config = {
      navigationBarTitleText: '我的停车卡',
      
    }

    components = {

    }




    data = {
      userInfo:{},
      payList:[
        
      ],
      startTime:'',
      endTime:'',
      vipStatus:'',
      yearPrice:''
    }



    computed = {

    }

    methods = {
      
    	
			async continue(){
    		const self = this
    		await self.getCode(self.yearPrice)
    	}


    }

    events = {

    }

    async onShow() {
    	
    	const self = this
    	await self.package()
    	self.userInfo = await wepy.getStorageSync('userInfo')
    	self.startTime = util.timeFormat1(self.userInfo.vipStartTime)
    	self.endTime = util.timeFormat1(self.userInfo.vipEndTime)
    	
      await self.getList()
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
    
    async getList(){
    	const self = this
      let data = {
				ownerId:self.userInfo.ownerId
      }
   
      try {
        let dataInfo = await http({
            method: api.vip.list.method,
            url: api.vip.list.url,
            data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          console.log(dataInfo)
          self.payList = []
          dataInfo.data.data.list.forEach((item,index)=>{
          	self.payList.push({
          		id:index,
          		payment:((item.payMent)/100).toFixed(2),
          		time:util.timeFormat(item.payTime),
          		paytype:item.payType_text.substr(7)
          	})
          	
          })
          self.vipStatus = dataInfo.data.data.vipStatus
          self.payList.reverse()
          
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
                url: '/pages/paySuccess?type=' + 'xufei'
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
