// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.

let tabArray = [];
axios
.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((res) => {    
    tabArray = res.data.topics;
    console.log('total tabs = ' + tabArray.length);

    //hard-code ALL tab
    const allElemt = document.createElement('div');
    allElemt.textContent = "All";
    allElemt.classList.add('tab');
    topicsEl.appendChild(allElemt);

    tabArray.forEach(element => {
        const elemt1 = document.createElement('div');
        elemt1.textContent = element;
        elemt1.classList.add('tab');
        elemt1.addEventListener('click', (item) => {
            console.log(' tab names = ' + element);
        });
        topicsEl.appendChild(elemt1);
        
    });
    
})
.catch((err) => {
    console.log(err);
});

const topicsEl = document.querySelector('.topics');

// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>








// allElemt.addEventListener('click', () => {
//     card.style.display = "block";
// });

// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
