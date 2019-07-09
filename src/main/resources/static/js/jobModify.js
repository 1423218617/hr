$(function() {
	layui.use(['form', 'layer', 'laydate'], function() {
		var form = layui.form,
		layer = layui.layer,
        laydate = layui.laydate;

        laydate.render({//渲染日期选择控件
            elem: '#birthday' //指定元素
        });

        /** 
        * 得到页面间的参数 
        */  
        function getParam(url){     
            var param={};  
            if(url.indexOf("?")!=-1){  
                var str = url.substr(1)　//去掉?号  
                strs = str.split("&");  
                for(var i=0;i<strs.length;i++){  
                    param[strs[i].split("=")[0]]=strs[i].split("=")[1];  
                }  
            }  
            return param;  
        }
        var params = window.location.search;
        var id = getParam(params).id;

		form.on('submit(modifyjob)', function(data) {
  			console.log(data);
  			console.log("/hrm/job/modify?id=" + id + "&" + $('#loginForm').serialize());
	  		console.log(JSON.stringify(data.field));
	  		$.ajax({
        		type: "post",//方法类型
        		dataType: "text",//预期服务器返回的数据类型
        		contentType: "application/json",//发送到服务器的数据类型
        		url: "/hrm/job/modify?id=" + id + "&" + $('#loginForm').serialize(),
        		data: JSON.stringify(data.field),//发送的数据
        		success: function (data) {
            		console.log(data);//打印服务端返回的数据(调试用)
            		if(data == "true") {
            			window.location.href = "jobIndex.html";
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
			$("#jobAll").append("<option value=\""+data[i].id+"\">"+data[i].name+"</option>")				}
	},
	error : function() {
		alert("异常！");
	}
});