import { HttpStatus, ICar, IDataParamsStart, ResponseFromRace } from '../../../utils/types/types';
import {
    createCar,
    deleteWinner,
    startEngine,
    switchEngineToDrive,
} from '../../api/api';
import store from '../../storage/store';
import { updateWinnersPage } from '../winners/winners.components';
import { startAnimation, stopAnimation } from './car/animation';
import { createAuto, deleteAuto, updateAuto } from './car/car.components';
import {
    setDisableEnableButtonsActive,
    getNumberIdFromElementId,
    getTrackLength,
    promisesHandler,
    reset,
    resetAll,
    setDataToInputUpdate,
    getDataFormCreate,
    getRandomColor,
    getRandomName,
    getDataFormUpdate,
    saveState,
} from './func';
import * as garage from './garage.components';


function handlerToButtonCreate() {
    const data = getDataFormCreate();
    createAuto(data);
}

function handlerToButtonUpdate() {
    const { id, name, color } = getDataFormUpdate();
    updateAuto({ id: id, name: name, color: color });
}

function handlerToButtonGarage() {
    store.activePage = 'garage';
    garage.renderPageGarage();
    garage.updatePageGarage();
}

function handlerToButtonWinners() {
    saveState();
    store.activePage = 'winners';
    updateWinnersPage();
}

function handlerCarBlock(e: MouseEvent) {
    const carBlock = <HTMLElement>(<HTMLElement>e.target).closest('.car-block');

    const id = getNumberIdFromElementId((<HTMLElement>carBlock).id);

    const color = (<HTMLElement>carBlock).getAttribute('color') as string;
    const name = (<HTMLElement>carBlock).getAttribute('name') as string;

    const dataCar = { id, name, color };

    switch ((<HTMLElement>e.target).id) {
        case 'btn-select-car':
            handlerToButtonSelect(dataCar);
            break;
        case 'btn-remove-car':
            handlerToButtonRemove(id);
            break;
        case 'btn-start-engine':
            handlerToButtonStartEngine(carBlock, id);
            break;
        case 'btn-stop-engine':
            handlerToButtonStopEngine(carBlock, id);
            break;
        default:
            break;
    }
}

function handlerToButtonSelect(data: ICar) {
    setDataToInputUpdate(data);
}

async function handlerToButtonRemove(id: number) {
    deleteAuto(id);
    deleteWinner(id);
}

async function handlerToButtonStartEngine(carBlock: HTMLElement, id: number): Promise<ResponseFromRace> {
    const car = <HTMLElement>carBlock.querySelector('.car');

    setDisableEnableButtonsActive('btn-start-engine', false, carBlock);

    try {
        const response = await startEngine(id);

        if (response.status === HttpStatus.OK) {
            const { velocity, distance } = await (<IDataParamsStart>(<unknown>response.json()));

            const raceTime = Math.round(distance / velocity);
            const track = getTrackLength(car);

            startAnimation(car, id, track, raceTime);

            setDisableEnableButtonsActive('btn-stop-engine', true, carBlock);
            carBlock.classList.add('started');

            const driveResponse = await switchEngineToDrive(id);

            if (driveResponse.status === HttpStatus['INTERNAL SERVER ERROR']) {
                stopAnimation(id);
            }
            return { status: driveResponse.status, id: id, time: raceTime };
        }
    } catch (error) {
        console.error(error);
    }
    return Promise.reject();
}

async function handlerToButtonStopEngine(carBlock: HTMLElement, id: number) {
    await reset(id, carBlock);
}

function handlerToButtonRace() {
    setDisableEnableButtonsActive('btn-race', false);

    setDisableEnableButtonsActive('btn-reset', false);

    const arrayCarsToRace = <Array<HTMLElement>>Array.from(document.querySelectorAll('.car-block'));
    const arrayIds = <Array<number>>[];

    const promises = arrayCarsToRace.map((item) => {
        const id = getNumberIdFromElementId(item.id);
        arrayIds.push(id);
        return handlerToButtonStartEngine(item, id);
    });
    promisesHandler(promises, arrayIds);
}

function handlerToButtonReset() {
    resetAll();
}

function handlerToButtonPrev() {
    if (store.activePage === 'garage') {
        store.carsPage = store.carsPage - 1;
        garage.updatePageGarage();
    } else {
        store.winnerNumberPage = store.winnerNumberPage - 1;
        updateWinnersPage();
    }
}
async function handlerToButtonNext() {
    if (store.activePage === 'garage') {
        store.carsPage = store.carsPage + 1;
        garage.updatePageGarage();
    } else {
        store.winnerNumberPage = store.winnerNumberPage + 1;
        updateWinnersPage();
    }
}

function handlerToButtonGenerateCars() {
    const quantityGeneratedCars = 100;

    const newCars = new Array(quantityGeneratedCars).fill(1).map(async () => {
        await createCar({ name: getRandomName(), color: getRandomColor() });
    });
    Promise.all(newCars)
        .then(() => {
            garage.updatePageGarage();
        })
        .catch((err) => console.error(err));
}

function handlerToButtonSortWins() {
    store.sort = 'wins';
    store.order = store.order === 'ASC' ? 'DESC' : 'ASC';
    updateWinnersPage();
}

function handlerToButtonSortTime() {
    store.sort = 'time';
    store.order = store.order === 'ASC' ? 'DESC' : 'ASC';
    updateWinnersPage();
}

export {
    handlerCarBlock,
    handlerToButtonRace,
    handlerToButtonReset,
    handlerToButtonGenerateCars,
    handlerToButtonNext,
    handlerToButtonPrev,
    handlerToButtonCreate,
    handlerToButtonUpdate,
    handlerToButtonWinners,
    handlerToButtonGarage,
    handlerToButtonSortWins,
    handlerToButtonSortTime,
};
