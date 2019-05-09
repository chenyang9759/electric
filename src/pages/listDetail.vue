<style lang="less">
	page {
		width: 100%;
		height: 100%;
		position: relative;
		background: #f4f5fa;
		top: 0;
		left: 0;
	}
	
	.box {
		.box_header {
			width: 100%;
			height: 170rpx;
			padding-top: 20rpx;
			background: #00c8b3;
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			.box_tit {
				margin-top: 20rpx;
				font-size: 40rpx;
				font-weight: 700;
			}
			.box_des {
				margin-top: 10rpx;
			}
		}
		.box_cont {
			width: 718rpx;
			margin-left: 16rpx;
			.box_cont_tit {
				display: flex;
				justify-content: space-between;
				font-size: 34rpx;
				color: #666;
				line-height: 108rpx;
				.tit_right {
					height: 108rpx;
					.tit_btn {
						width: 80rpx;
						height: 50rpx;
						background: #00c8b3;
						color: #fff;
						-webkit-border-radius: 10rpx;
						-moz-border-radius: 10rpx;
						border-radius: 10rpx;
						text-align: center;
						line-height: 50rpx;
						margin-top: 29rpx;
						font-size: 24rpx;
					}
				}
			}
		}
		.box_bot {
			width: 718rpx;
			padding: 16rpx;
			padding-bottom: 56rpx;
			display: flex;
			background: #fff;
			justify-content: space-between;
			flex-wrap: wrap;
			.bot_list {
				width: 340rpx;
				height: 150rpx;
				box-sizing: border-box;
				margin-top: 40rpx;
				-webkit-border-radius: 10rpx;
				-moz-border-radius: 10rpx;
				border-radius: 10rpx;
				color: #fff;
				text-align: center;
				line-height: 50rpx;
				.list_top {
					margin-top: 30rpx;
					font-size: 40rpx;
				}
				.list_bot {
					font-size: 28rpx;
				}
			}
			.bot_list_a {
				background: #00c8b3;
			}
			.bot_list_b {
				border: 2rpx solid #00c8b3;
				color: #00c8b3;
			}
		}
	}
</style>
<template>
	<view class="box">
		<view class="box_header">
			<view class="box_tit">{{parkingInfo.roadname}}</view>
			<view class="box_des">请选择您车辆停放的车位编号并缴费</view>
		</view>
		<view class="box_cont">
			<view class="box_cont_tit">
				<view class="tit_left">可缴费车位：</view>
				<view class="tit_right">
					<view class="tit_btn" @tap="refresh">刷新</view>
				</view>
			</view>
		</view>
		<view class="box_bot">
			<block wx:for="{{ equipPark }}" wx:key="{{ id }}">
				<view class="bot_list  {{ item.spaceState == 70 || item.spaceState == 74 ? 'bot_list_b' : 'bot_list_a' }}" @tap="toCheckPay('{{ item.spaceState }}','{{ item.spaceInnerNo }}','{{ item.payType }}','{{ item.spaceState_Text }}')">
					<view class="list_top">0{{ item.spaceInnerNo }}号车位</view>
					<view class="list_bot">{{ item.spaceState_Text }}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import wepy from 'wepy'
	import http from '../utils/request'
	import { api } from '../config'

	export default class ListDetail extends wepy.page {
		config = {
			navigationBarTitleText: '停车缴费',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'
		}
		components = {

		}

		data = {
			parkingInfo: {
				sn: '',
				parkNo: '',
				payType: '',
				roadname: ''
			},
			exdata: {
				scan_pre_day: 0,
				scan_pre_buy: 0
			},
			equipPark: [
				// {
				//   id:0,
				//   spaceNo:1,
				//   spaceInnerNo:1,
				//   spaceState:1,
				//   spaceState_Text:'1'
				// }
			]
		}

		computed = {

		}

		methods = {
			toCheckPay(spaceState, spaceInnerNo, payType, spSte) {
				console.log(payType)
				const self = this
				self.parkingInfo.parkNo = spaceInnerNo
				self.parkingInfo.payType = payType
				wepy.setStorageSync('parkingInfo', self.parkingInfo)
				if(spSte == '超时停车') {

					wx.showModal({
						title: '提示',
						showCancel: false,
						content: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
						confirmColor: '#00c8b3',
						confirmText: '确定',
						success(res) {
							if(res.confirm) {

							}
						}
					})

					return
				}
				if(self.exdata.scan_pre_day == 0 && self.exdata.scan_pre_buy == 0) {
					if(spaceState == 71 || spaceState == 72 || spaceState == 73) {

						if(payType == 0) {
							wepy.navigateTo({
								url: '/pages/checkPay'
							})
						} else if(payType == 11 || payType == 12 || payType == 13) {
							wepy.navigateTo({
								url: '/pages/allDay'
							})
						} else if(payType == 2 || payType == 3 || payType == 4) {
							wepy.navigateTo({
								url: '/pages/allHour'
							})
						} else if(payType == 40) {
							wx.showToast({
								title: '本次停车免费！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 30 || payType == 31 || payType == 32 || payType == 33) {
							wx.showToast({
								title: '您已使用车主卡刷卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 14) {
							wx.showToast({
								title: '已使用钱包支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 71 || payType == 72) {
							wx.showToast({
								title: '已使用包月卡或包年卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else {
							wx.showModal({
								title: '提示',
								showCancel: false,
								content: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
								confirmColor: '#00c8b3',
								confirmText: '确定',
								success(res) {
									if(res.confirm) {

									}
								}
							})
						}

					} else if(spaceState == 70) {
						wx.showToast({
							title: '当前车位暂未检测到车辆驶入，请稍后再试！',
							icon: 'none',
							duration: 2000
						})
					} else if(spaceState == 74) {
						wx.showToast({
							title: '地感故障！',
							icon: 'none',
							duration: 2000
						})
					}
				} else if(self.exdata.scan_pre_buy == 1 && self.exdata.scan_pre_day == 0) {
					if(spaceState == 71 || spaceState == 72 || spaceState == 73) {
						if(payType == 40) {
							wx.showToast({
								title: '本次停车免费！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 30 || payType == 31 || payType == 32 || payType == 33) {
							wx.showToast({
								title: '您已使用车主卡刷卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 14) {
							wx.showToast({
								title: '已使用钱包支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 71 || payType == 72) {
							wx.showToast({
								title: '已使用包月卡或包年卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else {
							wepy.navigateTo({
								url: '/pages/allHour'
							})
						}
					} else if(spaceState == 70) {
						wx.showToast({
							title: '当前车位暂未检测到车辆驶入，请稍后再试！',
							icon: 'none',
							duration: 2000
						})
					} else if(spaceState == 74) {
						wx.showToast({
							title: '地感故障！',
							icon: 'none',
							duration: 2000
						})
					}

				} else if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 0) {
					if(spaceState == 71 || spaceState == 72 || spaceState == 73) {
						if(payType == 40) {
							wx.showToast({
								title: '本次停车免费！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 30 || payType == 31 || payType == 32 || payType == 33) {
							wx.showToast({
								title: '已使用车主卡刷卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 14) {
							wx.showToast({
								title: '已使用钱包支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 71 || payType == 72) {
							wx.showToast({
								title: '已使用包月卡或包年卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else {
							wepy.navigateTo({
								url: '/pages/allDay'
							})
						}

					} else if(spaceState == 70) {
						wx.showToast({
							title: '当前车位暂未检测到车辆驶入，请稍后再试！',
							icon: 'none',
							duration: 2000
						})
					} else if(spaceState == 74) {
						wx.showToast({
							title: '地感故障！',
							icon: 'none',
							duration: 2000
						})
					}
				} else if(self.exdata.scan_pre_day == 1 && self.exdata.scan_pre_buy == 1) {
					if(spaceState == 71 || spaceState == 72 || spaceState == 73) {
						if(payType == 0) {
							wepy.navigateTo({
								url: '/pages/checkPay'
							})
						} else if(payType == 11 || payType == 12 || payType == 13) {
							wepy.navigateTo({
								url: '/pages/allDay'
							})
						} else if(payType == 2 || payType == 3 || payType == 4) {
							wepy.navigateTo({
								url: '/pages/allHour'
							})
						} else if(payType == 40) {
							wx.showToast({
								title: '本次停车免费！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 30 || payType == 31 || payType == 32 || payType == 33) {
							wx.showToast({
								title: '您已使用车主卡刷卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 14) {
							wx.showToast({
								title: '已使用钱包支付！',
								icon: 'none',
								duration: 2000
							})
						} else if(payType == 71 || payType == 72) {
							wx.showToast({
								title: '已使用包月卡或包年卡，无需支付！',
								icon: 'none',
								duration: 2000
							})
						} else {
							wx.showModal({
								title: '提示',
								showCancel: false,
								content: '请驶离后再扫码补缴欠费，目前车辆未驶离，订单正在计费中，不可补缴。',
								confirmColor: '#00c8b3',
								confirmText: '确定',
								success(res) {
									if(res.confirm) {

									}
								}
							})
						}
					} else if(spaceState == 70) {
						wx.showToast({
							title: '当前车位暂未检测到车辆驶入，请稍后再试！',
							icon: 'none',
							duration: 2000
						})
					} else if(spaceState == 74) {
						wx.showToast({
							title: '地感故障！',
							icon: 'none',
							duration: 2000
						})
					}

				}

			},
			refresh() {
				const self = this
				self.getInfo(self.parkingInfo.sn)
			}
		}

		events = {

		}

		async onShow() {
			const self = this
			self.parkingInfo = wepy.getStorageSync('parkingInfo')
			
			await self.getInfo(self.parkingInfo.sn)
			self.$apply()
		}

		

		// 获取车位信息
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
				if(dataInfo.data.code == 0) {
					self.parkingInfo.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表'
					self.equipPark = []

					if(dataInfo.data.exData) {
						self.exdata.scan_pre_day = dataInfo.data.exData.scan_pre_day
						self.exdata.scan_pre_buy = dataInfo.data.exData.scan_pre_buy
					}

					dataInfo.data.data.equipParkspaces.forEach((item, index) => {
						self.equipPark.push({
							id: index,
							spaceNo: item.spaceNo,
							spaceInnerNo: item.spaceInnerNo,
							spaceState: item.spaceState,
							spaceState_Text: item.spaceState_Text,
							payType: item.payType == 'underfind' ? -1 : item.payType
						})
					})
					self.$apply()
					wx.hideLoading()
				}
			} catch(e) {
				console.log(e)
			}

		}

	}
</script>