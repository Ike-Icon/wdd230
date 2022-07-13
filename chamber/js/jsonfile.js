const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}





// JSon fetch file for directory page

const requestURL = 'https://zeus-max-code.github.io/wdd230/chamber/js/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h3 = document.createElement('h3');
    let contact = document.createElement('p');
    let pageUrl = document.createElement('p');
    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${business.name} (${business.id})`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.logo);
    portrait.setAttribute('alt', `logo of ${business.name} ${business.id} - ${ordinal_suffix_of(business.order)} company`);
    portrait.setAttribute('loading', 'lazy');
    
    contact.innerHTML = `<strong>Contact:</strong> ${business.contact}</strong>`;
    pageUrl.innerHTML = ` ${business.pageurl}`;
    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h3);
    card.appendChild(contact);
    card.appendChild(pageUrl);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}