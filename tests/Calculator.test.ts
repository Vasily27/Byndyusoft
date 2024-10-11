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

    // Проверка на некорректные символы
    it('should throw an error for invalid expression: "1 + a"', () => {
        expect(() => calculator.calculate('1 + a')).toThrowError('Невалидное выражение');
    });

    it('should throw an error for invalid expression: "1 + s"', () => {
        expect(() => calculator.calculate('1 + s')).toThrowError('Невалидное выражение');
    });

    // Тесты для унарных операторов
    it('should handle unary plus: "+3 + 5"', () => {
        const result = calculator.calculate('+3 + 5');
        expect(result).toBe(8);
    });

    it('should handle unary minus: "-5 + 3"', () => {
        const result = calculator.calculate('-5 + 3');
        expect(result).toBe(-2);
    });

    // Проверка на деление на ноль
    it('should throw an error for division by zero: "10 / 0"', () => {
        expect(() => calculator.calculate('10 / 0')).toThrowError('Деление на ноль');
    });

    // Проверка на некорректные скобки
    it('should throw an error for mismatched parentheses: "(1 + 2"', () => {
        expect(() => calculator.calculate('(1 + 2')).toThrowError('Mismatched parentheses');
    });

    // Проверка на возведение в степень
    it('should correctly calculate exponentiation: 2 ^ 3', () => {
        const result = calculator.calculate('2 ^ 3');
        expect(result).toBe(8);
    });

    // Сложное выражение с несколькими уровнями приоритета
    it('should correctly evaluate complex expression with exponentiation: 2 + 3 * 2 ^ 2', () => {
        const result = calculator.calculate('2 + 3 * 2 ^ 2');
        expect(result).toBe(14);
    });
});
