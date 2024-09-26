import { Calculator } from '../src/Calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    // Тест для сложения и вычитания
    it('should return 0 for expression 1+2-3', () => {
        const result = calculator.calculate('1+2-3');
        expect(result).toBe(0);
    });

    // Тест для умножения
    it('should correctly multiply two numbers: 3 * 5', () => {
        const result = calculator.calculate('3*5');
        expect(result).toBe(15);
    });

    // Тест для деления
    it('should correctly divide two numbers: 10 / 2', () => {
        const result = calculator.calculate('10/2');
        expect(result).toBe(5);
    });

    // Тест для операций со скобками
    it('should correctly evaluate expression with parentheses: (2 + 3) * 4', () => {
        const result = calculator.calculate('(2+3)*4');
        expect(result).toBe(20);
    });

    // Тест для работы с дробными числами
    it('should handle decimal numbers: 3.5 + 2.5', () => {
        const result = calculator.calculate('3.5+2.5');
        expect(result).toBe(6);
    });

    // Тест для сложных выражений
    it('should correctly evaluate complex expression: 2 + 3 * (5 - 1) / 2', () => {
        const result = calculator.calculate('2 + 3 * (5 - 1) / 2');
        expect(result).toBe(8);
    });
});
