package com.bluntsoftware.devapptv.modules.devapptv.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.devapptv.modules.devapptv.domain.CourseVideo;
import com.bluntsoftware.devapptv.modules.devapptv.repository.CourseVideoRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("devapptvCourseVideoService")
@RequestMapping(value = "/devapptv/courseVideo")
@Transactional
@Qualifier("devapptv")

public class CourseVideoService extends CustomService<CourseVideo,Integer, CourseVideoRepository> {


}
