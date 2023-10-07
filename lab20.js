//글로벌 변수
const searchResult = document.getElementById('search-result');
const emptyResult = document.getElementById('empty-result');
const inputBox = document.getElementById('input-box');
const searchIcon = document.getElementById('push-btn');

//search 클릭 시
searchIcon.addEventListener('click', () => {
    let i = 1;
    i++;
    if (i <=1) {
        showProducts();
    } else {
        showNewProducts();
    }
});

//제품 보여주기 기능
async function showProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    console.log(jsonData);
    const finalProducts = [];
    for (let i = 0 ; i <= jsonData.length-1; i++) {
        if (jsonData[i].rating.rate > inputBox.value) {
            finalProducts.push(jsonData[i]);
        }
    }
    if (finalProducts.length === 0 ) {
        const message = document.createElement('h2');
        message.textContent = 'No applicable products';
        emptyResult.appendChild(message);
        return;
     };
    console.log(finalProducts);
    finalProducts.forEach(result => {
            console.log(result);
            const imageElements = result.image;
            const title = result.title;
            const rating = result.rating.rate;

            if (rating >= inputBox.value) {
                emptyResult.innerHTML = '';
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
            };
        });
}

//새로운 value 입력시
async function showNewProducts() {
    searchResult.innerHTML = '';
    showProducts();
};


