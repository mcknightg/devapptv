package com.bluntsoftware.devapptv.modules.devapptv.rest;



import com.genx.framework.jpa.repository.GenericRepository;
import com.bluntsoftware.devapptv.modules.devapptv.domain.Artist;
import com.bluntsoftware.devapptv.modules.devapptv.repository.ArtistRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("devapptvArtistService")
@RequestMapping(value = "/devapptv/artist")
@Transactional
@Qualifier("devapptv")

public class ArtistService extends CustomService<Artist,Integer, ArtistRepository> {


}
