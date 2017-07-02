import React from 'react';
import {pure} from 'recompose';
import { CircularProgress } from 'material-ui/Progress';

const ListLoaderComponent = ({is_pending}) => is_pending && <CircularProgress />;

export const ListLoader = pure(ListLoaderComponent);