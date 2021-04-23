export interface Hero {
    id: number;
    name: string;
}
export class Heroo {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
    toString(): void {
        alert('Id: ' + this.id + ' Name: ' + this.name + ' Power: ' + this.power);
    }
}
