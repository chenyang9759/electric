<style lang="less">
	page {
		width: 100%;
		/*height:100%;*/
		background: #f4f5fa;
		position: relative;
		top: 0;
		left: 0;
	}
	
	.box {
		padding-bottom: 140rpx;
		.box_header {
			width: 100%;
			height: 140rpx;
			padding-top: 20rpx;
			background: #00c8b3;
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			/*line-height:140rpx;*/
		}
		.box_content {
			.list_top {
				width: 678rpx;
				height: 84rpx;
				background: #fff;
				box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
				-webkit-border-radius: 14rpx;
				-moz-border-radius: 14rpx;
				border-radius: 14rpx;
				margin-left: 36rpx;
				font-size: 32rpx;
				color: #00C8B3;
				text-indent: 44rpx;
				line-height: 84rpx;
				font-weight: 500;
				margin-top: 20rpx;
			}
			.list_cont {
				width: 678rpx;
				height: 582rpx;
				margin-top: 20rpx;
				margin-left: 36rpx;
				box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
				-webkit-border-radius: 14rpx;
				-moz-border-radius: 14rpx;
				border-radius: 14rpx;
				background: #fff;
				.list_cont_top {
					width: 658rpx;
					height: 84rpx;
					box-sizing: border-box;
					line-height: 84rpx;
					border-bottom: 2rpx solid #C6C6C6;
					margin-left: 10rpx;
					position: relative;
					.top_left {
						width: 30rpx;
						height: 30rpx;
						position: absolute;
						top: 28rpx;
						left: 44rpx;
						image {
							display: block;
							width: 30rpx;
							height: 30rpx;
						}
					}
					.top_center {
						font-size: 32rpx;
						color: #333;
						text-indent: 90rpx;
					}
					.top_right {
						width: 138rpx;
						height: 48rpx;
						font-size: 24rpx;
						position: absolute;
						top: 22rpx;
						right: -20rpx;
						image {
							display: block;
							width: 138rpx;
							height: 48rpx;
						}
						.top_txt {
							position: absolute;
							width: 138rpx;
							height: 40rpx;
							line-height: 40rpx;
							text-align: center;
							top: 0;
							text-indent: 0;
							color: #fff;
						}
					}
				}
				.list_cont_center {
					width: 584rpx;
					margin-left: 46rpx;
					.list_lib {
						width: 584rpx;
						height: 28rpx;
						line-height: 28rpx;
						display: flex;
						justify-content: space-around;
						margin-top: 38rpx;
						.list {
							width: 184rpx;
							font-size: 28rpx;
							color: #666;
							text-align: left;
						}
						.list_l {
							text-align: right;
							width: 400rpx;
						}
					}
				}
			}
			.list_cont_bot {
				width: 678rpx;
				padding-bottom: 36rpx;
				padding-top: 2rpx;
				margin-top: 20rpx;
				margin-left: 36rpx;
				box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
				-webkit-border-radius: 14rpx;
				-moz-border-radius: 14rpx;
				border-radius: 14rpx;
				background: #fff;
				.list_lib {
					width: 584rpx;
					height: 28rpx;
					line-height: 28rpx;
					display: flex;
					justify-content: space-around;
					margin-top: 38rpx;
					margin-left: 46rpx;
					.list {
						width: 184rpx;
						font-size: 28rpx;
						color: #666;
						text-align: left;
					}
					.list_l {
						text-align: right;
						width: 400rpx;
					}
				}
			}
			.list_cont_botw {
				.list_line {
					width: 656rpx;
					height: 2rpx;
					margin-left: 11rpx;
					background: #C6C6C6;
					margin-top: 30rpx;
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
		.green-btn:hover {
			background: #a1eee6;
		}
		.green-btn[disabled] {
			background: #a1eee6 !important;
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
	
	.pox {
		font-size: 36rpx;
		text-align: center;
		color: #666;
		line-height: 100rpx;
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
		.green-btn:hover {
			background: #a1eee6;
		}
		.green-btn::after {
			border: none;
		}
		.green-btn[disabled] {
			background: #a1eee6 !important;
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
	<view class="pox" wx:if="{{isShowCont}}">
		暂无相关记录！
	</view>
	<view class="box_pay" @tap="toIndex">
		<button class="weui-btn green-btn" type="primary">返回首页</button>
	</view>
	<view class="box" wx:if="{{!isShowCont}}">
		<view class="box_header" wx:if="{{!isShowtoindex}}">
			<view>请驶离后再扫码补缴欠费，目前车辆未驶离，</view>
			<view>订单正在计费中，不可补缴。</view>
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

			<view class="list_cont_bot list_cont_botw" wx:if="{{arrearage > 0 && serviceCharge !=0}}">
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
				<view class="list_lib" style="width:610rpx;height:60rpx;font-size:24rpx;color:#999;line-height: 36rpx;margin-top:20rpx;">
					手续费：取证完立即收取手续费（1元），次日开始计算滞纳金（日息3%），滞纳金最高不超过停车欠费金额。
				</view>

			</view>

			<view class="list_cont_bot list_cont_botw" wx:if="{{arrearage == 0}}">
				<view class="list_lib">
					<view class="list">订单金额：</view>
					<view class="list list_l" style="color:#FF4C39;">￥{{consume/100}}</view>
				</view>
				<view class="list_lib">
					<view class="list">支付方式：</view>
					<view class="list list_l" style="color:#00B06C;">{{paytype}}</view>
				</view>
				<view class="list_line" wx:if="{{historyArr.length>0}}"></view>
				<view class="list_lib" wx:for="{{historyArr}}" wx:key="{{id}}">
					<view class="list" style="width:440rpx;">{{item.time}}</view>
					<view class="list list_l">{{item.paytype}}:<text style="color:#44CD0E;">￥{{item.payment/100}}</text></view>
				</view>
			</view>

			<view class="list_cont_bot list_cont_botw" wx:if="{{arrearage > 0}}">
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

			</view>

		</view>

		<cover-view class="box_pay" wx:if="{{arrearage>0 && evidenceState != '订单完成'}}">
			<button class="weui-btn green-btn" disabled="{{isDisable}}" wx:if="{{isShowtoindex}}" type="primary" @tap="pay">微信支付（{{(arrearage + serviceCharge + fine)/100}}元）</button>
			<button class="weui-btn green-btn" disabled="{{isDisable}}" wx:if="{{!isShowtoindex}}" type="primary" @tap="toIndex">返回首页</button>
		</cover-view>
	</view>

</template>

<script>
	import wepy from 'wepy'
	import http from '../utils/request'
	import { api } from '../config'
	import util from '../utils/util'
	import payresult from '../service/pay'

	export default class RecordDetail extends wepy.page {
		config = {
			navigationBarTitleText: '订单详情',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'
		}
		components = {

		}

		data = {
			isDisable: false,
			isShowCont: true,
			iscomeplate: true,
			evidenceState: '',
			busNumber: '',
			isShowtoindex: false,
			roadname: '',
			startTime: '',
			endTime: '',
			time: '',
			buytime: '',
			cstime: '',
			address: '',
			paytype: '',
			payment: '',
			consume: '',
			mbimg: [

			],
			xcimg: [

			],
			video: '',
			isShow: false,
			arrearage: 0,
			parkingInfo: {},
			historyArr: [],
			serviceCharge: 0,
			fine: 0,
			type: ''

		}

		computed = {

		}

		methods = {
			toIndex() {
				wx.switchTab({
					url: '/pages/index'
				})
			},
			largeImgBh(currentImg) {
				const self = this
				wx.previewImage({
					current: currentImg, // 当前显示图片的http链接
					urls: self.xcimg // 需要预览的图片http链接列表
				})
			},
			largeImgMb(currentImg) {
				const self = this
				wx.previewImage({
					current: currentImg, // 当前显示图片的http链接
					urls: self.mbimg // 需要预览的图片http链接列表
				})
			},
			async pay() {

				const self = this
				let data = {}
				if(self.endTime != '停车中') {
					data = {
						recordId: self.recordId,
						meterSN: self.parkingInfo.sn,
						spaceInnerNo: self.parkingInfo.parkNo,
						fromSystem: 868,
						payType: 51,
						payment: parseInt(self.arrearage + self.serviceCharge + self.fine)

					}
				} else {
					data = {
						meterSN: self.parkingInfo.sn,
						spaceInnerNo: self.parkingInfo.parkNo,
						fromSystem: 868,
						payType: 3,
						payment: parseInt(self.arrearage + self.serviceCharge + self.fine)

					}
				}
				await self.getCode(data)
			}
		}

		events = {

		}

		async onLoad(option) {
			const self = this
			wx.showLoading({
				title: '加载中...',
				mask: true
			})
			self.type = option.type
			console.log(self.type)
			self.recordId = wepy.getStorageSync('recordId')

			await self.getRecord(self.recordId)
			await self.getPayhistory(self.recordId)
			self.$apply()
			wx.hideLoading()

		}

		// 查询是否欠费
		async getRecord(recordId) {
			const self = this
			let data = {
				recordId: recordId
			}
			try {
				let dataInfo = await http({
					method: api.recordinfo.recordInfo.method,
					url: api.recordinfo.recordInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					dataInfo.mbimg = []
					dataInfo.xcimg = []
					dataInfo.video = ''

					if(dataInfo.data.data) {

						if(dataInfo.data.data.payType == 3 || dataInfo.data.data.payType == 12 || dataInfo.data.data.payType == 51) {
							self.paytype = '微信支付'
						} else if(dataInfo.data.data.payType == 4 || dataInfo.data.data.payType == 13) {
							self.paytype = '支付宝支付'
						} else if(dataInfo.data.data.payType == 1) {
							self.paytype = '预买时'
						} else if(dataInfo.data.data.payType == 2) {
							self.paytype = '银联卡（预买时）'
						} else if(dataInfo.data.data.payType == 10) {
							self.paytype = '预付费'
						} else if(dataInfo.data.data.payType == 11) {
							self.paytype = '银联卡买一天（预付费）'
						} else if(dataInfo.data.data.payType == 30) {
							self.paytype = '停车卡（柳银卡）'
						} else if(dataInfo.data.data.payType == 31) {
							self.paytype = '包月卡（B卡）'
						} else if(dataInfo.data.data.payType == 32) {
							self.paytype = '包月卡（C卡）'
						} else if(dataInfo.data.data.payType == 33) {
							self.paytype = '柳银代扣（普通卡）'
						} else if(dataInfo.data.data.payType == 40) {
							self.paytype = '离线订单'
						} else if(dataInfo.data.data.payType == 71 || dataInfo.data.data.payType == 72) {
							self.paytype = '会员卡支付'
						} else if(dataInfo.data.data.payType == 14) {
							self.paytype = '钱包支付'
						} else {
							self.paytype = '历史订单'
						}

						if(dataInfo.data.data.old == 1) {
							self.consume = dataInfo.data.data.payment
							self.ispay = true
							self.isDox = true
							self.evidenceState = '欠费，已取证' //是否取证
							self.isShowtoindex = true
							self.isShowCont = false
							self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无' //车牌
							self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo + '号车位' //路名称
							self.startTime = util.timeFormat(dataInfo.data.data.startTime) //开始停车时间
							self.buytime = dataInfo.data.data.payment > 0 ? util.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟' //购买时长
							self.payment = 0
							self.arrearage = dataInfo.data.data.arrearage
							self.iscomeplate = false
							self.roadname = dataInfo.data.data.roadName
							self.endTime = util.timeFormat(dataInfo.data.data.endTime) //停车结束时间
							self.cstime = dataInfo.data.data.endTime > dataInfo.data.data.expireTime ? util.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.expireTime) : '0小时0分钟' //超时时长

							self.time = util.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime) //停车时长
							self.address = dataInfo.data.data.roadName

						} else {

							self.isShowCont = false
							self.consume = dataInfo.data.data.consume
							self.busNumber = dataInfo.data.data.busNumber ? dataInfo.data.data.busNumber : '暂无' //车牌
							self.roadname = dataInfo.data.data.roadName + dataInfo.data.data.meterNo + '号咪表0' + dataInfo.data.data.spaceInnerNo + '号车位' //路名称
							self.startTime = util.timeFormat(dataInfo.data.data.startTime) //开始停车时间
							self.buytime = dataInfo.data.data.payment > 0 ? util.timeCalculation(dataInfo.data.data.expireTime - dataInfo.data.data.startTime) : '0小时0分钟' //购买时长
							self.payment = dataInfo.data.data.payment
							if(dataInfo.data.data.endTime) {
								self.endTime = util.timeFormat(dataInfo.data.data.endTime) //停车结束时间
								self.cstime = dataInfo.data.data.endTime > dataInfo.data.data.expireTime ? util.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.expireTime) : '0小时0分钟' //超时时长
								self.time = util.timeCalculation(dataInfo.data.data.endTime - dataInfo.data.data.startTime) //停车时长
								self.isShowtoindex = true
							} else {
								self.endTime = '停车中'
								if(dataInfo.data.data.payment == 0) {
									self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? util.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime) : '0小时0分钟' //超时时长
								} else {
									self.cstime = dataInfo.data.data.serverDate > dataInfo.data.data.expireTime ? util.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.expireTime) : '0小时0分钟' //超时时长
								}
								self.time = util.timeCalculation(dataInfo.data.data.serverDate - dataInfo.data.data.startTime) //停车时长
								self.isShowtoindex = false
							}
							self.parkingInfo.sn = dataInfo.data.data.meterSN
							self.parkingInfo.parkNo = dataInfo.data.data.spaceInnerNo
							self.parkingInfo.payType = dataInfo.data.data.payType
							self.iscomeplate = true
							self.arrearage = dataInfo.data.data.arrearage > 0 ? dataInfo.data.data.arrearage : 0
							self.address = dataInfo.data.data.countyName + dataInfo.data.data.streetName + dataInfo.data.data.roadName
							self.serviceCharge = dataInfo.data.data.serviceCharge
							self.fine = dataInfo.data.data.fine
							if(dataInfo.data.data.arrearage == 0) {
								self.ispay = true
								self.isDox = true
								self.evidenceState = '订单完成' //是否取证
							} else if(dataInfo.data.data.arrearage > 0) {
								//已欠费，未取证
								self.ispay = true
								self.isDox = true
								self.evidenceState = '欠费，已取证' //是否取证
								self.iscomeplate = false

							}

						}

					} else {
						self.isShowCont = true
					}
				}
				self.$apply()
			} catch(e) {
				console.log(e)
			}
		}

		//获取code
		getCode(data) {
			const self = this
			self.isDisable = true
			let codeInfo = ''
			wx.login({
				success(res) {

					self.pay(res.code, data)

				}
			})

		}

		//  zhifu
		async pay(code, data) {
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
				success: function(data) {
					if(self.type == 'arrear') {
						wx.redirectTo({
							url: '/pages/paySuccess?type=' + 'jf'
						})
					} else {
						wx.redirectTo({
							url: '/pages/paySuccess'
						})
					}
				},
				fail: function(e) {
					self.isDisable = false
					self.$apply()
				}
			})

		}

		async getPayhistory(recordId) {
			const self = this
			let data = {}
			data = {
				recordId: recordId
			}

			try {
				let dataInfo = await http({
					method: api.pay.payHisory.method,

					url: api.pay.payHisory.url,
					data: JSON.stringify(data)
				})
				console.log(dataInfo.data.data)
				if(dataInfo.data.code == 0) {

					dataInfo.data.data.forEach((item, index) => {
						let paytype = ''
						if(item.payType == 3 || item.payType == 12 || item.payType == 51 || item.payType == 52 || item.payType == 53) {
							if(item.fundFlow == 1) {
								paytype = '微信支付'
							} else if(item.fundFlow == 2) {
								paytype = '微信退款'
							}
						} else if(item.payType == 4 || item.payType == 13) {
							if(item.fundFlow == 1) {
								paytype = '支付宝支付'
							} else if(item.fundFlow == 2) {
								paytype = '支付宝退款'
							}
						} else if(item.payType == 1) {
							paytype = '预买时'
						} else if(item.payType == 2) {
							paytype = '银联卡（预买时）'
						} else if(item.payType == 10) {
							paytype = '预付费'
						} else if(item.payType == 11) {
							paytype = '银联卡买一天（预付费）'
						} else if(item.payType == 30) {
							paytype = '停车卡（柳银卡）'
						} else if(item.payType == 31) {
							paytype = '包月卡（B卡）'
						} else if(item.payType == 32) {
							paytype = '包月卡（C卡）'
						} else if(item.payType == 33) {
							paytype = '柳银代扣（普通卡）'
						} else if(item.payType == 40) {
							paytype = '离线订单'
						}

						self.historyArr.push({
							id: index,
							time: util.timeFormat(item.addTime),
							paytype: paytype,
							payment: item.actualAmount
						})

					})
				} else if(dataInfo.data.code == -1) {
					wx.showToast({
						title: dataInfo.data.msg,
						icon: 'none',
						duration: 2000
					})
				}
				self.$apply()

			} catch(e) {

				console.log(e)
			}
		}

	}
</script>