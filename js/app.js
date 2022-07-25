/* this function goes to the battle page if the user has chosen the pokemon */
function goToBattle(details) {
  /* this if checks if the json is not empty to then leave the user to the battle page */
  if (Cookies.get(`selection`) !== undefined) {
    window.location.href = `selection.html`;
  } else {
  /* else make alert in the page that tell the user to pick a pokemon */
    alert(`You should pick a Pokemon first.`);
  }
}
/* gettinh all a tags from the page */
let go_to_battle = document.getElementsByClassName(`go-to-battle`);
/* getting one a tag by one to on click call the function goToBattle */
for (let counter = 0; counter < go_to_battle.length; counter++) {
  go_to_battle[counter].addEventListener(`click`, goToBattle);
}

/* variable that stocks the number of attacks the user can make */
let first_attack_stock = 3;
/* setting the cookie with the value if the first_attack_stock */
Cookies.set(`first_attack_stock`, first_attack_stock);
/* variable that stocks the number of attacks the user can make */
let second_attack_stock = 4;
/* setting the cookie with the value if the second_attack_stock */
Cookies.set(`second_attack_stock`, second_attack_stock);
/* variable that stocks the number of attacks the user can make */
let third_attack_stock = 5;
/* setting the cookie with the value if the third_attack_stock */
Cookies.set(`third_attack_stock`, third_attack_stock);
/* variable that stocks the number of attacks the user can make */
let fourth_attack_stock = 4;
/* setting the cookie with the value if the fourth_attack_stock */
Cookies.set(`fourth_attack_stock`, fourth_attack_stock);

/* this is the variable that creates the object Charizard */
let charizard = {
  name: `Charizard`,
  attacks: [`Fire`, `Fly`, `Scratch`, `Recovery`],
  health: 150,
  img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png`,
};

/* this function add the charizard to the battle */
function addCharizard(details) {
  /* making the object a JSON*/
  let pokemon_selection_json = JSON.stringify(charizard);
  /* setting the selection cookie with this JSON */
  Cookies.set(`selection`, pokemon_selection_json);

  /* getting the computer pokemon and setting into a JSON */
  let computer_pokemon_selection_json = JSON.stringify(venusaur);
  /* setting the cookie of the computer_selection with the JSON */
  Cookies.set(`computer_selection`, computer_pokemon_selection_json);

  /* making the variable receive the pokemon user health number */
  let user_current_health = charizard[`health`];
  /* setting the cookie user_current_health with the JSON */
  Cookies.set(`user_current_health`, user_current_health);

  /* making the variable receive the pokemon computer health number */
  let computer_current_health = venusaur[`health`];
  /* setting the cookie computer_current_health with the JSON */
  Cookies.set(`computer_current_health`, computer_current_health);

  /* making an alert to tell the user which pokemon was picked and telling to click on the battle button */
  alert(`You picked ${charizard[`name`]}. Click in the Battle button now.`);
}

/* getting the charizard button */
let add_charizard = document.getElementById(`button_charizard`);
/* when the user clicks on this button, we call the function addCharizard */
add_charizard.addEventListener(`click`, addCharizard);

/* this is the variable that creates the object Venusaur */
let venusaur = {
  name: `Venusaur`,
  attacks: [`Leaf`, `Grass`, `Scratch`, `Recovery`],
  health: 150,
  img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`,
};

/* this function add the venusaur to the battle */
function addVenusaur(details) {
  /* making the object a JSON*/
  let pokemon_selection_json = JSON.stringify(venusaur);
  /* setting the cookie with this JSON */
  Cookies.set(`selection`, pokemon_selection_json);

  /* getting the computer pokemon and setting into a JSON */
  let computer_pokemon_selection_json = JSON.stringify(blastoise);
  /* setting the cookie of the computer_selection with the JSON */
  Cookies.set(`computer_selection`, computer_pokemon_selection_json);

  /* making the variable receive the pokemon user health number */
  let user_current_health = venusaur[`health`];
  /* setting the cookie user_current_health with the JSON */
  Cookies.set(`user_current_health`, user_current_health);

  /* making the variable receive the pokemon computer health number */
  let computer_current_health = blastoise[`health`];
  /* setting the cookie computer_current_health with the JSON */
  Cookies.set(`computer_current_health`, computer_current_health);

  /* making an alert to tell the user which pokemon was picked and telling to click on the battle button */
  alert(`You picked ${venusaur[`name`]}. Click in the Battle button now.`);
}

/* getting the venusaur button */
let add_venusaur = document.getElementById(`button_venusaur`);
/* when the user clicks on this button, we call the function addVenusaur */
add_venusaur.addEventListener(`click`, addVenusaur);

/* this is the variable that creates the object Blastoise */
let blastoise = {
  name: `Blastoise`,
  attacks: [`Water`, `Punch`, `Scratch`, `Recovery`],
  health: 150,
  img_url: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png`,
};

/* this function add the blastoise to the battle */
function addBlastoise(details) {
  /* making the object a JSON*/
  let pokemon_selection_json = JSON.stringify(blastoise);
  /* setting the cookie with this JSON */
  Cookies.set(`selection`, pokemon_selection_json);

  /* getting the computer pokemon and setting into a JSON */
  let computer_pokemon_selection_json = JSON.stringify(charizard);
  /* setting the cookie of the computer_selection with the JSON */
  Cookies.set(`computer_selection`, computer_pokemon_selection_json);

  /* making the variable receive the pokemon user health number */
  let user_current_health = blastoise[`health`];
  /* setting the cookie user_current_health with the JSON */
  Cookies.set(`user_current_health`, user_current_health);

  /* making the variable receive the pokemon computer health number */
  let computer_current_health = charizard[`health`];
  /* setting the cookie computer_current_health with the JSON */
  Cookies.set(`computer_current_health`, computer_current_health);

  /* making an alert to tell the user which pokemon was picked and telling to click on the battle button */
  alert(`You picked ${blastoise[`name`]}. Click in the Battle button now.`);
}

/* getting the blastoise button */
let add_blastoise = document.getElementById(`button_blastoise`);
/* when the user clicks on this button, we call the function addBlastoise */
add_blastoise.addEventListener(`click`, addBlastoise);
