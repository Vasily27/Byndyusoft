import {Operation} from "./interfaces";

export class DivideOperation implements Operation {
    execute(a: number, b: number): number {
        return a / b;
    }
}
