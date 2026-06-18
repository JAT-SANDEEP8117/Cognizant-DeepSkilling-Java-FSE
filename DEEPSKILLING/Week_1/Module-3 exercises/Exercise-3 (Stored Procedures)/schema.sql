BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Accounts CASCADE CONSTRAINTS';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Employees CASCADE CONSTRAINTS';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountType VARCHAR2(50),
    Balance NUMBER
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

INSERT INTO Accounts (AccountID, AccountType, Balance) VALUES (1, 'Savings', 5000);
INSERT INTO Accounts (AccountID, AccountType, Balance) VALUES (2, 'Checking', 10000);
INSERT INTO Accounts (AccountID, AccountType, Balance) VALUES (3, 'Savings', 3000);
INSERT INTO Accounts (AccountID, AccountType, Balance) VALUES (4, 'Checking', 2000);

INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (101, 'Alice Smith', 'IT', 60000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (102, 'Bob Jones', 'HR', 45000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (103, 'Charlie Brown', 'IT', 70000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (104, 'Diana Prince', 'HR', 55000);

COMMIT;
/
