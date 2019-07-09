package com.hr.controller;


import com.hr.dao.DeptDao;
import com.hr.dao.EmployeeDao;
import com.hr.dao.JobDao;
import com.hr.domain.pojo.Dept;
import com.hr.domain.pojo.Employee;
import com.hr.domain.pojo.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeDao employeeDao;
    @Autowired
    private DeptDao deptDao;
    @Autowired
    private JobDao jobDao;

    @GetMapping("/hrm/employee/all")
    public Object employeeAll(){
        return employeeDao.findAll();
    }


    @PostMapping("/hrm/employee/delete")
    public Boolean employeeDelete(Integer id){
        employeeDao.deleteById(id);
        return true;
    }


    @GetMapping("/hrm/employee/search")
    public Object employeeSearch(String name){
        return employeeDao.findByNameLike("%"+name+"%");
    }



    @PostMapping("/hrm/employee/add")
    public Boolean employeeAdd(@RequestBody Employee employee, @RequestParam Integer deptId ,@RequestParam Integer jobId){
        System.out.println(employee+"  "+deptId+"   "+jobId);
        Dept dept=deptDao.getOne(deptId);
        Job job=jobDao.getOne(jobId);
        employee.setJob(job);
        employee.setDept(dept);
        employeeDao.save(employee);
        return true;
    }


    @PostMapping("/hrm/employee/modify")
    @Transactional
    public Boolean employeeModify(@RequestParam Integer id,@RequestBody Employee employee,@RequestParam Integer jobId,@RequestParam Integer deptId){
        System.out.println(id+"   "+employee+"  "+deptId+"   "+jobId);
        Job job=jobDao.getOne(jobId);
        Dept dept=deptDao.getOne(deptId);
        employee.setId(id);
        employee.setDept(dept);
        employee.setJob(job);
        employeeDao.updateEmployee(employee);
        return true;
    }





    @GetMapping("/hrm/dept/all")
    public Object deptAll(){
        return deptDao.findAll();
    }


    @GetMapping("/hrm/job/all")
    public Object jobAll(){
        return jobDao.findAll();
    }



}
