import TwoWheelerParkingSpot from "./TwoWheelerParkingSpot.js";
import FourWheelerLightParkingSpot from "./FourWheelerLightParkingSpot.js";
import FourWheelerHeavyParkingSpot from "./FourWheelerHeavyParkingSpot.js";
import VehicleCategory from "../../const/VehicleCategory.js";
import Vehicle from "../Vehicle.js";
import ParkingTicket from "../ParkingTicket.js";
import ParkingReceipt from "../ParkingReceipt.js";

class ParkingSpotManager {
    constructor(noTwoWheeler, noFourWheelerLight, noFourWheelerHeavy, pricingStrategy) {
        this.pricingStrategy = pricingStrategy;

        this.twoWheelerSpotsCount = noTwoWheeler;
        this.fourWheelerLightSpotsCount = noFourWheelerLight;
        this.fourWheelerHeavySpotsCount = noFourWheelerHeavy;
        
        this.tickets = [];
        this.receipts = [];

        this.freeTwoWheelerSpots = new Set();
        this.freeFourWheelerLightSpots = new Set();
        this.freeFourWheelerHeavySpots = new Set();
        
        this.twoWheelerSpots = [...Array(this.twoWheelerSpotsCount)].map((_, i) => {
            this.freeTwoWheelerSpots.add(i + 1);
            return new TwoWheelerParkingSpot(i + 1, this.pricingStrategy);
        });
        this.fourWheelerLightSpots = [...Array(noFourWheelerLight)].map((_, i) => {
            this.freeFourWheelerLightSpots.add(i + 1);
            return new FourWheelerLightParkingSpot(i + 1, this.pricingStrategy);
        });
        this.fourWheelerHeavySpots = [...Array(noFourWheelerHeavy)].map((_, i) => {
            this.freeFourWheelerHeavySpots.add(i + 1);
            return new FourWheelerHeavyParkingSpot(i + 1, this.pricingStrategy);
        });
    }

    parkVehicle(vehicleType, vehicleNumber, entryDateTime) {
        let parkingSpotId = null;

        switch(vehicleType) {
            case VehicleCategory[0]:
                parkingSpotId = this.parkTwoWheeler(vehicleNumber, entryDateTime);
                break;
            case VehicleCategory[1]:
                parkingSpotId = this.parkFourWheelerLight(vehicleNumber, entryDateTime);
                break;
            case VehicleCategory[2]:
                parkingSpotId = this.parkFourWheelerHeavy(vehicleNumber, entryDateTime);
                break;
            default: return null;
        }

        return this.generateParkingTicket(parkingSpotId, entryDateTime);
    }

    parkTwoWheeler(vehicleNumber, entryDateTime) {
        if (this.freeTwoWheelerSpots.size === 0) {
            console.log('No Two Wheeler Parking Space left!');
            return null;
        }

        const availableSpotId = this.freeTwoWheelerSpots.values().next().value;
        const vehicle = new Vehicle(VehicleCategory[0], vehicleNumber);
        this.twoWheelerSpots[availableSpotId - 1].parkVehicle(vehicle, entryDateTime);
        this.freeTwoWheelerSpots.delete(availableSpotId);

        return availableSpotId;
    }

    parkFourWheelerLight(vehicleNumber, entryDateTime) {
        if (this.freeFourWheelerLightSpots.size === 0) {
            console.log('No Four Wheeler Light Parking Space left!');
            return null;
        }

        const availableSpotId = this.freeFourWheelerLightSpots.values().next().value;
        const vehicle = new Vehicle(VehicleCategory[1], vehicleNumber);
        this.fourWheelerLightSpots[availableSpotId - 1].parkVehicle(vehicle, entryDateTime);
        this.freeFourWheelerLightSpots.delete(availableSpotId);

        return availableSpotId;
    }

    parkFourWheelerHeavy(vehicleNumber, entryDateTime) {
        if (this.freeFourWheelerHeavySpots.size === 0) {
            console.log('No Four Wheeler Heavy Parking Space left!');
            return null;
        }

        const availableSpotId = this.freeFourWheelerHeavySpots.values().next().value;
        const vehicle = new Vehicle(VehicleCategory[0], vehicleNumber);
        this.fourWheelerHeavySpots[availableSpotId - 1].parkVehicle(vehicle, entryDateTime);
        this.freeFourWheelerHeavySpots.delete(availableSpotId);

        return availableSpotId;
    }

    generateParkingTicket(parkingSpotId, entryDateTime) {
        if (!parkingSpotId) {
            return null;
        }

        const newTicket = new ParkingTicket(this.tickets.length + 1, parkingSpotId, entryDateTime);
        this.tickets.push(newTicket);
        newTicket.printParkingTicket();

        return newTicket;
    }

    unparkVehicle(vehicleType, parkingTicket, exitDateTime) {
        let parkingReceipt = null;

        switch(vehicleType) {
            case VehicleCategory[0]:
                parkingReceipt = this.unparkTwoWheeler(parkingTicket, exitDateTime);
                break;
            case VehicleCategory[1]:
                parkingReceipt = this.unparkFourWheelerLight(parkingTicket, exitDateTime);
                break;
            case VehicleCategory[2]:
                parkingReceipt = this.unparkFourWheelerHeavy(parkingTicket, exitDateTime);
                break;
            default: return null;
        }

        return parkingReceipt;
    }

    unparkTwoWheeler(parkingTicket, exitDateTime) {
        this.freeTwoWheelerSpots.add(parkingTicket.parkingSpotId);
        const fees = this.twoWheelerSpots[parkingTicket.parkingSpotId - 1].unparkVehicle(exitDateTime);
        const parkingReceipt = this.generateParkingReceipt(parkingTicket, exitDateTime, fees);
        this.receipts.push(parkingReceipt);
        parkingReceipt.printParkingReceipt();

        return parkingReceipt;
    }

    unparkFourWheelerLight(parkingTicket, exitDateTime) {
        this.freeFourWheelerLightSpots.add(parkingTicket.parkingSpotId);
        const fees = this.fourWheelerLightSpots[parkingTicket.parkingSpotId - 1].unparkVehicle(exitDateTime);
        const parkingReceipt = this.generateParkingReceipt(parkingTicket, exitDateTime, fees);
        this.receipts.push(parkingReceipt);
        parkingReceipt.printParkingReceipt();

        return parkingReceipt;
    }

    unparkFourWheelerHeavy(parkingTicket, exitDateTime) {
        this.freeFourWheelerHeavySpots.add(parkingTicket.parkingSpotId);
        const fees = this.fourWheelerHeavySpots[parkingTicket.parkingSpotId - 1].unparkVehicle(exitDateTime);
        const parkingReceipt = this.generateParkingReceipt(parkingTicket, exitDateTime, fees);
        this.receipts.push(parkingReceipt);
        parkingReceipt.printParkingReceipt();

        return parkingReceipt;
    }

    generateParkingReceipt(parkingTicket, exitDateTime, fees) {
        const parkingReceipt = new ParkingReceipt(
            parkingTicket.ticketId,
            this.receipts.length + 1,
            parkingTicket.entryDateTime,
            exitDateTime,
            fees
        )

        return parkingReceipt;
    }
}

export default ParkingSpotManager;