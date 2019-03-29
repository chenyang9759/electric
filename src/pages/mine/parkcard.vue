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
  	position:relative;
  	.bg{
  		display: block;
  		width:100%;
  		height:100%;
  	}
  	.gift{
  		width:656rpx;
  		height:710rpx;
  		position:absolute;
  		
  		
  		top:46rpx;
  		left:47rpx;
  	}
  	
  }
  
  




</style>
<template>
  <view class="box">
    <image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_parkcardbg.jpg"></image>
    <image class="gift" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_parkcardlw.png"></image>
  </view>


</template>



<script>
  import wepy from 'wepy'
  import http from '../../utils/request'
  import {api} from '../../config'





  export default class Card extends wepy.page {
    config = {
      navigationBarTitleText: '我的卡券',
      navigationBarBackgroundColor:'#fdb238',
      navigationBarTextStyle:'white'
    }

    components = {

    }




    data = {
     
    }



    computed = {

    }

    methods = {
      
    



    }

    events = {

    }

    async onLoad() {
      
    }


   













  }
</script>
