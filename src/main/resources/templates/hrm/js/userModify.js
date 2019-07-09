$(function() {
	layui.use(['form', 'layer'], function() {
		var form = layui.form,
		layer = layui.layer;

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



		$.ajax({
			type: "post",//方法类型
			dataType: "json",//预期服务器返回的数据类型
			contentType: "application/json",//发送到服务器的数据类型
			url: "/hrm/us.html?id=1" ,
			//data: JSON.stringify(data.field),//发送的数据
			success: function (data) {
				console.log(data);//打印服务端返回的数据(调试用)
				if(data == "true") {
					window.location.href = "userIndex.html";
				} else {
					layer.msg("提交失败");
				}
			},
			error : function() {
				alert("异常！");
			}
		});


		form.on('submit(insertUser)', function(data) {
  			console.log(data);
  			console.log($('#loginForm').serialize());
	  		console.log(JSON.stringify(data.field));
	  		$.ajax({
        		type: "post",//方法类型
        		dataType: "text",//预期服务器返回的数据类型
        		contentType: "application/json",//发送到服务器的数据类型
        		url: "/hrm/user/modify?id=" + id,
        		data: JSON.stringify(data.field),//发送的数据
        		success: function (data) {
            		console.log(data);//打印服务端返回的数据(调试用)
            		if(data == "true") {
            			window.location.href = "userIndex.html";
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