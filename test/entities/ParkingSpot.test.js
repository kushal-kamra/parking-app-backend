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
});