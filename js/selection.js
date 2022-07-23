function goBack(details) {
    window.location.href = `index.html`
}

let arrow_back = document.getElementById(`arrow-left`);
arrow_back.addEventListener(`click`, goBack);
arrow_back[`style`][`cursor`] = `pointer`;

/* starting the selection array as an empty array*/
let selection_array = [];
/* receiveing the cookie value as json */
let selection_json = Cookies.get(`selection`);

/* making sure that the selection is not undefined to set the selection_array to an array of objects */
if(selection_json !== undefined) {
    selection_array = JSON.parse(selection_json);
}

/* for loop that walks the array of objects */
for(let counter = 0; counter < selection_array.length; counter++) {
    /* if the array is not undefined will add to the html information about the object selected */
    if(selection_array !== undefined) {
        document.querySelector(`section`).insertAdjacentHTML(`afterend`,
        /* insert in the screen the object with its image, name, attakcs and health */
        `<div class="pokemon_card">
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

/* get the section with its id */
let section_battle = document.getElementById(`section-battle`);
/* these two lines of code stylizes the elements being added to the page */
section_battle[`style`][`display`] = `grid`;
section_battle[`style`][`gridTemplateColumns`] = `repeat(auto-fit, minmax(250px, 1fr));`;

/* getting all img of the page */
let img_pokemon = document.getElementsByClassName(`img-pokemon`);
/* giving all images a good size to fit well */
for(let counter = 0; counter < img_pokemon.length; counter++) {
    img_pokemon[counter][`style`][`width`] = `300px`
}

/* getting all pokemons card that might appear in the page */
let battle_section = document.getElementsByClassName(`pokemon_card`);
/* giving all these cards some style to lok good */
for(let counter = 0; counter < battle_section.length; counter++) {
    battle_section[counter][`style`][`display`] = `grid`;
    battle_section[counter][`style`][`placeItems`] = `center`;
    battle_section[counter][`style`][`rowGap`] = `15px`;
}

/* getting the div that contais buttons attack */
let buttons_attack = document.getElementById(`buttons-attack`);
/* styling the way that the buttons will display */
buttons_attack[`style`][`display`] = `grid`;
buttons_attack[`style`][`gridTemplateColumns`] = `1fr 1fr 1fr`;
buttons_attack[`style`][`columnGap`] = `15px`;

/* getting all buttons of the page */
let buttons = document.querySelectorAll(`button`);
/* styling all buttons to look good */
for(let counter = 0; counter < buttons.length; counter++) {
    buttons[counter][`style`][`width`] = `60px`;
    buttons[counter][`style`][`height`] = `25px`;
    buttons[counter][`style`][`border`] = `none`;
    buttons[counter][`style`][`backgroundColor`] = `#8e44ad`;
    buttons[counter][`style`][`color`] = `white`;
    buttons[counter][`style`][`borderRadius`] = `5px`;
    buttons[counter][`style`][`cursor`] = `pointer`;
}