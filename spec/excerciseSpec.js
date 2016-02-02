describe("score", function () {
  it("is defined and not more than 8", function () {
    expect(score).toBeDefined();
    expect(score).toEqual(jasmine.any(Number));
    expect(score).toBeGreaterThan(8);
  });
});

// describe("greet", function () {
//   it("is a function", function () {
//     expect(typeof greet).toEqual("function");
//   });
// });

// describe("boy", function () {
//   it("is an object", function () {
//     expect(typeof boy).toEqual("object");
//   });

//   it("is han one attribute called hair that is brown", function () {
//     expect(boy.hair).toEqual("brown");
//   });
// });

// describe("person1", function () {
//   it("is an object", function () {
//     expect(typeof person1).toEqual("object");
//   });
// });







