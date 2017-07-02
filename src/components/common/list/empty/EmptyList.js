import React from 'react';
import {pure} from 'recompose';

const EmptyListComponent = ({is_pending, has_data}) => !is_pending && !has_data && <div>No data.</div>;

export const EmptyList = pure(EmptyListComponent);