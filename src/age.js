export default class Age {
    constructor(years) {
        this.years = years;
    }
    getMercuryYears() {
        return this.years / .24;
    }
}


