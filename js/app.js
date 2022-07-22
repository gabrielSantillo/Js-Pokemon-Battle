let pokemon_selection = [];

function addCharizard(details) {
    let charizard = {
        name: `Charizard`,
        attacks: [`Fire`, `Fly`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png`
    }

    pokemon_selection.push(charizard);
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    Cookies.set(`selection`, pokemon_selection_json);
}

let add_charizard = document.getElementById(`button_charizard`);
add_charizard.addEventListener(`click`, addCharizard);

function addVenusaur(details) {
    let venusaur = {
        name: `Venusaur`,
        attacks: [`Leaf`, `Grass`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`
    }

    pokemon_selection.push(venusaur);
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    Cookies.set(`selection`, pokemon_selection_json);
}

let add_venusaur = document.getElementById(`button_venusaur`);
add_venusaur.addEventListener(`click`, addVenusaur);

function addBlastoise(details) {
    let blastoise = {
        name: `Blastoise`,
        attacks: [`Water`, `Punch`, `Scratch`],
        health: 150,
        img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png`
    }

    pokemon_selection.push(blastoise);
    let pokemon_selection_json = JSON.stringify(pokemon_selection);
    Cookies.set(`selection`, pokemon_selection_json);
}

let add_blastoise = document.getElementById(`button_blastoise`);
add_blastoise.addEventListener(`click`, addBlastoise);