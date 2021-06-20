const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

// Question 2

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.className = "subheading";

// Question 5

var redParagraphs = document.querySelectorAll("p");
for (let i = 0; i < redParagraphs.length; i++) {
    redParagraphs[i].style.color = "red";
}

// Question 6

var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

// Question 7

function catsList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catsList(cats);

// Question 8

function createCats(cats) {
    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let missingAge = "Age unknown";

        if (cats[i].age) {
            missingAge = cats[i].age;
        }
        html += `
        <div>
            <h5> ${cats[i].name} </h5>
            <p>Age: ${missingAge} </p>
        </div>`
    }
    return html;
}

const newHTML = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;