package com.hr.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println(request.getSession().getAttribute("user"));
        if (request.getSession().getAttribute("user")==null){
            response.sendRedirect("/pages/login.html");
        }
            return true;
    }
}
