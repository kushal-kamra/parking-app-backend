import ParkingSpot from "./ParkingSpot.js";
import PricingFactory from "../PricingStrategy/PricingFactory.js";
import VehicleCategory from "../../const/VehicleCategory.js";

class TwoWheelerParkingSpot extends ParkingSpot {
    constructor(id, pricingStrategy) {
        super(id);
        this.pricingStrategy = PricingFactory.getPricingStrategy(pricingStrategy);
    }

    unparkVehicle(exitDateTime) {
        const parkingFees = this.pricingStrategy.calculateFees(this.entryDateTime, VehicleCategory[0], exitDateTime);
        super.unparkVehicle();

        return parkingFees;
    }
}

export default TwoWheelerParkingSpot;