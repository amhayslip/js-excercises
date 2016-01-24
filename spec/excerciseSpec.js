////////// Excercise 1 //////////
var post = {
  comments: [
    {user: "Aaron", message: "Hey there!"},
    {user: "Avi", message: "Man, this course is awesome!"},
    {user: "Narkis", message: "It's pretty good, but whats your vision?"}
  ]
}

// Write code here to make the test below pass... do not change the code above.

describe("Post", function () {
  it("Has a comment from Alex", function () {
    expect(post.comments[3].user).toEqual("Alex");
  });
});


////////// Excercise 2 //////////
var beer = {};

// Add code to the beer object above to make the test pass.

describe("Beer", function () {
  it("Has reviews", function () {
    expect(beer.reviews[0].user).toEqual("Avi");
  });
});

////////// Excercise 3 //////////
var person = {};

// Add code to the person object above to make the test pass.

describe("Hungry", function () {
  it("Is not hungry", function () {
    expect(person.hungry(false)).toEqual(false);
  });
});

////////// Excercise 4 //////////
var car = {
  position: 0,
  go: function () {
    this.position += 1
  }
}

// Write code here to make this test pass... do not change the code above.

describe("car", function () {
  it("Is has moved forward", function () {
    expect(car.position).toEqual(1);
  });
});