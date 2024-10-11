import { Operation } from "./interfaces";

export class PowerOperation implements Operation {
    execute(a: number, b: number): number {
        return Math.pow(a, b);
    }
}
