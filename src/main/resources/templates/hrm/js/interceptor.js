$(function() {
	//如果没有登录,则跳转至登录页面,并设置message提示
	if(!localStorage.getItem("www_rizix_top_hrm_id")) {
		localStorage.setItem("www_rizix_top_hrm_message", "请先登录后访问");
		window.location.href = "login.html";
	}
})