from json_transform import json_builder
json_builder("WITH overtime_count AS(SELECT COUNT(*) as total_overdue, neighborhood AS overdue_neighborhood FROM service_requests WHERE ontime='OVERDUE' GROUP BY neighborhood), \
full_count AS(SELECT COUNT(*) AS total, neighborhood FROM service_requests GROUP BY neighborhood), \
united_table AS (SELECT * FROM overtime_count \
LEFT JOIN full_count ON overtime_count.overdue_neighborhood=full_count.neighborhood) \
SELECT neighborhood, total_overdue*total/POWER(total,2) AS percent_overdue FROM united_table WHERE total is not null ORDER BY percent_overdue DESC;","..//src/data/overdue.js")
json_builder("WITH cte AS(SELECT DATE_PART('day', closed_dt - open_dt) AS duration, neighborhood FROM service_requests WHERE closed_dt IS NOT NULL) \
SELECT AVG(duration) AS neighborhood_mean, neighborhood FROM cte WHERE neighborhood IS NOT NULL GROUP BY neighborhood ORDER BY 1 DESC;", "..//src/data/response_time.js")