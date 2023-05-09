import Vehicle from "./Vehicle";

class ParkingSpot {
    constructor(id, vehicle) {
        if (!Number.isInteger(id)) {
            throw new Error('Incorrect ID Provided');
        }
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Incorrect Vehicle Object Provided');
        }
        this.id = id;
        this.vehicle = vehicle;
        this.isEmpty = true;
    }
}

export default ParkingSpot;