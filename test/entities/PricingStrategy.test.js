/* eslint-disable no-undef */
import PricingStrategy from "../../entities/ParkingStrategy/PricingStrategy";

describe("PricingStrategy Class", () => {
    it("Check instance of class Pricing", async () => {
        expect(() => {
            PricingStrategy.calculateFees();
        }).toThrow(new Error('Implement calculateFees'))
    });
});