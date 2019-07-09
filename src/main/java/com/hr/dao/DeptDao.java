package com.hr.dao;

import com.hr.domain.pojo.Dept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DeptDao extends JpaRepository<Dept,Integer> {
    List<Dept> findByNameLike(String name);
    @Modifying
    @Query(value = "update dept set name=:#{#dept.name},remark=:#{#dept.remark} where id=:#{#dept.id}",nativeQuery = true)
    int deptModify(Dept dept);
}
