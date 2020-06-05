export class Estadistica {

    activeCases_text: string;
    country_text: string;
    lastUpdate: Date;
    newCases_text: string;
    newDeaths_text:string;
    totalCases_text: string;
    totalDeaths_text:string;
    totalRecovered_text:string;

    constructor(activeCases_text?: string,
        country_text?: string,
        lastUpdate?: Date,
        newCases_text?: string,
        newDeaths_text?:string,
        totalCases_text?: string,
        totalDeaths_text?:string,
        totalRecovered_text?:string){

            this.activeCases_text= activeCases_text;
            this.country_text= country_text;
            this.lastUpdate = lastUpdate;
            this.newCases_text= newCases_text;
            this.newDeaths_text = newDeaths_text;
            this.totalCases_text= totalCases_text;
            this.totalDeaths_text= totalDeaths_text;
            this.totalRecovered_text = totalRecovered_text;
        }
}
