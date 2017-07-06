import React from 'react';
import {pure} from 'recompose';
import { CircularProgress } from 'material-ui/Progress';

const ListLoaderComponent = ({is_pending}) => is_pending && <CircularProgress className='ab-center' />;

export const ListLoader = pure(ListLoaderComponent);