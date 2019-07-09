$(function() {
	//设置导航栏用户名
	$("#user").html(localStorage.getItem("www_rizix_top_hrm_username"));

	$("#logout").click(function() {
		localStorage.clear();
		window.location.href = "login.html";
	});

	$("#mainTitle").html("欢迎 <b style='color:#009688'>" + localStorage.getItem("www_rizix_top_hrm_username") + "</b> 来到人事管理系统");
})