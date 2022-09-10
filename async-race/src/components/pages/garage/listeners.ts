import {
    handlerToButtonCreate,
    handlerToButtonGarage,
    handlerToButtonGenerateCars,
    handlerToButtonNext,
    handlerToButtonPrev,
    handlerToButtonRace,
    handlerToButtonReset,
    handlerToButtonSortTime,
    handlerToButtonSortWins,
    handlerToButtonUpdate,
    handlerToButtonWinners,
} from './handlers';

function addListeners() {
    addListenerToItem('btn-winners', handlerToButtonWinners);
    addListenerToItem('btn-create-car', handlerToButtonCreate);
    addListenerToItem('btn-update-car', handlerToButtonUpdate);
    addListenerToItem('btn-race', handlerToButtonRace);
    addListenerToItem('btn-reset', handlerToButtonReset);
    addListenerToItem('btn-prev', handlerToButtonPrev);
    addListenerToItem('btn-next', handlerToButtonNext);
    addListenerToItem('btn-generate-cars', handlerToButtonGenerateCars);
}

function addListenersToPageWinners() {
    addListenerToItem('btn-prev', handlerToButtonPrev);
    addListenerToItem('btn-next', handlerToButtonNext);

    addListenerToItem('btn-garage', handlerToButtonGarage);

    addListenerToItem('sort-wins', handlerToButtonSortWins);
    addListenerToItem('sort-time', handlerToButtonSortTime);
}

function addListenerToItem(targetId: string, cb: (e: MouseEvent) => void) {
    (<HTMLElement>document.querySelector(`#${targetId}`)).addEventListener('click', cb);
}

export { addListeners, addListenersToPageWinners };
