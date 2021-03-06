package com.bluntsoftware.devapptv.modules.devapptv.repository;

import com.bluntsoftware.devapptv.modules.devapptv.domain.Video;
import com.genx.framework.jpa.repository.GenericRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.beans.factory.annotation.Qualifier;
/**
* Repository interface for table: Video.
* @author autogenerated
*/

@Repository("devapptvVideoRepository")
@Qualifier("devapptv")
//@RepositoryRestResource(collectionResourceRel="devapptv.Video", path="devapptv/Video")
public interface VideoRepository extends GenericRepository<Video,Integer>  {

}