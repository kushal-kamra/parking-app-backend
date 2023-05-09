class ParkingSpot {
    constructor(id) {
        if (!Number.isInteger(id)) {
            throw new Error('Incorrect ID Provided');
        }

        this.id = id;
        this.vehicle = null;
        this.isEmpty = true;
    }
}

export default ParkingSpot;