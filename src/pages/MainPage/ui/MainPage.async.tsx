import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //ТАК ДЕЛАТЬ НЕ НУЖНО, ДЛЯ ТЕСТОВ (искусственная задержка)
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));