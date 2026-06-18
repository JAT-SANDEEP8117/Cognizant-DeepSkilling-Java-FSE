CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_dept IN VARCHAR2,
    p_bonus_pct IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE Department = p_dept;
    COMMIT;
END;
/
