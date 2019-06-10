package com.times.exam.domain.request;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class QuestionRequest {

    String description;
    String answer;
    String answerOption;
    Long testSeriesSectionId;
    Long directionId;
    Double duration;
    String lastUpdatedBy;
}
