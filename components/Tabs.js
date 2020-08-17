// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.

axios
.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((res) => {    
    let tabArray = [];
    tabArray = res.data.topics;
    console.log(tabArray)

    elemt1.textContent = tabArray[0];
    elemt2.textContent = tabArray[1];
    elemt3.textContent = tabArray[2];
    elemt4.textContent = tabArray[3];
    elemt5.textContent = tabArray[4];

})
.catch((err) => {
    console.log(err);
});

;

// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
const topicsEl = document.querySelector('.topics');
const elemt1 = document.createElement('div');
const elemt2 = document.createElement('div');
const elemt3 = document.createElement('div');
const elemt4 = document.createElement('div');
const elemt5 = document.createElement('div');

elemt1.classList.add('tab');
elemt2.classList.add('tab');
elemt3.classList.add('tab');
elemt4.classList.add('tab');
elemt5.classList.add('tab');

topicsEl.appendChild(elemt1);
topicsEl.appendChild(elemt2);
topicsEl.appendChild(elemt3);
topicsEl.appendChild(elemt4);
topicsEl.appendChild(elemt5);

// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
