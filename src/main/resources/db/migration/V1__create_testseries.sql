DROP TABLE IF EXISTS EXAM;
DROP TABLE IF EXISTS EXAM_category;
DROP TABLE IF EXISTS TESTSERIES;
DROP TABLE IF EXISTS TESTSERIES_SECTION;
DROP TABLE IF EXISTS QUESTION;
DROP TABLE IF EXISTS DIRECTION;
DROP TABLE IF EXISTS ANSWER_OPTIONS;



CREATE TABLE EXAM(
          ID integer PRIMARY KEY,
          NAME VARCHAR(255),
          DESCRIPTION VARCHAR(2000),
          CATEGORY VARCHAR(255),
          LAST_UPDATED_BY VARCHAR(255),
          CREATED_AT TIMESTAMP,
          UPDATED_AT TIMESTAMP

  );

  CREATE TABLE EXAM_category(
            ID integer PRIMARY KEY,
            ExAM_ID INTEGER,
            NAME VARCHAR(255),
            DESCRIPTION VARCHAR(2000),
            LAST_UPDATED_BY VARCHAR(255),
            CREATED_AT TIMESTAMP,
            UPDATED_AT TIMESTAMP

    );

  CREATE TABLE TESTSERIES(
            ID integer PRIMARY KEY,
            EXAM_category_ID INTEGER,
            NAME VARCHAR(255),
            DESCRIPTION VARCHAR(2000),
            CATEGORY VARCHAR(255),
            MEDIUM VARCHAR(255),
            DURATION NUMERIC,
            TOTAL_MARKS integer,
            LAST_UPDATED_BY VARCHAR(255),
            CREATED_AT TIMESTAMP,
            UPDATED_AT TIMESTAMP

    );

    CREATE TABLE TESTSERIES_SECTION(
              ID integer PRIMARY KEY,
              NAME VARCHAR(255),
              DESCRIPTION VARCHAR(2000),
              TESTSERIES_ID integer,
--              MEDIUM VARCHAR(255),
              DURATION NUMERIC,
              MARKS integer,
              LAST_UPDATED_BY VARCHAR(255),
              CREATED_AT TIMESTAMP,
              UPDATED_AT TIMESTAMP

      );

      CREATE TABLE DIRECTION(
                              ID integer PRIMARY KEY,
                              DESCRIPTION VARCHAR,
                              LAST_UPDATED_BY VARCHAR(255),
                              CREATED_AT TIMESTAMP,
                              UPDATED_AT TIMESTAMP

                      );

      CREATE TABLE QUESTION(
                ID SERIAL PRIMARY KEY,
                DESCRIPTION VARCHAR,
                ANSWER VARCHAR(255),
                ANSWER_OPTIONS VARCHAR(10),
                TESTSERIES_SECTION_ID INTEGER,
                DIRECTION_ID INTEGER,
                DURATION NUMERIC,
                LAST_UPDATED_BY VARCHAR(255),
                CREATED_AT TIMESTAMP,
                UPDATED_AT TIMESTAMP

        );

        CREATE TABLE ANSWER_OPTIONS(
                ID integer PRIMARY KEY,
                DESCRIPTION VARCHAR,
                QUESTION_ID INTEGER,
                IS_RIGHT_ANSWER VARCHAR(1),
                LAST_UPDATED_BY VARCHAR(255),
                CREATED_AT TIMESTAMP,
                UPDATED_AT TIMESTAMP
        )



