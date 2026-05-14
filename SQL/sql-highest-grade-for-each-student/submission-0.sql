-- Write your query below

with student_rank as (
    select student_id, exam_id, score, rank() over (partition by student_id order by score desc, exam_id asc) as ranked from exam_results
)
select student_id, exam_id, score from student_rank where ranked=1;