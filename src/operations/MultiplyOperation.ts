import {Operation} from "./interfaces";

export class MultiplyOperation implements Operation {
    execute(a: number, b: number): number {
        return a * b;
    }
}
