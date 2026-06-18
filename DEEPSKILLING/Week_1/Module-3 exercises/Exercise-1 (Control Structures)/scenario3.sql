SET SERVEROUTPUT ON;

DECLARE
    CURSOR c_due_loans IS
        SELECT c.Name, l.LoanID, l.LoanAmount, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate >= SYSDATE AND l.DueDate <= SYSDATE + 30;
BEGIN
    FOR r_loan IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Hello ' || r_loan.Name || ', your loan (ID: ' || r_loan.LoanID || ') of amount ' || r_loan.LoanAmount || ' is due on ' || TO_CHAR(r_loan.DueDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
