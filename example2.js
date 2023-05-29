import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const mall = new ParkingSpotManager(100, 80, 10, PricingStrategies[0]);

const motorcycle = mall.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const car = mall.parkVehicle(VehicleTypes.car, '5678', Date.now());
const truck = mall.parkVehicle(VehicleTypes.truck, '4567', Date.now());
mall.unparkVehicle(VehicleTypes.truck, truck, Date.now() + 7140000);
mall.unparkVehicle(VehicleTypes.motorcycle, motorcycle, Date.now() + 12600000);
mall.unparkVehicle(VehicleTypes.car, car, Date.now() + 21660000);