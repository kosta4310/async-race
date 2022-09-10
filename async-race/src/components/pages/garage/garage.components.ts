import store from '../../storage/store';
import { checkCarsButtonsActivity, updateStateStore } from './func';
import { renderCars } from './car/car.components';
import { addListeners } from './listeners';
import {
    getButtonsPageNavigationTemplate,
    getFormCreateTemplate,
    getFormUpdateTemplate,
    getGarageTemplate,
    getNavigationTemplate,
    getRaceControlTemplate,
    selectBlockk,
} from './garage.template';


function renderPageGarage() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const carsPage = store.carsPage.toString();
    const carsCount = store.carsCount;

    const dataParams = store.createFormData;
    const data = store.updateFormData;

    const selectBlock = selectBlockk(
        getFormCreateTemplate(dataParams),
        getFormUpdateTemplate(data),
        getRaceControlTemplate()
    );

    const garagePageTemplate = [
        getNavigationTemplate(),
        selectBlock,
        getGarageTemplate(carsCount.toString(), carsPage),
        getButtonsPageNavigationTemplate(),
    ].join('');

    wrapper.insertAdjacentHTML('afterbegin', garagePageTemplate);

    document.body.innerHTML = '';
    document.body.appendChild(wrapper);
}

async function updatePageGarage() {
    updateStateStore().then(() => {
        renderPageGarage();
        renderCars();
        checkCarsButtonsActivity();
        addListeners();
    });
}

export {
    getNavigationTemplate,
    getFormCreateTemplate,
    getFormUpdateTemplate,
    getRaceControlTemplate,
    getGarageTemplate,
    renderPageGarage,
    updatePageGarage,
    getButtonsPageNavigationTemplate,
};
