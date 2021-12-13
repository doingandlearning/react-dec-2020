// You can create a suite of tests using describe().
describe("A suite", () => {

	// You can define a test using it().
    it("contains a simple spec with an expectation", () => {
        expect(true).toBe(true);
    });

	// You can also define a test using test().
    test("allows you to test actual results against expected outcomes", () => {
        expect(2 + 2).toBe(4);
    });
});
