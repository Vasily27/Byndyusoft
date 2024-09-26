import { Parser } from './Parser';
import { Evaluator } from './Evaluator';

export class Calculator {
    private parser: Parser;
    private evaluator: Evaluator;

    constructor() {
        this.parser = new Parser();
        this.evaluator = new Evaluator();
    }

    calculate(expression: string): number {
        const parsedExpression = this.parser.parse(expression);
        return this.evaluator.evaluate(parsedExpression);
    }
}
