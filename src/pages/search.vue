<style lang="less">
	page {
		width: 100%;
		height: 100%;
		position: relative;
		top: 0;
		left: 0;
		background: #f4f5fa;
	}
	
	.box {
		width: 100%;
		height: 100%;
		.box_header {
			width: 100%;
			height: 250rpx;
			padding-top: 20rpx;
			background: #00c8b3;
			.header {
				width: 718rpx;
				height: 54rpx;
				margin-left: 16rpx;
				line-height: 54rpx;
				font-size: 28rpx;
				color: #fff;
				display: flex;
				justify-content: space-between;
				.header_right {
					width: 186rpx;
					height: 54rpx;
					background: #fff;
					color: #00c8b3;
					text-align: center;
					-webkit-border-radius: 27rpx;
					-moz-border-radius: 27rpx;
					border-radius: 27rpx;
				}
			}
			.cont {
				width: 718rpx;
				height: 120rpx;
				margin-top: 40rpx;
				margin-left: 16rpx;
				color: #00c8b3;
				font-size: 76rpx;
				display: flex;
				justify-content: space-between;
				line-height: 120rpx;
				.cont_left {
					width: 120rpx;
					height: 120rpx;
					text-align: center;
					background: #fff;
				}
				.cont_right {
					width: 558rpx;
					padding-left: 20rpx;
					height: 120rpx;
					background: #fff;
				}
			}
		}
		.box_cont {
			width: 100%;
			.list {
				width: 718rpx;
				padding: 0 16rpx;
				height: 116rpx;
				margin-top: 20rpx;
				background: #fff;
				line-height: 116rpx;
				display: flex;
				font-size: 32rpx;
				color: #353535;
				position: relative;
				.list_right {
					input {
						height: 116rpx;
						line-height: 116rpx;
					}
					.list_btn {
						width: 200rpx;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						background: #00c8b3;
						font-size: 28rpx;
						color: #fff;
						border-radius: 25rpx;
						position: absolute;
						right: 16rpx;
						top: 33rpx;
					}
				}
			}
		}
	}
	
	.vehicle-panel {
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 1000;
	}
	
	.vehicle-panel-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.vehicle-panel-row-last {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.vehicle-panel-row-button {
		background-color: #fff;
		margin: 5rpx;
		padding: 5rpx;
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		border-radius: 10rpx;
	}
	
	.vehicle-panel-row-button-number {
		background-color: #eee;
	}
	
	.vehicle-panel-row-button-last {
		width: 90rpx;
		height: 90rpx;
		line-height: 90rpx;
	}
	
	.vehicle-hover {
		background-color: #ccc;
	}
	
	.vehicle-panel-row-button-img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.vehicle-en-button-delete {
		width: 46rpx;
		height: 85rpx;
	}
	
	.vehicle-panel-ok {
		background-color: #00c8b3;
		color: #fff;
		width: 94rpx;
		height: 94rpx;
		line-height: 94rpx;
	}
	
	.box_pay {
		margin-top: 20rpx;
		position: relative;
		width: 100%;
		height: 120rpx;
		background: #fff;
		.green-btn {
			background-color: #00c8b3;
			color: #fff;
			font-size: 32rpx;
		}
		.green-btn::after {
			border: none;
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

	<!--支付成功-->
	<view class="box">
		<view class="box_header">
			<view class="header">
				<view class="header_left">如果有取证单据请点击扫码补缴</view>
				<view class="header_right" @tap="openScan">扫码补缴</view>
			</view>
			<view class="cont">
				<view class="cont_left" @tap="setProvince">
					{{province}}
				</view>
				<view class="cont_right" @tap="setNumber">
					{{numberShow}}
				</view>
			</view>
		</view>

		<view class="box_pay" @tap="toArrearRecord">
			<button class="weui-btn green-btn" type="primary">查询</button>
		</view>

		<view wx:if="{{isShow}}" class="vehicle-panel" style="height:430rpx;background-color:#eee;">
			<!--省份简写键盘-->
			<block wx:if="{{keyBoardType === 1}}">
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button' style="border:{{buttonBorder}}" wx:for="{{keyVehicle1}}" bindtap='vehicleTap' data-value="{{item}}" wx:for-index="idx" wx:key="idx">{{item}}</view>
				</view>
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button' style="border:{{buttonBorder}}" wx:for="{{keyVehicle2}}" bindtap='vehicleTap' data-value="{{item}}" wx:for-index="idx" wx:key="idx">{{item}}</view>
				</view>
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button' style="border:{{buttonBorder}}" wx:for="{{keyVehicle3}}" bindtap='vehicleTap' data-value="{{item}}" wx:for-index="idx" wx:key="idx">{{item}}</view>
					<view hover-class="vehicle-hover" style="border:{{buttonBorder}};width:80rpx;height:80rpx;" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-row-button-img' bindtap='vehicleTapDel'>
						<image src='https://caoke.oss-cn-beijing.aliyuncs.com/del.png' class='vehicle-en-button-delete' data-value="delete" mode='aspectFit'>删除</image>
					</view>
				</view>
				<view class="vehicle-panel-row-last">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-row-button-last' bindtap='vehicleTap' data-value="{{item}}" wx:for="{{keyVehicle4}}" style="border:{{buttonBorder}}" wx:for-index="idx" wx:key="idx">{{item}}</view>

					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-ok' style="width:306rpx;height:90rpx;" bindtap='vehicleTapClose' data-value="ok">确认</view>

				</view>
			</block>
			<!--英文键盘-->
			<block wx:else>
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-row-button-number' bindtap='vehicleTap' data-value="{{item}}" wx:for="{{keyNumber}}" style="border:{{buttonBorder}};background:#fff;" wx:for-index="idx" wx:key="item">{{item}}</view>
				</view>
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button' style="border:{{buttonBorder}}" wx:for="{{keyEnInput1}}" bindtap='vehicleTap' data-value="{{item}}" wx:for-index="idx" wx:key="idx">{{item}}</view>
				</view>
				<view class="vehicle-panel-row">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button' style="border:{{buttonBorder}}" wx:for="{{keyEnInput2}}" bindtap='vehicleTap' data-value="{{item}}" wx:for-index="idx" wx:key="idx">{{item}}</view>
					<view hover-class="vehicle-hover" style="border:{{buttonBorder}};width: 80rpx;height:80rpx;" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-row-button-img' bindtap='vehicleTapDel'>
						<image src='https://caoke.oss-cn-beijing.aliyuncs.com/del.png' class='vehicle-en-button-delete' data-value="delete" mode='aspectFit'>删除</image>
					</view>
				</view>
				<view class="vehicle-panel-row-last">
					<view hover-class="vehicle-hover" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-row-button-last' bindtap='vehicleTap' style="border:{{buttonBorder}}" data-value="{{item}}" wx:for="{{keyEnInput3}}" wx:for-index="idx" wx:key="idx">{{item}}</view>

					<view hover-class="vehicle-hover" style="width:200rpx;height:90rpx;line-height: 90rpx;" hover-start-time="10" hover-stay-time="100" class='vehicle-panel-row-button vehicle-panel-ok' bindtap='vehicleTapClose' data-value="ok">确认</view>

				</view>
			</block>
		</view>

	</view>

</template>

<script>
	import wepy from 'wepy'
	import http from '../utils/request'
	import { api } from '../config'
	import qrcode from '../service/qrcode'

	export default class Search extends wepy.page {
		config = {
			navigationBarTitleText: '补缴欠费',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'

		}
		components = {

		}

		data = {
			ispay: true,
			isDox: true,
			licensePlate: '粤',
			province: '粤',
			numberShow: '',
			number: '粤',
			userInfo: {},
			del: '删',
			keyBoardType: 1,
			isShow: true,
			buttonBorder: 'none',
			backgroundColor: "#fff",
			keyVehicle1: '粤京津沪冀豫云辽黑',
			keyVehicle2: '湘皖鲁新苏浙赣鄂桂',
			keyVehicle3: '甘晋蒙吉闽贵陕川',
			keyVehicle4: '青藏琼宁渝W',
			keyNumber: '1234567890',
			keyEnInput1: 'QWERTYUOP港',
			keyEnInput2: 'ASDFGHJK澳',
			keyEnInput3: 'LZXCVBNM',
			recordId: ''

		}

		computed = {

		}

		methods = {
			openScan() {
				const self = this
				wx.scanCode({
					success(res) {

						let scanCode = encodeURIComponent(res.result)

						let theRequest = qrcode.getQrcode(scanCode)

						if(theRequest['recordId']) {
							self.recordId = theRequest['recordId']
							wepy.setStorageSync('recordId', self.recordId)
							wx.navigateTo({
								url: '/pages/recordDetail'
							})
						}

					}
				})
			},
			pay() {
				const self = this
				self.ispay = false
			},
			toIndex() {
				wx.switchTab({
					url: '/pages/index'
				})
			},
			async toArrearRecord() {

				const self = this
				await self.searchInfo()

			},
			toOrder() {
				this.isDox = false
			},
			toChooseParking() {
				wepy.navigateTo({
					url: '/pages/chooseParking'
				})
			},
			setProvince() {

				this.keyBoardType = 1
				this.isShow = true
				this.number = ''
				//      this.province = ''
				this.numberShow = ''
				this.changeNumber()

			},
			setNumber() {
				this.keyBoardType = 2
				this.isShow = true
				this.changeNumber()
			},

			vehicleTap(e) {

				const self = this
				if(this.keyBoardType == 1) {
					this.number += e.target.dataset.value
					this.province = this.number.substr(0, 1)
					self.changeNumber()
				} else if(this.keyBoardType == 2) {
					self.changeNumber()

					if(this.number.length < 8) {
						this.number += e.target.dataset.value
						this.numberShow = this.number.substr(1, this.number.length)
					}
				}
				self.$apply()

			},
			vehicleTapClose(e) {
				this.isShow = false
				this.$apply()
			},

			vehicleTapDel() {
				const self = this

				self.number = self.number.substring(0, self.number.length - 1)
				self.province = self.number.substr(0, 1)
				self.numberShow = this.number.substr(1, self.number.length)
				self.changeNumber()
				self.$apply()

			},

			bindKeyInput: function(e) {

				this.licensePlate = e.detail.value

			}
		}

		events = {

		}

		async onLoad() {
			const self = this
			self.userInfo = wepy.getStorageSync('userInfo')
			self.keyBoardType = 2

		}
		//查询
		async searchInfo() {
			const self = this

			let data = {
				busNumber: self.number
			}
			try {
				let dataInfo = await http({
					method: api.recordinfo.searchPlate.method,
					url: api.recordinfo.searchPlate.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					if(dataInfo.data.code == 0) {
						if(dataInfo.data.data.length > 0) {
							wepy.setStorageSync('splate', self.number)
							wepy.navigateTo({
								url: '/pages/arrearRecord'
							})
						} else {
							wx.showToast({
								title: '暂无需要补缴的欠费订单,请在车辆驶离后查询并进行补缴!',
								icon: 'none',
								duration: 2000
							})
						}

					}
				}
				self.$apply()
			} catch(e) {
				console.log(e)
			}
		}
		// watch number change
		changeNumber() {
			const self = this
			if(self.number.length >= 1) {
				self.keyBoardType = 2
			} else {
				self.keyBoardType = 1
			}
			// this.province = this.number.substr(0,1)
			// this.numberShow = this.number.substr(0, this.number.length-1)
			self.isShow = true
			self.$apply()
		}

	}
</script>