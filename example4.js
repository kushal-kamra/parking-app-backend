import ParkingSpotManager from "./entities/ParkingSpot/ParkingSpotManager.js";
import PricingStrategies from "./const/PricingStrategies.js";
import VehicleTypes from "./enums/VehicleTypes.js";

const airport = new ParkingSpotManager(200, 500, 100, PricingStrategies[2]);

const motorcycle1 = airport.parkVehicle(VehicleTypes.motorcycle, '1234', Date.now());
const motorcycle2 = airport.parkVehicle(VehicleTypes.motorcycle, '2345', Date.now());
const motorcycle3 = airport.parkVehicle(VehicleTypes.motorcycle, '3456', Date.now());
const car1 = airport.parkVehicle(VehicleTypes.car, '4567', Date.now());
const suv = airport.parkVehicle(VehicleTypes.suv, '5678', Date.now());
const car2 = airport.parkVehicle(VehicleTypes.car, '6789', Date.now());

airport.unparkVehicle(VehicleTypes.car, car1, Date.now() + 3000000);
airport.unparkVehicle(VehicleTypes.motorcycle, motorcycle1, Date.now() + 3300000);
airport.unparkVehicle(VehicleTypes.motorcycle, motorcycle2, Date.now() + 53940000);
airport.unparkVehicle(VehicleTypes.suv, suv, Date.now() + 86340000);
airport.unparkVehicle(VehicleTypes.motorcycle, motorcycle3, Date.now() + 129600000);
airport.unparkVehicle(VehicleTypes.car, car2, Date.now() + 262800000);