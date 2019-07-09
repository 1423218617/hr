package com.hr.dao;

import com.hr.domain.pojo.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeDao extends JpaRepository<Employee,Integer> {
    Employee findByName(String name);


    List<Employee> findByNameLike(String name);

    @Query(value = "update employee set name=:#{#employee.name},sex=:#{#employee.sex},address=:#{#employee.address},phone=:#{#employee.phone},email=:#{#employee.email},birthday=:#{#employee.birthday},education=:#{#employee.education},salary=:#{#employee.salary},job_id=:#{#employee.job.id},dept_id=:#{#employee.dept.id} where id =:#{#employee.id}",nativeQuery = true)
    @Modifying
    int updateEmployee(Employee employee);
}
