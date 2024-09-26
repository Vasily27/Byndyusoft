# Console Calculator

This is a console calculator implemented in Node.js.
The calculator supports basic mathematical operations such as addition, subtraction, multiplication, and division.
It can also handle parentheses and respects operator precedence.
The project follows TDD (Test-Driven Development) and adheres to SOLID principles,
making it easily extensible and maintainable.

# Features

* Basic Operations: Addition (+), subtraction (-), multiplication (*), and division (/).
* Parentheses Support: Expressions with parentheses are handled correctly.
* Operator Precedence: The calculator respects operator precedence (* and / are calculated before + and -).
* Decimal Numbers: The calculator can handle both integer and decimal numbers.
* Extensibility: The architecture allows easy addition of new operations with minimal changes to the existing code.

# Usage
`npm start`

# Example:
`$ npm start`

`Введите выражение (или "exit" для выхода): 5*5`

`Результат: 25`

`Введите выражение (или "exit" для выхода): exit`

`Завершение работы...`


# Running Tests
The project follows TDD  and tests are written using Jest. To run the tests, use the following command:

`npm test`

# Example Test Output:

`PASS  tests/Calculator.test.ts`

`Calculator`

`✓ should return 0 for expression 1+2-3`

`✓ should correctly multiply two numbers: 3 * 5`

`✓ should correctly divide two numbers: 10 / 2`

`✓ should correctly evaluate expression with parentheses: (2 + 3) * 4`

`✓ should handle decimal numbers: 3.5 + 2.5`

`✓ should correctly evaluate complex expression: 2 + 3 * (5 - 1) / 2`

`Test Suites: 1 passed, 1 total`

`Tests:       6 passed, 6 total`

`Snapshots:   0 total`

`Time:        0.83 s, estimated 2 s`

`Ran all test suites.`

