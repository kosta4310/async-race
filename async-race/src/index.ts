import { Controller } from './components/controller/controller';
import './styles/scss/style.scss';

const controller = new Controller();
controller.start();
console.log(`Все требования выполнены. Может быть не понятным как получить список машин
для создания, поясню: нужно очистить поле ввода и кликнуть мышкой по пустому полю или
стрелочке. Если будут какие-то недоразумения прошу со мной связаться Kostiantyn Pavlov#5082`);
