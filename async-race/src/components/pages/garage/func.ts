import { DataParams, HttpStatus, ICar, ResponseFromRace } from '../../../utils/types/types';
import { defaultLimitCarsToShowedGarage, defaultLimitQuantityWinnersToShow, stopEngine } from '../../api/api';
import store from '../../storage/store';
import { addWinner, updateWinnersState } from '../winners/winners.components';
import { comeBack, stopAnimation } from './car/animation';
import { updateCarsState } from './car/car.components';
import * as carBrand from './carBrand';
import { hiddenPopUp, showNoWinner, showWinner } from './popUp/popUp';

function getDataFormCreate(): DataParams {
    const form = <HTMLFormElement>document.querySelector('#form-create');
    const [inputCreate, inputColor] = <HTMLFormElement[]>Array.from(form.elements);
    return {
        name: inputCreate.value,
        color: inputColor.value,
    };
}

function getRandomColor() {
    const colorString = '0123456789ABCDEF';
    const COLOR_LENGTH = 6;
    let color = '#';
    for (let i = 0; i < COLOR_LENGTH; i++) {
        color += colorString.charAt(Math.round(Math.random() * 15));
    }
    return color;
}

async function updateStateStore() {
    return Promise.all([updateCarsState(), updateWinnersState()]);
}

function setDataToInputUpdate(data: ICar) {
    const formUpdate = setFormAttribute(data);
    const [inputUpdate, updateColor] = <HTMLFormElement[]>Array.from(formUpdate.elements);
    inputUpdate.value = data.name;
    updateColor.value = data.color;
}

function resetAll() {
    const arrayCarsInRace = <Array<HTMLElement>>Array.from(document.querySelectorAll('.started'));
    const promises = arrayCarsInRace.map(async (item) => {
        await reset(getNumberIdFromElementId(item.id), item);
    });
    Promise.all(promises).then(() => {
        setDisableEnableButtonsActive('btn-race', true);
    });
}

async function reset(id: number, carBlock: HTMLElement) {
    setDisableEnableButtonsActive('btn-stop-engine', false, carBlock);
    await stopEngine(id);
    stopAnimation(id);
    comeBack(carBlock);
    setDisableEnableButtonsActive('btn-start-engine', true, carBlock);
    carBlock.classList.remove('started');
}

function getTrackLength(car: HTMLElement) {
    const flag = <HTMLElement>car.nextElementSibling;
    const carRect = car.getBoundingClientRect();
    const flagRect = flag.getBoundingClientRect();
    const track = flagRect.right - carRect.left;

    return track;
}

function getRandomName() {
    const brandId = Math.floor(Math.random() * carBrand.carBrand.length);
    const modelId = Math.floor(Math.random() * carBrand.carModel.length);

    return `${carBrand.carBrand[brandId]} ${carBrand.carModel[modelId]}`;
}

function getNumberIdFromElementId(elementId: string) {
    const baseNaming = 'car';
    /*Name car block id example : car1,car2*/
    const [carId] = elementId.split(baseNaming).reverse();

    return Number(carId);
}

function promisesHandler(promises: Promise<ResponseFromRace>[], arrayIds: Array<number>) {
    if (promises.length === 0) {
        showNoWinner();
    } else {
        const copyPromises = [...promises];
        const copyArrayIdx = [...arrayIds];

        Promise.race(promises).then((item) => {
            const { status, id, time } = item;

            if (status === HttpStatus['INTERNAL SERVER ERROR']) {
                const indexOfPromise = arrayIds.indexOf(id);

                copyPromises.splice(indexOfPromise, 1);
                copyArrayIdx.splice(indexOfPromise, 1);

                return promisesHandler(copyPromises, copyArrayIdx);
            }

            const winner = getCarByIdFromStorage(id);

            addWinner(winner, time);
            if (store.activePage === 'garage') {
                showWinner(winner.name, time);
            }
            setDisableEnableButtonsActive('btn-reset', true);
        });
        document.body.addEventListener('click', () => hiddenPopUp());
    }
}

function setDisableEnableButtonsActive(buttonId: string, isEnable: boolean, context?: HTMLElement) {
    let button;

    if (context) {
        button = <HTMLElement>context.querySelector(`#${buttonId}`);
    } else {
        button = <HTMLElement>document.querySelector(`#${buttonId}`);
    }
    isEnable ? button.removeAttribute('disabled') : button.setAttribute('disabled', '');
}

function getCarByIdFromStorage(id: number) {
    const carArray = store.cars;
    const car = <ICar>carArray.find((item) => item.id === id);
    return car;
}

function checkCarsButtonsActivity() {
    let itemPage;
    let limitItem;
    let itemCount;

    if (store.activePage === 'garage') {
        itemPage = store.carsPage;
        limitItem = defaultLimitCarsToShowedGarage;
        itemCount = store.carsCount;
    } else {
        itemPage = store.winnerNumberPage;
        limitItem = defaultLimitQuantityWinnersToShow;
        itemCount = store.winnersCount;
    }

    if (itemPage > 1) {
        setDisableEnableButtonsActive('btn-prev', true);
    } else setDisableEnableButtonsActive('btn-prev', false);

    if (itemCount - (itemPage - 1) * limitItem <= limitItem || itemCount <= limitItem) {
        setDisableEnableButtonsActive('btn-next', false);
    } else setDisableEnableButtonsActive('btn-next', true);
}

function saveState() {
    const createFormData = getDataFormCreate();
    const updateFormData = getDataFormUpdate();
    store.createFormData = createFormData;
    store.updateFormData = updateFormData;
}

function getDataFormUpdate(): ICar {
    const form = <HTMLFormElement>document.querySelector('#form-update');
    const [inputUpdate, inputColor] = <HTMLFormElement[]>Array.from(form.elements);
    const id = <string>form.getAttribute('carId');
    return { id: Number(id), name: inputUpdate.value, color: inputColor.value };
}

function setFormAttribute(data: ICar) {
    const formUpdate = <HTMLFormElement>document.querySelector('#form-update');
    formUpdate.setAttribute('carId', `${data.id}`);
    return formUpdate;
}

export {
    getRandomColor,
    setDataToInputUpdate,
    getTrackLength,
    reset,
    resetAll,
    getNumberIdFromElementId,
    promisesHandler,
    setDisableEnableButtonsActive,
    updateStateStore,
    checkCarsButtonsActivity,
    getDataFormCreate,
    getRandomName,
    getDataFormUpdate,
    saveState,
};
