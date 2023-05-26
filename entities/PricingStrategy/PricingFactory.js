import PricingStrategies from "../../const/PricingStrategies";
import AirportPricingStrategy from "./AirportPricingStrategy";
import MallPricingStrategy from "./MallPricingStrategy";
import StadiumPricingStrategy from "./StadiumPricingStrategy";

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