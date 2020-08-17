// STEP 1: Create a Header component.
// -----------------------

const headComp = document.querySelector('.header-container');

// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerEl = document.createElement('div');
    const dateEl = document.createElement('span');
    const h1El = document.createElement('h1');
    const temp = document.createElement('span');

    headerEl.classList.add('header');
    dateEl.classList.add('date');
    temp.classList.add('temp');

    dateEl.textContent = 'MARCH 28, 2020';
    h1El.textContent = 'Lambda Times';
    temp.textContent = '98';

    headerEl.appendChild(dateEl);
    headerEl.appendChild(h1El);
    headerEl.appendChild(temp);

    return headerEl
}

    headComp.append(Header());