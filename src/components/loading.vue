<style lang="less">
  .page{
    width: 100%;
    height: 100%;
    position: relative;


  }
  .loading{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index: 9999;
  }



</style>
<template>

  <view class="page loading" wx:if="{{isLoading}}" style="background:url({{loadingImg}}) no-repeat;background-size:100% 100%;"></view>

</template>
<script>
  import wepy from 'wepy'


  export default class Loading extends wepy.component {

    props = {
      isLoading: {
        default: true
      },
      loadingImg: {
        default: ''
      }
    }
  }
</script>
