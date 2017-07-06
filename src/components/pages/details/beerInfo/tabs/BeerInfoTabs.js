import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Tabs} from "../../../../common/tabs/Tabs";
import {SimilarTab} from "./similar/SimilarTab";


export class BeerInfoTabs extends PureComponent {
    render() {
        const {styleId} = this.props.beer;

        return <Tabs tabs={['similar', 'info']}>
            <SimilarTab style_id={styleId} />
            <div>
                1
            </div>
        </Tabs>;
    }
}

BeerInfoTabs.propTypes = {
    beer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        styleId: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    })
};