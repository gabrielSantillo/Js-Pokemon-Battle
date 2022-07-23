function goToBattle(details) {
    if(Cookies.get(`selection`) !== undefined){
        window.location.href = `selection.html`;
    } else {
        alert(`You should pick a Pokemon first.`);
    }
}

let go_to_battle = document.getElementsByClassName(`go-to-battle`);
for(let counter = 0; counter < go_to_battle.length; counter ++){
    go_to_battle[counter].addEventListener(`click`, goToBattle);
}


/* starting the selection pokemon as an empty array */
let pokemon_selection = [];

/* This function creates the charizard object */
function addCharizard(details) {
    let charizard = {
        name: `Charizard`,
        attacks: [`Fire`, `Fly`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png`
    }

    /* adding the object in the array */
    pokemon_selection.push(charizard);
    /* making the array a JSON*/
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    /* setting the cookie with this JSON */
    Cookies.set(`selection`, pokemon_selection_json);
}

/* getting the charizard button */
let add_charizard = document.getElementById(`button_charizard`);
/* when the user clicks on this button, we call the function addCharizard */
add_charizard.addEventListener(`click`, addCharizard);

/* This function creates the venusaur object */
function addVenusaur(details) {
    let venusaur = {
        name: `Venusaur`,
        attacks: [`Leaf`, `Grass`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`
    }

    /* adding the object in the array */
    pokemon_selection.push(venusaur);
    /* making the array a JSON*/
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    /* setting the cookie with this JSON */
    Cookies.set(`selection`, pokemon_selection_json);
}

/* getting the venusaur button */
let add_venusaur = document.getElementById(`button_venusaur`);
/* when the user clicks on this button, we call the function addVenusaur */
add_venusaur.addEventListener(`click`, addVenusaur);

/* This function creates the blastoise object */
function addBlastoise(details) {
    let blastoise = {
        name: `Blastoise`,
        attacks: [`Water`, `Punch`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png`
    }
    /* adding the object in the array */
    pokemon_selection.push(blastoise);
    /* making the array a JSON*/
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    /* setting the cookie with this JSON */
    Cookies.set(`selection`, pokemon_selection_json);
}

/* getting the blastoise button */
let add_blastoise = document.getElementById(`button_blastoise`);
/* when the user clicks on this button, we call the function addBlastoise */
add_blastoise.addEventListener(`click`, addBlastoise);