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
    start.addEventListener('click', () => {

        start.disabled = true;
        start.classList.add('run');
        

        setTimeout(() => {
            start.classList.remove('run');
            start.classList.add('finish');

            

        }, 5000);
        start.disabled = false;
    });
    reset.addEventListener('click', () => {

        reset.disabled = true;

        start.classList.remove('finish');
        start.classList.add('run');

        setTimeout(() => {
            reset.disabled = false;
        }, 5000);
    });
});
