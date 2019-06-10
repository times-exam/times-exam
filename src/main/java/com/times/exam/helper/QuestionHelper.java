package com.times.exam.helper;

import com.times.exam.domain.entity.QuestionEntity;
import com.times.exam.domain.response.QuestionResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Component
public class QuestionHelper {

    public QuestionResponse convertFromEntityToResponse(QuestionEntity entity)
    {

        return QuestionResponse.builder()
                .id(entity.getId())
                .description(entity.getDescription())
                .answer(entity.getAnswer())
                .build();
    }


    public List<QuestionResponse> convertFromEntityListToResponseList(Iterable<QuestionEntity> entities)
    {
        List<QuestionResponse> questionResponseList = new ArrayList<>();
        Iterator<QuestionEntity> iterator = entities.iterator();

        while(iterator.hasNext())
        {
            QuestionResponse questionResponse = convertFromEntityToResponse(iterator.next());
            questionResponseList.add(questionResponse);
        }
        return questionResponseList;

    }

}
