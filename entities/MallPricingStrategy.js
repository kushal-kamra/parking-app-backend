/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
import PricingStrategy from "./PricingStrategy";
import VehicleCategory from "../const/VehicleCategory";

class MallPricingStrategy extends PricingStrategy {
    // eslint-disable-next-line class-methods-use-this, consistent-return
    calculateFees(entryTimestamp, vehicleCategory) {
        if (!Number.isInteger(entryTimestamp)) {
            throw new Error('Incorrect entryTimestamp Provided');
        }
        
        if (!VehicleCategory.includes(vehicleCategory)) {
            throw new Error('Incorrect vehicleCategory Provided');
        }

        const hoursPassed = Math.abs(entryTimestamp - Date.now()) / 3600000;

        if (vehicleCategory == VehicleCategory[0]) {
            return hoursPassed * 10;
        } else if (vehicleCategory == VehicleCategory[1]) {
            return hoursPassed * 20;
        } else if (vehicleCategory == VehicleCategory[2]) {
            return hoursPassed * 50;
        }
    }
}

export default MallPricingStrategy;