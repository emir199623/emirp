const PanelSystem = {
    openAdmin: function(userName) {
        if (app.user.rank === "Üye") return alert("Yetkiniz yetersiz.");
        
        const content = `
            <h4>Yönetim: ${userName}</h4>
            <button class="adm-btn" onclick="app.closeModal('admin-modal')">🔇 Sustur</button>
            <button class="adm-btn red" onclick="app.closeModal('admin-modal')">🚫 Odadan At</button>
        `;
        document.querySelector("#admin-modal .modal-content").innerHTML = content;
        document.getElementById("admin-modal").style.display = "block";
    }
};
