-- Write your query below
SELECT  c.customer_id, c.customer_name FROM customers c
WHERE customer_id IN (
    SELECT o.customer_id FROM orders o 
    WHERE o.product_name IN('A') 
    AND c.customer_id=o.customer_id
    ) AND customer_id IN (
    SELECT o.customer_id FROM orders o 
    WHERE o.product_name IN('B') 
    AND c.customer_id=o.customer_id
    ) AND customer_id NOT IN (
    SELECT o.customer_id FROM orders o 
    WHERE o.product_name IN('C') 
    AND c.customer_id=o.customer_id
    )
ORDER BY c.customer_name