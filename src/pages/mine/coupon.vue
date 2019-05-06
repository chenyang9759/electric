<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background: #f4f5fa;
		position: relative;
		top: 0;
		left: 0;
	}
	
	.box {
		width: 100%;
		height: 100%;
		.header {
			width: 100%;
			height: 88rpx;
			background: #fff;
			position: fixed;
			z-index: 99;
			top: 0;
			.header_cont {
				width: 640rpx;
				height: 88rpx;
				margin-left: 55rpx;
				display: flex;
				justify-content: space-between;
				.header_list {
					width: 304rpx;
					height: 88rpx;
					line-height: 84rpx;
					font-size: 28rpx;
					text-align: center;
					box-sizing: border-box;
					color: #666;
				}
				.header_list_act {
					color: #00c8b3;
					border-bottom: 4rpx solid #00c8b3;
				}
			}
		}
		.cont {
			width: 100%;
			position: absolute;
			top: 88rpx;
			.cont_w {
				width: 700rpx;
				margin-left: 25rpx;
				padding-bottom: 140rpx;
				.list {
					width: 700rpx;
					height: 166rpx;
					margin-top: 20rpx;
					position: relative;
					.bg {
						width: 700rpx;
						height: 166rpx;
					}
					.list_left {
						width: 340rpx;
						height: 166rpx;
						position: absolute;
						top: 0;
						left: 64rpx;
						.list_tit {
							font-size: 36rpx;
							color: #00C8B3;
							margin-top: 20rpx;
						}
						.list_address {
							font-size: 24rpx;
							color: #999;
						}
						.list_date {
							font-size: 24rpx;
							color: #999;
						}
					}
					.list_right {
						width: 180rpx;
						height: 166rpx;
						position: absolute;
						top: 0;
						right: 76rpx;
						text-align: center;
						color: #00C8B3;
						.list_money {
							font-size: 32rpx;
							margin-top: 10rpx;
							.money {
								font-size: 60rpx;
								font-weight: 900;
							}
						}
						.list_cond {
							font-size: 28rpx;
							color: #666;
						}
					}
					.list_check {
						width: 36rpx;
						height: 36rpx;
						position: absolute;
						top: 12rpx;
						right: 24rpx;
						.list_check_img {
							width: 36rpx;
							height: 36rpx;
						}
					}
				}
			}
			.cont_y {
				.list {
					.list_left {
						.list_tit {
							color: #999;
						}
					}
					.list_right {
						.list_money {
							color: #999999;
						}
					}
					.list_check {
						width: 58rpx;
						height: 58rpx;
						position: absolute;
						top: 14rpx;
						right: 20rpx;
						.list_check_img {
							width: 58rpx;
							height: 58rpx;
						}
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
	}
</style>
<template>
	<view class="box">
		<view class="header">
			<view class="header_cont">
				<view class="header_list {{ !isExpired ? 'header_list_act' : '' }}" @tap="wExpired">未使用</view>
				<view class="header_list {{ isExpired ? 'header_list_act' : '' }}" @tap="yExpired">已过期</view>
			</view>
		</view>

		<scroll-view scroll-y="true" class="cont">
			<view class="cont_w" wx:if="{{ !isExpired }}">
				<view class="list" wx:for="{{ couponArr }}" wx:key="{{ id }}" @tap="checkCoupon('{{ item.id }}')">
					<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_coupon_bg.png"></image>
					<view class="list_left">
						<view class="list_tit">{{ item.msg }}</view>
						<view class="list_address">{{ item.address }}</view>
						<view class="list_date">{{ item.endtime }}</view>
					</view>
					<view class="list_right">
						<view class="list_money">￥<text class="money">{{ item.money }}</text></view>
						<view class="list_cond">{{ item.tips }}</view>
					</view>
					<view class="list_check">
						<image wx:if="{{ item.check == true }}" class="list_check_img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checky.png"></image>
						<image wx:if="{{ item.check == false }}" class="list_check_img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_checkn.png"></image>
					</view>
				</view>

			</view>
			<view class="cont_w cont_y" wx:if="{{ isExpired }}">
				<view class="list" wx:for="{{ couponArr }}" wx:key="{{ id }}">
					<image class="bg" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_coupon_bg.png"></image>
					<view class="list_left">
						<view class="list_tit">{{ item.msg }}</view>
						<view class="list_address">{{ item.address }}</view>
						<view class="list_date">{{ item.endtime }}</view>
					</view>
					<view class="list_right">
						<view class="list_money">￥<text class="money">{{ item.money }}</text></view>
						<view class="list_cond">{{ item.tips }}</view>
					</view>
					<view class="list_check">
						<image class="list_check_img" src="https://caoke.oss-cn-beijing.aliyuncs.com/mine_coupon_gq.png"></image>
					</view>
				</view>
			</view>
		</scroll-view>

		<!--<view class="box_pay">
      <button class="weui-btn green-btn" type="primary" disabled="{{isDisable}}" @tap="toCoupondetail">确认使用</button>
    </view>-->
	</view>

</template>

<script>
	import wepy from 'wepy'
	import http from '../../utils/request'
	import { api } from '../../config'

	export default class Coupon extends wepy.page {
		config = {
			navigationBarTitleText: '我的卡券',
			navigationBarBackgroundColor: '#00c8b3',
			navigationBarTextStyle: 'white'
		}

		components = {

		}

		data = {
			isExpired: false,
			couponArr: [
				//    	{
				//    		id:0,
				//    		check:true,
				//    		msg:'美妆店铺面膜劵',
				//    		address:'西安市高新区建设南路101号',
				//    		endtime:'有效期至2018.10.7',
				//    		money:10,
				//    		tips:'满20可使用'
				//    	},
				//    	{
				//    		id:1,
				//    		check:false,
				//    		msg:'海外海酒店住宿劵',
				//    		address:'西安市高新区建设南路101号',
				//    		endtime:'有效期至2018.10.7',
				//    		money:100,
				//    		tips:'满200可使用'
				//    	},
				// 				{
				//    		id:2,
				//    		check:false,
				//    		msg:'鲜果时光水果劵',
				//    		address:'西安市高新区建设南路101号',
				//    		endtime:'有效期至2018.10.7',
				//    		money:100,
				//    		tips:'满200可使用'
				//    	}
			]
		}

		computed = {

		}

		methods = {

			wExpired() {
				const self = this
				self.isExpired = false
				self.$apply()
			},
			yExpired() {
				const self = this
				self.isExpired = true
				self.$apply()
			},
			checkCoupon(id) {
				const self = this
				self.couponArr.forEach((item) => {
					item.check = false
				})
				self.couponArr[id].check = true
				self.$apply()
			},
			toCoupondetail() {
				wepy.navigateTo({
					url: '/pages/mine/coupondetail'
				})
			}

		}

		events = {

		}

		async onLoad() {

		}

	}
</script>