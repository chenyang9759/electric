// ENV
const env = 'development'; // 'development' or 'production'

// WXAPP VERSION
const version = '1.0.1';

// development and production host
const hosts = {

    development: 'https://ourmrc.com',
//development: 'https://gzhcpark.com/m',





//development: 'http://192.168.134.77:8090',   //wu
//development: 'http://192.168.134.2:8090',     //dong
  // development: 'http://120.79.193.27:8090/m',


//  development: 'http://192.168.134.2:8090',
  	production: 'https://gzhcpark.com/m'
};



// apis
const api = {
  bank:{
    getInfo:{
      method:'POST',
      url:'/m/bank/user/getMmBankCard?noSign'
    }
    // addBank:{
    //   method:'POST',
    //   url:''
    // }
  },
  vip:{
  	
  	getPackage:{
  	  method:'POST',
  	  url:'/m/mm/carowner/getVipPackage?noSign'
  	},
  	pay:{
  	  method:'POST',
  	  url:'/m/mm/carowner/weixinVIPPay?noSign'
  	},
  	upgrade:{
  		method:'POST',
  		url:'/m/mm/carowner/upgrade?noSign'
  	},
  	list:{
  		method:'POST',
  		url:'/m/mm/carowner/getVipInfo?noSign'
  	}
  },
  wallet:{
  	rule:{
  		method:'POST',
  		url:'/m/mm/account/listTopupItem?noSign'
  	},
  	recharge:{
  		method:'POST',
  		url:'/n/pay/scan/payDispatcher?noSign'
  	},
  	detail:{
  		method:'POST',
  		url:'/m/mm/account/queryDealLog?noSign'
  	}
  },
  home:{
    homeStatus:{
      method:'POST',
      url:'/m/park/weixin/listWeixinHome?noSign=0'
    },
    arrearsStatus:{
      method:'POST',
      url:'/m/park/weixin/getRecordIdByArr?noSign=0'
    }
  },
  recordinfo:{
    getRecord:{
      method:'POST',
      url:'/m/park/weixin/listWeixinHome?noSign=0'
    },
    recordInfo:{
      method:'POST',
      url:'/m/park/weixin/getById?noSign=0'
    },
    numberInfo:{
      method:'POST',
      url:'/m/park/weixin/listMeterBySpaceNo?noSign=0'
    },
    searchPlate:{
      method:'POST',
      url:'/m/park/weixin/listRecordBy?noSign=0'
    },
    recordList:{
      method:'POST',
      url:'/m/park/weixin/listParkRecordBy?noSign=0'
    }
  },
  address:{
    getAreaInfo:{
      method:'POST',
      url:'/m/park/weixin/listCounty?noSign=0'
    },
    getStreetInfo:{
      method:'POST',
      url:'/m/park/weixin/listStreet?noSign=0'
    },
    getRoadInfo:{
      method:'POST',
      url:'/m/park/weixin/listRoad?noSign=0'
    },
    searchSpaenoInfo:{
      method:'POST',
      url:'/m/park/weixin/listSpaceByMeterNo?noSign=0'
    }
  },
  sninfo:{
    parkmeter:{
      method:'POST',
      url:'/m/park/h5/getMeterSpaceInfo?noSign=0'
    },
    minTime:{
      method:'POST',
      url:'/m/park/h5/minimumTime?noSign=0'
    },
    spaceNoInfo:{
      method:'POST',
      url:'/m/park/weixin/getSpaceBySpaceNo?noSign=0'
    }
  },
  pay:{
    wxpay:{
      method:'POST',
      url:'/n/pay/scan/weixinPay?noSign=0'
    },
    buyHour:{
      method:'POST',
      url:'/m/park/h5/normalFeeByTime?noSign=0'
    },
    parkDayprice:{
      method:'POST',
      url:'/m/park/h5/getPreDayCost?noSign'
    },
    payRecord:{
      method:'POST',
      url:'/m/park/weixin/listPayBy?noSign=0'
    },
    sendMsg:{
      method:'POST',
      url:'/m/sys/initSet/sendSMS?noSign=0'
    },
    payHisory:{
    	method:'POST',
    	url:'/m/park/weixin/listParkPay?noSign=0'
    }

  },

  user: {
    login: {
      method: 'POST',
      url: '/m/mm/carowner/login?noSign=1'
    },
    register: {
      method: 'POST',
      url: '/m/mm/carowner/regist?noSign=1'
    },
    setMobile: {
      method: 'POST',
      url: '/m/mm/carowner/updatePhone?noSign=1'
    }
  }

};

const downloadApi = {
  download: {
    file: {
      method: 'GET',
      url: 'https://yyf.xcxhdj.hagongyi.com/storage'
    }
  }
};

module.exports = {
  env,
  version,
  api: disposeUrl(api, hosts[env]),
  downloadApi: disposeUrl(downloadApi, '')
};

function disposeUrl(obj, prefix) {
  Object.keys(obj).forEach(v => {
    if (obj[v].url) {
      obj[v].url = prefix + obj[v].url;
    } else {
      obj[v] = disposeUrl(obj[v], prefix);
    }
  });

  return obj;
}
