/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
import PricingStrategy from "./PricingStrategy.js";
import VehicleCategory from "../../const/VehicleCategory.js";

class MallPricingStrategy extends PricingStrategy {
    // eslint-disable-next-line class-methods-use-this
    static calculateFees(entryTimestamp, vehicleCategory, exitDateTime) {
        if (!Number.isInteger(entryTimestamp)) {
            throw new Error('Incorrect entryTimestamp Provided');
        }
        
        if (!VehicleCategory.includes(vehicleCategory)) {
            throw new Error('Incorrect vehicleCategory Provided');
        }

        const hoursPassed = Math.ceil(Math.abs(exitDateTime - entryTimestamp) / 3600000);
        let fees = 0;
        
        if (vehicleCategory == VehicleCategory[0]) {
            fees = hoursPassed * 10;
        } else if (vehicleCategory == VehicleCategory[1]) {
            fees = hoursPassed * 20;
        } else if (vehicleCategory == VehicleCategory[2]) {
            fees = hoursPassed * 50;
        }

        return Math.floor(fees);
    }
}

export default MallPricingStrategy;