const MarketSystem = {
    selectedCurrency: 'TL',

    render: function() {
        const container = document.getElementById("page-market");
        container.innerHTML = `
            <div class="market-header">
                <h3>💎 Mağaza</h3>
                <div class="curr-btns">
                    ${Object.keys(EconomySystem.currencies).map(c => 
                        `<button class="${this.selectedCurrency === c ? 'active' : ''}" 
                        onclick="MarketSystem.setCurrency('${c}')">${c}</button>`
                    ).join('')}
                </div>
            </div>
            <div class="market-grid">
                ${EconomySystem.packages.map(p => {
                    const price = (p.price * EconomySystem.currencies[this.selectedCurrency].rate).toFixed(2);
                    return `
                        <div class="market-card">
                            <div class="coin-icon">🪙</div>
                            <div class="coin-amount">${p.coins}</div>
                            <button onclick="EconomySystem.processPurchase('${p.id}', '${this.selectedCurrency}')">
                                ${price} ${this.selectedCurrency}
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
            <p class="secure-tag">🔒 Alisa Live Güvenli Ödeme Sertifikalı</p>
        `;
    },

    setCurrency: function(c) {
        this.selectedCurrency = c;
        this.render();
    }
};
