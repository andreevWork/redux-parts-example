import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Creator } from 'redux-parts';
import promiseMiddleware from 'redux-promise-middleware';
import {MainPart} from "./parts/main.part";

const logger = createLogger({
    collapsed: true,
    diff: true
});

const {actions, reducer} = Creator(MainPart);

export const Store = createStore(
    reducer,
    applyMiddleware(logger, promiseMiddleware)
);

export {actions as Actions};