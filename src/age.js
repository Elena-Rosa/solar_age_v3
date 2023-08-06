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

    getPastYears(age, past) {
        let pastYears = [];
        this.years = age - past;

        pastYears.push(this.years);
        pastYears.push(this.getMercuryYears());
        pastYears.push(this.getVenusYears());
        pastYears.push(this.getMarsYears());
        pastYears.push(this.getJupiterYears());

        return pastYears;
    }

    getFutureYears(age, future) {
        let futureYears = [];
        this.years = future - age;

        futureYears.push(this.years);
        futureYears.push(this.getMercuryYears());
        futureYears.push(this.getVenusYears());
        futureYears.push(this.getMarsYears());
        futureYears.push(this.getJupiterYears());

        return futureYears;
    }
}

