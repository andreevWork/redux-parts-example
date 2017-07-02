import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Creator } from 'redux-parts';
import  promiseMiddleware from 'redux-promise-middleware';
import {MainPart} from "./parts/main.part";

const logger_middleware = createLogger({
    collapsed: true,
    diff: true
});

const promise_middleware  = promiseMiddleware({
    promiseTypeSuffixes: ['Pending', 'Success', 'Error']
});

const {actions, reducer} = Creator(MainPart);

export const Store = createStore(
    reducer,
    applyMiddleware(
        promise_middleware,
        logger_middleware
    )
);

export {actions as Actions};