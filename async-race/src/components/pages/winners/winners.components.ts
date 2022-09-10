import { ICar } from '../../../utils/types/types';
import {
    createWinner,
    defaultLimitQuantityWinnersToShow,
    getCar,
    getWinners,
    updateWinner,
} from '../../api/api';
import store from '../../storage/store';
import { checkCarsButtonsActivity } from '../garage/func';
import * as garage from '../garage/garage.components';
import { addListenersToPageWinners } from '../garage/listeners';
import { getWinnersTemplate, getWinnerTemplate } from './winners.template';

async function createWinnersPage() {
    await updateWinnersState();
    const quantityOfWinners = store.winnersCount;
    const numberPageWinners = store.winnerNumberPage;
    
    const winnersPageTemplate = [
        garage.getNavigationTemplate(),
        getWinnersTemplate(quantityOfWinners.toString(), numberPageWinners.toString()),
        garage.getButtonsPageNavigationTemplate(),
    ].join('');

    const wrapper = <HTMLElement>document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    wrapper.insertAdjacentHTML('afterbegin', winnersPageTemplate);

    renderWinners();
}

async function updateWinnersState() {
    await getWinners(store.winnerNumberPage, defaultLimitQuantityWinnersToShow, store.sort, store.order).then((res) => {
        store.winners = res.items;
        store.winnersCount = res.count;
    });
}

async function renderWinners() {
    const winners = store.winners;

    const arrayPromise = await winners.map(async (winner) => {
        return { car: await getCar(winner.id), wins: winner.wins, time: winner.time };
    });

    Promise.all(arrayPromise).then((arr) => {
        arr.map((res, idx) => {
            // чтобы отсчет по порядку начинался с 1, добавляю к индексу массива 1;
            renderWinner(
                idx + defaultLimitQuantityWinnersToShow * (store.winnerNumberPage - 1) + 1,
                res.car.item.color,
                res.car.item.name,
                res.wins,
                res.time
            );
        });
    });
}

function renderWinner(i: number, car: string, model: string, wins: number, time: number) {
    const tableWinners = <HTMLElement>document.querySelector('#table-winners tbody');
    tableWinners?.insertAdjacentHTML('beforeend', getWinnerTemplate(i, car, model, wins, time));
}

function saveWinnerInStore(time: number, id: number) {
    const oldEntry = store.winners.find((winner) => winner.id === id);

    if (oldEntry) {
        oldEntry.time = oldEntry.time < time ? oldEntry.time : time;
        oldEntry.wins = oldEntry.wins + 1;
        updateWinner(id, { wins: oldEntry.wins, time: oldEntry.time });
    } else {
        const winner = {
            id: id,
            wins: 1,
            time: time,
        };

        store.winners.push(winner);
        store.winnersCount = store.winnersCount + 1;
        createWinner(winner);
    }
}

function addWinner(winner: ICar, time: number) {
    const { id } = winner;
    const theTime = (time / 1000).toFixed(2);
    saveWinnerInStore(Number(theTime), id);
}

function checkArrowState() {
    if (store.sort === 'wins' && store.order === 'DESC') {
        moveArrowDown('wins');
    }
    if (store.sort === 'time' && store.order === 'DESC') {
        moveArrowDown('time');
    }
}

function moveArrowDown(entity: string) {
    const arrowButton = <HTMLElement>document.querySelector(`table .arrow-sort-${entity}`);
    arrowButton.setAttribute('transform', 'scale(1, -1)');
}

async function updateWinnersPage() {
    await updateWinnersState();
    await createWinnersPage();
    checkCarsButtonsActivity();
    checkArrowState();
    addListenersToPageWinners();
}

export { createWinnersPage, updateWinnersState, addWinner, updateWinnersPage };
