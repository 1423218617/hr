layui.use(['form', 'layer'], function(){
  var form = layui.form,
  layer = layui.layer;

  //如果message存在,即证明没有登录,弹出消息,并删除localStorage里的message
  var message = localStorage.getItem("www_rizix_top_hrm_message");
  if(message) {
  	layer.msg(message, {time: 2000});
  	localStorage.removeItem("www_rizix_top_hrm_message");
  }
  
  form.on('submit(login)', function(data) {
  	console.log(data);
  	console.log($('#loginForm').serialize());
	  console.log(JSON.stringify(data.field));
	  $.ajax({
        type: "post",//方法类型
        dataType: "json",//预期服务器返回的数据类型
        contentType: "application/json",//发送到服务器的数据类型
        url: "/hrm/login?" + $('#loginForm').serialize(),
        data: JSON.stringify(data.field),//发送的数据
        success: function (data) {
            console.log(data);//打印服务端返回的数据(调试用)
            if(data) {
            	localStorage.setItem("www_rizix_top_hrm_id", data.id);
            	localStorage.setItem("www_rizix_top_hrm_username", data.username);
            	localStorage.setItem("www_rizix_top_hrm_loginname", data.loginname);
            	localStorage.setItem("www_rizix_top_hrm_password", data.password);
            	localStorage.setItem("www_rizix_top_hrm_status", data.status);
            	window.location.href = "main.html";
            }
        },
        error : function() {
            alert("异常！");
        }
    });
    return false;
  });
});