import Vehicle from "../Vehicle.js";

class ParkingSpot {
    constructor(id) {
        if (!Number.isInteger(id)) {
            throw new Error('Incorrect ID Provided');
        }

        this.id = id;
        this.vehicle = null;
        this.entryDateTime = null;
        this.isEmpty = true;
    }

    parkVehicle(vehicle, entryDateTime) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Invalid Vehicle Provided');
        }
        this.vehicle = vehicle;
        this.entryDateTime = entryDateTime;
        this.isEmpty = false;
    }

    unparkVehicle() {
        this.isEmpty = true;
        this.vehicle = null;
        this.entryDateTime = null;
    }
}

export default ParkingSpot;