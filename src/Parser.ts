export class Parser {
    parse(expression: string): string[] {
        expression = expression.replace(/\s+/g, '');
        const tokens = expression.match(/(\d+(\.\d+)?|[+\-*/()])/g);
        if (!tokens) {
            throw new Error('Невалидное выражение');
        }
        return tokens;
    }
}
