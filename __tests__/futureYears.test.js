describe('Age', () => {
    test("returns future age for Earth, Mercury, Venus, Mars and Jupiter", () => {

        const newAge = new Age(47)
        let future = newAge.getFutureYears(47, 10);
        expect(future[0]).toBeCloseTo(32, .1);
        expect(future[1]).toBeCloseTo(58, .1);
        expect(future[2]).toBeCloseTo(52, .1);
        expect(future[3]).toBeCloseTo(59, .1);
        expect(future[4]).toBeCloseTo(69, .1);
    });
});