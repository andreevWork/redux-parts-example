import React, { PureComponent } from 'react';
import { Actions } from '../../../store/index';
import {LoadData} from "../../hoc/loadData/LoadData";


class DetailsComponent extends PureComponent {
    render() {
        const {data} = this.props.data;

        return <div className="beers-list">
            {data && data.name}
        </div>;
    }
}

const options = {
    stateToProps: state => state.details,
    loadDataAction: ({match}) => Actions.details.loadData(match.params.id),
    hasData: (props) => {
        const {data, match} = props;

        return !!data.data && data.data.id === match.params.id;
    },
};

export const DetailsPage = LoadData(options)(DetailsComponent);