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
			height: 120rpx;
			background: #00c8b3;
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			padding-top: 20rpx;
		}
		.box_cont {
			width: 718rpx;
			margin-left: 16rpx;
			.box_cont_tit {
				display: flex;
				justify-content: space-between;
				font-size: 36rpx;
				color: #00c8b3;
				line-height: 108rpx;
				.tit_right {
					text-align: right;
					text-decoration: underline;
				}
			}
		}
	}
	
	.box_cont_list {
		margin-bottom: 20rpx;
		display: flex;
		justify-content: space-between;
		font-size: 36rpx;
		color: #666;
		height: 108rpx;
		line-height: 108rpx;
		background: #fff;
		.list_left {
			text-indent: 20rpx;
			width: 70%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.list_right {
			text-align: right;
			margin-right: 20rpx;
			color: #999;
			font-size: 28rpx;
		}
	}
	
	.pox {
		.pox_header {
			width: 100%;
			height: 190rpx;
			background: #00c8b3;
			color: #fff;
			font-size: 28rpx;
			text-align: center;
			padding-top: 20rpx;
			.header_btn {
				margin-top: 20rpx;
				text-decoration: underline;
			}
		}
		.pox_cont {
			width: 718rpx;
			margin-left: 16rpx;
			margin-top: 60rpx;
			.pox_check {
				width: 100%;
				display: flex;
				justify-content: space-between;
				.pox_check_list {
					width: 220rpx;
					height: 96rpx;
					border: 2rpx solid #ccc;
					box-sizing: border-box;
					background: #fff;
					text-align: center;
					line-height: 96rpx;
					color: #666;
					font-size: 28rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
			.pox_input {
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-bottom: 40rpx;
				margin-top: 40rpx;
				.pox_input_left {
					width: 420rpx;
					height: 96rpx;
					border: 2rpx solid #ccc;
					box-sizing: border-box;
					background: #fff;
					text-align: center;
					line-height: 96rpx;
					color: #666;
					font-size: 28rpx;
					input {
						width: 100%;
						height: 92rpx;
						text-align: left;
						padding-left: 40rpx;
						line-height: 92rpx;
					}
				}
				.pox_input_right {
					width: 220rpx;
					height: 96rpx;
					box-sizing: border-box;
					background: #fff;
					text-align: center;
					line-height: 96rpx;
					color: #666;
					font-size: 28rpx;
					border-radius: 48rpx;
					background: #00c8b3;
					color: #fff;
					border: none;
				}
			}
		}
	}
</style>
<template>
	<!--用户点击允许使用位置-->
	<view class="box" wx:if="{{isLocation}}">
		<view class="box_header">
			<view>系统已经按照您的位置信息加载了您500米以内含有可</view>
			<view>缴费车位的咪表设备，咪表编号在设备外壳可以看到</view>
		</view>
		<view class="box_cont">
			<view class="box_cont_tit">
				<view class="tit_left" @tap="refresh">刷新列表</view>
				<view class="tit_right" @tap="changeType">
					根据路段选择>
				</view>
			</view>

			<view class="box_cont_list" wx:for="{{ spaceInfo }}" wx:key="{{id}}" @tap="toListDetail('{{ item.sn }}')">
				<view class="list_left">{{ item.roadname }}</view>
				<view class="list_right">{{ item.distance }}m以内</view>
			</view>
		</view>
	</view>
	<!--用户取消地理位置授权-->
	<view class="pox" wx:if="{{!isLocation}}">
		<view class="pox_header">
			<view>您禁止了应用访问您的当前位置信息</view>
			<view>请手动选择停车咪表</view>
			<view class="header_btn" @tap="openSet">设置允许访问位置信息</view>
		</view>
		<view class="pox_cont">
			<view class="pox_check">
				<view class="pox_check_list">
					<picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
						<view class="picker">{{array[index]}}</view>
					</picker>

				</view>
				<view class="pox_check_list">
					<picker bindchange="bindPickerChange1" value="{{index1}}" range="{{array1}}">
						<view class="picker">{{array1[index1]}}</view>
					</picker>

				</view>
				<view class="pox_check_list">
					<picker bindchange="bindPickerChange2" value="{{index2}}" range="{{array2}}">
						<view class="picker">{{array2[index2]}}</view>
					</picker>

				</view>

			</view>
			<view class="pox_input">
				<view class="pox_input_left">
					<input type="number" maxlength="6" placeholder="请输入车位编号" value="{{sPaceNo}}" bindinput="bindNameInput" />
				</view>
				<view class="pox_input_right" @tap="search">查询</view>
			</view>

			<view class="tips" wx:if="{{isShowTips}}" style="text-align: center;color:red;margin-top: 40rpx;font-size:28rpx;">查询不到对应数据或咪表当前无可缴费车位！</view>
			<view class="box_cont_list" wx:if="{{spaceInfomation.length > 0}}" wx:for="{{ spaceInfomation }}" wx:key="{{id}}" @tap="toListDetail('{{ item.sn }}')">
				<view class="list_left">{{ item.roadname }}</view>
				<view class="list_right">查看</view>
			</view>
		</view>
	</view>

</template>

<script>
	import wepy from 'wepy'
	import http from '../utils/request'
	import { api } from '../config'

	export default class ChooseParking extends wepy.page {
		config = {
			navigationBarTitleText: '手动选择车位',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'

		}
		components = {

		}

		data = {
			isShowTips: false,
			sPaceNo: '',
			spaceInfo: [

			],
			spaceInfomation: [

			],
			parkingInfo: {

			},
			isLocation: false,
			latitude: 0,
			longitude: 0,
			array: [],
			arrayInfo: [],
			arrayInfo1: [],
			arrayInfo2: [],
			index: 0,
			array1: [],
			index1: 0,
			array2: [],
			index2: 0,
			streetArray: [],
			roadArray: [],
			countyId: '',
			streetId: '',
			roadId: ''

		}

		computed = {

		}

		methods = {
			async refresh() {
				const self = this
				await self.getQuery()
			},
			async search() {
				const self = this
				await self.searchSpaceNo()
			},
			changeType() {
				const self = this
				self.isLocation = false
			},
			bindPickerChange(e) {
				const self = this
				console.log('picker发送选择改变，携带值为', e.detail.value)
				self.index = e.detail.value
				self.countyId = self.arrayInfo[self.index].id
				self.getStreet(self.arrayInfo[self.index].id)
			},
			bindPickerChange1(e) {
				const self = this
				self.index1 = e.detail.value
				self.streetId = self.arrayInfo1[self.index1].id

				self.getRoad(self.arrayInfo1[self.index1].id)

			},
			bindPickerChange2(e) {
				const self = this
				console.log('picker发送选择改变，携带值为', e.detail.value)
				self.index2 = e.detail.value
				self.roadId = self.arrayInfo2[self.index2].id

			},
			toListDetail(sn) {
				const self = this
				self.parkingInfo.sn = sn
				wepy.setStorageSync('parkingInfo', self.parkingInfo)
				wepy.navigateTo({
					url: '/pages/listDetail'
				})
			},

			bindxChange(e) {
				console.log(e.detail.value)
				this.index = e.detail.value
			},
			bindNameInput(e) {
				console.log(e.detail.value)
				const self = this
				self.sPaceNo = e.detail.value
			}

		}

		events = {

		}

		async onShow() {
			const self = this
			if(self.latitude == 0) {
				this.isLocation = false
			} else {

			}
			await self.getArea()

			self.$apply()
		}

		async onLoad() {
			const self = this
			self.getLocation()
			self.$apply()
		}

		// 获取位置信息
		getLocation() {
			const self = this
			wx.getLocation({
				type: 'gcj02',
				success(res) {
					const latitude = res.latitude
					const longitude = res.longitude
					const speed = res.speed
					const accuracy = res.accuracy

					self.latitude = res.latitude
					self.longitude = res.longitude
					if(self.latitude != 0) {

						self.isLocation = true
						self.getQuery()

					} else {

					}

					self.$apply()
				}
			})

		}
		// 打开设置
		async openSet() {
			const self = this
			wx.openSetting({
				success(res) {
					self.isLocation = true
					self.getQuery()
					self.$apply()
				}
			})
		}
		// 通过位置信息选择咪表
		async getQuery() {
			const self = this

			wx.showLoading({
				title: '加载中...'
			})
			let data = {
				lng: self.longitude,
				lat: self.latitude,
			}
			try {
				let dataInfo = await http({
					method: api.recordinfo.numberInfo.method,
					url: api.recordinfo.numberInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					self.spaceInfo = []
					dataInfo.data.data.forEach((item, index) => {
						self.spaceInfo.push({
							id: index,
							sn: item.meterSN,
							distance: Math.ceil(item.distance / 10) * 10,
							roadname: item.roadName + item.meterNo + '号咪表'
						})
					})
				}
				self.$apply()
				wx.hideLoading()
			} catch(e) {
				console.log(e)
			}
		}
		// 地址联动
		async getArea() {
			const self = this

			let data = {

			}
			try {
				let dataInfo = await http({
					method: api.address.getAreaInfo.method,
					url: api.address.getAreaInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					self.array = []
					self.arrayInfo = []
					dataInfo.data.data.forEach((item) => {
						self.array.push(
							item.countyName
						)
						self.arrayInfo.push({
							name: item.countyName,
							id: item.countyId
						})
					})
					self.countyId = self.arrayInfo[0].id
					self.getStreet(self.arrayInfo[0].id)
				}
				self.$apply()
			} catch(e) {
				console.log(e)
			}
		}
		// 获取街道
		async getStreet(countyId) {
			const self = this
			self.array1 = []
			self.arrayInfo1 = []
			self.array2 = []
			self.arrayInfo2 = []
			let data = {
				countyId: countyId
			}
			try {
				let dataInfo = await http({
					method: api.address.getStreetInfo.method,
					url: api.address.getStreetInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					dataInfo.data.data.forEach((item) => {
						self.array1.push(
							item.streetName
						)
						self.arrayInfo1.push({
							name: item.streetName,
							id: item.streetId
						})

					})
					self.streetId = self.arrayInfo1[0].id
					self.getRoad(self.arrayInfo1[0].id)
				}
				self.$apply()
			} catch(e) {
				console.log(e)
			}
		}
		// 获取街道
		async getRoad(streetId) {
			const self = this
			self.array2 = []
			self.arrayInfo2 = []
			let data = {
				streetId: streetId
			}
			try {
				let dataInfo = await http({
					method: api.address.getRoadInfo.method,
					url: api.address.getRoadInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					dataInfo.data.data.forEach((item) => {
						self.array2.push(
							item.roadName
						)
						self.arrayInfo2.push({
							name: item.roadName,
							id: item.roadId
						})

					})
					self.roadId = self.arrayInfo2[0].id
				}
				self.$apply()
			} catch(e) {
				console.log(e)
			}
		}
		// searchspaceNo
		async searchSpaceNo() {
			const self = this
			wx.showLoading({
				title: '加载中...'
			})
			let data = {
				roadId: self.roadId,
				meterNo: self.sPaceNo,
			}
			self.spaceInfomation = []
			try {
				let dataInfo = await http({
					method: api.address.searchSpaenoInfo.method,
					url: api.address.searchSpaenoInfo.url,
					data: JSON.stringify(data)
				})
				if(dataInfo.data.code == 0) {
					if(dataInfo.data.data.length > 0) {
						self.isShowTips = false
						dataInfo.data.data.forEach((item, index) => {
							self.spaceInfomation.push({
								sn: item.meterSN,
								roadname: item.roadName + item.meterNo + '号咪表'
							})
						})
					} else {
						self.isShowTips = true
					}
				}
				self.$apply()
				wx.hideLoading()
			} catch(e) {
				console.log(e)
			}
		}

	}
</script>