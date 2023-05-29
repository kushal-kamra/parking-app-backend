import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const mall = new ParkingSpotManager(2, 0, 0, PricingStrategies[0]);

const motorcycle = mall.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const scooter = mall.parkVehicle(VehicleTypes.scooter, '5678', Date.now());
mall.parkVehicle(VehicleTypes.scooter, '1357', Date.now());
mall.unparkVehicle(VehicleTypes.scooter, scooter, Date.now() + 2400000);
mall.unparkVehicle(VehicleTypes.motorcycle, motorcycle, Date.now() + 13200000);