import Age from '../src/age.js';

describe('newAge.getPastYears', () => {
    test("returns past age for Earth, Mercury, Venus, Mars and Jupiter", () => {

        const newAge = new Age(47)
        let past = newAge.getPastYears(47, 15);
        expect(past[0]).toBeCloseTo(32, .1);
        expect(past[1]).toBeCloseTo(133, .1);
        expect(past[2]).toBeCloseTo(52, .1);
        expect(past[3]).toBeCloseTo(17, .1);
        expect(past[4]).toBeCloseTo(3, .1);
    });
});