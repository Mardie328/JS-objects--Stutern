"use strict";

// // Question 1
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

// // Question 2
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

// // Question 3
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
musaBiodata.jambScore = musaJambScore;
console.log(musaBiodata);

// // Question 4
// Using the "for in" loop
let studentClone = {};
const student = {
  firstName: "Mardiyyah",
  lastName: "Taofeek",
  school: "stutern",
  futureAmbition: "Software engineer",
};

for (let key in student) {
  studentClone[key] = student[key];
}

console.log(studentClone);

// Using the "Object.assign()" method
let studentClone2 = {};
const student2 = {
  firstName: "Jola",
  lastName: "Ariyo",
  school: "stutern",
  futureAmbition: "Baker",
};
studentClone2 = Object.assign(student2);
console.log(studentClone2);

// Using the spread operator
let studentClone3 = {};
const student3 = {
  firstName: "Aliyah",
  lastName: "Alade",
  school: "stutern",
  futureAmbition: "Designer",
};
studentClone3 = { ...student3 };
console.log(studentClone3);

// // Question 5
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (let key in presidentialCandidates) {
  console.log(
    `${presidentialCandidates[key]} is the presidential candidate of ${key}`
  );
}
