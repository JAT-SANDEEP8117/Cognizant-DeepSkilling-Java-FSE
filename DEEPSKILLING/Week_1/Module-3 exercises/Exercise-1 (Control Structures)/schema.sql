BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Loans CASCADE CONSTRAINTS';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Customers CASCADE CONSTRAINTS';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP)
VALUES (1, 'John Doe', TO_DATE('1955-05-15', 'YYYY-MM-DD'), 5000, 'FALSE');

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP)
VALUES (2, 'Jane Smith', TO_DATE('1990-08-20', 'YYYY-MM-DD'), 12000, 'FALSE');

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP)
VALUES (3, 'Robert Brown', TO_DATE('1960-11-10', 'YYYY-MM-DD'), 2000, 'FALSE');

INSERT INTO Customers (CustomerID, Name, DOB, Balance, IsVIP)
VALUES (4, 'Emily Davis', TO_DATE('1985-03-05', 'YYYY-MM-DD'), 25000, 'FALSE');

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DueDate)
VALUES (101, 1, 10000, 8, SYSDATE + 15);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DueDate)
VALUES (102, 2, 20000, 6, SYSDATE + 45);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DueDate)
VALUES (103, 3, 5000, 7.5, SYSDATE + 5);

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, DueDate)
VALUES (104, 4, 15000, 5.5, SYSDATE + 20);

COMMIT;
/
