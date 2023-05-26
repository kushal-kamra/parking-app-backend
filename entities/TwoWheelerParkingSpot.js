import ParkingSpot from "./ParkingSpot";
import PricingFactory from "./PricingFactory";
import VehicleCategory from "../const/VehicleCategory";

class TwoWheelerParkingSpot extends ParkingSpot {
    constructor(id, pricingStrategy) {
        super(id);
        this.pricingStrategy = PricingFactory.getPricingStrategy(pricingStrategy);
    }

    removeVehicle() {
        const parkingFees = this.pricingStrategy.calculateFees(this.entryDateTime, VehicleCategory[0]);
        super.removeVehicle();

        return parkingFees;
    }
}

export default TwoWheelerParkingSpot;