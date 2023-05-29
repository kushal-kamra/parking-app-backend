/* eslint-disable no-undef */
import VehicleCategory from "../../const/VehicleCategory";
import AirportPricingStrategy from "../../entities/PricingStrategy/AirportPricingStrategy";

describe("AirportPricingStrategy Class", () => {
    it("Check AirportPricingStrategy for 2wheeler + 30 mins", async () => {
        const now = Date.now();
        const date3HoursBefore = now - 1800000;
        const fees = AirportPricingStrategy.calculateFees(date3HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(0);
    });
    
    it("Check AirportPricingStrategy for 2wheeler + 5 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = AirportPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(40);
    });

    it("Check AirportPricingStrategy for 2wheeler + 50 hours", async () => {
        const now = Date.now();
        const date50HoursBefore = now - 180000000;
        const fees = AirportPricingStrategy.calculateFees(date50HoursBefore, VehicleCategory[0], now);

        expect(fees).toEqual(240);
    });

    it("Check AirportPricingStrategy for 4wheeler-light + 30 mins", async () => {
        const now = Date.now();
        const date3HoursBefore = now - 1800000;
        const fees = AirportPricingStrategy.calculateFees(date3HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(60);
    });
    
    it("Check AirportPricingStrategy for 4wheeler-light + 5 hours", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = AirportPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(60);
    });

    it("Check AirportPricingStrategy for 4wheeler-light + 50 hours", async () => {
        const now = Date.now();
        const date50HoursBefore = now - 180000000;
        const fees = AirportPricingStrategy.calculateFees(date50HoursBefore, VehicleCategory[1], now);

        expect(fees).toEqual(300);
    });

    it("Check AirportPricingStrategy for 4wheeler-heavy", async () => {
        const now = Date.now();
        const date5HoursBefore = now - 18000000;
        const fees = AirportPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[2], now);

        expect(fees).toEqual(0);
    });

    it("Check AirportPricingStrategy passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = now - 18000000;
            AirportPricingStrategy.calculateFees(date5HoursBefore, "2wheelers", now);
        }).toThrow(new Error('Incorrect vehicleCategory Provided'));
    });

    it("Check entryTimestamp passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const now = Date.now();
            const date5HoursBefore = `${now - 18000000}`;
            AirportPricingStrategy.calculateFees(date5HoursBefore, VehicleCategory[0], now);
        }).toThrow(new Error('Incorrect entryTimestamp Provided'));
    });
})