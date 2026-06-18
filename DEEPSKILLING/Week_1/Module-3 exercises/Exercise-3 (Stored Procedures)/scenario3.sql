CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_acc IN NUMBER,
    p_to_acc IN NUMBER,
    p_amount IN NUMBER
) AS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_acc;
    
    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer');
    ELSE
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_acc;
        
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_acc;
        
        COMMIT;
    END IF;
END;
/
