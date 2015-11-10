////////// Excercise 1 //////////
var dog = {
  name: "Rover",
  legs: 4
};

// Write code here to make the test below pass

describe("The Dog", function () {
  it("Has a name and a color", function () {
    expect(dog['name']).toEqual("Rover");
    expect(dog['color']).toEqual("brown");
  });
});

////////// Excercise 2 //////////

// Write code here to make the test below pass

describe("The Person", function () {
  it("Has a name and an age", function () {
    expect(person['name']).toBeDefined();
    expect(person['age']).toBeDefined();
  });
});

////////// Excercise 3S //////////
var book = {
	title: "The Hunger Games",
	author: "J.K. Rowling "
}

// Write code here to make the test below pass... do not change the code above

describe("The Hunger Games", function () {
	it("Has correct author", function () {
		expect(book.title).toEqual("The Hunger Games");
		expect(book.author).toEqual("Suzanne Collins");
	});
})