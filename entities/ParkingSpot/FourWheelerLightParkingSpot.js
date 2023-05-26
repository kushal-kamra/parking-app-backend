import ParkingSpot from "./ParkingSpot";
import PricingFactory from "../PricingStrategy/PricingFactory";
import VehicleCategory from "../../const/VehicleCategory";

class FourWheelerLightParkingSpot extends ParkingSpot {
    constructor(id, pricingStrategy) {
        super(id);
        this.pricingStrategy = PricingFactory.getPricingStrategy(pricingStrategy);
    }

    removeVehicle() {
        const parkingFees = this.pricingStrategy.calculateFees(this.entryDateTime, VehicleCategory[1]);
        super.removeVehicle();

        return parkingFees;
    }
}

export default FourWheelerLightParkingSpot;