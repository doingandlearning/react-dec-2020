describe("Setup and teardown:", function () {

    var acc1;

    beforeEach(function() {
        acc1 = {
            name: 'Tom',
            balance: 0,
            deposit: function (amount) {
                this.balance += amount;
            },
            withdraw: function (amount) {
                this.balance -= amount;
            },
        };
    });

    afterEach(function () {
        // Can add teardown code here, if needed.
    });

    it("accounts have 0 balance initially", function () {
        expect(acc1.balance).toBe(0);
    });

    it("deposits increase balance", function () {
        acc1.deposit(100);
        expect(acc1.balance).toBe(100);
    });

    it("withdrawals decrease balance", function () {
        acc1.withdraw(25);
        expect(acc1.balance).toBe(-25);
    });

});