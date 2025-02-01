const players = [];
const playerList = document.getElementById('playerList');
const addPlayerButton = document.getElementById('addPlayerButton');
const sortOptions = document.getElementById('sortOptions');

addPlayerButton.addEventListener('click', addPlayer);

function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const score = document.getElementById('score').value;
    const level = document.getElementById('level').value;

    if (!playerName || players.length >= 10) {
        alert('Please enter a valid player name and ensure the max limit is not exceeded.');
        return;
    }

    const player = { name: playerName, score: parseInt(score), level: parseInt(level) };
    players.push(player);
    displayPlayers();
    clearInputs();
}

function clearInputs() {
    document.getElementById('playerName').value = '';
    document.getElementById('score').value = '';
    document.getElementById('level').value = '';
}

function displayPlayers() {
    playerList.innerHTML = '';
    const sortedPlayers = players.slice().sort(sortByOption());
    
    sortedPlayers.forEach((player, index) => {
        const div = document.createElement('div');
        div.className = 'player-item';
        div.innerHTML = `${index + 1}. ${player.name} - Score: ${player.score}, Level: ${player.level}`;
        playerList.appendChild(div);
    });
}

function sortByOption() {
    return (a, b) => {
        const sortBy = sortOptions.value;
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        return b[sortBy] - a[sortBy];
    };
}

sortOptions.addEventListener('change', displayPlayers);