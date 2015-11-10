////////// Excercise 1 //////////
var person = {
	eat: function () {
		this.hungry = !this.hungry;
	}
};

person.eat();

// Add a default attribute to the person object to make the test below pass

describe("Person", function () {
  it("is not hungry after she eats, but is before", function () {
    expect(person.hungry).toEqual(false);
  });
});

////////// Excercise 2 //////////
var bank = {
	accounts: [
		{ name: "Aaron", balance: 200 },
		{ name: "Avi", balance: 5 },
		{ name: "Narkis", balance: 500 }
	],
	deposit: function (index, amount) {
		this.accounts[index].balance += amount;
	}
}

// Write code here to make the test below pass. Do no change any code above.

describe("Bank", function () {
  it("account for Aaron has an increased balance", function () {
    expect(bank.accounts[0].balance).toEqual(300);
  });
});
