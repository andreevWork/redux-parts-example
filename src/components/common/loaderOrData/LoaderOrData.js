import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';


export class LoaderOrData extends PureComponent {
    render() {
        const {has_data} = this.props;

        return has_data ? this.props.children : <CircularProgress className='ab-center' />;
    }
}

LoaderOrData.propTypes = {
    has_data: PropTypes.bool.isRequired
};