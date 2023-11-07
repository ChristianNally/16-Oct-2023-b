faq
------------------------------------------------------------------------------------------------------------
id | question        | answer                                       | lecture_id
------------------------------------------------------------------------------------------------------------
1  | What is a join? | A way to combine information from two tables | 21
2  | What is a table?| A set of rows with columns                   | 21
3  | What is an ERD? | A diagram that shows DB design               | 22

-- faq
-- ------------------------------------------------------------------------------------------------------------
-- id | lecture_title | question        | answer                                       | lecture_id
-- ------------------------------------------------------------------------------------------------------------
-- 1  | SQL Intro     | What is a join? | A way to combine information from two tables | 21
-- 2  | Intro to SQL  | What is a table?| A set of rows with columns                   | 21
-- 3  | lecture_title | What is an ERD? | A diagram that shows DB design               | 22


lectures
--------------------------------
id | title            | day_mnemonic
--------------------------------
1  | Welcome          | w01d1
2  | Dev Workflow     | w01d2
21 | Intro to SQL     | w05d1
23 | Database Design  | w05d2



-- Q1: Get a list of all questions in a particular lecture, including the lecture title in that result.

SELECT faq.id, lectures.title, faq.question FROM faq INNER JOIN lectures ON lecture_id = lectures.id WHERE lecture_id = 21; 


title            |              question
-----------------------------------------
Intro to SQL     |  What is a join?
Intro to SQL     |  What is a table?
