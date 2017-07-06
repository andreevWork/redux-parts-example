import React, { PureComponent } from 'react';
import { Actions } from '../../../store/index';
import {LoadData} from "../../hoc/loadData/LoadData";
import {BeerInfo} from "./beerInfo/BeerInfo";
import {EmptyOrLoaderOrData} from "../../common/emptyOrLoaderOrData/EmptyOrLoaderOrData";


class DetailsComponent extends PureComponent {
    render() {
        const {data, is_pending} = this.props.data;
        const has_data = !!data;

        return <div>
            <EmptyOrLoaderOrData has_data={has_data} is_pending={is_pending}>
                <BeerInfo beer={data} />
            </EmptyOrLoaderOrData>
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