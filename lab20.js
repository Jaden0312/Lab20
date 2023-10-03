const searchResult = document.getElementById('search-result');
const inputBox = document.getElementById('input-box');
const searchIcon = document.getElementById('push-btn');

searchIcon.addEventListener('click', () => {
    showProducts();
    
});
async function showProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    console.log(jsonData);
    jsonData.forEach(result => {
            console.log(result);
            const imageElements = result.image;
            const title = result.title;
            const rating = result.rating.rate;

            // if (`rating > ${inputBox.value}`) {
                const card = document.createElement('div');
                card.classList.add('card');

                const cardTitle = document.createElement('h3');
                cardTitle.textContent = title;

                const cardImg = document.createElement('img');
                cardImg.src = imageElements;

                const ratingNum = document.createElement('h4');
                ratingNum.textContent = rating;

                card.appendChild(cardTitle);
                card.appendChild(cardImg);
                card.appendChild(ratingNum);

                searchResult.appendChild(card);
            // }

            
        });
};


