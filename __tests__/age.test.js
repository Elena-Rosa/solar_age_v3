import Age from '../src/age.js';

describe('Age', () => {
    test("returns age for earth years", () => {

        const newAge = new Age(47)
        expect(newAge.years).toBe(47);

    });
});

describe('Age.getMercuryYears()', () => {
    test("returns age for Mercury years", () => {
        const newAge = new Age(47)
        expect(newAge.getMercuryYears()).toBeCloseTo(196, .1);
    });
});

describe('Age.getVenusYears()', () => {
    test("returns age for Venus years", () => {
        const newAge = new Age(47)
        expect(newAge.getVenusYears()).toBeCloseTo(76, .1);
    });
});

describe('Age.getMarsYears()', () => {
    test("returns age for Mars years", () => {
        const newAge = new Age(47)
        expect(newAge.getMarsYears()).toBeCloseTo(25, .1);
    });
});


describe('Age.getJupiterYears()', () => {
    test("returns age for Jupiter years", () => {
        const newAge = new Age(47)
        expect(newAge.getJupiterYears()).toBeCloseTo(3.96, .1);
    });
});

