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
    height:530rpx;
    background:#fff;
    margin-top:20rpx;

    position:relative;
  .cont{
    width:710rpx;
    height:368rpx;
    position: absolute;
    top:20rpx;
    left:20rpx;
  .cont_flex{
    display: flex;
    justify-content: space-between;

    line-height:50rpx;
    height:50rpx;
  .cont_left{
    width:570rpx;
    font-size:36rpx;
    color:#00c8b3;
  }
  .cont_right{
    width:180rpx;
  .cont_btn{
    width:180rpx;
    height:50rpx;
    background:#FF6600;
    font-size:24rpx;
    border-radius: 10rpx;
    color:#fff;
    text-align: center;
  }
  }
  .cont_list{
    text-align: center;
    font-size:28rpx;
    color:#666666;
  }
  .cont__left{
    text-align: left;
  }
  .cont__right{
    text-align: right;
    color:#FF6600;
  }
  .flex_list{

    font-size:28rpx;
    color:#666;
    text-align: left;

  }
  .flex_list_right{
    font-size:28rpx;
    color:#666;
    text-align: right;
  }

  }
  .cont_money{
    text-align: right;
    margin-top:20rpx;
    color:#FF6600;
    font-size: 38rpx;
    border-bottom:2rpx solid #eee;
  }
  .cont_flex_first{
    margin-top: 16rpx;
  }
  .cont_row{
    margin-top: 40rpx;
    padding-bottom:0rpx;

  }
  }
  }
  }
  .box_evidence{
    width:100%;
    height: 1160rpx;
    background:#fff;
    margin-top:20rpx;
    margin-left:16rpx;
    position:relative;
    .cont{
      width:678rpx;


      position: absolute;
      top:20rpx;
      left:20rpx;

      .cont_tit{
        font-size:28rpx;
        color:#666;
        line-height: 50rpx;
      }
      .cont_list{
        font-size:24rpx;
        color:#666;
        margin-top:20rpx;
        line-height: 50rpx;
      }
      .cont_scroll{
        width:678rpx;
        height:228rpx;
        overflow:hidden;
        white-space:nowrap;
        margin-top:20rpx;
        .scroll_x{
          width:100%;
          height:228rpx;
          .scroll_list{
            width:320rpx;
            height:228rpx;
            margin-right:20rpx;
            border-radius: 10rpx;
            display: inline-block;
            overflow:hidden;
            image{
              width:100%;
              height:228rpx;

              box-sizing: border-box;
            }
          }
        }

      }
      .cont_movie{
        width:100%;
        height:328rpx;

        box-sizing: border-box;
        .cont_movie_content{
          width:100%;
          height:328rpx;
          margin-top: 20rpx;
          border-radius:10rpx;
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
    </view>

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


    <cover-view class="box_pay" @tap="pay">
      <button class="weui-btn green-btn" type="primary">微信支付（{{arrearage/100}}元）</button>
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
  <view class="dox" wx:if="{{!isDox}}">
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
        <input class="input" maxlength="6" focus="{{isfocus}}" focus="{{isFocus}}" bindinput="bindKeyInput" type="number"/>
      </view>
    </view>
    <view class="dox_content">
      <view class="dox_href" @tap="toChooseParking">手动选择车位</view>
      <view class="dox_href_des">（请允许系统访问您的位置信息）</view>
    </view>
    <view class="box_pay">
      <button class="weui-btn green-btn" type="primary" disabled="{{isDisable}}" @tap="toCheckPay">确定</button>
    </view>
  </view>

</template>



<script>
  import wepy from 'wepy'
  import http from '../utils/request'
  import {api} from '../config'






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
      isFocus:true,
      height:'',
      arrearage:0,
      recordId:'',
      parkState:'',
      evidenceState:'',
      busNumber:'',
      consume:'',
      payment:'',
      roadname:'',
      startTime:'',
      endTime:'',
      time:'',
      buytime:'',
      cstime:'',
      address:'',
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
      ispay:false,
      isDox:false,
      licensePlate:'',
      parkingInfo:{}
     }

    computed = {

    }

    methods = {
      async pay(){
        const self = this
        await self.getCode()

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

    async onLoad() {

      const self = this
      self.recordId = wepy.getStorageSync('recordId')

      await self.getRecord(self.recordId)


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

          if(dataInfo.data.data){
            self.isShowCont = false
            self.isShowCont = false
            self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无'  //车牌
            self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo +'号车位'     //路名称
            self.startTime = self.timeFormat(dataInfo.data.data.startTime)    //开始停车时间
            self.buytime = dataInfo.data.data.payment > 0 ? self.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟'    //购买时长
            self.payment = dataInfo.data.data.arrearage
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
            if(dataInfo.data.data.parkState == 0 || dataInfo.data.data.parkState == 20){
              self.ispay = false
              self.isDox = false
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
          }else{
            self.isShowCont = true
          }
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
        payment : parseInt(self.arrearage),
        code : code
      }
      try {
        let dataInfo = await http({
          method: api.pay.wxpay.method,
          url:  api.pay.wxpay.url,
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
              self.ispay = false
            },
            fail:function(e){
              self.isDisable = false           	
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
      } catch (e) {
        console.log(e)
      }
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




  }
</script>
