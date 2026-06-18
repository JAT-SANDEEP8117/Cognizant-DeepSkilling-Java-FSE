import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAdd() {
        int a = 10;
        int b = 20;

        int result = calculator.add(a, b);

        assertEquals(30, result);
    }

    @Test
    public void testSubtract() {
        int a = 20;
        int b = 10;

        int result = calculator.subtract(a, b);

        assertEquals(10, result);
    }
}
