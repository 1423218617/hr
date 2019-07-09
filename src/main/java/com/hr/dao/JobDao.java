package com.hr.dao;

import com.hr.domain.pojo.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobDao extends JpaRepository<Job,Integer> {

    List<Job> findByNameLike(String name);


    @Modifying
    @Query(value = "update job set name=:#{#job.name},remark=:#{#job.remark} where id=:#{#job.id}",nativeQuery = true)
    int jobModify(Job job);
}
