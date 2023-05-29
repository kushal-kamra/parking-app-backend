import PricingStrategies from "../../const/PricingStrategies.js";
import AirportPricingStrategy from "./AirportPricingStrategy.js";
import MallPricingStrategy from "./MallPricingStrategy.js";
import StadiumPricingStrategy from "./StadiumPricingStrategy.js";

class PricingFactory {
    static getPricingStrategy(pricingStrategy) {
        switch(pricingStrategy) {
            case PricingStrategies[0]:
                return MallPricingStrategy;
            case PricingStrategies[1]:
                return StadiumPricingStrategy;
            case PricingStrategies[2]:
                return AirportPricingStrategy;
            default:
                return null;
        }
    }
}

export default PricingFactory;