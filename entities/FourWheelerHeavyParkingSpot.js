import ParkingSpot from "./ParkingSpot";
import PricingFactory from "./PricingFactory";
import VehicleCategory from "../const/VehicleCategory";

class FourWheelerHeavyParkingSpot extends ParkingSpot {
    constructor(id, pricingStrategy) {
        super(id);
        this.pricingStrategy = PricingFactory.getPricingStrategy(pricingStrategy);
    }

    removeVehicle() {
        const parkingFees = this.pricingStrategy.calculateFees(this.entryDateTime, VehicleCategory[2]);
        super.removeVehicle();

        return parkingFees;
    }
}

export default FourWheelerHeavyParkingSpot;