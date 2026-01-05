const AgencySystem = {
    render: function() {
        const container = document.getElementById("page-agency");
        container.innerHTML = `
            <div class="agency-card">
                <h4>🏢 Ajansım: ${app.user.agency}</h4>
                <div class="ag-stats">
                    <div class="stat"><b>12</b><br>Yayıncı</div>
                    <div class="stat"><b>45K</b><br>Hedef</div>
                </div>
                <button class="ag-btn" onclick="alert('Ajans davet kodu: ALISA-2024')">Üye Davet Et</button>
                <button class="ag-btn sec" onclick="alert('Destek hattına bağlandınız.')">Ajans Desteği</button>
            </div>
        `;
    }
};
