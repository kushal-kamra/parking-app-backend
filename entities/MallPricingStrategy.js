/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
import PricingStrategy from "./PricingStrategy";
import VehicleCategory from "../const/VehicleCategory";

class MallPricingStrategy extends PricingStrategy {
    // eslint-disable-next-line class-methods-use-this
    calculateFees(entryTimestamp, vehicleCategory) {
        if (!Number.isInteger(entryTimestamp)) {
            throw new Error('Incorrect entryTimestamp Provided');
        }
        
        if (!VehicleCategory.includes(vehicleCategory)) {
            throw new Error('Incorrect vehicleCategory Provided');
        }

        const hoursPassed = Math.abs(entryTimestamp - Date.now()) / 3600000;
        let fees = 0;
        
        if (vehicleCategory == VehicleCategory[0]) {
            fees = hoursPassed * 10;
        } else if (vehicleCategory == VehicleCategory[1]) {
            fees = hoursPassed * 20;
        } else if (vehicleCategory == VehicleCategory[2]) {
            fees = hoursPassed * 50;
        }

        return fees;
    }
}

export default MallPricingStrategy;