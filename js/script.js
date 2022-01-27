// Question 1
const cat = {
  complain: "Meow!",
  funcCat: function () {
    return this.complain;
  },
};
console.log(cat.complain);

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function list() {
  for (let i = 0; i < cats.length; i++) console.log(cats[i].name);
}
list();

function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    let ageUn = "Age Unknown";
    if (cats[i].age) {
      ageUn = cats[i].age;
    }
    html += document.querySelector(
      ".cat-container"
    ).innerHTML += `<div> <h5>${cats[i].name}</h5><p>${ageUn}</p></div>`;
  }
  return html;
}
createCats(cats);
