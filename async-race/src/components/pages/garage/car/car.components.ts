import { ICar, DataParams } from '../../../../utils/types/types';
import { createCar, deleteCar, getCars, updateCar } from '../../../api/api';
import store from '../../../storage/store';
import { updatePageGarage } from '../garage.components';
import { handlerCarBlock } from '../handlers';
import { getBlockMainTemplate, getBlockMenuTemplate } from './car.template';


function renderCar(data: ICar) {
    const garage = <HTMLElement>document.querySelector('.garage');
    garage?.insertAdjacentElement('beforeend', getElementCarBlock(data));
}

function renderCars() {
    const cars = <ICar[]>store.cars;
    cars.map((data) => renderCar(data));
}

function getElementCarBlock(car: ICar) {
    const container = <HTMLElement>document.querySelector('.garage .container');
    const carBlock = document.createElement('div');

    const { name, color, id } = car;

    carBlock.className = 'car-block';
    carBlock.id = `car${id}`;
    carBlock.setAttribute('color', car.color);
    carBlock.setAttribute('name', car.name);
    carBlock.innerHTML = `${getBlockMenuTemplate(name)}${getBlockMainTemplate(color)}`;
    carBlock.addEventListener('click', (e) => {
        handlerCarBlock(e);
    });

    container.insertAdjacentElement('beforeend', carBlock);
    return container;
}

async function updateCarsState() {
    await getCars(store.carsPage).then((res) => {
        store.cars = res.items;
        store.carsCount = Number(res.count);
    });
}

async function createAuto(data: DataParams) {
    await createCar(data);
    updatePageGarage();
}

async function updateAuto(data: ICar) {
    try {
        await updateCar(data.id, { name: data.name, color: data.color });
        reRenderCar(data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteAuto(id: number) {
    try {
        await deleteCar(id);
        updatePageGarage();
    } catch (error) {
        console.error(error);
    }
}

function reRenderCar(data: ICar) {
    const carBlock = <HTMLElement>document.querySelector(`#car${data.id}`);
    carBlock.setAttribute('color', data.color);
    carBlock.setAttribute('name', data.name);
    carBlock.innerHTML = `${getBlockMenuTemplate(data.name)}${getBlockMainTemplate(data.color)}`;
}

export { renderCars, renderCar, updateCarsState, createAuto, updateAuto, deleteAuto, reRenderCar };
