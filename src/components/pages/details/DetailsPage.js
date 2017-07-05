import React, { PureComponent } from 'react';
import { Actions } from '../../../store/index';
import {LoadData} from "../../hoc/loadData/LoadData";
import {LoaderOrData} from "../../common/loaderOrData/LoaderOrData";
import {BeerInfo} from "./BeerInfo/BeerInfo";


class DetailsComponent extends PureComponent {
    render() {
        const {data, is_pending} = this.props.data;
        return <div>
            <LoaderOrData has_data={!!data}>
                <BeerInfo beer={data} />
            </LoaderOrData>
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