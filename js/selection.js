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
        <img src="${computer_selection[`img_url`]}">
        <h2>${computer_selection[`name`]}</h2>
        <h3 id="computer-health">${computer_current_health}hp</h3>
    </div>
    
    <div>
        <img class="img-battle" src="${selection[`img_url`]}">
        <h2 class="name-pokemon">${selection[`name`]}</h2>
        <div id="div-buttons-attack">
        <button class="button-attacks" id="attack_one">${
          selection[`attacks`][0]
        }</button>
        <button class="button-attacks" id="attack-two">${
          selection[`attacks`][1]
        }</button>
        <button class="button-attacks" id="attack-three">${
          selection[`attacks`][2]
        }</button>
        <button class="button-attacks" id="attack-recovery">Recovery</button>
        </div>
        <h3 id="user-health">${user_current_health}hp</h3>
    </div>`
  );
}

/* this function its for the first button that can damage the computer pokemon */
function damageFirst(details) {
  /* the computer current health get decreased in a random number that can go from zero to 70 */
  computer_current_health =
    computer_current_health - Math.floor(Math.random() * 70);

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
    user_current_health = user_current_health - Math.floor(Math.random() * 50);

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
}

/* gets the id of the first attack button */
let button_attack_one = document.getElementById(`attack_one`);
/* after clicked, call the function damageFirst */
button_attack_one.addEventListener(`click`, damageFirst);

/* this function its for the second button that can damage the computer pokemon */
function damageSecond(details) {
  /* the computer current health get decreased in a random number that can go from zero to 60 */
  computer_current_health =
    computer_current_health - Math.floor(Math.random() * 60);

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
    user_current_health = user_current_health - Math.floor(Math.random() * 50);

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
}

/* gets the id of the second attack button */
let button_attack_two = document.getElementById(`attack-two`);
/* after clicked, call the function damageSecond */
button_attack_two.addEventListener(`click`, damageSecond);

/* this function its for the third button that can damage the computer pokemon */
function damageThird(details) {
  /* the computer current health get decreased in a random number that can go from zero to 40 */
  computer_current_health =
    computer_current_health - Math.floor(Math.random() * 40);

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
    user_current_health = user_current_health - Math.floor(Math.random() * 50);

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
}

/* gets the id of the third attack button */
let button_attack_third = document.getElementById(`attack-three`);
/* after clicked, call the function damageThird */
button_attack_third.addEventListener(`click`, damageThird);

function recovery(details) {
    user_current_health =
    user_current_health + 50;

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
    user_current_health = user_current_health - Math.floor(Math.random() * (80 - 30) + 30);

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
}

let button_recovery = document.getElementById(`attack-recovery`);
button_recovery.addEventListener(`click`, recovery);
