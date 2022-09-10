import { DataParams, ICar } from '../../../utils/types/types';

export function getNavigationTemplate() {
    return `
   <nav class="navigation">
         <div class="container">
            <div class="navigation__buttons">
               <button id="btn-garage" class="btn-garage button">TO GARAGE</button>
               <button id="btn-winners" class="btn-winner button">TO WINNERS</button>
            </div>
         </div>
      </nav>`;
}

export function getFormCreateTemplate(data: DataParams) {
    const { name, color } = data;
    return `
   <form id="form-create" name="create">
               <input type="text" list="brandCar" name="input-create" id="create" value="${name}" autocomplete="off">
               <datalist id="brandCar">
                    <option value="Audi">
                    <option value="BMW">
                    <option value="Ford">
                    <option value="Mercedes">
                    <option value="Lexus">
                    <option value="Toyota">
                    <option value="Tesla">
                </datalist>
               <input type="color" name="create-color" id="create-color" value="${color}">
               <input id="btn-create-car" type="button" value="create">
            </form>`;
}

export function getFormUpdateTemplate(data: ICar) {
    const { id, name, color } = data;
    return `
   <form id="form-update" carId="${id}" name="update">
               <input type="text" name="input-update" id="input-update" value="${name}" autocomplete="off">
               <input type="color" name="update-color" id="update-color" value="${color}">
               <input id="btn-update-car" type="button" value="update">
            </form>`;
}

export function getRaceControlTemplate() {
    return `
   <div class="race-control">
               <button id="btn-race" class="race">race</button>
               <button id="btn-reset" class="reset">reset</button>
               <button id="btn-generate-cars" class="generate cars">generate cars</button>
            </div>`;
}

export function getGarageTemplate(carsCount: string, carsPage: string) {
    return `
    <div class="garage">
         <div class="container">
            <h1 id="quantity-of-cars" class="quantity-of-cars">Garage(${carsCount})</h1>
            <div class="page-number">Page #${carsPage}</div>
         </div>
      </div>`;
}

export function getButtonsPageNavigationTemplate() {
    return `
    <footer>
            <div class="container">
                  <div class="buttons-pages-navigation">
                        <button id="btn-prev" class="btn-prev button" disabled>Prev</button>
                        <button id="btn-next" class="btn-next button" disabled>Next</button>
                  </div>
            </div>
      </footer>`;
}

export function selectBlockk(...items: string[]) {
    return `
    <div class="select">
            <div class="container">
                  ${items.join('')}
            </div>
      </div>`;
}
