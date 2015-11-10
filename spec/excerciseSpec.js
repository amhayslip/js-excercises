// Finish both the Beer and User constructor functions to make all the tests below pass. Do no alter any other code.

var Beer = function (name) {
	// Write code here to make the tests pass
};

var User = function (name) {
	// Write code here to make the test pass
};

var beer1 = new Beer("Tuborg");
var aaron = new User("Aaron");
beer1.addReview(aaron, "This beer is refreshing!");

describe("beer1", function () {
  it("is named Tuborg", function () {
    expect(beer1.name).toEqual("Tuborg");
  });
  it("has one review", function () {
    expect(beer1.reviews.length).toEqual(1);
  });
  it("has one review by Aaron", function () {
    expect(beer1.reviews[0].user.name).toEqual("Aaron");
  });
});

describe("aaron", function () {
  it("is named Aaron", function () {
    expect(aaron.name).toEqual("Aaron");
  });
});
