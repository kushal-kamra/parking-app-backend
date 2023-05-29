import VehicleCategory from "../const/VehicleCategory.js";

class Vehicle {
    constructor(type, number) {
        if (!VehicleCategory.includes(type)) {
            throw new Error('Incorrect Type Provided');
        }
        if (number.length !== 4) {
            throw new Error('Incorrect Number Provided');
        }

        this.type = type;
        this.number = number;
    }
}

export default Vehicle;