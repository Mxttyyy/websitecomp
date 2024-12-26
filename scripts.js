// Replace with your Minecraft server's API endpoint
const serverIP = 'play.mxttyy.co.uk'; // Your server's IP address

// Function to get the live player count
async function getPlayerCount() {
    try {
        const response = await fetch(`https://mcapi.us/server/status?ip=${serverIP}`);
        const data = await response.json();
        
        // Display player count
        if (data.online) {
            document.getElementById('playerCount').textContent = `Players Online: ${data.players.now}`;
        } else {
            document.getElementById('playerCount').textContent = "Server is Offline";
        }
    } catch (error) {
        document.getElementById('playerCount').textContent = "Error fetching player count";
        console.error('Error fetching player count:', error);
    }
}

// Run the function on page load
window.onload = getPlayerCount;
