type DataParams = Pick<ICar, 'name' | 'color'>;

interface IDataParamsStart {
    velocity: number;
    distance: number;
}

interface ICar {
    name: string;
    color: string;
    id: number;
}

type DataParamsWinners = {
    id: number;
    wins: number;
    time: number;
};

interface IWinner {
    id: number;
    wins: number;
    time: number;
}

interface IWinners {
    items: IWinner[];
    count: number;
}

interface IGetCar {
    item: ICar;
}

enum HttpStatus {
    'OK' = 200,
    'BAD REQUEST' = 400,
    'TOO MANY REQUESTS' = 429,
    'INTERNAL SERVER ERROR' = 500,
}

type AnimationType = {
    [key: string]: number;
};

type ResponseFromRace = {
    status: number;
    id: number;
    time: number;
};

type Sort = 'id' | 'wins' | 'time';
type Order = 'ASC' | 'DESC';

export {
    DataParams,
    Sort,
    Order,
    DataParamsWinners,
    ICar,
    IWinner,
    IWinners,
    IGetCar,
    IDataParamsStart,
    HttpStatus,
    AnimationType,
    ResponseFromRace,
};
