	
	
	
	
	
	function timeFormat(timestamp){
  		let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		let Y = date.getFullYear();
		let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
		let D = date.getDate()  < 10 ? '0'+date.getDate():date.getDate();
		let h = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
		let m = date.getMinutes() < 10?'0'+date.getMinutes() : date.getMinutes();
		return Y+'年'+M +'月'+D+'日'+' '+ h+':'+m;
    }
	function timeFormat1(timestamp){
  		let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		let Y = date.getFullYear();
		let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
		let D = date.getDate()  < 10 ? '0'+date.getDate():date.getDate();
		
		return Y+'-'+M +'-'+D;
    }
	function timeCalculation(time){
      	let T = time/60000
      	let H = parseInt(T/60)
      	let M = T%60 > 9 ? T%60 : '0' + T%60
      	let str = H+'小时'+Math.ceil(M)+'分钟'
      	return str
    }
    function timeMincal(time){
      	let T = time/60000 > 9 ? time/60000 : '0' + time/60000
      	let str = T +'分钟'
      	return str
    }
    


	module.exports = {
	 	timeFormat : timeFormat,
	 	timeFormat1 : timeFormat1,
	 	timeCalculation : timeCalculation,
	 	timeMincal : timeMincal
	}
