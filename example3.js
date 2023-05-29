import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const stadium = new ParkingSpotManager(1000, 1500, 0, PricingStrategies[1]);

const motorcycle1 = stadium.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const motorcycle2 = stadium.parkVehicle(VehicleTypes.motorcycle, '2345', Date.now());
const electricsuv = stadium.parkVehicle(VehicleTypes.suv, '3456', Date.now());
const suv = stadium.parkVehicle(VehicleTypes.suv, '4567', Date.now());
stadium.unparkVehicle(VehicleTypes.motorcycle, motorcycle1, Date.now() + 13200000);
stadium.unparkVehicle(VehicleTypes.suv, electricsuv, Date.now() + 41400000);
stadium.unparkVehicle(VehicleTypes.suv, suv, Date.now() + 47100000);
stadium.unparkVehicle(VehicleTypes.motorcycle, motorcycle2, Date.now() + 53940000);