document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const pseudo = document.getElementById('pseudo').value;
        const arme = document.getElementById('arme').value;
        const personnage = document.getElementById('personnage').value;
        const selectedCamp = document.querySelector('input[name="camp"]:checked');
        let personnages;
        selectedCamp.value === 'Pirate' ? personnages = document.querySelector(`.Pirate`) : personnages = document.querySelector(`.Marine`);
        console.log(selectedCamp);
        console.log(personnages);
        const newFichePersonnage = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        newFichePersonnage.classList.add('fiche-personnage');
        h2.textContent = personnage;
        img.src = 'assets/' + personnage + '.webp';
        img.alt = personnage;

        newFichePersonnage.appendChild(h2);
        newFichePersonnage.appendChild(img);
        personnages.appendChild(newFichePersonnage);

    });

    const start = document.getElementById('start');
    const reset = document.getElementById('reset');
    const game = document.getElementsByClassName('game')[0];

    
    console.log(game.classList);
    
    start.addEventListener('click', () => {

        start.disabled = true;
        game.classList.add('run');
        

        setTimeout(() => {
            game.classList.remove('run');
            game.classList.add('finish');

            

        }, 5000);
        start.disabled = false;
    });
    reset.addEventListener('click', () => {

        reset.disabled = true;

        game.classList.remove('finish');

        setTimeout(() => {
            reset.disabled = false;
        }, 5000);
        const teams = document.getElementsByClassName('personnages');
        for (team of teams) {
            team.textContent = null;
        }
        //getclassname per sonages, setchildren = 0;
    });
});
