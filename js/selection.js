/* this function leave the user back to the pokemon options */
function goBack(details) {
  window.location.href = `index.html`;
}

/* this variable get the arrwo left from the page */
let arrow_back = document.getElementById(`arrow-left`);
/* by clicking in this arrow the function is called */
arrow_back.addEventListener(`click`, goBack);

/* starting the selection as an empty string*/
let selection = ``;

/* starting the computer selection as an empty string*/
let computer_selection = ``;

/* receiveing the selection cookie value as json */
let selection_json = Cookies.get(`selection`);

/* receiveing the computer selection cookie value as json */
let computer_selection_json = Cookies.get(`computer_selection`);

/* receiveing the user current health as string and turning into number*/
let user_current_health = parseInt(Cookies.get(`user_current_health`));

/* receiveing the computer current health as string and turning into number*/
let computer_current_health = parseInt(Cookies.get(`computer_current_health`));

/* getting the value of the cookie and saving in the variable as a integer */
let first_attack_stock = parseInt(Cookies.get(`first_attack_stock`));
/* getting the value of the cookie and saving in the variable as a integer */
let second_attack_stock = parseInt(Cookies.get(`second_attack_stock`));
/* getting the value of the cookie and saving in the variable as a integer */
let third_attack_stock = parseInt(Cookies.get(`third_attack_stock`));
/* getting the value of the cookie and saving in the variable as a integer */
let fourth_attack_stock = parseInt(Cookies.get(`fourth_attack_stock`));

let pokeball_stock = parseInt(Cookies.get(`pokeball_stock`));

/* making sure that the selection is not undefined to set to an object */
if (selection_json !== undefined) {
  /* making the selection JSON back to an object again */
  selection = JSON.parse(selection_json);

  /* making the selection JSON back to an object again */
  computer_selection = JSON.parse(computer_selection_json);

  document.getElementById(`section-battle`).insertAdjacentHTML(
    `afterbegin`,
    /* adding to the page before the section the computer pokemon and then, the user pokemon */
    `<div>
        <img id="computer-pokemon" src="${computer_selection[`img_url`]}">
        <h2 id="computer-pokemon-name">${computer_selection[`name`]}</h2>
        <h3 id="computer-health">${computer_current_health}hp</h3>
    </div>
    
    <div>
        <img class="img-battle" src="${selection[`img_url`]}">
        <h2 class="name-pokemon">${selection[`name`]}</h2>
        <div id="div-buttons-attack">
        <button class="button-attacks" id="attack_one">${
          selection[`attacks`][0]
        }</button>
        <p id="first-stock">${first_attack_stock}/3</p>
        <button class="button-attacks" id="attack-two">${
          selection[`attacks`][1]
        }</button>
        <p id="second-stock">${second_attack_stock}/4</p>
        <button class="button-attacks" id="attack-three">${
          selection[`attacks`][2]
        }</button>
        <p id="third-stock">${third_attack_stock}/5</p>
        <button class="button-attacks" id="attack-recovery">${
          selection[`attacks`][3]
        }</button>
        <p id="fourth-stock">${fourth_attack_stock}/4</p>
        </div>
        <h3 id="user-health">${user_current_health}hp</h3>
        <div id="div-pokeball">
        <button id="pokeball-button">Pokeball</button>
        <p id="pokeball-p-tag">${pokeball_stock}/10</p>
        </div>
    </div>`
  );
}

/* this function its for the first button that can damage the computer pokemon */
function damageFirst(details) {
  /* getting the id of the p tag that contains the number of attacks that the user can attack */
  let first_stock = document.getElementById(`first-stock`);

  /* it verify if the number of stock of attack is higher than 0 */
  if (first_attack_stock > 0) {
    /* the computer current health get decreased in a random number that can go from zero to 70 */
    computer_current_health =
      computer_current_health - Math.floor(Math.random() * 70);
    /* the stock of attack gets decreased by one*/
    first_attack_stock = first_attack_stock - 1;
    /* it verify if the stock of attack is zero to change the color of the tag to red. Which indicates that this attack is out of stock */
    if (first_attack_stock === 0) {
      first_stock[`style`][`color`] = `red`;
    }
    /* it change the content of the number of attacks */
    first_stock[`innerHTML`] = `${first_attack_stock}/3`;
    /* set the cookie to the new stock of attacks */
    Cookies.set(`first_attack_stock`, `${first_attack_stock}`);

    /* check if the computer current health is less or equal to zero and if yes, set its value to zero */
    if (computer_current_health <= 0) {
      computer_current_health = 0;
    }

    /* gets the computer health tag  */
    let computer_health = document.getElementById(`computer-health`);
    /* update the new value after being attacked */
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    /* set the cookie to this new value, so when the pages refreshs, the hp its still the same */
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    /* check if the computer health after being attacked its equal to zero */
    if (computer_current_health === 0) {
      /* its print on the screen that you are the winner */
      let computer_health = document.getElementById(`div-buttons-attack`);
      computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else if (user_current_health > 0) {
      /* check if the user current health is higher tham zero */
      /* the user pokemon is attacked with a random number from zero to 50 */
      user_current_health =
        user_current_health - Math.floor(Math.random() * 50);

      /* check if the user current health is less or equal to zero */
      if (user_current_health <= 0) {
        /* set the user current health to zero */
        user_current_health = 0;
        /* print on the page that you lost */
        let user_health = document.getElementById(`div-buttons-attack`);
        user_health[`outerHTML`] = `<h3>You lost!</h3>`;
      }

      /* gets the tag with the user health number */
      let user_health = document.getElementById(`user-health`);
      /* add the new value after being attacked */
      user_health[`innerHTML`] = `${user_current_health}hp`;
      /* uptading the cookie with the new user current health */
      Cookies.set(`user_current_health`, `${user_current_health}`);
    } else {
    }
  } else {
    /* when the stock of attack is zero and the user try to use this attack again, an alert in print on the screen */
    alert(`The chosen option is zero. Chose other attack.`);
  }
}

/* gets the id of the first attack button */
let button_attack_one = document.getElementById(`attack_one`);
/* after clicked, call the function damageFirst */
button_attack_one.addEventListener(`click`, damageFirst);

/* this function its for the second button that can damage the computer pokemon */
function damageSecond(details) {
  /* getting the id of the p tag that contains the number of attacks that the user can attack */
  let second_stock = document.getElementById(`second-stock`);

  /* it verify if the number of stock of attack is higher than 0 */
  if (second_attack_stock > 0) {
    /* the computer current health get decreased in a random number that can go from zero to 60 */
    computer_current_health =
      computer_current_health - Math.floor(Math.random() * 60);
    /* the stock of attack gets decreased by one*/
    second_attack_stock = second_attack_stock - 1;
    /* it verify if the stock of attack is zero to change the color of the tag to red. Which indicates that this attack is out of stock */
    if (second_attack_stock === 0) {
      second_stock[`style`][`color`] = `red`;
    }
    /* it change the content of the number of attacks */
    second_stock[`innerHTML`] = `${second_attack_stock}/4`;
    /* set the cookie to the new stock of attacks */
    Cookies.set(`second_attack_stock`, `${second_attack_stock}`);

    /* check if the computer current health is less or equal to zero and if yes, set its value to zero */
    if (computer_current_health <= 0) {
      computer_current_health = 0;
    }

    /* gets the computer health tag  */
    let computer_health = document.getElementById(`computer-health`);
    /* update the new value after being attacked */
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    /* set the cookie to this new value, so when the pages refreshs, the hp its still the same */
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    /* check if the computer health after being attacked its equal to zero */
    if (computer_current_health === 0) {
      /* its print on the screen that you are the winner */
      let computer_health = document.getElementById(`div-buttons-attack`);
      computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else if (user_current_health > 0) {
      /* check if the user current health is higher tham zero */
      /* the user pokemon is attacked with a random number from zero to 50 */
      user_current_health =
        user_current_health - Math.floor(Math.random() * 50);

      /* check if the user current health is less or equal to zero */
      if (user_current_health <= 0) {
        /* set the user current health to zero */
        user_current_health = 0;
        /* print on the page that you lost */
        let user_health = document.getElementById(`div-buttons-attack`);
        user_health[`outerHTML`] = `<h3>You lost!</h3>`;
      }

      /* gets the tag with the user health number */
      let user_health = document.getElementById(`user-health`);
      /* add the new value after being attacked */
      user_health[`innerHTML`] = `${user_current_health}hp`;
      /* uptading the cookie with the new user current health */
      Cookies.set(`user_current_health`, `${user_current_health}`);
    } else {
    }
  } else {
    /* when the stock of attack is zero and the user try to use this attack again, an alert in print on the screen */
    alert(`The chosen option is zero. Chose other attack.`);
  }
}

/* gets the id of the second attack button */
let button_attack_two = document.getElementById(`attack-two`);
/* after clicked, call the function damageSecond */
button_attack_two.addEventListener(`click`, damageSecond);

/* this function its for the third button that can damage the computer pokemon */
function damageThird(details) {
  let third_stock = document.getElementById(`third-stock`);

  /* it verify if the number of stock of attack is higher than 0 */
  if (third_attack_stock > 0) {
    /* the computer current health get decreased in a random number that can go from zero to 40 */
    computer_current_health =
      computer_current_health - Math.floor(Math.random() * 40);
    /* the stock of attack gets decreased by one*/
    third_attack_stock = third_attack_stock - 1;
    /* it verify if the stock of attack is zero to change the color of the tag to red. Which indicates that this attack is out of stock */
    if (third_attack_stock === 0) {
      third_stock[`style`][`color`] = `red`;
    }
    /* it change the content of the number of attacks */
    third_stock[`innerHTML`] = `${third_attack_stock}/5`;
    /* set the cookie to the new stock of attacks */
    Cookies.set(`third_attack_stock`, `${third_attack_stock}`);

    /* check if the computer current health is less or equal to zero and if yes, set its value to zero */
    if (computer_current_health <= 0) {
      computer_current_health = 0;
    }

    /* gets the computer health tag  */
    let computer_health = document.getElementById(`computer-health`);
    /* update the new value after being attacked */
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    /* set the cookie to this new value, so when the pages refreshs, the hp its still the same */
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    /* check if the computer health after being attacked its equal to zero */
    if (computer_current_health === 0) {
      /* its print on the screen that you are the winner */
      let computer_health = document.getElementById(`div-buttons-attack`);
      computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else if (user_current_health > 0) {
      /* check if the user current health is higher tham zero */
      /* the user pokemon is attacked with a random number from zero to 50 */
      user_current_health =
        user_current_health - Math.floor(Math.random() * 50);

      /* check if the user current health is less or equal to zero */
      if (user_current_health <= 0) {
        /* set the user current health to zero */
        user_current_health = 0;
        /* print on the page that you lost */
        let user_health = document.getElementById(`div-buttons-attack`);
        user_health[`outerHTML`] = `<h3>You lost!</h3>`;
      }
      /* gets the tag with the user health number */
      let user_health = document.getElementById(`user-health`);
      /* add the new value after being attacked */
      user_health[`innerHTML`] = `${user_current_health}hp`;
      /* uptading the cookie with the new user current health */
      Cookies.set(`user_current_health`, `${user_current_health}`);
    } else {
    }
  } else {
    /* when the stock of attack is zero and the user try to use this attack again, an alert in print on the screen */
    alert(`The chosen option is zero. Chose other attack.`);
  }
}

/* gets the id of the third attack button */
let button_attack_third = document.getElementById(`attack-three`);
/* after clicked, call the function damageThird */
button_attack_third.addEventListener(`click`, damageThird);

/* this function its for the fourth button that can recovery the user hp pokemon */
function recovery(details) {
  let fourth_stock = document.getElementById(`fourth-stock`);

  if (fourth_attack_stock > 0) {
    /* the user current health get increased in a random number that can go from zero to 40 */
    user_current_health = user_current_health + 50;
    /* the stock of attack gets decreased by one*/
    fourth_attack_stock = fourth_attack_stock - 1;
    /* it verify if the stock of attack is zero to change the color of the tag to red. Which indicates that this attack is out of stock */
    if (fourth_attack_stock === 0) {
      fourth_stock[`style`][`color`] = `red`;
    }
    /* it change the content of the number of attacks */
    fourth_stock[`innerHTML`] = `${fourth_attack_stock}/4`;
    /* set the cookie to the new stock of attacks */
    Cookies.set(`fourth_attack_stock`, `${fourth_attack_stock}`);

    /* check if the computer health after being attacked its equal to zero */
    if (user_current_health > 0) {
      /* the user pokemon is attacked with a random number from zero to 50 */
      user_current_health =
        user_current_health - Math.floor(Math.random() * (80 - 30) + 30);

      /* check if the user current health is less or equal to zero */
      if (user_current_health <= 0) {
        /* set the user current health to zero */
        user_current_health = 0;
        /* print on the page that you lost */
        let user_health = document.getElementById(`div-buttons-attack`);
        user_health[`outerHTML`] = `<h3>You lost!</h3>`;
      }

      /* gets the tag with the user health number */
      let user_health = document.getElementById(`user-health`);
      /* add the new value after being attacked */
      user_health[`innerHTML`] = `${user_current_health}hp`;
      /* uptading the cookie with the new user current health */
      Cookies.set(`user_current_health`, `${user_current_health}`);
    }
  } else {
    alert(`The chosen option is zero. Chose other attack.`);
    fourth_attack_stock = 0;
    fourth_stock[`innerHTML`] = `${fourth_attack_stock}/4`;
    Cookies.set(`fourth_attack_stock`, fourth_attack_stock);
  }
}

/* gets the id of the fourth recovery button */
let button_recovery = document.getElementById(`attack-recovery`);
/* after clicked, call the function recovery */
button_recovery.addEventListener(`click`, recovery);

function throwPokeball(details) {
    /* this math function returns a random number from 1 to 10 Math.floor(Math.random() * (11 - 1) + 1);*/
    let ramdomNumber = 10;

    if(pokeball_stock > 0) {
        pokeball_stock = pokeball_stock - 1;
        Cookies.set(`pokeball_stock`, pokeball_stock);
        let pokeball_p_tag = document.getElementById(`click`, `pokeball-p-tag`);
        pokeball_p_tag[`innerHTML`] = `${pokeball_stock}/10`;

        if (ramdomNumber === 10) {
        let computer_pokemom = document.getElementById(`computer-pokemon`);
        computer_pokemom.setAttribute(`src`, `https://www.freeiconspng.com/thumbs/pokeball-png/pokemon-ball-png-1.png`);
        computer_pokemom[`style`][`width`] = `100px`

        let computer_pokemon_name = document.getElementById(`computer-pokemon-name`);
        computer_pokemon_name[`innerHTML`] = `Congratulations! You have captured ${computer_selection[`name`]}`;
    }
    }

    
}

let pokeball_button = document.getElementById(`pokeball-button`);
pokeball_button.addEventListener(`click`, throwPokeball);