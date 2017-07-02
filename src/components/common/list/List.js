import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {ListLoader} from "./loader/ListLoader";
import {EmptyList} from "./empty/EmptyList";
import {ListData} from "./data/ListData";

export class List extends PureComponent {
    hasData() {
        const {data} = this.props.list;
        return !!data && !!data.length;
    }

    render() {
        const {data, is_pending} = this.props.list;
        const has_data = this.hasData();

        return <section>
            <ListLoader is_pending={is_pending} />

            <EmptyList has_data={has_data} is_pending={is_pending} />

            <ListData has_data={has_data} is_pending={is_pending} data={data} >
                {this.props.children}
            </ListData>
        </section>;
    }
}

List.propTypes = {
    list: PropTypes.shape({
        data: PropTypes.array.isRequired,
        is_pending: PropTypes.bool.isRequired
    }).isRequired,
    children: PropTypes.func.isRequired
};