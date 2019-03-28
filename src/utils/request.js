import wepy from 'wepy';
import auth from '../service/auth';
import {api} from '../config'




export default async function request(options) {

  const authKey = await wepy.getStorageSync('auth_key')

  if (options.header) {
    options.header['Cookie'] = authKey
  } else {
    options.header = {
      'Cookie': authKey
    }
  }

  let response = await wepy.request(options);

  if (response.data.code === -4) {
    await auth.login()
    return await request(options)
  } else if (response.data.code === 404) {
    wepy.showModal({
      title: '提示',
      content: '服务器地址错误。'
    })
  } else {
    return response
  }


//console.log(response)


}
