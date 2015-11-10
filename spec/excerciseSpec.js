////////// Excercise 1 //////////
var posts = {
  comments: [
    {user: "Aaron", message: "Hey there!"},
    {user: "Avi", message: "Man, this course is awesome!"},
    {user: "Narkis", message: "It's pretty good, but whats your vision?"}
  ]
}

// Write code here to make the test below pass. Hint: you will need to "push" a new object into the comments array.

describe("Posts", function () {
  it("Has a comment from Alex", function () {
    expect(posts.comments[3].user).toEqual("Alex");
  });
});