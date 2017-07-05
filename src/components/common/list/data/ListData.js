import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import './ListData.css';

export class ListData extends PureComponent {
    render() {
        const {data, is_pending, has_data} = this.props;

        if (is_pending || !has_data) {
            return null;
        }

        return <Grid container justify="space-around">
            {data.map(item => <Grid className="list-item" xs={2} item key={item.id}>
                {this.props.children(item)}
            </Grid>)}
        </Grid>;
    }
}

ListData.propTypes = {
    data: PropTypes.array,
    has_data: PropTypes.bool.isRequired,
    is_pending: PropTypes.bool.isRequired,
    children: PropTypes.func.isRequired
};