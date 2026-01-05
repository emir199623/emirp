const app = {
    user: { name: "", agency: "Bağımsız", balance: 500, level: 1, xp: 0, nextLevelXp: 100, rank: "Üye" },

    init: function() {
        setTimeout(() => {
            document.getElementById("splash-screen").style.display = "none";
            document.getElementById("login-screen").style.display = "flex";
        }, 2500);
    },

    login: function() {
        this.user.name = document.getElementById("username").value;
        this.user.agency = document.getElementById("agency-input").value || "Bağımsız";
        this.user.rank = document.getElementById("user-rank").value;
        if(!this.user.name) return alert("İsim gerekli!");

        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-app").style.display = "block";
        this.updateProfile();
    },

    updateProfile: function() {
        document.getElementById("user-balance").innerText = this.user.balance;
        document.getElementById("user-level").innerText = this.user.level;
    },

    gainXp: function(amt) {
        this.user.xp += amt;
        if(this.user.xp >= this.user.nextLevelXp) {
            this.user.level++;
            this.user.xp = 0;
            alert("Tebrikler! Seviye atladınız.");
        }
        this.updateProfile();
    },

    showPage: function(id) {
        document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
        document.getElementById(id).style.display = 'block';
        if(id === 'page-market') MarketSystem.render();
        if(id === 'page-agency') AgencySystem.render();
    },

    joinRoom: function(id) {
        this.showPage('page-room');
        const sc = document.getElementById("seats-container");
        sc.innerHTML = "";
        for(let i=1; i<=8; i++) {
            sc.innerHTML += `<div class="seat" onclick="PanelSystem.openAdmin('User${i}')">👤<br><small>${i}</small></div>`;
        }
        this.startZego(id);
    },

    closeModal: function(id) { document.getElementById(id).style.display = "none"; },

    startZego: function(roomID) {
        // Zego altyapısı buraya (SDK ile çalışır)
    }
};

app.init();
