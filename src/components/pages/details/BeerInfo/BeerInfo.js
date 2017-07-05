import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export class BeerInfo extends PureComponent {
    render() {
        const {name} = this.props.beer;

        return <section>
            {name}
        </section>;
    }
}

BeerInfo.propTypes = {
    beer: PropTypes.shape({
        name: PropTypes.string.isRequired
    })
};