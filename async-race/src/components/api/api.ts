import { DataParams, Sort, Order, DataParamsWinners, IWinner, IWinners, IGetCar, ICar } from '../../utils/types/types';

const base = 'http://127.0.0.1:3000';
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;
export const defaultLimitQuantityWinnersToShow = 10;
const defaultShowedPageWinners = 1;
export const defaultLimitCarsToShowedGarage = 7;

async function getCars(page: number, limit: number = defaultLimitCarsToShowedGarage) {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);

    return {
        items: await response.json(),
        count: response.headers.get('X-Total-Count'),
    };
}
async function getCar(id: number): Promise<IGetCar> {
    const response = await fetch(`${garage}/${id}`);

    return {
        item: await response.json(),
    };
}

async function createCar(dataParams: DataParams) {
    const response = await fetch(`${garage}`, {
        method: 'POST',
        body: JSON.stringify(dataParams),
        headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
}

async function deleteCar(id: number) {
    const response = await fetch(`${garage}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}

async function updateCar(id: number, dataParams: DataParams): Promise<ICar | Error> {
    return (
        await fetch(`${garage}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataParams),
        })
    ).json();
}

async function startEngine(id: number): Promise<Response> {
    const response = await fetch(`${engine}?id=${id}&status=started`, {
        method: 'PATCH',
    });
    return response;
}

async function stopEngine(id: number) {
    const response = await fetch(`${engine}?id=${id}&status=stopped`, {
        method: 'PATCH',
    });
    return response.json();
}

async function switchEngineToDrive(id: number): Promise<Response> {
    const response = await fetch(`${engine}?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    return response;
}

async function getWinners(
    page: number = defaultShowedPageWinners,
    limit: number = defaultLimitQuantityWinnersToShow,
    sort: Sort = 'time',
    order: Order = 'ASC'
): Promise<IWinners> {
    const response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    return {
        items: await response.json(),
        count: Number(response.headers.get('X-Total-Count')),
    };
}

async function getWinner(id: number): Promise<IWinner> {
    const response = await fetch(`${winners}/${id}`);
    return response.json();
}

async function createWinner(data: DataParamsWinners) {
    const response = await fetch(`${winners}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function deleteWinner(id: number) {
    const response = await fetch(`${winners}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}

async function updateWinner(id: number, data: Partial<DataParamsWinners>) {
    const response = await fetch(`${winners}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

export {
    getCars,
    getCar,
    createCar,
    deleteCar,
    updateCar,
    startEngine,
    stopEngine,
    switchEngineToDrive,
    getWinners,
    getWinner,
    createWinner,
    deleteWinner,
    updateWinner,
};
