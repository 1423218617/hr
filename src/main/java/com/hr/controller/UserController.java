package com.hr.controller;


import com.hr.dao.UserDao;
import com.hr.domain.pojo.User;
import org.hibernate.Session;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
public class UserController {

    @Resource
    private UserDao userDao;

    @PostMapping("/hrm/login")
    public Object login(String loginname, String password, HttpSession session){
        System.out.println(loginname+"  "+password);
        User user=userDao.findByLoginnameAndPassword(loginname,password);
        System.out.println(user);
        if (user==null){
            user=new User();
            return user;
        }else {
            session.setAttribute("user",user);
            System.out.println(11111111);
            return user;


        }
    }



    @GetMapping("/hr/loginOut")
    public void out(HttpSession session, HttpServletResponse response)throws Exception{
        session.removeAttribute("user");
        response.sendRedirect("/pages/login.html");
    }

    @GetMapping("/hrm/user/all")
    public Object userAll(){
        return userDao.findAll();
    }


    @PostMapping("/hrm/user/delete")
    public Boolean userDelete(String id){
        userDao.deleteById(Integer.parseInt(id));
        return new Boolean(true);
    }

    @GetMapping("/hrm/user/search")
    public Object userSearch(String username){
        return userDao.findByUsernameLike("%"+username+"%");
    }

    @PostMapping("/hrm/user/modify")
    @Transactional
    public Boolean userModify(Integer id,@RequestBody User user){
        System.out.println(user);
        System.out.println(user.getPassword());
       user.setId(id);
       userDao.updateUser(user);
       return true;
    }

    @PostMapping("/hrm/user/add")
    @Transactional
    public Boolean userAdd(@RequestBody User user){
        userDao.save(user);
        System.out.println(user);
        return true;
    }
}
