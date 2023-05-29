/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
import PricingStrategy from "./PricingStrategy.js";
import VehicleCategory from "../../const/VehicleCategory.js";

class StadiumPricingStrategy extends PricingStrategy {
    // eslint-disable-next-line class-methods-use-this
    static calculateFees(entryTimestamp, vehicleCategory, exitDateTime) {
        if (!Number.isInteger(entryTimestamp)) {
            throw new Error('Incorrect entryTimestamp Provided');
        }
        
        if (!VehicleCategory.includes(vehicleCategory)) {
            throw new Error('Incorrect vehicleCategory Provided');
        }

        const hoursPassed = Math.abs(exitDateTime - entryTimestamp) / 3600000;
        let fees = 0;

        if (vehicleCategory == VehicleCategory[0]) {
            if (hoursPassed > 0) {
                fees += 30;
            }
            if (hoursPassed >= 4) {
                fees += 60;
            }
            if (hoursPassed >= 12) {
                fees += ((Math.floor(hoursPassed) - 12) * 100);
            }
        } else if (vehicleCategory == VehicleCategory[1]) {
            if (hoursPassed > 0) {
                fees += 60;
            }
            if (hoursPassed >= 4) {
                fees += 120;
            }
            if (hoursPassed >= 12) {
                fees += ((Math.floor(hoursPassed) - 12) * 200);
            }
        }

        return Math.floor(fees);
    }
}

export default StadiumPricingStrategy;