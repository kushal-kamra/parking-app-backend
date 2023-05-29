import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const mall1 = new ParkingSpotManager(2, 0, 0, PricingStrategies[0]);

const vehicle1 = mall1.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const vehicle2 = mall1.parkVehicle(VehicleTypes.scooter, '5678', Date.now());
mall1.parkVehicle(VehicleTypes.scooter, '1357', Date.now());
mall1.unparkVehicle(VehicleTypes.scooter, vehicle2, Date.now() + 2400000);
mall1.unparkVehicle(VehicleTypes.motorcycle, vehicle1, Date.now() + 13200000);