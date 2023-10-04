
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const pseudo = document.getElementById('pseudo').value;
        const arme = document.getElementById('arme').value;
        const personnage = document.getElementById('personnage').value;
        const selectedCamp = document.querySelector('input[name="camp"]:checked');
        let personnages;
        selectedCamp.value === 'Pirate' ? personnages = document.querySelector(`.Pirate`) :  personnages = document.querySelector(`.Marine`);
        
        const newFichePersonnage = document.createElement('div'); //création div + h2 + img
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
    

    //querySelector(game)
    //rajouter run dans game
  });