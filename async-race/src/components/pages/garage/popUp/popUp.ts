function showWinner(name: string, time: number) {
    const theTime = (time / 1000).toFixed(2);
    const template = `
    <div id="popup" class="popup">
    <div class="popup-content">
       The winner is ${name} [time: ${theTime}sec]
    </div>
</div>`;
    document.body.insertAdjacentHTML('beforeend', template);
}

function showNoWinner() {
    const template = `
    <div class="popup">
        <div class="popup-content">
            All car was been broken
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', template);
}

function hiddenPopUp() {
    const popUp = <HTMLElement>document.querySelector('#popup');
    if (popUp) {
        popUp.remove();
        document.body.removeEventListener('click', () => hiddenPopUp());
    }
}

export { showWinner, showNoWinner, hiddenPopUp };
