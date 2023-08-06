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
    getMarsYears() {
        return this.years / 1.88;
    }
    getJupiterYears() {
        return this.years / 11.86;
    }

}


