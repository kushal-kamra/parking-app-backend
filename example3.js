import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const mall = new ParkingSpotManager(1000, 1500, 0, PricingStrategies[0]);

const vehicle1 = mall.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const vehicle2 = mall.parkVehicle(VehicleTypes.car, '5678', Date.now());
const vehicle3 = mall.parkVehicle(VehicleTypes.truck, '4567', Date.now());
mall.unparkVehicle(VehicleTypes.truck, vehicle3, Date.now() + 7140000);
mall.unparkVehicle(VehicleTypes.motorcycle, vehicle1, Date.now() + 12600000);
mall.unparkVehicle(VehicleTypes.car, vehicle2, Date.now() + 21660000);