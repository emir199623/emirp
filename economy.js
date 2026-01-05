const EconomySystem = {
    currencies: {
        'TL': { symbol: '₺', rate: 1 },
        'AZN': { symbol: '₼', rate: 0.051 },
        'USD': { symbol: '$', rate: 0.030 }
    },

    packages: [
        { id: 'p1', coins: 100, price: 50 },
        { id: 'p2', coins: 1000, price: 450 },
        { id: 'p3', coins: 10000, price: 4000 }
    ],

    // Sipariş oluşturma ve Güvenlik
    processPurchase: function(pkgId, currency) {
        const pkg = this.packages.find(p => p.id === pkgId);
        const finalPrice = (pkg.price * this.currencies[currency].rate).toFixed(2);
        const orderToken = btoa(Date.now() + app.user.name); // Basit bir güvenlik tokenı

        const confirmMsg = `
            ALISA LIVE GÜVENLİ ÖDEME
            ------------------------
            Paket: ${pkg.coins} Jeton
            Tutar: ${finalPrice} ${currency}
            Kullanıcı: ${app.user.name}
            
            Ödemeyi onaylıyor musunuz?`;

        if (confirm(confirmMsg)) {
            // Gerçek sistemde burası API'ye gider
            app.user.balance += pkg.coins;
            app.gainXp(Math.floor(pkg.coins / 10)); // Satın alım XP verir
            app.updateProfile();
            alert("İşlem Başarılı! Jetonlar cüzdanınıza eklendi. Sipariş No: " + orderToken.substring(0,8));
        }
    }
};
