export abstract class Robot {
    id?: number;
    name: string;
    model: number;
    description: string;


    constructor(id: number, name: string, model: number, description: string) {
        this.id = id;
        this.name = name;
        this.model = model;
        this.description = description;
    }
}
