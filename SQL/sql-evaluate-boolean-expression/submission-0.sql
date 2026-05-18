-- Write your query below

select e.left_operand, e.operator, e.right_operand, 
case when e.operator ='>' then (
    select v.value from variables v where v.name=e.left_operand
) > (
    select v.value from variables v where v.name=e.right_operand
) when e.operator ='<' then (
    select v.value from variables v where v.name=e.left_operand
) < (
    select v.value from variables v where v.name=e.right_operand
) else (
    select v.value from variables v where v.name=e.left_operand
) = (
    select v.value from variables v where v.name=e.right_operand
) end as value
from expressions e
