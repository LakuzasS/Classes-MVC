export class Counter {
    #value;

    constructor() {
        this.#value = 0;
    }

    getValue() {
        return this.#value;
    }

    incrementValue() {
        this.#value++;
    }

    decrementValue() {
        this.#value--;
    }
}