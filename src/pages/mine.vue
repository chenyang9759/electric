<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		top: 0;
		left: 0;
	}
	
	.box {
		width: 100%;
		height: 100%;
		.header {
			width: 750rpx;
			height: 242rpx;
			position: relative;
			.bg {
				width: 750rpx;
				height: 242rpx;
			}
			.avater {
				position: absolute;
				top: 26rpx;
				left: 314rpx;
				width: 116rpx;
				height: 116rpx;
				-webkit-border-radius: 50%;
				-moz-border-radius: 50%;
				border-radius: 50%;
				background: #fff;
				padding: 4rpx;
				.avater_img {
					width: 116rpx;
					height: 116rpx;
					background: #E3E3E5;
					-webkit-border-radius: 50%;
					-moz-border-radius: 50%;
					border-radius: 50%;
					overflow: hidden;
					image {
						width: 116rpx;
						height: 116rpx;
					}
				}
			}
			.btn {
				width: 100%;
				position: absolute;
				top: 156rpx;
				font-size: 28rpx;
				color: #fff;
				text-align: center;
				.btn_login {
					width: 400rpx;
					height: 400rpx;
					text-align: center;
					font-size: 28rpx;
					background: none;
					color: #fff;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					position: absolute;
					top: -360rpx;
					left: 175rpx;
				}
				.btn_login::after {
					border: none;
				}
				.btn_nickname {
					width: 400rpx;
					margin-left: 175rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					font-size: 28rpx;
					background: none;
					color: #fff;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		.cont {
			width: 100%;
			.cont_content {
				width: 658rpx;
				height: 84rpx;
				display: flex;
				margin-left: 46rpx;
				margin-top: 40rpx;
				justify-content: space-between;
				.cont_list {
					width: 330rpx;
					border-left: 1px solid #ECECEC;
					.list {
						line-height: 42rpx;
						font-size: 40rpx;
						color: #333;
						text-align: center;
					}
					.list_bot {
						font-size: 28rpx;
						color: #9a9a9a;
						text-align: center;
						margin-top: 6rpx;
					}
				}
				.first_list {
					border-left: none;
				}
			}
		}
		.slide {
			width: 678rpx;
			margin-left: 36rpx;
			margin-top: 50rpx;
			.slide_first {
				width: 678rpx;
				height: 146rpx;
				position: relative;
				line-height: 48rpx;
				font-size: 28rpx;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 14rpx;
				.slide_first_left {
					width: 40rpx;
					height: 48rpx;
					position: absolute;
					top: 38rpx;
					left: 24rpx;
					.vip {
						width: 40rpx;
						height: 28rpx;
					}
				}
				.slide_first_center {
					width: 400rpx;
					height: 48rpx;
					position: absolute;
					top: 34rpx;
					left: 80rpx;
					font-weight: bold;
					.tips {
						color: #BBBBBB;
						font-size: 24rpx;
						font-weight: normal;
					}
				}
				.slide_first_right {
					width: 120rpx;
					height: 60rpx;
					position: absolute;
					top: 40rpx;
					right: 20rpx;
					line-height: 60rpx;
					-webkit-border-radius: 8rpx;
					-moz-border-radius: 8rpx;
					border-radius: 8rpx;
					background: #F6D300;
					color: #726100;
					text-align: center;
					font-size: 24rpx;
				}
			}
			.slide_list {
				width: 678rpx;
				height: 90rpx;
				margin-top: 20rpx;
				position: relative;
				line-height: 40rpx;
				font-size: 28rpx;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
				border-radius: 14rpx;
				.slide_list_left {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 25rpx;
					left: 24rpx;
					.img {
						width: 40rpx;
						height: 40rpx;
					}
				}
				.slide_list_center {
					position: absolute;
					top: 25rpx;
					left: 80rpx;
					font-weight: bold;
				}
				.slide_list_right {
					width: 15rpx;
					height: 24rpx;
					position: absolute;
					top: 33rpx;
					right: 20rpx;
					.img {
						width: 15rpx;
						height: 24rpx;
					}
				}
			}
		}
		.btn_getphone {
			width: 100%;
			height: 600rpx;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;
			opacity: 0;
		}
	}
</style>
<template>

	<view class="box">
		<view class="header">
			<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_header.jpg"></image>
			<view class="avater">
				<view class="avater_img">
					<image src="{{userInfo.headImg}}"></image>
				</view>
			</view>
			<view class="btn">
				<!--<button>点击登录</button>-->
				
				<view class="btn_nickname" wx:if="{{!islogin}}">点击登录</view>
				<view class="btn_nickname" wx:if="{{islogin}}">{{userInfo.nickName}}</view>
			</view>
		</view>
		<button class="btn_getphone" wx:if="{{!islogin}}" open-type="getUserInfo" bindgetuserinfo="handleUserInfo"></button>
		<button class="btn_getphone" wx:if="{{islogin == true && isPhone == false}}" open-type="getPhoneNumber" bindgetphonenumber="setPhoneNumber"></button>
		<view class="cont">
			<view class="cont_content">
				<view class="cont_list first_list" @tap="toWallet">
					<view class="list">{{money}}</view>
					<view class="list_bot">钱包</view>
				</view>
				<view class="cont_list" @tap="toCard">
					<view class="list">0</view>
					<view class="list_bot">停车券</view>
				</view>
				<!--<view class="cont_list" @tap="toCoupon">
					<view class="list">0</view>
    			<view class="list_bot">优惠券</view>
				</view>-->
			</view>

			<view class="slide">
				<view class="slide_first" wx:if="{{vipType <= 0}}">
					<view class="slide_first_left">
						<image class="vip" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_vip.png"></image>
					</view>
					<view class="slide_first_center">
						<view>开通vip会员，享更多优惠</view>
						<view class="tips">vip会员低至每月{{monthPrice}}元</view>
					</view>
					<view class="slide_first_right" @tap="toParkcard">立即开通</view>
				</view>
				<view class="slide_list" @tap="toMycard" wx:if="{{vipType > 0}}">
					<view class="slide_list_left">
						<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/min_vips.png"></image>
					</view>
					<view class="slide_list_center">vip会员</view>
					<view class="slide_list_right">
						<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
					</view>
				</view>
				<!--<view class="slide_list">
	    	  <view class="slide_list_left">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_news.png"></image>
	    	  </view>
	    	  <view class="slide_list_center">消息</view>
	    	  <view class="slide_list_right">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
	    	  </view>
	    	</view>-->
				<!--<view class="slide_list">
	    	  <view class="slide_list_left">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_set.png"></image>
	    	  </view>
	    	  <view class="slide_list_center">设置</view>
	    	  <view class="slide_list_right">
	    	  	<image class="img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_right.png"></image>
	    	  </view>
	    	</view>-->
			</view>

		</view>

	</view>

</template>

<script>
	import wepy from 'wepy'
	import http from '../utils/request'
	import auth from '../service/auth'
	import { api } from '../config'

	export default class Mine extends wepy.page {
		config = {
			navigationBarTitleText: '我的',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'

		}
		components = {

		}

		data = {
			userInfo: {},
			islogin: false,
			monthPrice: '',
			vipType: 0,
			money: 0,
			isPhone: false,
			phoneList: ['13533029140','13694277068','15819813644','13631336112','13711703066','18028599018','18791894072','15910814756','17521012504']
		}

		computed = {

		}

		methods = {
			toCard() {
				const self = this
				if(self.islogin == false) {
					wx.showToast({
						title: '请先授权获取用户信息！',
						icon: 'none',
						duration: 2000
					})
				} else {
					if(self.phoneList.indexOf(self.userInfo.phone) > -1){
						wepy.navigateTo({
							url: '/pages/mine/card'
						})
					}else{
						wx.showToast({
							title: '该功能正在逐步开放中！',
							icon: 'none',
							duration: 2000
						})
					}
					
				}

			},
			toWallet() {
				const self = this
				
				if(self.islogin == false) {
					wx.showToast({
						title: '请先授权获取用户信息！',
						icon: 'none',
						duration: 2000
					})
				} else {
					
					if(self.phoneList.indexOf(self.userInfo.phone) > -1){
						wepy.navigateTo({
							url: '/pages/mine/wallet'
						})
					}else{
						wx.showToast({
							title: '该功能正在逐步开放中！',
							icon: 'none',
							duration: 2000
						})
					}

				}

			},
			toCoupon() {
				const self = this
				if(self.islogin == false) {
					wx.showToast({
						title: '请先授权获取用户信息！',
						icon: 'none',
						duration: 2000
					})
				} else {
					if(self.phoneList.indexOf(self.userInfo.phone) > -1){
						wepy.navigateTo({
							url: '/pages/mine/coupon'
						})
					}else{
						wx.showToast({
							title: '该功能正在逐步开放中！',
							icon: 'none',
							duration: 2000
						})
					}
					
				}

			},
			toParkcard() {
				const self = this
				if(self.islogin == false) {
					wx.showToast({
						title: '请先授权获取用户信息！',
						icon: 'none',
						duration: 2000
					})
				} else {
					if(self.phoneList.indexOf(self.userInfo.phone) > -1){
						wepy.navigateTo({
							url: '/pages/mine/parkcard'
						})
					}else{
						wx.showToast({
							title: '该功能正在逐步开放中！',
							icon: 'none',
							duration: 2000
						})
					}
					
				}

			},
			toMycard() {
				const self = this
				if(self.islogin == false) {
					wx.showToast({
						title: '请先授权获取用户信息！',
						icon: 'none',
						duration: 2000
					})
				} else {
					if(self.phoneList.indexOf(self.userInfo.phone) > -1){
						if(self.userInfo.vipType == 1) {
							wepy.navigateTo({
								url: '/pages/mine/silver'
							})
						} else if(self.userInfo.vipType == 2) {
							wepy.navigateTo({
								url: '/pages/mine/gold'
							})
						}
					}else{
						wx.showToast({
							title: '该功能正在逐步开放中！',
							icon: 'none',
							duration: 2000
						})
					}
					
					
					
				}

			},
			async setPhoneNumber(e) {

				const self = this
				wx.showLoading({
					title: '加载中...',
					mask: true
				})
				let msg = e.detail.errMsg
				await auth.setMobilePhone(e)
				await auth.login()
				self.userInfo = await wepy.getStorageSync('userInfo')
		        if(self.userInfo.phone == '' || self.userInfo.phone == 'undefined' || self.userInfo.phone == null){
		        	self.isPhone = false
		        }else{
		        	self.isPhone = true
		        }
				wx.hideLoading()		
				self.$apply()

			},
			async handleUserInfo(e) {
				const self = this
				wx.showLoading({
					title: '加载中...',
					mask: true
				})
				let msg = e.detail.errMsg
				if(msg === 'getUserInfo:ok') {
					await auth.register(e.detail)

					self.userInfo = wepy.getStorageSync('userInfo')
					self.islogin = true
					
					
				}
				wx.hideLoading()
				self.$apply()
			}

		}

		events = {

		}

		async onShow() {
			const self = this
			wx.showLoading({
				title: '加载中...',
				mask: true
			})
			await auth.login()
			self.userInfo = await wepy.getStorageSync('userInfo')
			if(self.userInfo.phone == '' || self.userInfo.phone == 'undefined' || self.userInfo.phone == null) {
				self.isPhone = false
			} else {
				self.isPhone = true
			}
			await self.package()

			console.log(self.userInfo)

			self.money = ((self.userInfo.principalBalance + self.userInfo.givenBalance) / 100).toFixed(2)

			self.vipType = self.userInfo.vipStatus
			if(self.userInfo.headImg == '' || self.userInfo.headImg == 'undefined' || self.userInfo.headImg == null) {
				self.islogin = false
			} else {
				self.islogin = true
			}
			self.$apply()
			wx.hideLoading()
		}

		async package() {
			const self = this
			let data = {

			}

			try {
				let dataInfo = await http({
					method: api.vip.getPackage.method,
					url: api.vip.getPackage.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					self.monthPrice = dataInfo.data.data.monthStandard / 100

					self.$apply()
				}

			} catch(e) {
				console.log(e)
			}
		}

	}
</script>