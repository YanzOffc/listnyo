document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const clock = document.getElementById('clock');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }


    // Event listener untuk tombol jumpscare
    const jumpscareButton = document.getElementById('jumpscare-button');
    jumpscareButton.addEventListener('click', function() {
        window.location.href = 'jumpscare.html'; // Arahkan ke halaman jumpscare
    });

    setInterval(updateClock, 1000); // Update jam setiap detik

    const players = [
        { name: "Christo", percentage: 97, status: "green" },
        { name: "Rafasya", percentage: 95, status: "green" },
        { name: "Janua", percentage: 85, status: "green" },
        { name: "Akila", percentage: 92, status: "green" },
        { name: "Rahmat", percentage: 90, status: "green" },
        { name: "Lintang", percentage: 88, status: "green" },
        { name: "Eza", percentage: 87, status: "green" },
        { name: "Rafael", percentage: 85, status: "green" },
        { name: "Abyan", percentage: 82, status: "green" },
        { name: "Restu", percentage: 80, status: "yellow" },
        { name: "Nico", percentage: 78, status: "yellow" },
        { name: "Asga", percentage: 75, status: "yellow" },
        { name: "Eki", percentage: 70, status: "yellow" },
        { name: "Argha", percentage: 67, status: "yellow" },
        { name: "Chio", percentage: 60, status: "yellow" }
    ];

    const playerList = document.getElementById('player-list');
    
    players.forEach(player => {
        const playerItem = document.createElement('li');
        playerItem.className = 'player';
        
        const playerName = document.createElement('span');
        playerName.className = 'name';
        playerName.textContent = player.name;
        
        const playerPercentage = document.createElement('span');
        playerPercentage.className = 'percentage';

        // Animasi persentase acak
        let intervalId;
        function startRandomPercentage() {
            intervalId = setInterval(() => {
                const randomPercentage = Math.floor(Math.random() * 100);
                playerPercentage.textContent = `${randomPercentage}%`;
            }, 100);
        }

        function showRealPercentage() {
            clearInterval(intervalId);
            playerPercentage.textContent = `${player.percentage}%`;
        }

        // Memulai animasi acak
        startRandomPercentage();
        setTimeout(showRealPercentage, 3000); // Persentase asli muncul setelah 3 detik
        
        const statusIndicator = document.createElement('span');
        statusIndicator.className = `status ${player.status}`;
        
        playerItem.appendChild(playerName);
        playerItem.appendChild(playerPercentage);
        playerItem.appendChild(statusIndicator);
        
        playerList.appendChild(playerItem);
    });
});