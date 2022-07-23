function goBack(details) {
    window.location.href = `index.html`
}

let arrow_back = document.getElementById(`arrow-left`);
arrow_back.addEventListener(`click`, goBack);
arrow_back[`style`][`cursor`] = `pointer`;

/* starting the selection as an empty string*/
let selection = ``;
/* receiveing the cookie value as json */
let selection_json = Cookies.get(`selection`);

/* making sure that the selection is not undefined to set to an object */
if(selection_json !== undefined) {
    selection = JSON.parse(selection_json);
    document.getElementById(`section-battle`).insertAdjacentHTML(`afterbegin`, 
    `<div>
        <img class="img-battle" src="${selection[`img_url`]}">
        <h2 class="name-pokemon">${selection[`name`]}</h2>
        <div>
        <button class="button-attacks">${selection[`attacks`][0]}</button>
        <button class="button-attacks">${selection[`attacks`][1]}</button>
        <button class="button-attacks">${selection[`attacks`][2]}</button>
        </div>
        <h3>${selection[`health`]}hp</h3>
    </div>`)
}

