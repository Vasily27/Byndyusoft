import {Operation} from "./operations/interfaces";
import {AddOperation} from "./operations/AddOperation";
import {SubtractOperation} from "./operations/SubtractOperation";
import {MultiplyOperation} from "./operations/MultiplyOperation";
import {DivideOperation} from "./operations/DivideOperation";

export class Evaluator {
    private operations: Map<string, Operation>;

    constructor() {
        this.operations = new Map();
        this.operations.set('+', new AddOperation());
        this.operations.set('-', new SubtractOperation());
        this.operations.set('*', new MultiplyOperation());
        this.operations.set('/', new DivideOperation());
    }

    evaluate(expression: string[]): number {
        return this.evaluateExpression(expression);
    }

    private evaluateExpression(expression: string[]): number {
        // Сначала обрабатываем скобки
        while (expression.includes('(')) {
            const openIndex = expression.lastIndexOf('(');
            const closeIndex = expression.indexOf(')', openIndex);
            if (closeIndex === -1) throw new Error('Mismatched parentheses');

            const subExpression = expression.slice(openIndex + 1, closeIndex);
            const subResult = this.evaluateExpression(subExpression);
            expression.splice(openIndex, closeIndex - openIndex + 1, subResult.toString());
        }

        this.processOperations(expression, ['*', '/']);

        this.processOperations(expression, ['+', '-']);

        if (expression.length === 1) {
            return parseFloat(expression[0]);
        }

        throw new Error('Invalid expression');
    }

    private processOperations(expression: string[], operators: string[]): void {
        let index = 0;
        while (index < expression.length) {
            const token = expression[index];
            if (operators.includes(token)) {
                const operator = this.operations.get(token);
                if (!operator) throw new Error(`Unknown operator: ${token}`);

                const left = parseFloat(expression[index - 1]);
                const right = parseFloat(expression[index + 1]);

                const result = operator.execute(left, right);
                expression.splice(index - 1, 3, result.toString());

                index = 0;
            } else {
                index++;
            }
        }
    }
}
