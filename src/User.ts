import faker from "faker";
// install a type definition file if module does not have it 
// Definitely Typed
// Install npm module @types/{library name}

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
};

