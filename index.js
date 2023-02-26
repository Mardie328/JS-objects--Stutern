"use strict";

// Question 1
function InstagramPost(
  authorHandle,
  content,
  imageLink,
  numberOfViews,
  numberOfLikes
) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.numberOfViews = numberOfViews;
  this.numberOfLikes = numberOfLikes;
}

// Question 2
// a.
const InstagramPost1 = new InstagramPost(
  "Chimamanda",
  "culture",
  "https://www.instagram.com",
  5000,
  2000
);

console.log(InstagramPost1);

// b.
const InstagramPost2 = new InstagramPost(
  "Chinua Achebe",
  "Literature",
  "https://www.instagram.com",
  2000,
  1500
);

console.log(InstagramPost2);

// Question 3
// a.
function createPerson(name, age, location) {
  return {
    name,
    age,
    location,
  };
}
let musaBiodata = createPerson("Musa Dawodu", 19, "Lekki");
console.log(musaBiodata);

// b.
function createJambScores(eng, govt, lit, crk) {
  return {
    eng,
    govt,
    lit,
    crk,
  };
}
const musaJambScore = createJambScores(70, 85, 82, 94);
console.log(musaJambScore);
console.log(musaBiodata.musaJambScore);

// Question 4
// Using the "for in" loop
// Using the "Object.assign()" method
// Using the spread operator
