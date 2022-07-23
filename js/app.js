/* this function goes to the battle page if the user has chosen at least one pokemon */
function goToBattle(details) {
    if(Cookies.get(`selection`) !== undefined){
        window.location.href = `selection.html`;
    } else {
        alert(`You should pick a Pokemon first.`);
    }
}
/* gettinh all a tags from the page */
let go_to_battle = document.getElementsByClassName(`go-to-battle`);
/* getting one a tag by one to on click call the function goToBattle */
for(let counter = 0; counter < go_to_battle.length; counter ++){
    go_to_battle[counter].addEventListener(`click`, goToBattle);
}

/* This function creates the charizard object */
let charizard = {
        name: `Charizard`,
        attacks: [`Fire`, `Fly`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png`
    };

function addCharizard(details) {
    /* making the object a JSON*/
    let pokemon_selection_json = JSON.stringify(charizard);
    /* setting the cookie with this JSON */
    Cookies.set(`selection`, pokemon_selection_json);

    let computer_pokemon_selection_json = JSON.stringify(venusaur);
    Cookies.set(`computer_selection`, computer_pokemon_selection_json);

    let user_current_health = charizard[`health`];
    Cookies.set(`user_current_health`, user_current_health);

    let computer_current_health = venusaur[`health`];
    Cookies.set(`computer_current_health`) = computer_current_health;
}

/* getting the charizard button */
let add_charizard = document.getElementById(`button_charizard`);
/* when the user clicks on this button, we call the function addCharizard */
add_charizard.addEventListener(`click`, addCharizard);

/* This function creates the venusaur object */
let venusaur = {
        name: `Venusaur`,
        attacks: [`Leaf`, `Grass`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`
    };

function addVenusaur(details) {
     /* making the object a JSON*/
     let pokemon_selection_json = JSON.stringify(venusaur);
     /* setting the cookie with this JSON */
     Cookies.set(`selection`, pokemon_selection_json);

     let computer_pokemon_selection_json = JSON.stringify(blastoise);
     Cookies.set(`computer_selection`, computer_pokemon_selection_json);
}

/* getting the venusaur button */
let add_venusaur = document.getElementById(`button_venusaur`);
/* when the user clicks on this button, we call the function addVenusaur */
add_venusaur.addEventListener(`click`, addVenusaur);

/* This function creates the blastoise object */
let blastoise = {
    name: `Blastoise`,
    attacks: [`Water`, `Punch`, `Scratch`],
    health: 150,
    img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png`
}

function addBlastoise(details) {
    /* making the object a JSON*/
  let pokemon_selection_json = JSON.stringify(blastoise);
  /* setting the cookie with this JSON */
  Cookies.set(`selection`, pokemon_selection_json);

  let computer_pokemon_selection_json = JSON.stringify(charizard);
  Cookies.set(`computer_selection`, computer_pokemon_selection_json);
}

/* getting the blastoise button */
let add_blastoise = document.getElementById(`button_blastoise`);
/* when the user clicks on this button, we call the function addBlastoise */
add_blastoise.addEventListener(`click`, addBlastoise);