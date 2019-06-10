package com.times.exam.domain.response;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Timestamp;


@Data
@Builder
public class QuestionResponse {

    Long id;
    String description;
    String answer;
    String answerOption;
    Long testSeriesSectionId;
    Long directionId;
    Double duration;
    String lastUpdatedBy;
    Timestamp createdAt;
    Timestamp updatedAt;
}
