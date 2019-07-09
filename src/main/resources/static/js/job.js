$(function() {
	layui.use(['form', 'layer'], function() {
		var form = layui.form,
		layer = layui.layer;

		//查询所有用户
		$.ajax({
        	type: "get",//方法类型
        	dataType: "json",//预期服务器返回的数据类型
        	url: "/hrm/job/all",
        	success: function (data) {
            	console.log(data);//打印服务端返回的数据(调试用)
            	$.each(data, function() {
            		var id = this.id;
            		var birthdayString = dataFormat(this.birthday);
            		console.log(birthdayString);
            		$("#jobTbody").append(
            				"<tr>" +
            				"<td>" + id + "</td>" +
            				"<td>" + this.name + "</td>" +
                            "<td>" + this.remark + "</td>" +
            				"<td><a href='jobModify.html?id=" + id + "' class='layui-btn layui-btn-xs'>修改</a>&nbsp<button id='delete" + id + "' class='layui-btn layui-btn-xs'>删除</button>" +
            				"</tr>"
            			);
            		$("#delete" + id).click(function() {
            			console.log("/hrm/job/delete?id=" + id);
            			var isTure = window.confirm("确认删除用户?");
                        if(isTure == true) {
                            $.ajax({
                                type: "post",//方法类型
                                dataType: "text",//预期服务器返回的数据类型
                                url: "/hrm/job/delete?id=" + id,
                                success: function (data) {
                                    console.log(data);//打印服务端返回的数据(调试用)
                                    if(data == "true") {
                                        layer.msg("删除成功", function() {
                                            window.location.href = "jobIndex.html";
                                        });
                                    } else {
                                        layer.msg("删除失败");
                                    }
                                },
                                error : function() {
                                    //alert("异常！");
                                }
                            });
                        }
            		});
            	});
        	},
        	error : function() {
            	alert("异常！");
        	}
    	});

		form.on('submit(searchBtn)', function(data) {
  		    console.log(data);
  		    console.log($('#searchjob').serialize());
	  	    $.ajax({
        	    type: "get",//方法类型
        	    dataType: "json",//预期服务器返回的数据类型
        	    url: "/hrm/job/search?" + $('#searchjob').serialize(),
        	    success: function (data) {
                	console.log(data);//打印服务端返回的数据(调试用)
					if (data.length==0){
						alert("未查询到")
					}
                	$("#jobTbody").html("");
                	$.each(data, function() {
                        var id = this.id;
                        var birthdayString = dataFormat(this.birthday);
                        console.log(birthdayString);
                        $("#jobTbody").append(
                                "<tr>" +
                                "<td>" + id + "</td>" +
                                "<td>" + this.name + "</td>" +
                                "<td>" + this.remark + "</td>" +
                                "<td><a href='jobModify.html?id=" + id + "' class='layui-btn layui-btn-xs'>修改</a>&nbsp<button id='delete" + id + "' class='layui-btn layui-btn-xs'>删除</button>" +
                                "</tr>"
                            );
                        $("#delete" + id).click(function() {
                            console.log("/hrm/job/delete?id=" + id);
                            var isTure = window.confirm("确认删除用户?");
                            if(isTure == true) {
                                $.ajax({
                                    type: "post",//方法类型
                                    dataType: "text",//预期服务器返回的数据类型
                                    url: "/hrm/job/delete?id=" + id,
                                    success: function (data) {
                                        console.log(data);//打印服务端返回的数据(调试用)
                                        if(data == "true") {
                                            layer.msg("删除成功", function() {
                                                window.location.href = "jobIndex.html";
                                            });
                                        } else {
                                            layer.msg("删除失败");
                                        }
                                    },
                                    error : function() {
                                        //alert("异常！");
                                    }
                                });
                            }
                        });
                    });
        	    },
        	    error : function() {
                	alert("异常！");
        	    }
    	    });
    	    return false;
  	    });
	})


})