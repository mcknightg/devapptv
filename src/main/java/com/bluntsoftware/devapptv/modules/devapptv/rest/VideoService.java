package com.bluntsoftware.devapptv.modules.devapptv.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.devapptv.modules.devapptv.domain.Video;
import com.bluntsoftware.devapptv.modules.devapptv.repository.VideoRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("devapptvVideoService")
@RequestMapping(value = "/devapptv/video")
@Transactional
@Qualifier("devapptv")

public class VideoService extends CustomService<Video,Integer, VideoRepository> {


}
