// Получение данных о балансе и активах (имитация, в реальной ситуации данные будут браться из API)
const assetsData = [
    { name: "Thether", symbol: "USDT", balance: 0, price: 0 },
    { name: "TonCoin", symbol: "TON", balance: 0, price: 0 },
    // Добавьте сюда другие активы 
];

// Обновление общего баланса
function updateTotalBalance() {
    let totalBalance = 0;
    assetsData.forEach(asset => {
        totalBalance += asset.balance * asset.price;
    });
    document.getElementById('total-balance').textContent = totalBalance;
}

// Отображение активов
function displayAssets() {
    const assetList = document.getElementById('asset-list');
    assetList.innerHTML = ''; // Очистка предыдущего списка
    assetsData.forEach(asset => {
        const assetElement = document.createElement('div');
        assetElement.classList.add('asset');

        const iconElement = document.createElement('div');
        iconElement.classList.add('asset-icon');
        iconElement.textContent = asset.symbol; // Используйте иконки вместо символов

        const nameElement = document.createElement('div');
        nameElement.classList.add('asset-name');
        nameElement.textContent = asset.name;

        const priceElement = document.createElement('div');
        priceElement.classList.add('asset-price');
        priceElement.textContent = `${asset.balance} ${asset.symbol} (${asset.price} ₽)`;

        assetElement.appendChild(iconElement);
        assetElement.appendChild(nameElement);
        assetElement.appendChild(priceElement);
        assetList.appendChild(assetElement);
    });
}

// Инициализация Mini App
window.Telegram.WebApp.ready();
updateTotalBalance();
displayAssets();

// Обработка событий кнопок (имитация)
document.getElementById('top-up').addEventListener('click', () => {
    // Здесь будет код для открытия диалога пополнения баланса
    console.log("Пополнение баланса");
});

document.getElementById('withdraw').addEventListener('click', () => {
    // Здесь будет код для открытия диалога вывода средств
    console.log("Вывод средств");
});

document.getElementById('exchange').addEventListener('click', () => {
    // Здесь будет код для перехода на биржу
    console.log("Переход на биржу");
});

// Обновление данных (имитация, в реальной ситуации будет использоваться API)
setInterval(() => {
    // Обновление балансов и цен
    assetsData.forEach(asset => {
        // Здесь будет код для получения данных о балансе и цене из API
        // asset.balance = полученный баланс;
        // asset.price = полученная цена;
    });

    updateTotalBalance();
    displayAssets();
}, 5000); // Обновление каждые 5 секунд