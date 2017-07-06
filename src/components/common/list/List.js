import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import './List.css';

export class List extends PureComponent {
    render() {
        const {data} = this.props;

        return <Grid className="hidden"     container justify="space-around">
            {data.map(item => <Grid className="list-item" xs={2} item key={item.id}>
                {this.props.children(item)}
            </Grid>)}
        </Grid>;
    }
}

List.propTypes = {
    data: PropTypes.array,
    children: PropTypes.func.isRequired
};