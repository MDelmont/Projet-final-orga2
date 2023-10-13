document.addEventListener("DOMContentLoaded", () => {

// partie formulaire

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pseudo = document.getElementById("pseudo").value;
    const arme = document.getElementById("arme").value;
    const personnage = document.getElementById("personnage").value;
    const selectedCamp = document.querySelector('input[name="camp"]:checked');
    let personnages;
    selectedCamp.value === "Pirate"
      ? (personnages = document.querySelector(`.Pirate`))
      : (personnages = document.querySelector(`.Marine`));
    console.log(selectedCamp);
    console.log(personnages);

    const newFichePersonnage = document.createElement("div");
    const h2 = document.createElement("h2");

    const picture = document.createElement("picture");
    const img = document.createElement("img");
    const sources1 = document.createElement("source");
    sources1.srcset = "assets/" + personnage.toLowerCase() + ".webp";
    sources1.type = "image/webp";
    const sources2 = document.createElement("source");
    sources2.srcset = "assets/" + personnage.toLowerCase() + ".jpg";
    sources2.type = "image/jpeg";
    img.src = "assets/" + personnage.toLowerCase() + ".jpg";
    img.alt = personnage;
    picture.appendChild(sources1);
    picture.appendChild(sources2);
    picture.append(img);

    newFichePersonnage.classList.add("fiche-personnage");
    h2.textContent = personnage;

    newFichePersonnage.appendChild(h2);
    newFichePersonnage.appendChild(picture);
    personnages.appendChild(newFichePersonnage);
  });



// partie game

  const start = document.getElementById("start");
  const reset = document.getElementById("reset");
  const game = document.getElementsByClassName("game")[0];

  console.log(game.classList);

  start.addEventListener("click", () => {
    start.disabled = true;
    game.classList.add("run");

    setTimeout(() => {
      game.classList.remove("run");
      game.classList.add("finish");
    }, 5000);
    start.disabled = false;
  });

  reset.addEventListener("click", () => {
    reset.disabled = true;

    game.classList.remove("finish");

    setTimeout(() => {
      reset.disabled = false;
    }, 5000);
    const teams = document.getElementsByClassName("personnages");
    for (team of teams) {
      team.textContent = null;
    }
    //getclassname per sonages, setchildren = 0;
  });
});
