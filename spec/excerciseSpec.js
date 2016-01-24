///////////// Exercise 1 /////////////
// Finish both the Beer and User constructor functions to make the tests below pass. Do no alter any other code.

var Beer = function (name) {
	// Write code here to make the tests pass
};

var User = function (name) {
	// Write code here to make the test pass
};

var beer1 = new Beer("Tuborg");
var aaron = new User("Aaron");

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

///////////// Exercise 2 /////////////
var data = {
  instagramPosts: [
    { username: "Aaron", image: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s640x640/sh0.08/e35/12383586_954824167898785_773488882_n.jpg" },
    { username: "John", image: "https://scontent.cdninstagram.com/hphotos-xpt1/t51…320/e35/12568096_1172805772746892_428398003_n.jpg" },
    { username: "Avi", image: "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/s320x320/e35/12568096_1172805772746892_428398003_n.jpg" },
    { username: "Jim Bob", image: "https://scontent.cdninstagram.com/hphotos-xfp1/t51…20/e35/12534156_1519248898370351_1479474058_n.jpg" },
    { username: "Susie", image: "https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/s320x320/e35/12534156_1519248898370351_1479474058_n.jpg" }
  ]
}

var urls = [];

// Write a for loop here that pushes all the image url's into the "urls" array

describe("the urls array", function () {
  it("has 5 image urls", function () {
    expect(urls.length).toEqual(5);
  });
  it("has the correct urls", function () {
    expect(urls[4]).toEqual("https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/s320x320/e35/12534156_1519248898370351_1479474058_n.jpg");
  });
});





