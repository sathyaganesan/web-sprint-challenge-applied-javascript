// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles

//hard-coding below tabArray because I'm unable to get the tabArray element that was created in Tabs.justify
//TODO check with instructor and ask
let tabArray = ['ALL', 'bootstrap', 'javascript', 'technology', 'jquery', 'node'];
let topicArticlesMap = new Map();

const tabs = document.querySelectorAll('.tab');
tabs.forEach(element => {
    console.log(' tab names = ' + element);
    element.addEventListener('click', (item) => {        
        console.log(item);

        //TODO hide all articles, all 100s of articles, hide them
        //cardsContainer.removeChildren()

        if(item == 'All'){
            let allArtilcles = topicArticlesMap.values();
            allArtilcles.forEach(item => {
                cardsContainer.appendChild(cardMaker(item));
            });

        } else {
            let articlesToBeShown =  topicArticlesMap.get(item);
            articlesToBeShown.forEach(item => {
                cardsContainer.appendChild(cardMaker(item));
            });
        }
        
    });
});

axios
.get(`https://lambda-times-api.herokuapp.com/articles`)
.then((res) => {    
    tabArray.forEach(element => {
        if(element === 'ALL'){
            //do nothing.. do not store all articles          
        } else {
            let articles = res.data.articles[element];
            topicArticlesMap.set(element, articles);
            console.log('stored map key='+element+' value = '+ articles);

            articles.forEach(element => {
                cardsContainer.appendChild(cardMaker(element));
            });
        }
    });

    // bootstrapArray = res.data.articles.bootstrap;
    // javaScriptArray = res.data.articles.javascript;
    // technologyArray = res.data.articles.technology;
    // jqueryArray = res.data.articles.jquery;
    // nodeArray = res.data.articles.node;
    // console.log(res);

    // bootstrapArray.forEach((item) => {
    //     cardsContainer.appendChild(cardMaker(item));
    // });

    // javaScriptArray.forEach((item) => {
    //     cardsContainer.appendChild(cardMaker(item));
    // });

    // technologyArray.forEach((item) => {
    //     cardsContainer.appendChild(cardMaker(item));
    // });

    // jqueryArray.forEach((item) => {
    //     cardsContainer.appendChild(cardMaker(item));
    // });

    // nodeArray.forEach((item) => {
    //     cardsContainer.appendChild(cardMaker(item));
    // });

    
})

.catch((err) => {
    console.log(err);
});

var topicArticlesArray;

// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

const cardsContainer = document.querySelector('.cards-container');
let cardArray = [];



function cardMaker(argumt) {

// Element creater:
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imageEle = document.createElement('img');
    const authorName = document.createElement('span');

// Appending elements:
    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgContainer);
        imgContainer.appendChild(imageEle);
        imageEle.src = argumt.authorPhoto;
    author.appendChild(authorName);

// Adding classes:
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

// Adding content: 
    headLine.textContent = argumt.headline;
    authorName.textContent = argumt.authorName;

    card.addEventListener('click', () => {
        // headLine.style.color = "red";
        console.log(headLine);
    });

    return card;
}

// console.log(cardMaker());
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
