/* eslint-disable no-new */
/* eslint-disable no-undef */
import ParkingSpot from "../../entities/ParkingSpot";
import Vehicle from "../../entities/Vehicle";
import VehicleTypes from "../../enums/VehicleTypes";

describe("ParkingSpot Class", () => {
    it("Check instance of ParkingSpot Class", async () => {
        const number = '1234';
        const newVehicle = new Vehicle(VehicleTypes.motorcycle, number);
        const id = 1;
        const newParkingSpot = new ParkingSpot(id, newVehicle);
        
        expect(newParkingSpot).toEqual(
            expect.objectContaining({
                id,
                isEmpty: true,
                vehicle: expect.any(Vehicle),
            })
        );
    });

    it("Check id passed in constructor is valid", async () => {
        const number = '1234';
        const newVehicle = new Vehicle(VehicleTypes.motorcycle, number);
        const id = "1";

        expect(() => {
            new ParkingSpot(id, newVehicle);
        }).toThrow(new Error('Incorrect ID Provided'));
    });

    it("Check vehicle passed in constructor is valid", async () => {
        const number = '1234';
        const newVehicle = {
            type: VehicleTypes.motorcycle,
            number
        };
        const id = 1;

        expect(() => {
            new ParkingSpot(id, newVehicle);
        }).toThrow(new Error('Incorrect Vehicle Object Provided'));
    });
});