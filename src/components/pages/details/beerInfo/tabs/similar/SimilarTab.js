import React, { PureComponent } from 'react';
import {EmptyOrLoaderOrData} from "../../../../../common/emptyOrLoaderOrData/EmptyOrLoaderOrData";
import {List} from "../../../../../common/list/List";
import {BeerItem} from "../../../../../common/list_items/beerItem/BeerItem";
import {Actions} from "../../../../../../store/index";
import {LoadData} from "../../../../../hoc/loadData/LoadData";

class SimilarTabComponent extends PureComponent {
    render() {
        const {is_pending, data} = this.props.data;
        const has_data = !!data && !!data.length;

        return <div>
            <EmptyOrLoaderOrData has_data={has_data} is_pending={is_pending}>
                <List data={data}>
                    {beer => <BeerItem beer={beer} />}
                </List>
            </EmptyOrLoaderOrData>
        </div>;
    }
}

const options = {
    stateToProps: state => state.details.similar,
    loadDataAction: ({style_id}) => Actions.details.similar.loadData(1, {styleId: style_id}),
    hasData: (props) => {
        const {data} = props;
        return data.data && data.data.length;
    },
};

export const SimilarTab = LoadData(options)(SimilarTabComponent);