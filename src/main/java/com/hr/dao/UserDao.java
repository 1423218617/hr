package com.hr.dao;

import com.hr.domain.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserDao extends JpaRepository<User,Integer> {
    User findByLoginnameAndPassword(String loginname,String password);



    List<User> findByUsernameLike(String username);


    @Modifying
    @Query(value = "update user set loginname=:#{#user.loginname},username=:#{#user.username},password=:#{#user.password},status=:#{#user.status} where id=:#{#user.id}",nativeQuery = true)
    int updateUser( User user);



    @Modifying
    @Query(value = "insert into user(username,password,loginname,createdate) values(username=:#{#user.username},password=:#{#user.password},loginname=:#{#user.loginname},createdate=now())",nativeQuery = true)
    int save1(User user);
}
