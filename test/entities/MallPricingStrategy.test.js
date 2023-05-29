/* eslint-disable no-undef */
import VehicleCategory from "../../const/VehicleCategory";
import MallPricingStrategy from "../../entities/PricingStrategy/MallPricingStrategy";

describe("MallPricingStrategy Class", () => {
    it("Check MallPricingStrategy for 2wheeler", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = MallPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(50);
    });

    it("Check MallPricingStrategy for 4wheeler-light", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = MallPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(100);
    });

    it("Check MallPricingStrategy for 4wheeler-heavy", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = MallPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[2], now);

        expect(fees).toEqual(250);
    });

    it("Check VehicleCategory passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = now - 18000000;
            MallPricingStrategy.calculateFees(date5HoursBefore, "2wheelers", now);
        }).toThrow(new Error('Incorrect vehicleCategory Provided'));
    });

    it("Check entryTimestamp passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = `${now - 18000000}`;
            MallPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);
        }).toThrow(new Error('Incorrect entryTimestamp Provided'));
    });
})