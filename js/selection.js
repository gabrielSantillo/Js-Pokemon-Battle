let selection_array = [];
let selection_json = Cookies.get(`selection`);

if(selection_json !== undefined) {
    selection_array = JSON.parse(selection_json);
}

for(let counter = 0; counter < selection_array.length; counter++) {
    if(selection_array !== undefined) {
        document.querySelector(`section`).insertAdjacentHTML(`afterend`, `
        <div class="pokemon_card">
        <img class="img-pokemon" src="${selection_array[counter][`img_url`]}">
        <h2>${selection_array[counter][`name`]}</h2>
        <div id="buttons-attack">
        <button>${selection_array[counter][`attacks`][0]}</button>
        <button>${selection_array[counter][`attacks`][1]}</button>
        <button>${selection_array[counter][`attacks`][2]}</button>
        </div>
        <h4>Health: ${selection_array[counter][`health`]}hp</h4>
        </div>
        `);
    }
}

let section_battle = document.getElementById(`section-battle`);
section_battle[`style`][`display`] = `grid`;
section_battle[`style`][`gridTemplateColumns`] = `repeat(auto-fit, minmax(250px, 1fr));`;

let img_pokemon = document.getElementsByClassName(`img-pokemon`);
for(let counter = 0; counter < img_pokemon.length; counter++) {
    img_pokemon[counter][`style`][`width`] = `300px`
}

let battle_section = document.getElementsByClassName(`pokemon_card`);
for(let counter = 0; counter < battle_section.length; counter++) {
    battle_section[counter][`style`][`display`] = `grid`;
    battle_section[counter][`style`][`placeItems`] = `center`;
    battle_section[counter][`style`][`rowGap`] = `15px`;
}

let buttons_attack = document.getElementById(`buttons-attack`);
buttons_attack[`style`][`display`] = `grid`;
buttons_attack[`style`][`gridTemplateColumns`] = `1fr 1fr 1fr`;
buttons_attack[`style`][`columnGap`] = `15px`;

let buttons = document.querySelectorAll(`button`);
for(let counter = 0; counter < buttons.length; counter++) {
    buttons[counter][`style`][`width`] = `60px`;
    buttons[counter][`style`][`height`] = `25px`;
    buttons[counter][`style`][`border`] = `none`;
    buttons[counter][`style`][`backgroundColor`] = `#8e44ad`;
    buttons[counter][`style`][`color`] = `white`;
    buttons[counter][`style`][`borderRadius`] = `5px`;
    buttons[counter][`style`][`cursor`] = `pointer`;
}