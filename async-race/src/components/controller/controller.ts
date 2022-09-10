import { updatePageGarage } from '../pages/garage/garage.components';

export class Controller {
    init() {
        updatePageGarage();
    }
    start() {
        this.init();
    }
}
