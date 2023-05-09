import Vehicle from "./Vehicle";

class ParkingSpot {
    constructor(id) {
        if (!Number.isInteger(id)) {
            throw new Error('Incorrect ID Provided');
        }

        this.id = id;
        this.vehicle = null;
        this.isEmpty = true;
    }

    parkVehicle(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Invalid Vehicle Provided');
        }
        this.isEmpty = false;
        this.vehicle = vehicle;
    }
}

export default ParkingSpot;