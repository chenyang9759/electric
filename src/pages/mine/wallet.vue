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
  		height:470rpx;
  		position:relative;
  		.header_top{
  			width:100%;
  			height:110rpx;
  			
  		}
  		.header_bot{
  			width:690rpx;
  			height:450rpx;
  			position:absolute;
  			top:20rpx;
  			left:30rpx;
  			box-shadow:4px 4px 10px rgba(0,0,0,0.2);
  			text-align: center;
  			.header_bot_bg{
  				width:690rpx;
  				height:450rpx;
  				
  			}
  			.money{
  				width:100%; 				
  				position: absolute;
  				top:70rpx;
  				font-size:88rpx;
  				font-weight:bold;
  				color:#fff;
  			}
  			.tips{
  				width:100%;
  				position:absolute;
  				top:196rpx;
  				font-size:32rpx;
  				color:#fff;
  			}
  			.nav{
  				width:100%;
  				height: 30rpx;
  				text-align: center;
  				display: flex;
  				justify-content: space-between;
  				font-size: 28rpx;
  				color:#666;
  				position:absolute;
  				bottom:48rpx;
  				.nav_list{
  					width:445rpx;
  					height:30rpx;
  					line-height: 30rpx;
  					text-align: center;
  					position:relative;
  					.icon{
  						width:26rpx;
  						height:30rpx;
  						position:absolute;
  						top:0;
  						left:74rpx;
  						image{
  							width:26rpx;
  							height:30rpx;
  						}
  					}
  				}
  				.first_list{
  					border-right:2rpx solid #EBEBEB;
  				}
  			}
  		}
  	}
  	
  	.cont{
  		width:690rpx;
  		/*height:464rpx;*/
  		margin-left: 30rpx;
      margin-top:20rpx;
      padding-bottom: 40rpx;;
      background:#fff;
      -webkit-border-radius: 12rpx;
      -moz-border-radius: 12rpx;
      border-radius: 12rpx;
			overflow: hidden;
      .cont_top{
      	width:690rpx;
      	height:12rpx;
      	background:#00c8b3;
      	
				
      }
      .title{
      	width: 100%;
      	height:60rpx;
      	line-height: 60rpx;
      	color:#7E7E7E;
      	font-size:28rpx;
      	text-indent: 30rpx;
      	margin-top: 10rpx;
      }
      .content{
	  		width:620rpx;
	  		
	  		margin-left: 35rpx;
	  		margin-top: 20rpx;
	  		display: flex;
	  		flex-wrap: wrap;
	  		justify-content: space-between;
	  		.list{
	  			width:288rpx;
	  			height:86rpx;
	  			line-height: 86rpx;
	  			font-size:28rpx;
	  			color:#666;
	  		  text-align: center;
	  		  border-radius:10rpx;
	  		  box-sizing: border-box;
	  		  border:2rpx solid #DCDCDC;	  		  
	  		}
	  		.list_act{
	  			background:#00c8b3;
	  			color:#fff;
	  			border:none;
	  		}
	  	}
  	}
  	
  	.tip{
  		width:620rpx;
  		margin-left: 65rpx;
  		font-size:24rpx;
  		color:#BDBDBD;
      margin-top:20rpx;
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
   		<view class="header_top">
   			
   		</view>
   		<view class="header_bot">
   			<image class="header_bot_bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_wallet_bg.png"></image>
   			<view class="money">
   				{{money}}
   			</view>
   			<view class="tips">
   				￥余额
   			</view>
   			<view class="nav">
   				<view class="nav_list first_list" @tap="toIncome">
   					<view class="icon">
   						<image class="header_bot_bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_sz.png"></image>
   					</view>
   					<view>收支明细</view>
   				</view>
   				<view class="nav_list">
   				  <view class="icon">
   				  	<image class="header_bot_bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_gy.png"></image>
   				  </view>
   				  <view>关于钱包</view>
   				</view>
   			</view>
   		</view>
   	</view>
    
    <view class="cont">
    	<view class="cont_top"></view>
    	<view class="title">钱包充值</view>
    	<view class="content">
    		<view wx:for="{{ moneyArr }}" wx:key="{{ id }}" class="list {{ item.check ? 'list_act' : '' }}" @tap="check( '{{ item.id }}' )">充{{item.rechargeAmount/100}}送{{item.givenAmount/100}}</view>
    		
    	</view>
    </view>
    
    <view class="tip">    	
                   温馨提示：充值成功后，到账可能会有一定延迟，请耐心等待。钱包暂不支持提现喔~                        
    </view>
    
    <view class="box_pay" wx:if="{{moneyArr.length > 0}}" @tap="pay">
      <button class="weui-btn green-btn" type="primary">微信支付</button>
    </view>
   
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Wallet extends wepy.page {
    config = {
      navigationBarTitleText: '我的钱包'
    }

    components = {

    }




    data = {
      isExpired:false,
      userInfo:{},
      money:0,
      moneyArr:[
       
      
      ],
      checkId:'',
      checkMoney:''
      
    }



    computed = {

    }

    methods = {
      check(id){
      	const self = this 
      	self.moneyArr.forEach((item)=>{
      		item.check = false
      		
      	})
      	self.moneyArr[id].check = true
      	self.checkId = self.moneyArr[id].topupItemId
      	self.checkMoney = self.moneyArr[id].rechargeAmount
      	self.$apply()
      },
      toIncome(){
      	wepy.navigateTo({
	        url: '/pages/mine/income'
	      })
      },
      async pay(){
      	const self = this
      	await self.getCode()
      }
    

    }

    events = {

    }

    async onLoad() {
    	const self = this
      self.userInfo = wepy.getStorageSync('userInfo')
      
      console.log(self.userInfo)
      
      self.money = ((self.userInfo.principalBalance + self.userInfo.givenBalance)/100).toFixed(2)
      await self.getRule()
      
      
    }

    async getRule(){
    	const self = this
      let data = {

      }
   
      try {
        let dataInfo = await http({
            method: api.wallet.rule.method,
            url: api.wallet.rule.url,
            data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
         	console.log(dataInfo)
         	self.moneyArr = []
         	dataInfo.data.data.forEach((item,index)=>{
         		
         		self.moneyArr.push({
         			id:index,
         			check:false,
          		rechargeAmount:item.rechargeAmount,
          		givenAmount:item.givenAmount,
          		topupItemId:item.topupItemId
          	})
         		
         	})
          self.moneyArr[0].check = true
          self.checkId = self.moneyArr[0].topupItemId
      		self.checkMoney = self.moneyArr[0].rechargeAmount
          self.$apply()
        }

      } catch (e) {
        console.log(e)
      }
    	
    	
    }
   

		//获取code
    async getCode(){
      const self = this
      self.isDisable = true
      wx.login({
        success(res){
          self.sendOrder(res.code)
        }
      })
    }
    // 下订单
    async sendOrder(code){
      const self = this

      let data = {
      	payType : 61,
        ownerId : self.userInfo.ownerId,	
        payment : parseInt(self.checkMoney),
        recordId : self.checkId,
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.wallet.recharge.method,
          url: api.wallet.recharge.url,
//        url:'http://192.168.134.77:8888/n/pay/scan/payDispatcher?noSign',
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
            	wepy.setStorageSync('topupItemId', self.checkId)
              wx.redirectTo({
                url: '/pages/paySuccess?type='+'recharge'
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
