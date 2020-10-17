import {Robot} from "./Robot";

export class BeerBot extends Robot{
    servingTimeInSeconds: number;
    beersServed?: number;


    constructor(id: number, name: string, model: number, description: string, servingTimeInSeconds: number, beersServed: number) {
        super(id, name, model, description);
        this.servingTimeInSeconds = servingTimeInSeconds;
        this.beersServed = beersServed;
    }
}
