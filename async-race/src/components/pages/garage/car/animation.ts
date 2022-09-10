import store from '../../../storage/store';

function startAnimation(car: HTMLElement, id: number, distance: number, time: number) {
    let start: number;

    function step(timestamp: number) {
        if (!start) start = timestamp;

        const progress = timestamp - start;

        car.style.transform = `translateX(${Math.min((progress * distance) / time, distance)}px)`;

        if (progress < time) {
            store.animation[id] = window.requestAnimationFrame(step);
        }
    }

    store.animation[id] = window.requestAnimationFrame(step);
}

function stopAnimation(id: number) {
    if (store.animation[id]) {
        window.cancelAnimationFrame(store.animation[id]);
        store.animation[id] = 0;
    }
}

function comeBack(carBlock: HTMLElement) {
    const car = <HTMLElement>carBlock.querySelector('.car');
    car.style.transform = 'translateX(0px)';
}

export { startAnimation, stopAnimation, comeBack };
