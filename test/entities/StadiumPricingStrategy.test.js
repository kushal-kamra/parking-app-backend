/* eslint-disable no-undef */
import VehicleCategory from "../../const/VehicleCategory";
import StadiumPricingStrategy from "../../entities/PricingStrategy/StadiumPricingStrategy";

describe("StadiumPricingStrategy Class", () => {
    it("Check StadiumPricingStrategy for 2wheeler + 5 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(90);
    });

    it("Check StadiumPricingStrategy for 2wheeler + 3 hours", async () => {
        const now = Date.now();
        const date3HoursBefore = now - 10800000;
        const fees = StadiumPricingStrategy.calculateFees(date3HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(30);
    });

    it("Check StadiumPricingStrategy for 2wheeler + 14 hours", async () => {
        const now = Date.now();
        const date14HoursBefore = now - 50400000;
        const fees = StadiumPricingStrategy.calculateFees(date14HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(290);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 5 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(180);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 3 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 10800000;
        const fees = StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(60);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 14 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 50400000;
        const fees = StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(580);
    });

    it("Check StadiumPricingStrategy for 4wheeler-heavy", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[2], now);

        expect(fees).toEqual(0);
    });

    it("Check StadiumPricingStrategy passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = now - 18000000;
            StadiumPricingStrategy.calculateFees(date5HoursBefore, "2wheelers", now);
        }).toThrow(new Error('Incorrect vehicleCategory Provided'));
    });

    it("Check entryTimestamp passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = `${now - 18000000}`;
            StadiumPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);
        }).toThrow(new Error('Incorrect entryTimestamp Provided'));
    });
})