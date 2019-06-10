package com.times.exam.controller;

import com.times.exam.domain.response.QuestionResponse;
import com.times.exam.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/questions")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @RequestMapping( method = RequestMethod.GET)
    public ResponseEntity<List<QuestionResponse>> getAll(){
        return ResponseEntity.ok(questionService.getAll());
    }
}
