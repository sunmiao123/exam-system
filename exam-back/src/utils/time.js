var add0 = function(m) {
	return m < 10 ? '0' + m : m;
};
var dateFormat = function(timestamp) {
	var time = new Date(timestamp * 1); //先将时间戳转为Date对象，然后才能使用Date的方法
	var year = time.getFullYear(),
		month = time.getMonth() + 1, //月份是从0开始的
		day = time.getDate(),
		hour = time.getHours(),
		minute = time.getMinutes(),
		second = time.getSeconds();
	//add0()方法在后面定义
	return (
		year +
		'-' +
		add0(month) +
		'-' +
		add0(day) +
		' ' +
		add0(hour) +
		':' +
		add0(minute) +
		':' +
		add0(second)
	);
};

export default dateFormat;
