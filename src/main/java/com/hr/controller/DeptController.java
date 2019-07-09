package com.hr.controller;


import com.hr.dao.DeptDao;
import com.hr.domain.pojo.Dept;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeptController {

    @Autowired
    private DeptDao deptDao;

    @PostMapping("/hrm/dept/delete")
    public boolean deptDelete(Integer id){
        deptDao.deleteById(id);
        return true;
    }



    @GetMapping("/hrm/dept/search")
    public Object deptSearch(String name){
        System.out.println(name);
        return deptDao.findByNameLike("%"+name+"%");
    }

    @Transactional
    @PostMapping("/hrm/dept/modify")
    public Boolean deptModify(Integer id, @RequestBody Dept dept){
        System.out.println(id+"   "+dept);
        dept.setId(id);
        deptDao.deptModify(dept);
        return true;
    }


    @PostMapping("/hrm/dept/add")
    public Boolean deptAdd(Dept dept){
        deptDao.save(dept);
        return true;
    }
}
