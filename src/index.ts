import { Calculator } from './Calculator';
const readline = require('readline');

const calculator = new Calculator();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askExpression() {
    rl.question('Введите выражение (или "exit" для выхода): ', (expression: string) => {
        if (expression.toLowerCase() === 'exit') {
            console.log('Завершение работы...');
            rl.close();
        } else {
            try {
                const result = calculator.calculate(expression);
                console.log(`Результат: ${result}`);
            } catch (error) {

                if (error instanceof Error) {
                    console.error('Ошибка в выражении:', error.message);
                } else {
                    console.error('Произошла неизвестная ошибка.');
                }
            }
            askExpression();
        }
    });
}

askExpression();
