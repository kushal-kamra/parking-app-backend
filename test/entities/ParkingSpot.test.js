/* eslint-disable no-new */
/* eslint-disable no-undef */
import ParkingSpot from "../../entities/ParkingSpot/ParkingSpot";
import Vehicle from "../../entities/Vehicle";
import VehicleTypes from "../../enums/VehicleTypes";

describe("ParkingSpot Class", () => {
    it("Check instance of ParkingSpot Class", async () => {
        const id = 1;
        const newParkingSpot = new ParkingSpot(id);
        
        expect(newParkingSpot).toEqual(
            expect.objectContaining({
                id,
                isEmpty: true,
                vehicle: null,
            })
        );
    });

    it("Check id passed in constructor is valid", async () => {
        const id = "1";

        expect(() => {
            new ParkingSpot(id);
        }).toThrow(new Error('Incorrect ID Provided'));
    });

    it("Check ParkingSpot.parkVehicle() isEmpty is false", async () => {
        const id = 1;
        const newParkingSpot = new ParkingSpot(id);
        const number = '1234';
        const newVehicle = new Vehicle(VehicleTypes.motorcycle, number);
        newParkingSpot.parkVehicle(newVehicle);

        expect(newParkingSpot).toEqual(
            expect.objectContaining({
                id,
                vehicle: expect.any(Vehicle),
                isEmpty: false
            })
        );
    });

    it("Check ParkingSpot.parkVehicle() vehicle is Vehicle object", async () => {
        const id = 1;
        const newParkingSpot = new ParkingSpot(id);
        const number = '1234';
        const newVehicle = {
            type: VehicleTypes.motorcycle,
            number
        };
        
        expect(() => {
            newParkingSpot.parkVehicle(newVehicle);
        }).toThrow(new Error('Invalid Vehicle Provided'));
    });

    it("Check ParkingSpot.removeVehicle() isEmpty & vehicle is null", async () => {
        const id = 1;
        const newParkingSpot = new ParkingSpot(id);
        const number = '1234';
        const newVehicle = new Vehicle(VehicleTypes.motorcycle, number);
        newParkingSpot.parkVehicle(newVehicle);
        newParkingSpot.unparkVehicle();

        expect(newParkingSpot).toEqual(
            expect.objectContaining({
                id,
                vehicle: null,
                isEmpty: true
            })
        );
    });
});