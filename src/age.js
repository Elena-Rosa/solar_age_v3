export default class Age {
    constructor(years) {
        this.years = years;
    }
    getMercuryYears() {
        return this.years / .24;
    }
    getVenusYears() {
        return this.years / .62;
    }
}


