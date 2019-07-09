package com.hr.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("pages/login.html").setViewName("hrm/login");
        registry.addViewController("pages/main.html").setViewName("hrm/main");
        registry.addViewController("pages/userIndex.html").setViewName("hrm/userIndex");
        registry.addViewController("pages/userAdd.html").setViewName("hrm/userAdd");
        registry.addViewController("pages/userModify.html").setViewName("hrm/userModify");
        registry.addViewController("pages/employeeIndex.html").setViewName("hrm/employeeIndex");
        registry.addViewController("pages/employeeAdd.html").setViewName("hrm/employeeAdd");
        registry.addViewController("pages/employeeModify.html").setViewName("hrm/employeeModify");
        registry.addViewController("pages/deptIndex.html").setViewName("hrm/deptIndex");
        registry.addViewController("pages/deptAdd.html").setViewName("hrm/deptAdd");
        registry.addViewController("pages/deptModify.html").setViewName("hrm/deptModify");
        registry.addViewController("pages/jobIndex.html").setViewName("hrm/jobIndex");
        registry.addViewController("pages/jobAdd.html").setViewName("hrm/jobAdd");
        registry.addViewController("pages/jobModify.html").setViewName("hrm/jobModify");
    }
}
