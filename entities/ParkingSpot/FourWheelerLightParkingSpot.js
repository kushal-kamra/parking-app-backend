import ParkingSpot from "./ParkingSpot.js";
import PricingFactory from "../PricingStrategy/PricingFactory.js";
import VehicleCategory from "../../const/VehicleCategory.js";

class FourWheelerLightParkingSpot extends ParkingSpot {
    constructor(id, pricingStrategy) {
        super(id);
        this.pricingStrategy = PricingFactory.getPricingStrategy(pricingStrategy);
    }

    unparkVehicle() {
        const parkingFees = this.pricingStrategy.calculateFees(this.entryDateTime, VehicleCategory[1]);
        super.unparkVehicle();

        return parkingFees;
    }
}

export default FourWheelerLightParkingSpot;