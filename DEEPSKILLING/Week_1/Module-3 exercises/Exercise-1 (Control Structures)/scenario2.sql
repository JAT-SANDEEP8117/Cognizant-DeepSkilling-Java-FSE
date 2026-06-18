SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Balance, Name FROM Customers;
BEGIN
    FOR r_cust IN c_customers LOOP
        IF r_cust.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r_cust.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Promoted to VIP: ' || r_cust.Name);
        END IF;
    END LOOP;
    COMMIT;
END;
/
