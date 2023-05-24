/* eslint-disable no-undef */
import PricingStrategy from "../../entities/PricingStrategy";

describe("PricingStrategy Class", () => {
    it("Check instance of class Pricing", async () => {
        expect(() => {
            new PricingStrategy().calculateFees();
        }).toThrow(new Error('Implement calculateFees'))
    });
});