export class Parser {
    parse(expression: string): string[] {
        expression = expression.replace(/\s+/g, '');
        if (expression.length === 0) {
            throw new Error('Невалидное выражение');
        }
        for (let char of expression) {
            if (!/[\d+\-*/().^]/.test(char)) {
                throw new Error('Невалидное выражение');
            }
        }
        const tokens = expression.match(/(\d+(\.\d+)?|[+\-*/()^])/g);
        if (!tokens) {
            throw new Error('Невалидное выражение');
        }

        const result: string[] = [];
        for (let i = 0; i < tokens.length; i++) {
            if (!/^\d+(\.\d+)?$/.test(tokens[i]) && !/^[+\-*/()^]$/.test(tokens[i])) {
                throw new Error('Невалидное выражение');
            }
            if (tokens[i] === '+' || tokens[i] === '-') {
                if (i === 0 || ['+', '-', '*', '/', '(', '^'].includes(tokens[i - 1])) {
                    // Унарный оператор
                    if (i + 1 < tokens.length && !/^\d+(\.\d+)?$/.test(tokens[i + 1])) {
                        throw new Error('Некорректное выражение');
                    }
                    result.push(tokens[i] + (tokens[i + 1] || '0'));
                    i++;
                } else {
                    result.push(tokens[i]);
                }
            } else {
                result.push(tokens[i]);
            }
        }
        const lastToken = result[result.length - 1];
        if (lastToken === '+' || lastToken === '-' || lastToken === '*' || lastToken === '/' || lastToken === '^') {
            throw new Error('Невалидное выражение: выражение не может заканчиваться оператором');
        }

        return result;
    }
}
