import wepy from 'wepy';
import { api } from '../config';
import http from '../utils/request';

const pays = {
	async payInfo(data) {
		let currentPays;
		try {
			const paysData = await http({
				method: api.wallet.recharge.method,
				url: api.wallet.recharge.url,
//				      url:'http://192.168.134.77:8888/n/pay/scan/payDispatcher?noSign',
				data: JSON.stringify(data)
			})
			if(paysData.data.code === 0) {
				currentPays = paysData.data.data
			} else if(paysData.data.code === -1) {
				wx.showToast({
					title: paysData.data.msg,
					icon: 'none',
					duration: 2000
				})
			}
		} catch(e) {
			console.log(e);
		}
		return currentPays;
	}
}

export default pays;