

function isuse(api) {

  let isuse = wx.canIUse(api)
  console.log(isuse);
    if(isuse){

    }else{
      console.log(isuse);
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })

    }
    return isuse


}





module.exports = {
  isuse:isuse
}



















