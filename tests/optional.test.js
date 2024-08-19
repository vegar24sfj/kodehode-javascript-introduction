import { describe, test, expect } from 'vitest';
import {
    coolMaker,
    addOrRemove
} from '../main'

describe("Optional", () => {
    /******************************************************************************
     * Oppgave 7 EXTRA CHALLENGE
     ******************************************************************************/
    test("Testing the coolMaker function..", () => {
        expect(coolMaker("hello")).toBe("😎hello😎");
        expect(coolMaker(4)).toBe("😎8😎");
        expect(coolMaker(true)).toBe("😎Yeah😎");
        expect(coolMaker(false)).toBe("😎Chill😎");
        expect(coolMaker(["Array", "test"])).toBe("😎Primitive values only😎");
        expect(coolMaker({ object: "test" })).toBe("😎Primitive values only😎");
    });

    /******************************************************************************
     * Oppgave 8 EXTRA CHALLENGE #2
     ******************************************************************************/
    test("Testing the addOrRemove function..", () => {
        expect(addOrRemove(["Red", "Green"], "Blue")).toStrictEqual([
            "Red",
            "Green",
            "Blue"
        ]);
        expect(addOrRemove(["Red", "Green", "Blue"], "Green")).toStrictEqual([
            "Red",
            "Blue"
        ]);
        expect(addOrRemove(["One", "Two", "Three"], "Four")).toStrictEqual([
            "One",
            "Two",
            "Three",
            "Four"
        ]);
        expect(addOrRemove(["One", "Two", "Three"], "Two")).toStrictEqual([
            "One",
            "Three"
        ]);
    });
});
