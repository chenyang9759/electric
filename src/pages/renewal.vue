<style lang="less">
  page{
    width:100%;
    
    background:#f4f5fa;
    position: relative;
    top:0;
    left:0;
    padding-top: 20rpx;
  }
  .box{
    .list{
    	/*margin-top:20rpx;*/
    	.list_top{
    		width:678rpx;
    		height:84rpx;
    		background:#fff;
    		box-shadow:4px 4px 10px rgba(0,0,0,0.1);
    		-webkit-border-radius: 14rpx;
    		-moz-border-radius: 14rpx;
    		border-radius: 14rpx;
    		margin-left:36rpx;
    		font-size:32rpx;
    		color:#00C8B3;
    		text-indent: 44rpx;
    		line-height: 84rpx;
    		font-weight:500;
    	}
    	.list_cont{
    		width:678rpx;
    		height:582rpx;
    		margin-top: 20rpx;
    		margin-left:36rpx;
    		box-shadow:4px 4px 10px rgba(0,0,0,0.1);
    		-webkit-border-radius: 14rpx;
    		-moz-border-radius: 14rpx;
    		border-radius: 14rpx;
    		background: #fff;
    		.list_cont_top{
    			width:658rpx;
    			height:84rpx;
    			box-sizing: border-box;
    			line-height: 84rpx;
    			border-bottom:2rpx solid #C6C6C6;
    			margin-left: 10rpx;
    			position: relative;
    			.top_left{
    				width:30rpx;
    				height:30rpx;
    				position: absolute;
						top:28rpx;
						left:44rpx;
    				image{
    					display: block;
    					width:30rpx;
    					height:30rpx;
    				}   				
    			}
    			.top_center{
    				font-size:32rpx;
    				color:#333;
    				text-indent: 90rpx;
    			}
    			.top_right{
    				width:138rpx;
    				height:48rpx;
    				font-size:24rpx;
    				position: absolute;
    				top:22rpx;
    				right:-20rpx;
    				
    				image{
    					display: block;
    					width:138rpx;
    					height:48rpx;
    				}
    				.top_txt{
    					position: absolute;
    					width: 138rpx;
    					height:40rpx;
    					line-height:40rpx;
    					text-align: center;
    					top:0;
    					text-indent: 0;
    					color:#fff;
    				}
    			}
    		}
    		.list_cont_center{
    			width:584rpx;
    			
    			margin-left: 46rpx;
    			.list_lib{
    				width:584rpx;
    				height:28rpx;
    				line-height:28rpx;
    				display: flex;
    				justify-content: space-around;
    				margin-top:38rpx;
    				.list{
    					width:184rpx;
    					font-size:28rpx;
    					color:#666;
    					text-align: left;
    				}
    				.list_l{
    					text-align: right;
    					width:400rpx;
    				}
    			}
    			
    			
    			
    			
    		}
    	
    		
    		
    	}
    	.list_cont_bot{
				width:678rpx;
				padding-bottom: 36rpx;
				padding-top:2rpx;
				margin-top: 20rpx;
				margin-left:36rpx;	    		
    		box-shadow:4px 4px 10px rgba(0,0,0,0.1);
    		-webkit-border-radius: 14rpx;
    		-moz-border-radius: 14rpx;
    		border-radius: 14rpx;
    		background: #fff;
    		.list_lib{
					width:584rpx;
					height:28rpx;
					line-height:28rpx;
					display: flex;
					justify-content: space-around;
					margin-top:38rpx;
					margin-left:46rpx;
					.list{
						width:184rpx;
						font-size:28rpx;
						color:#666;
						text-align: left;
					}
					.list_l{
						text-align: right;
						width:400rpx;
					}
				}
				
			}
			.list_cont_botw{
				
				.list_line{
					width:656rpx;
					height:2rpx;
					margin-left:11rpx;
					background:#C6C6C6;
					margin-top:30rpx;
				}
			}
			
    	
    }
    



  }

  .box_pay {

    width: 100%;
    height: 120rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: #fff;

  .green-btn {
    background-color: #00c8b3;
    color: #fff;
    font-size: 32rpx;
  }
   .green-btn:hover{
  	background:#a1eee6;
  }

  .green-btn::after {
    border: none;
  }
.green-btn[disabled] {
		background:#a1eee6 !important;
	}
  button {
    width: 680rpx;
    height: 80rpx;
    line-height: 80rpx;
    position: absolute;
    top: 20rpx;
    left: 35rpx;
  }

  }


</style>
<template>
  <view class="box">
    <view class="list">
      <view class="list_top">
	  		{{roadname}}
	  	</view>
	  	<view class="list_cont">
	  		<view class="list_cont_top">
	  			<view class="top_left">
	  				<image src="https://caoke.oss-cn-beijing.aliyuncs.com/record_list.png"></image>
	  			</view>
	  			<view class="top_center">订单详情</view>
	  			
	  		</view>
	  		
	  		<view class="list_cont_center">
	  			<view class="list_lib">
	  				<view class="list">车牌号：</view>
	  				<view class="list list_l">{{busNumber}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">停车时间：</view>
	  				<view class="list list_l">{{startTime}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">驶离时间：</view>
	  				<view class="list list_l">{{endTime}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">停车时长：</view>
	  				<view class="list list_l">{{time}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">购买时长：</view>
	  				<view class="list list_l">{{buytime}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">超时时长：</view>
	  				<view class="list list_l" style="color:#FF4C39">{{cstime}}</view>
	  			</view>
	  			<view class="list_lib">
	  				<view class="list">停车位置：</view>
	  				<view class="list list_l">{{address}}</view>
	  			</view>
	  			
	  		</view>
	  
	  	
	  		
	  		
	  	</view>
  		<!--<view class="list_cont_bot" wx:if="{{iscomeplate || arrearage == 0}}">
				<view class="list_lib">
  				<view class="list">订单金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{arrearage/100}}</view>
  			</view>
  			<view class="list_lib">
  				<view class="list">支付方式：</view>
  				<view class="list list_l" style="color:#00B06C;">{{paytype}}</view>
  			</view>	
  		</view>-->
	  		
	  	<!--<view class="list_cont_bot list_cont_botw" wx:if="{{!iscomeplate && arrearage > 0}}">
	  		<view class="list_lib">
  				<view class="list">应付金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{consume/100}}</view>
  			</view>
  			<view class="list_lib">
  				<view class="list">已付金额：</view>
  				<view class="list list_l">￥{{payment/100}}</view>
  			</view>	
  			<view class="list_lib">
  				<view class="list">欠费金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{ payment/100 - consume/100}}</view>
  			</view>	
  			<view class="list_line"></view>
  			
  			<view class="list_lib">
  				<view class="list" style="width:280rpx;">{{startTime}}</view>
  				<view class="list list_l" style="color:#333;">微信支付<text style="color:#44CD0E;">{{ arrearage/100 }}</text>元</view>
  			</view>	
	  	</view>	-->
	  	
	  	<view class="list_cont_bot list_cont_botw" wx:if="{{historyArr.length>0}}">
	  		<view class="list_lib">
  				<view class="list">订单金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{consume/100}}</view>
  			</view>
  			<view class="list_line"></view>
  			<view class="list_lib" wx:for="{{historyArr}}" wx:key="{{id}}">
  				<view class="list" style="width:280rpx;">{{item.time}}</view>
  				<view class="list list_l">{{item.paytype}}:<text style="color:#44CD0E;">{{item.payment/100}}</text>元</view>
  			</view>	
  			
  			
  			
	  	</view>	
    </view>
  </view>

  <cover-view class="box_pay" @tap="toCheckPay">
    <button class="weui-btn green-btn" type="primary">续费</button>
  </cover-view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'







  export default class Renewal extends wepy.page {
    config = {
      navigationBarTitleText: '续费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {

    }



    data = {
      iscomeplate:true,
      evidenceState:'',
      busNumber:'',
      consume:'',
      payment:'',
      roadname:'',
      startTime:'',
      endTime:'',
      time:'',
      buytime:'',
      sytime:'',
      cstime:'',
      address:'',
      mbimg:[

      ],
      extime:'',
      xcimg:[

      ],
      video:'',
      isShow:false,
      arrearage:0,
      parkingInfo:{},
      historyArr:[]
    }

    computed = {

    }

    methods = {
      toCheckPay(){
        const self = this
        if(self.parkingInfo.payType == 3){
          wepy.navigateTo({
            url: '/pages/allHour'
          })
        }else if(self.parkingInfo.payType == 12){
          wepy.navigateTo({
            url: '/pages/allDay'
          })
        }

      }
    }

    events = {

    }

    async onLoad() {
      const self = this
      let recordId = wepy.getStorageSync('recordId')
      await self.getRecord(recordId)
      await self.getPayhistory(recordId)


    }


    // 查询是否欠费
    async getRecord(recordId){
      const self = this
      let data = {
        recordId : recordId
      }
      try {
        let dataInfo = await http({
          method: api.recordinfo.recordInfo.method,
          url: api.recordinfo.recordInfo.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0) {
          let chaoshi = 0
          dataInfo.data.data.endTime - dataInfo.data.data.expireTime > 0 ? chaoshi = dataInfo.data.data.endTime - dataInfo.data.data.expireTime : chaoshi = 0
          console.log(chaoshi)
          //已欠费，未取证
          self.ispay = true
          self.isDox = true
          self.evidenceState = '欠费，已取证'                //是否取证
          self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
          self.consume = dataInfo.data.data.consume        //应付
          self.payment = dataInfo.data.data.payment        //实付
          self.roadname =dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
          self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
          self.endTime = dataInfo.data.data.endTime ? self.timeFormat(dataInfo.data.data.endTime) : '停车中'        //停车结束时间
          self.extime = self.timeFormat(dataInfo.data.data.expireTime)
          self.sytime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? '已超时' + self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) : self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.serverDate)
          self.time = dataInfo.data.data.endTime ? self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime) : self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime)     //停车时长
          self.buytime = self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime)
          self.cstime = dataInfo.data.data.expireTime - dataInfo.data.data.serverDate > 0 ? '0小时0分钟' : self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) //超时时长
          self.parkingInfo.sn = dataInfo.data.data.meterSN
          self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
          self.parkingInfo.payType = dataInfo.data.data.payType
          self.arrearage = dataInfo.data.data.arrearage>0 ? dataInfo.data.data.arrearage : 0
          self.address = dataInfo.data.data.countyName + dataInfo.data.data.streetName + dataInfo.data.data.roadName
          self.parkingInfo.sn = dataInfo.data.data.meterSN
          self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
        }
        wepy.setStorageSync('parkingInfo', self.parkingInfo)
        self.$apply()
      } catch (e) {
        console.log(e)
      }
    }
    // 获取交费记录
    async getPayRecord(recordId){
      const self = this
      let data = {
        recordId : recordId
      }
      try {
        let dataInfo = await http({
          method: api.pay.payRecord.method,
          url: api.pay.payRecord.url,
          data: JSON.stringify(data)
        })
        console.log(dataInfo)
        if(dataInfo.data.code == 0) {
          dataInfo.data.data.forEach((item)=>{
            let paytype = ''
            if(item.payType == 3 || item.payType == 12){
              paytype = '微信支付'
            }else if(item.payType == 4 || item.payType == 13){
              paytype = '支付宝支付'
            }else if(item.payType == 1){
              paytype = '预买时'
            }else if(item.payType == 2){
              paytype = '银联卡（预买时）'
            }else if(item.payType == 10){
              paytype = '预付费'
            }else if(item.payType == 11){
              paytype = '银联卡买一天（预付费）'
            }else if(item.payType == 30){
              paytype = '停车卡（柳银卡）'
            }else if(item.payType == 31){
              paytype = '包月卡（B卡）'
            }else if(item.payType == 32){
              paytype = '包月卡（C卡）'
            }else if(item.payType == 33){
              paytype = '柳银代扣（普通卡）'
            }else if(item.payType == 40){
              paytype = '离线订单'
            }
            let obj = {
              money:item.actualAmount,
              type:paytype,
              time:self.timeFormat(item.addTime)
            }
            self.payArr.push(obj)
          })
        }
        self.$apply()
      } catch (e) {
        console.log(e)
      }
    }



    // 时间转化
    timeFormat(timestamp){
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear();
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
      let D = date.getDate()  < 10 ? '0'+date.getDate():date.getDate();
      let h = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
      let m = date.getMinutes() < 10?'0'+date.getMinutes() : date.getMinutes();

      return Y+'-'+M +'-'+D+' '+ h+':'+m;
    }
    timeCalculation(time){
      let T = time/60000
      let H = parseInt(T/60)
      let M = T%60 > 9 ? T%60 : '0' + T%60
      let str = H+'小时'+Math.ceil(M)+'分钟'
      return str
    }

    async getPayhistory(recordId){
    	const self = this
      let data = {}    
	    data = {
	      recordId : recordId
	    }
      


      try {
        let dataInfo = await http({
          method: api.pay.payHisory.method,

          url: api.pay.payHisory.url,
          data: JSON.stringify(data)
        })
        console.log(dataInfo.data.data)
        if(dataInfo.data.code == 0){
        	
          dataInfo.data.data.forEach((item,index)=>{
          	let paytype = ''
            if(item.payType == 3 || item.payType == 12){
              paytype = '微信支付'
            }else if(item.payType == 4 || item.payType == 13){
              paytype = '支付宝支付'
            }else if(item.payType == 1){
              paytype = '预买时'
            }else if(item.payType == 2){
              paytype = '银联卡（预买时）'
            }else if(item.payType == 10){
              paytype = '预付费'
            }else if(item.payType == 11){
              paytype = '银联卡买一天（预付费）'
            }else if(item.payType == 30){
              paytype = '停车卡（柳银卡）'
            }else if(item.payType == 31){
              paytype = '包月卡（B卡）'
            }else if(item.payType == 32){
              paytype = '包月卡（C卡）'
            }else if(item.payType == 33){
              paytype = '柳银代扣（普通卡）'
            }else if(item.payType == 40){
              paytype = '离线订单'
            }
            if(item.fundFlow == 1){
            	self.historyArr.push({
	          		id:index,
	          		time:self.timeFormat(item.addTime),
	          		paytype:paytype,
	          		payment:item.actualAmount
	          	})
            }
          	
          })
        }else if(dataInfo.data.code == -1){
          wx.showToast({
            title: dataInfo.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
        self.$apply()


      } catch (e) {
      	
        console.log(e)
      }
    }



  }
</script>
