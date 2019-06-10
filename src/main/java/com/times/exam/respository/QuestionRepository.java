package com.times.exam.respository;

import com.times.exam.domain.entity.QuestionEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionRepository extends
        PagingAndSortingRepository<QuestionEntity, Long> {

}
