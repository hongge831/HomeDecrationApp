apiready = function() {
	var model = api.require('model');
	var query = api.require('qurey');

	model.config({
		appKey : '',
		host : 'www.d.apicloud.com'

	});

}
//云api
api.ajax({
	url : 'www.d.apicloud.com/mcm/api/hi',
	method : 'post',
	
	headers:{
		X-APPCloud-AppKey:'',
		X-APPCloud-APPId:''
	},
	data : {
		values : {
			"name" : "hello",

		}
	}
}, function(ret, err) {

	if (ret) {
		alert(JSON.stringify(ret));
	}

}); 