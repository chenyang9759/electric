<style lang="less">
  page{
    width:100%;
    /*height:100%;*/
    background:#f4f5fa;
    position: relative;
    top:0;
    left:0;
   
  }
  .box{
  	
    padding-bottom:140rpx;
    .box_header{
      width:100%;
      height:140rpx;
      padding-top: 20rpx;
      background:#00c8b3;
      color:#fff;
      font-size:28rpx;
      text-align: center;
      /*line-height:140rpx;*/
    }
    .box_content{
    	
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
    		margin-top: 20rpx;
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
  .green-btn[disabled] {
		background:#a1eee6 !important;
	}
  .green-btn::after{
    border:none;
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
    font-size: 36rpx;
    text-align: center;
    color:#666;
    line-height: 100rpx;
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


</style>
<template>
  <view class="pox" wx:if="{{isShowCont}}">
            暂无相关记录！
  </view>
  <view class="box_pay" @tap="toIndex">
    <button class="weui-btn green-btn" type="primary">返回首页</button>
  </view>
  <view class="box" wx:if="{{!isShowCont}}">
  	<view class="box_header" wx:if="{{!isShowtoindex}}" >
   		请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。
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
	  				<view class="top_txt">超时停车</view>
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
  		<view class="list_cont_bot" wx:if="{{arrearage == 0}}">
				<view class="list_lib">
  				<view class="list">订单金额：</view>
  				<view class="list list_l" style="color:#FF4C39;">￥{{arrearage/100}}</view>
  			</view>
  			<view class="list_lib">
  				<view class="list">支付方式：</view>
  				<view class="list list_l" style="color:#00B06C;">{{paytype}}</view>
  			</view>	
  		</view>
	  		
	  	<view class="list_cont_bot list_cont_botw" wx:if="{{arrearage > 0}}">
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
  				<view class="list list_l" style="color:#FF4C39;">￥{{ arrearage/100}}</view>
  			</view>	
  			<view class="list_line"></view>
  			
  			<view class="list_lib">
  				<view class="list" style="width:280rpx;">{{startTime}}</view>
  				<view class="list list_l" style="color:#333;">微信支付<text style="color:#44CD0E;">{{ arrearage/100 }}</text>元</view>
  			</view>	
	  	</view>	
	  	
	  	<view class="list_cont_bot list_cont_botw" wx:if="{{historyArr.length>0 && arrearage > 0}}">
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
  	
  	
    <!--<view class="box_header" wx:if="{{!isShowtoindex}}" >
   		 请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。
    </view>
    <view class="box_content">
      <view class="cont">
        <view class="cont_flex">
          <view class="cont_left">
            {{roadname}}
          </view>
          <view class="cont_right">
            <view class="cont_btn" style="background:#00c8b3;" wx:if="{{iscomeplate || arrearage == 0}}">订单完成</view>
            <view class="cont_btn" wx:if="{{!iscomeplate && arrearage > 0}}">{{evidenceState}}</view>
          </view>
        </view>
        <view class="cont_money">
          ￥{{arrearage/100}}
        </view>

        <view class="cont_flex cont_flex_first">
          <view class="flex_list">车牌：</view>
          <view class="flex_list_right">{{busNumber}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">停车时间：</view>
          <view class="flex_list_right">{{startTime}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">驶离时间：</view>
          <view class="flex_list_right">{{endTime}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">停车时长：</view>
          <view class="flex_list_right">{{time}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">购买时长：</view>
          <view class="flex_list_right">{{buytime}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">超时时长：</view>
          <view class="flex_list_right">{{cstime}}</view>
        </view>
        <view class="cont_flex">
          <view class="flex_list">停车位置：</view>
          <view class="flex_list_right">{{address}}</view>
        </view>
      </view>
    </view>-->
    
    
    
    

    <!--<view class="box_evidence" wx:if="{{isShow}}">-->
      <!--<view class="cont">-->
        <!--<view class="cont_tit">取证记录</view>-->
        <!--<view class="cont_list">咪表照片</view>-->
        <!--<view class="cont_scroll">-->
          <!--<scroll-view class="scroll_x" scroll-x style="width: 100%">-->
            <!--<view class="scroll_list" wx:for="{{mbimg}}" wx:key="{{index}}" @tap="largeImgBh('{{item}}')">-->
              <!--<image src="{{item}}"></image>-->
            <!--</view>-->

          <!--</scroll-view>-->
        <!--</view>-->
        <!--<view class="cont_list">车辆照片</view>-->
        <!--<view class="cont_scroll">-->
          <!--<scroll-view class="scroll_x" scroll-x style="width: 100%">-->
            <!--<view class="scroll_list" wx:for="{{xcimg}}" wx:key="{{index}}" @tap="largeImgMb('{{item}}')">-->
              <!--<image src="{{item}}"></image>-->
            <!--</view>-->

          <!--</scroll-view>-->
        <!--</view>-->
        <!--<view class="cont_list">现场视频</view>-->
        <!--<view class="cont_movie">-->

          <!--<video class="cont_movie_content" src="{{video}}"></video>-->
        <!--</view>-->


      <!--</view>-->
    <!--</view>-->


    <cover-view class="box_pay" wx:if="{{arrearage>0 && evidenceState != '订单完成'}}">
      <button class="weui-btn green-btn" disabled="{{isDisable}}" wx:if="{{isShowtoindex}}" type="primary" @tap="pay">微信支付（{{arrearage/100}}元）</button>
      <button class="weui-btn green-btn" disabled="{{isDisable}}" wx:if="{{!isShowtoindex}}" type="primary" @tap="toIndex">返回首页</button>
    </cover-view>
  </view>



</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'






  export default class RecordDetail extends wepy.page {
    config = {
      navigationBarTitleText: '补缴停车费',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'
    }
    components = {

    }



    data = {
      isDisable:false,
      isShowCont:true,
      iscomeplate:true,
      evidenceState:'',
      busNumber:'',
      isShowtoindex:false,
      roadname:'',
      startTime:'',
      endTime:'',
      time:'',
      buytime:'',
      cstime:'',
      address:'',
      paytype:'',
      payment:'',
      consume:'',
      mbimg:[

      ],
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
      toIndex(){
        wx.switchTab({
          url: '/pages/index'
        })
      },
      largeImgBh(currentImg){
        const self = this
        wx.previewImage({
          current: currentImg, // 当前显示图片的http链接
          urls: self.xcimg // 需要预览的图片http链接列表
        })
      },
      largeImgMb(currentImg){
        const self = this
        wx.previewImage({
          current: currentImg, // 当前显示图片的http链接
          urls: self.mbimg // 需要预览的图片http链接列表
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
      self.recordId = wepy.getStorageSync('recordId')

      await self.getRecord(self.recordId)
      await self.getPayhistory(self.recordId)



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
	        
	        
          if(dataInfo.data.data){
          	
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
		        }else{
		        	self.paytype = '历史订单'
		        }
          	
          	
            if(dataInfo.data.data.old == 1){
            	self.consume = dataInfo.data.data.payment
            	self.ispay = true
	            self.isDox = true
	            self.evidenceState = '欠费，已取证'                //是否取证
	          	self.isShowtoindex = true
            	self.isShowCont = false
	            self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
	            self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
	            self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
	            self.buytime = dataInfo.data.data.payment > 0 ? self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟'    //购买时长
	            self.payment = 0
	            self.arrearage = dataInfo.data.data.arrearage
	            self.iscomeplate = false
	            self.roadname = dataInfo.data.data.roadName
	            self.endTime = self.timeFormat(dataInfo.data.data.endTime)   //停车结束时间
	            self.cstime = dataInfo.data.data.endTime > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.expireTime) : '0小时0分钟'  //超时时长
	            
	            self.time = self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime)    //停车时长
	            self.address = dataInfo.data.data.roadName
	            
            }else{
            	
            	
            	
            	self.isShowCont = false
            	self.consume = dataInfo.data.data.consume
	            self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
	            self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
	            self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
	            self.buytime = dataInfo.data.data.payment > 0 ? self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟'    //购买时长
	            self.payment = dataInfo.data.data.payment
	            if(dataInfo.data.data.endTime){
	              self.endTime = self.timeFormat(dataInfo.data.data.endTime)   //停车结束时间
	              self.cstime = dataInfo.data.data.endTime > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.expireTime) : '0小时0分钟'  //超时时长
	              self.time = self.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime)    //停车时长
	              self.isShowtoindex = true
	            }else{
	              self.endTime = '停车中'
	              if(dataInfo.data.data.payment == 0){
	                self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime) : '0小时0分钟'  //超时时长
	              }else{
	                self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) : '0小时0分钟'  //超时时长
	              }
	              self.time = self.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime)    //停车时长
	              self.isShowtoindex = false
	            }
	            self.parkingInfo.sn = dataInfo.data.data.meterSN
	            self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
	            self.parkingInfo.payType = dataInfo.data.data.payType
	            self.iscomeplate = true
	            self.arrearage = dataInfo.data.data.arrearage>0 ? dataInfo.data.data.arrearage : 0
	            self.address = dataInfo.data.data.countyName + dataInfo.data.data.streetName + dataInfo.data.data.roadName
	            if(dataInfo.data.data.parkState == 0 || dataInfo.data.data.parkState == 20){
	              self.ispay = true
	              self.isDox = true
	              self.evidenceState = '订单完成'                //是否取证
	            }else if(dataInfo.data.data.parkState == 1 || dataInfo.data.data.parkState == 10){
	              //已欠费，未取证
	              self.ispay = true
	              self.isDox = true
	              self.evidenceState = '欠费，已取证'                //是否取证
	              self.iscomeplate = false
	
	            }else if(dataInfo.data.data.parkState == 2 || dataInfo.data.data.parkState == 11){
	              // 欠费，已取证
	              self.isShow = true
	              self.ispay = true
	              self.isDox = true
	              self.evidenceState = '欠费，已取证'                //是否取证
	              self.iscomeplate = false
	              if(dataInfo.data.data.parkEvidences.picture1){
	                let arr = dataInfo.data.data.parkEvidences.picture1.split(",")
	                let newarr = []
	                arr.forEach((item)=>{
	                  newarr.push(dataInfo.data.exData + item)
	                })
	                self.mbimg = newarr
	              }
	              if(dataInfo.data.data.parkEvidences.picture2){
	                let arr = dataInfo.data.data.parkEvidences.picture2.split(",")
	                let newarr = []
	                arr.forEach((item)=>{
	                  newarr.push(dataInfo.data.exData + item)
	                })
	                self.xcimg = newarr
	              }
	              if(dataInfo.data.data.parkEvidences.video){
	                self.video = dataInfo.data.exData  + dataInfo.data.data.parkEvidences.video
	              }
	            }
            	
            	
            }
            
            
            
            
          }else{
            self.isShowCont = true
          }
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
      let data = {}
      if(self.endTime != '停车中'){
        data = {
          recordId : self.recordId,
          meterSN : self.parkingInfo.sn,
          spaceInnerNo : self.parkingInfo.parkNo,
          fromSystem : 868,
          payType : 51,
          payment : parseInt(self.arrearage),
          code : code
        }
      }else{
        data = {
          meterSN : self.parkingInfo.sn,
          spaceInnerNo : self.parkingInfo.parkNo,
          fromSystem : 868,
          payType : 3,
          payment : parseInt(self.payment),
          code : code
        }
      }


      try {
        let dataInfo = await http({
          method: api.pay.wxpay.method,
//        url: 'http://192.168.134.77:8888/n/pay/scan/weixinPay?noSign=0',
          url: api.pay.wxpay.url,
          data: JSON.stringify(data)
        })
        if(dataInfo.data.code == 0){
          self.isDisable = true
          self.$apply()
          wx.requestPayment({
            timeStamp: dataInfo.data.data.timeStamp,
            nonceStr: dataInfo.data.data.nonceStr,
            package: dataInfo.data.data.package,
            signType: dataInfo.data.data.signType,
            paySign: dataInfo.data.data.paySign,
            success:function(data){
              wx.redirectTo({
                url: '/pages/paySuccess'
              })
            },
            fail:function(e){
              self.isDisable = false  
//            console.log(e)
            	self.$apply()
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
