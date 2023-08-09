import Age from '../src/age.js';

describe('Age', () => {
    test("returns future age for Earth, Mercury, Venus, Mars and Jupiter", () => {

        const newAge = new Age(47)
        let future = newAge.getFutureYears(47, 10);
        expect(future[0]).toBeCloseTo(57, .1);
        expect(future[1]).toBeCloseTo(237.5, .1);
        expect(future[2]).toBeCloseTo(92, .1);
        expect(future[3]).toBeCloseTo(30, .1);
        expect(future[4]).toBeCloseTo(5, .1);
    });
});