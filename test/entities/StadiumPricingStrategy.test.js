/* eslint-disable no-undef */
import VehicleCategory from "../../const/VehicleCategory";
import StadiumPricingStrategy from "../../entities/StadiumPricingStrategy";

describe("StadiumPricingStrategy Class", () => {
    it("Check StadiumPricingStrategy for 2wheeler + 5 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date5HoursBefore = Date.now() - 18000000;
        const fees = stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[0]);

        expect(fees).toEqual(90);
    });

    it("Check StadiumPricingStrategy for 2wheeler + 3 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date3HoursBefore = Date.now() - 10800000;
        const fees = stadiumPricing.calculateFees(date3HoursBefore, VehicleCategory[0]);

        expect(fees).toEqual(30);
    });

    it("Check StadiumPricingStrategy for 2wheeler + 14 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date14HoursBefore = Date.now() - 50400000;
        const fees = stadiumPricing.calculateFees(date14HoursBefore, VehicleCategory[0]);

        expect(fees).toEqual(290);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 5 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date5HoursBefore = Date.now() - 18000000;
        const fees = stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[1]);

        expect(fees).toEqual(120);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 3 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date5HoursBefore = Date.now() - 10800000;
        const fees = stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[1]);

        expect(fees).toEqual(60);
    });

    it("Check StadiumPricingStrategy for 4wheeler-light + 14 hours", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date5HoursBefore = Date.now() - 50400000;
        const fees = stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[1]);

        expect(fees).toEqual(520);
    });

    it("Check StadiumPricingStrategy for 4wheeler-heavy", async () => {
        const stadiumPricing = new StadiumPricingStrategy();
        const date5HoursBefore = Date.now() - 18000000;
        const fees = stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[2]);

        expect(fees).toEqual(0);
    });

    it("Check StadiumPricingStrategy passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const stadiumPricing = new StadiumPricingStrategy();
            const date5HoursBefore = Date.now() - 18000000;
            stadiumPricing.calculateFees(date5HoursBefore, "2wheelers");
        }).toThrow(new Error('Incorrect vehicleCategory Provided'));
    });

    it("Check entryTimestamp passed in calculateFees is valid", async () => {
        expect(() => {
            // eslint-disable-next-line no-new
            const stadiumPricing = new StadiumPricingStrategy();
            const date5HoursBefore = `${Date.now() - 18000000}`;
            stadiumPricing.calculateFees(date5HoursBefore, VehicleCategory[0]);
        }).toThrow(new Error('Incorrect entryTimestamp Provided'));
    });
})