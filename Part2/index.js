const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset() {
    const diamonds = document.getElementById('diamonds');
    const clubs = document.getElementById('clubs');
    const hearts = document.getElementById('hearts');
    const spades = document.getElementById('spades');

    diamonds.style.color = 'gray';
    clubs.style.color = 'gray';
    hearts.style.color = 'gray';
    spades.style.color = 'gray';
}