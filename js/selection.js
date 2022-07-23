function goBack(details) {
    window.location.href = `index.html`
}

let arrow_back = document.getElementById(`arrow-left`);
arrow_back.addEventListener(`click`, goBack);
arrow_back[`style`][`cursor`] = `pointer`;

/* starting the selection as an empty string*/
let selection = ``;
let computer_selection = ``;
/* receiveing the cookie value as json */
let selection_json = Cookies.get(`selection`);

let computer_selection_json = Cookies.get(`computer_selection`);

let user_current_health = parseInt(Cookies.get(`user_current_health`));

let computer_current_health = parseInt(Cookies.get(`computer_current_health`));

/* making sure that the selection is not undefined to set to an object */
if(selection_json !== undefined) {
    selection = JSON.parse(selection_json);
    computer_selection = JSON.parse(computer_selection_json);
    document.getElementById(`section-battle`).insertAdjacentHTML(`afterbegin`, 
    `<div>
        <img src="${computer_selection[`img_url`]}">
        <h2>${computer_selection[`name`]}</h2>
        <h3 id="computer-health">${computer_current_health}hp</h3>
    </div>
    
    <div>
        <img class="img-battle" src="${selection[`img_url`]}">
        <h2 class="name-pokemon">${selection[`name`]}</h2>
        <div id="div-buttons-attack">
        <button class="button-attacks" id="attack_one">${selection[`attacks`][0]}</button>
        <button class="button-attacks" id="attack-two">${selection[`attacks`][1]}</button>
        <button class="button-attacks" id="attack-three">${selection[`attacks`][2]}</button>
        </div>
        <h3 id="user-health">${user_current_health}hp</h3>
    </div>`)
}

function damageFirst(details) {
    
    computer_current_health = computer_current_health - 50;

    if(computer_current_health <= 0) {
        computer_current_health = 0;
    }

    let computer_health = document.getElementById(`computer-health`);
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    if(computer_current_health <= 0) {
        let computer_health = document.getElementById(`div-buttons-attack`);
    computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else if(user_current_health <= 0) {
        alert(`you lost`);
    } else {
        user_current_health = user_current_health - 40;        
        let user_health = document.getElementById(`user-health`);
        user_health[`innerHTML`] = `${user_current_health}hp`;
        Cookies.set(`user_current_health`, `${user_current_health}`);
    }
}

let button_attack_one = document.getElementById(`attack_one`);
button_attack_one.addEventListener(`click`, damageFirst);

function damageSecond(details) {
    computer_current_health = computer_current_health - 40;

    if(computer_current_health <= 0) {
        computer_current_health = 0;
    }

    let computer_health = document.getElementById(`computer-health`);
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    if(computer_current_health <= 0) {
        let computer_health = document.getElementById(`div-buttons-attack`);
    computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else {
        
        user_current_health = user_current_health - 40;
        let user_health = document.getElementById(`user-health`);
        user_health[`innerHTML`] = `${user_current_health}hp`;
        Cookies.set(`user_current_health`, `${user_current_health}`);
    }
}

let button_attack_two = document.getElementById(`attack-two`);
button_attack_two.addEventListener(`click`,
damageSecond);

function damageThird(details) {
    computer_current_health = computer_current_health - 30;

    if(computer_current_health <= 0) {
        computer_current_health = 0;
    }

    let computer_health = document.getElementById(`computer-health`);
    computer_health[`innerHTML`] = `${computer_current_health}hp`;
    Cookies.set(`computer_current_health`, `${computer_current_health}`);

    if(computer_current_health <= 0) {
        let computer_health = document.getElementById(`div-buttons-attack`);
    computer_health[`outerHTML`] = `<h3>You win!</h3>`;
    } else if(user_current_health <= 0) {
        alert(`you lost`);
    } else {
        user_current_health = user_current_health - 40;        
        let user_health = document.getElementById(`user-health`);
        user_health[`innerHTML`] = `${user_current_health}hp`;
        Cookies.set(`user_current_health`, `${user_current_health}`);
    }
}


let button_attack_third = document.getElementById(`attack-three`);
button_attack_third.addEventListener(`click`, damageThird);