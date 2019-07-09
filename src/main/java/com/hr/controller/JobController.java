package com.hr.controller;


import com.hr.dao.JobDao;
import com.hr.domain.pojo.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobController {
    @Autowired
    private JobDao jobDao;


    @PostMapping("/hrm/job/delete")
    public Boolean jobDelete(Integer id){
        jobDao.deleteById(id);
        return true;
    }



    @GetMapping("/hrm/job/search")
    public Object jobSearch(String name){
        return jobDao.findByNameLike("%"+name+"%");
    }

    @PostMapping("/hrm/job/add")
    public Boolean jobAdd(@RequestBody Job job){
        jobDao.save(job);
        return true;
    }

    @PostMapping("/hrm/job/modify")
    @Transactional
    public Boolean jobModify(Integer id,@RequestBody Job job){
        job.setId(id);
        jobDao.jobModify(job);
        return true;
    }

}
