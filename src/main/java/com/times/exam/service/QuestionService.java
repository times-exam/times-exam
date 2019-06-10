package com.times.exam.service;

import com.times.exam.domain.response.QuestionResponse;
import com.times.exam.helper.QuestionHelper;
import com.times.exam.respository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.util.List;

@Component
public class QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    QuestionHelper questionHelper;

    public List<QuestionResponse> getAll(){

        Iterable allQuestions = questionRepository.findAll();

        return questionHelper.convertFromEntityListToResponseList(allQuestions);
    }


}
