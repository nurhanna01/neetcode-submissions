-- Write your query below

select sp.name from sales_person sp
where not exists (
    select 1 from orders oo
    left join company c on c.com_id=oo.com_id
    where c.name='CRIMSON'
    and oo.sales_id=sp.sales_id
    )