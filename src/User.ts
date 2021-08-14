import faker from "faker";
import { Mappable } from "./CustomMap";
// install a type definition file if module does not have it 
// Definitely Typed
// Install npm module @types/{library name}

export class User implements Mappable{
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    name: string;
    location: {
        lat: number;
        lng: number;
    }

    markerContent(): string {
        return `
        <div>
        <p>User name is <strong>${this.name}</strong></p>
        </div>
        `;
    }
};

