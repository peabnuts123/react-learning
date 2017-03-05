let nextIndex = 0;

export class Project {
    public id: number;
    public name: string;
    public description: string;

    constructor(name: string, description: string) {
        this.id = nextIndex++;
        this.name = name;
        this.description = description;
    }
}