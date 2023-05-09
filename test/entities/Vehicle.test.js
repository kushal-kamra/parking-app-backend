/* eslint-disable no-undef */
import VehicleTypes from "../../enums/VehicleTypes";
import Vehicle from "../../entities/Vehicle";

describe("Vehicle Class", () => {
    it("Check instance of class Vehicle", async () => {
        const number = '1234';
        const newVehicle = new Vehicle(VehicleTypes.motorcycle, number);

        expect(newVehicle)
            .toEqual(expect.any(Object));
    });

    it("Check type passed in constructor is valid", async () => {
        const number = '1234';

        expect(() => {
            // eslint-disable-next-line no-new
            new Vehicle('motorcycle', number);
        }).toThrow(new Error('Incorrect Type Provided'));
    });

    it ("Check number passed in constructor is valid", async () => {
        const number = '12345';

        expect(() => {
            // eslint-disable-next-line no-new
            new Vehicle(VehicleTypes.motorcycle, number);
        }).toThrow(new Error('Incorrect Number Provided'));
    });
});