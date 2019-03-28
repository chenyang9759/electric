<style lang="less">

  page{
    width:100%;
    height:100%;
    position: relative;
    top:0;
    left:0;
    background:#f4f5fa;
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

  <!--支付成功-->
  <view class="pox">
    <view class="pox_header">
      <view class="icon">
        <icon class="icon_cont" type="success_no_circle" size="30" color="#fff"/>
      </view>
      <view class="icon_des">停车费支付成功!</view>
    </view>




    <view class="box_pay" @tap="toIndex">
      <button class="weui-btn green-btn" type="primary">返回首页</button>
    </view>

  </view>


</template>



<script>
  import wepy from 'wepy'






  export default class paySuccess extends wepy.page {
    config = {
      navigationBarTitleText: '缴费成功',
      navigationBarBackgroundColor:'#00c8b3',
      navigationBarTextStyle:'white'

    }
    components = {

    }



    data = {
      ispay:true,
      isDox:true,
      licensePlate:''

    }

    computed = {

    }

    methods = {
      toIndex(){
        wx.switchTab({
          url: '/pages/index'
        })
      }
    }

    events = {

    }

    async onLoad() {



    }
  }
</script>
