-- Write your query below

select s.seller_name from seller s
where not exists (
    select 1 from orders oo where oo.sale_date >= '2020-01-01' and oo.sale_date <= '2020-12-31'  and s.seller_id=oo.seller_id 
    )
order by s.seller_name