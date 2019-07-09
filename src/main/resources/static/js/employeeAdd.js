$(function() {
	layui.use(['form', 'layer', 'laydate'], function() {
		var form = layui.form,
		layer = layui.layer,
        laydate = layui.laydate;

        laydate.render({//渲染日期选择控件
            elem: '#birthday' //指定元素
        });






		form.on('submit(insertEmployee)', function(data) {
  			console.log(data);
  			console.log($('#loginForm').serialize());
	  		console.log(JSON.stringify(data.field));
	  		$.ajax({
        		type: "post",//方法类型
        		dataType: "text",//预期服务器返回的数据类型
        		contentType: "application/json",//发送到服务器的数据类型
        		url: "/hrm/employee/add?" + $('#loginForm').serialize(),
        		data: JSON.stringify(data.field),//发送的数据
        		success: function (data) {
            		console.log(data);//打印服务端返回的数据(调试用)
            		if(data == "true") {
            			window.location.href = "employeeIndex.html";
            		} else {
            			layer.msg("提交失败");
            		}
        		},
        		error : function() {
            		alert("异常！");
        		}
    		});
    		return false;
  		});
	})
})

$.ajax({
	type: "get",//方法类型
	dataType: "json",//预期服务器返回的数据类型
	contentType: "application/json",//发送到服务器的数据类型
	url: "/hrm/dept/all",
	success: function (data) {
		console.log(data);//打印服务端返回的数据(调试用)
		for (var i=0;i<data.length;i++){
			$("#deptAll").append("<option value=\""+data[i].id+"\">"+data[i].name+"</option>")				}
	},
	error : function() {
		alert("异常！");
	}
});

$.ajax({
	type: "get",//方法类型
	dataType: "json",//预期服务器返回的数据类型
	contentType: "application/json",//发送到服务器的数据类型
	url: "/hrm/job/all",
	success: function (data) {
		console.log(data);//打印服务端返回的数据(调试用)
		for (var i=0;i<data.length;i++){
			$("#jobAll").append("<option value=\""+data[i].id+"\">"+data[i].name+"</option>")
						}



	},
	error : function() {
		alert("异常！");
	}
});