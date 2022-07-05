Select * From dbo.Customer
Where LastName Like 'S%'
ORDER BY LastName DESC;

Select C.FirstName, O.OrderDate, SUM(OL.Cost) 
FROM dbo.Customer AS C 
JOIN dbo.Order AS O ON C.CustID = O.CustomerID
JOIN dbo.OderLine AS OL ON O.OrderID = OL.OrderID
WHERE O.OrderDate >= Dateadd(Month, Datediff(Month, 0, DATEADD(m, -6, current_timestamp)), 0)
GROUP BY CustID


Select C.FirstName, O.OrderDate, SUM(OL.Cost) 
FROM dbo.Customer AS C 
JOIN dbo.Order AS O ON C.CustID = O.CustomerID
JOIN dbo.OderLine AS OL ON O.OrderID = OL.OrderID
WHERE O.OrderDate >= Dateadd(Month, Datediff(Month, 0, DATEADD(m, -6, current_timestamp)), 0)
AND SUM(OL.Cost) > 100 AND SUM(OL.Cost) < 500
GROUP BY CustID