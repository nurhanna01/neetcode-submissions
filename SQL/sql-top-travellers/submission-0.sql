-- Write your query below

with distance as (
    select u.name, sum(r.distance) as travelled_distance from users u
    left join rides r on u.id=r.user_id
    group by u.name
)
select name, case when travelled_distance is not null then travelled_distance else 0 end as travelled_distance from distance order by travelled_distance desc, name