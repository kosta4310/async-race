import { AnimationType, DataParams, ICar, IWinner, Order, Sort } from '../../utils/types/types';
const defaultShowedPageGarage = 1;
const defaultShowedPageWinners = 1;

export default {
    carsPage: defaultShowedPageGarage /*номер отображаемой страницы*/,
    winnerNumberPage: defaultShowedPageWinners /*номер отображаемой страницы*/,
    cars: <ICar[]>[] /*массив отображаемых на странице авто*/,
    carsCount: 4 /*общее колличество авто*/,
    winners: <IWinner[]>[] /*массив отображаемых победителей*/,
    winnersCount: 1 /*общее количество победителей*/,
    activePage: 'garage' /*активная вкладка*/,
    animation: <AnimationType>{} /*объект для хранения ключей для анимации*/,
    order: <Order>'ASC',
    sort: <Sort>'time',
    createFormData: <DataParams>{ name: '', color: '#ff5566' },
    updateFormData: <ICar>{ id: 1, name: 'Tesla', color: '#55ff66' },
};
