import {Operation} from "./interfaces";

export class AddOperation implements Operation {
    execute(a: number, b: number): number {
        return a + b;
    }
}
