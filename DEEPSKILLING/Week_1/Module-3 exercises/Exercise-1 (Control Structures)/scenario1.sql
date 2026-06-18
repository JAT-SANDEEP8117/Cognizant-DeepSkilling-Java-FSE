SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, DOB, Name FROM Customers;
    v_age NUMBER;
BEGIN
    FOR r_cust IN c_customers LOOP
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, r_cust.DOB) / 12);
        
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = r_cust.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('Updated interest rate for: ' || r_cust.Name);
        END IF;
    END LOOP;
    COMMIT;
END;
/
