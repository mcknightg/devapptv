package com.bluntsoftware.devapptv.modules.devapptv.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.devapptv.modules.devapptv.domain.Course;
import com.bluntsoftware.devapptv.modules.devapptv.repository.CourseRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("devapptvCourseService")
@RequestMapping(value = "/devapptv/course")
@Transactional
@Qualifier("devapptv")

public class CourseService extends CustomService<Course,Integer, CourseRepository> {


}
