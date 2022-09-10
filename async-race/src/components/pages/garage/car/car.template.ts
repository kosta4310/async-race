function getBlockMenuTemplate(name: string) {
    return `
    <div class="car-block__menu">
            <div class="menu__block">
               <button id="btn-select-car" class="select">SELECT</button>
               <button id="btn-remove-car" class="remove">REMOVE</button>
            </div>
            <h3 class="name-auto">${name}</h3>
         </div>`;
}

function getBlockMainTemplate(color: string) {
    return getBlockButtonsTemplate().concat(getRaceBlockTemplate(color));
}

function getBlockButtonsTemplate() {
    return `
   <div class="main__buttons">
               <button id="btn-start-engine" class="start-engine">A</button>
               <button id="btn-stop-engine" class="stop-engine" disabled>B</button>
            </div>`;
}

function getCarTemplate(color: string) {
    return `<svg class="car" fill="${color}">
    <use xlink:href="./assets/images/spriteCar.svg#car"></use>
  </svg>`;
}

function getRaceBlockTemplate(colorCar: string) {
    return `<div class="race-block">
            ${getCarTemplate(colorCar)}
            <img class=flag-img src="./assets/images/flag64.png" alt="flag">
      </div>`;
}

export { getBlockMainTemplate, getBlockMenuTemplate, getCarTemplate };
