<style lang="less">
  page{
    width:100%;
    height:100%;
    position: relative;
    top:0;
    left:0;
    background:#f4f5fa;
   
  }
  .box{
    padding-bottom:140rpx;
    .box_header{
      width:100%;
      height:140rpx;
      background:#00c8b3;
      color:#fff;
      font-size:28rpx;
      text-align: center;
      line-height:140rpx;
    }
  .box_content{
    width:100%;
    
    margin-top:20rpx;
    position:relative;
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
  .pox{
    width:100%;
    height:100%;
    .pox_header{
      width:100%;
      height:220rpx;
      padding-top:20rpx;
      background:#00c8b3;
      .icon{
        width:100rpx;
        height:100rpx;
        margin:0 auto;
        border:6rpx solid #fff;
        border-radius:50%;
        text-align:center;
        .icon_cont{
          margin:20rpx auto;
        }
      }
      .icon_des{
        font-size: 32rpx;
        line-height: 100rpx;
        color:#fff;
        text-align: center;
      }
    }
    .list{
      width:718rpx;
      height:170rpx;
      border-radius: 10rpx;
      margin-left:16rpx;
      box-sizing: border-box;
      margin-top: 20rpx;
      position:relative;
      .list_left{
        width:100rpx;
        height:100rpx;
        position: absolute;
        top:35rpx;
        left:50rpx;
        image{
          width:100%;
          height:100%;
        }
      }
      .list_right{
        position:absolute;
        left:200rpx;
        color:#fff;
        .list_right_top{
          font-size:44rpx;
          margin-top:26rpx;
        }
        .list_right_bot{
          font-size:24rpx;
        }
      }
    }
    .list_tcjf{
      background:#00c8b3;
    }
  }
  .dox{
    width:100%;
    height:100%;
    position:relative;
    top:0;
    left:0;
    .dox_header{
      width:100%;
      height:280rpx;
      background:#00c8b3;
      .dox_tit{
        font-size:40rpx;
        color:#fff;
        text-align: center;
      }
      .dox_des{
        font-size:28rpx;
        text-align: center;
        color:#fff;
      }
      .dox_inp{
        width:660rpx;
        height:126rpx;
        margin-left:45rpx;
        margin-top:20rpx;
        position:relative;
        .dox_inp_list{
          width:660rpx;
          height:126rpx;
          position:absolute;
          top:0;
          left:0;
          display: flex;
          justify-content: space-between;
          .list{
            width:100rpx;
            height:126rpx;
            background:#fff;
            color:#00c8b3;
            font-size:84rpx;
            font-weight:700;
            line-height: 126rpx;
            text-align: center;
          }
        }
        .input{
          width:1360rpx;
          height:126rpx;
          text-space: 50rpx;
          position:absolute;
          top:0;
          left:-700rpx;
          opacity: 0;
          z-index: 9;
        }
      }
    }
    .dox_content{
      width:100%;
      .dox_href{
        text-align: center;
        color:#00c8b3;
        font-size:28rpx;
        margin-top: 20rpx;
        text-decoration:underline;
      }
      .dox_href_des{
        font-size:24rpx;
        color:#666;
        text-align: center;
      }
    }
  }
</style>
<template>
  <!--存在欠费记录-->
  <view class="box" wx:if="{{ispay && isDox}}">
    <view class="box_header">
      您有欠费停车记录，补缴欠费后方可正常缴费停车
    </view>
    
    	
    	
    <view class="box_content">
    	<view class="list_top">
	  		{{roadname}}
	  	</view>
	  	<view class="list_cont">
	  		<view class="list_cont_top">
	  			<view class="top_left">
	  				<image src="https://caoke.oss-cn-beijing.aliyuncs.com/record_list.png"></image>
	  			</view>
	  			<view class="top_center">订单详情</view>
	  			<view class="top_right" wx:if="{{iscomeplate || arrearage == 0}}">
	  				<image src="https://caoke.oss-cn-beijing.aliyuncs.com/record_y.png"></image>
	  				<view class="top_txt">订单完成</view>
	  			</view>
	  			<view class="top_right" wx:if="{{!iscomeplate && arrearage > 0}}">
	  				<image src="https://caoke.oss-cn-beijing.aliyuncs.com/record_w.png"></image>
	  				<view class="top_txt">超时欠费</view>
	  			</view>
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
  		<view class="list_cont_bot" wx:if="{{iscomeplate || arrearage == 0}}">
				<view class="list_lib">
  				<view class="list">订单金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{consume/100}}</view>
  			</view>
  			<view class="list_lib">
  				<view class="list">支付方式：</view>
  				<view class="list list_l" style="color:#00B06C;">{{paytype}}</view>
  			</view>	
  		</view>
  		
  		<view class="list_cont_bot list_cont_botw" wx:if="{{arrearage > 0}}">
	  		<view class="list_lib">
  				<view class="list">停车欠费：</view>
  				<view class="list list_l">￥{{arrearage/100}}</view>
  			</view>	
	  		<view class="list_lib">
  				<view class="list">手续费：</view>
  				<view class="list list_l">￥{{serviceCharge/100}}</view>
  			</view> 			
  			<view class="list_lib">
  				<view class="list">滞纳金：</view>
  				<view class="list list_l">￥{{fine/100}}</view>
  			</view>
  			<view class="list_line"></view>
  			<view class="list_lib" style="width:610rpx;height:60rpx;font-size:24rpx;color:#999;line-height: 30rpx;">
  				手续费：取证完立即收取手续费（1元），次日开始计算滞纳金（日息3%），滞纳金最高不超过停车欠费金额。
  			</view>
  		
	  	</view>	
	  		
	  	<view class="list_cont_bot list_cont_botw" wx:if="{{!iscomeplate && arrearage > 0}}">
	  		<view class="list_lib">
  				<view class="list">欠费金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{(arrearage + serviceCharge + fine)/100}}</view>
  			</view>	
	  		<view class="list_lib">
  				<view class="list">应付总金额：</view>
  				<view class="list list_l">￥{{(consume + serviceCharge + fine)/100}}</view>
  			</view>
  			<view class="list_lib">
  				<view class="list">已付金额：</view>
  				<view class="list list_l">￥{{payment/100}}</view>
  			</view>	
  			<view class="list_line" wx:if="{{historyArr.length>0}}"></view>
  			<view class="list_lib" wx:for="{{historyArr}}" wx:key="{{id}}">
  				<view class="list" style="width:440rpx;">{{item.time}}</view>
  				<view class="list list_l">{{item.paytype}}:<text style="color:#44CD0E;">￥{{item.payment/100}}</text></view>
  			</view>	
  		
	  	</view>	
	  	
	  	
    </view>

   

    <cover-view class="box_pay" @tap="pay">
      <button class="weui-btn green-btn" type="primary" disabled="{{isDisable}}">微信支付（{{(arrearage + serviceCharge + fine)/100}}元）</button>
    </cover-view>
  </view>
  <!--支付成功-->
  <view class="pox" wx:if="{{!ispay && isDox}}">
    <view class="pox_header">
      <view class="icon">
        <icon class="icon_cont" type="success_no_circle" size="30" color="#fff"/>
      </view>
      <view class="icon_des">停车费支付成功!</view>
    </view>


    <view class="list list_tcjf" @tap="toOrder">
      <view class="list_left">
        <image src="https://caoke.oss-cn-beijing.aliyuncs.com/tcjf.png"></image>
      </view>
      <view class="list_right">
        <view class="list_right_top">停车缴费</view>
        <view class="list_right_bot">点击为您的车辆缴纳停车费用</view>
      </view>
    </view>

    <view class="box_pay" @tap="toIndex">
      <button class="weui-btn green-btn" type="primary">返回首页</button>
    </view>

  </view>
  <!--停车缴费-->
  <view class="dox" wx:if="{{!isDox && !ispay}}">
    <view class="dox_header">
      <view class="dox_tit">车位编号</view>
      <view class="dox_des">请查看车位白框内喷涂的6位车位编号并输入</view>
      <view class="dox_inp">
        <view class="dox_inp_list">
          <view class="list">{{licensePlate[0]}}</view>
          <view class="list">{{licensePlate[1]}}</view>
          <view class="list">{{licensePlate[2]}}</view>
          <view class="list">{{licensePlate[3]}}</view>
          <view class="list">{{licensePlate[4]}}</view>
          <view class="list">{{licensePlate[5]}}</view>
        </view>
        <input class="input" maxlength="6" focus="{{isFocus}}" bindinput="bindKeyInput" type="number"/>
      </view>
    </view>
    <view class="dox_content">
      <view class="dox_href" @tap="toChooseParking">手动选择车位</view>
      <view class="dox_href_des">（请允许系统访问您的位置信息）</view>
    </view>
    <view class="box_pay">
      <button class="weui-btn green-btn" type="primary" @tap="toCheckPay">确定</button>
    </view>
  </view>

</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'
  import payresult from '../service/pay'
  
  
  
  
  export default class ParkingPay extends wepy.page {
    config = {
      navigationBarTitleText: '停车缴费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {
    }
    data = {
      isDisable:false,
      isArrears:false,
      isFocus:false,
      height:'',
      arrearage:0,
      recordId:'',
      parkState:'',
      evidenceState:'',
      busNumber:'',
      consume:'',
      payment:'',
      paytype:'',
      roadname:'',
      startTime:'',
      endTime:'',
      time:'',
      buytime:'',
      cstime:'',
      address:'',
      consume:'',
      mbimg:[
      ],
      exdata:{
        scan_pre_day:0,
        scan_pre_buy:0
      },
      xcimg:[
      ],
      video:'',
      isShow:false,
      ispay:true,
      isDox:false,
      licensePlate:'',
      parkingInfo:{},
      historyArr:[],
      serviceCharge:0,
      fine:0
     }
    computed = {
    }
    methods = {
      async pay(){
      	const self = this
        let paytype = 3
		    if(self.endTime != '停车中'){
		      paytype = 51
		    }
		    let data = {
		      recordId : self.recordId,
		      meterSN : self.parkingInfo.sn,
		      spaceInnerNo : self.parkingInfo.parkNo,
		      fromSystem : 868,
		      payType : paytype,
		      payment : parseInt(self.arrearage + self.serviceCharge + self.fine),
		     
		    }
      	await self.getCode(data)
       
      },
      toIndex(){
        wx.switchTab({
          url: '/pages/index'
        })
      },
      async toOrder(){
        const self = this
        await self.getArrears()
        if(self.isArrears == false){
          self.isDox=false
        }else{
          wx.switchTab({
            url: '/pages/index'
          })
        }
      },
      async toChooseParking(){
        wepy.navigateTo({
          url: '/pages/chooseParking'
        })
      },
      toCheckPay(){
        const self = this
        if(self.licensePlate.length == 6){
          self.getSpaceInfo()
        }else{
          wx.showToast({
            title: '请输入6位编码',
            icon: 'none',
            duration: 2000
          })
        }
      },
     
      bindKeyInput: function(e) {
        const self = this
        self.isFocus = true
        self.licensePlate = e.detail.value
        if(self.licensePlate.length == 6){
          self.isFocus = false
        }
        self.$apply()
      }
    }
    events = {
    }
    async onShow() {
      const self = this
      self.recordId = wepy.getStorageSync('recordId')
      await self.getRecord(self.recordId)
      await self.getPayhistory(self.recordId)
    }
    // 查看是否欠费
    async getArrears(){
      const self = this
      let data = {
      }
      try{
        const dataInfo = await http({
          method: api.home.arrearsStatus.method,
          url: api.home.arrearsStatus.url,
          data:JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.data){
            self.isArrears = true
          }else{
            self.isArrears = false
          }
        }
        self.$apply()
      } catch(e){
        console.log(e)
      }
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
        if(dataInfo.data.code == 0){
          dataInfo.mbimg = []
          dataInfo.xcimg = []
          dataInfo.video = ''
          if(dataInfo.data.data.payType == 3 || dataInfo.data.data.payType == 12 || dataInfo.data.data.payType == 51){
	          self.paytype = '微信支付'
	        }else if(dataInfo.data.data.payType == 4 || dataInfo.data.data.payType == 13){
	          self.paytype = '支付宝支付'
	        }else if(dataInfo.data.data.payType == 1){
	          self.paytype = '预买时'
	        }else if(dataInfo.data.data.payType == 2){
	          self.paytype = '银联卡（预买时）'
	        }else if(dataInfo.data.data.payType == 10){
	          self.paytype = '预付费'
	        }else if(dataInfo.data.data.payType == 11){
	          self.paytype = '银联卡买一天（预付费）'
	        }else if(dataInfo.data.data.payType == 30){
	          self.paytype = '停车卡（柳银卡）'
	        }else if(dataInfo.data.data.payType == 31){
	          self.paytype = '包月卡（B卡）'
	        }else if(dataInfo.data.data.payType == 32){
	          self.paytype = '包月卡（C卡）'
	        }else if(dataInfo.data.data.payType == 33){
	          self.paytype = '柳银代扣（普通卡）'
	        }else if(dataInfo.data.data.payType == 40){
	          self.paytype = '离线订单'
	        }else if(dataInfo.data.data.payType == 71 || dataInfo.data.data.payType == 72){
	        	self.paytype = '会员卡支付'
	        }else if(dataInfo.data.data.payType == 14){
	        	self.paytype = '钱包支付'
	        }else{
	        	self.paytype = '历史订单'
	        }
	       
          if(dataInfo.data.data){
            self.isShowCont = false
            self.isShowCont = false
            self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
            self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
            self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
            self.buytime = dataInfo.data.data.payment > 0 ? self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟'    //购买时长
            self.payment = dataInfo.data.data.payment
            self.consume = dataInfo.data.data.consume
            self.serviceCharge = dataInfo.data.data.serviceCharge
          	self.fine = dataInfo.data.data.fine
            if(dataInfo.data.data.endTime){
              self.endTime = self.timeFormat(dataInfo.data.data.endTime)   //停车结束时间
              self.cstime = dataInfo.data.data.endTime > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.expireTime) : '0小时0分钟'  //超时时长
            }else{
              self.endTime = '停车中'
              if(dataInfo.data.data.payment == 0){
                self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime) : '0小时0分钟'  //超时时长
              }else{
                self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) : '0小时0分钟'  //超时时长
              }
            }
            self.time = self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime)    //停车时长
            self.parkingInfo.sn = dataInfo.data.data.meterSN
            self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
            self.parkingInfo.payType = dataInfo.data.data.payType
            self.iscomeplate = true
            self.arrearage = dataInfo.data.data.arrearage>0 ? dataInfo.data.data.arrearage : 0
            self.address = dataInfo.data.data.countyName + dataInfo.data.data.streetName + dataInfo.data.data.roadName
            if(dataInfo.data.data.arrearage <= 0){
              self.ispay = false
              self.isDox = false
              self.evidenceState = '订单完成'                //是否取证
							self.isFocus = true
            }else if(dataInfo.data.data.arrearage > 0){
              //已欠费，未取证
              self.ispay = true
              self.isDox = true
              self.evidenceState = '欠费，已取证'                //是否取证
              self.iscomeplate = false
              self.isFocus = false
            }

          }else{
            self.isShowCont = true
            
          }
        }else{
          self.ispay = false
          self.isDox = false
        	self.isFocus = true
        }
        self.$apply()
      } catch (e) {
        console.log(e)
      }
    }
    // 通过编号缴费
    async getSpaceInfo(){
      const self = this
      let data = {
        spaceNo:self.licensePlate
      }
      try {
        let dataInfo = await http({
          method: api.sninfo.spaceNoInfo.method,
          url: api.sninfo.spaceNoInfo.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.data){
            self.parkingInfo.sn = dataInfo.data.data.meterSN
            self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
            wepy.setStorageSync('parkingInfo',self.parkingInfo)
            self.getInfo(self.parkingInfo.sn)
          }else{
            wx.showToast({
              title: '当前车位暂不能缴费！',
              icon: 'none',
              duration: 2000
            })
          }
        }
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
    
    
    
    //获取code
    getCode(data){
      const self = this
      self.isDisable = true
      let codeInfo = ''
      wx.login({
        success(res){
        	
        	self.pay(res.code,data)
        	
        }
      })
      
      
    }
    
//  zhifu
    async pay(code,data){
    	const self = this
      let datas = data
      datas.code = code
    	const payInfo = await payresult.payInfo(datas)
      console.log(payInfo)
      
	  	self.isDisable = false
      self.$apply()
      wx.requestPayment({
        timeStamp: payInfo.timeStamp,
        nonceStr: payInfo.nonceStr,
        package: payInfo.package,
        signType: payInfo.signType,
        paySign: payInfo.paySign,
        success:function(data){
         	self.ispay = false
          self.isDisable = false
        },
        fail:function(e){
          self.isDisable = false           	
        	self.$apply()
        }
      })
      
    }

    // 获取信息
    async getInfo(sn) {
      const self = this
      wx.showLoading({
        title: '加载中...'
      })
      let data = {
        meterSN: sn
      }
      try {
        let dataInfo = await http({
          method: api.sninfo.parkmeter.method,
          url: api.sninfo.parkmeter.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          if(dataInfo.data.exData){
            self.exdata.scan_pre_day = dataInfo.data.exData.scan_pre_day
            self.exdata.scan_pre_buy = dataInfo.data.exData.scan_pre_buy
          }
          if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 0){
            wepy.navigateTo({
              url: '/pages/allDay'
            })
          }else if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 1){
            wepy.navigateTo({
              url: '/pages/allHour'
            })
          }else if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 0){
            wepy.navigateTo({
              url: '/pages/checkPay'
            })
          }else if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 1){
            wepy.navigateTo({
              url: '/pages/checkPay'
            })
          }
          self.$apply()
          wx.hideLoading()
        }
      } catch (e) {
        console.log(e)
      }
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
            if(item.payType == 3 || item.payType == 12 || item.payType == 51){
              if(item.fundFlow == 1){
                paytype = '微信支付'
              }else if(item.fundFlow == 2){
                paytype = '微信退款'
              }
            }else if(item.payType == 4 || item.payType == 13){
              if(item.fundFlow == 1){
                paytype = '支付宝支付'
              }else if(item.fundFlow == 2) {
                paytype = '支付宝退款'
              }
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
            self.historyArr = []
            self.historyArr.push({
              id:index,
              time:self.timeFormat(item.addTime),
              paytype:paytype,
              payment:item.actualAmount
            })
          	
          })
        }else if(dataInfo.data.code == -1){
//        wx.showToast({
//          title: dataInfo.data.msg,
//          icon: 'none',
//          duration: 2000
//        })
        }
        self.$apply()
      } catch (e) {
      	
        console.log(e)
      }
    }
  }
</script>