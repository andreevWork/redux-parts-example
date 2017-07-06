import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {ListLoader} from "./loader/Loader";
import {EmptyList} from "./empty/Empty";
import './EmptyOrLoaderOrData.css';

export class EmptyOrLoaderOrData extends PureComponent {
    render() {
        const {has_data, is_pending} = this.props;

        return <section className="empty-loader-data">
            <ListLoader is_pending={is_pending} />

            <EmptyList has_data={has_data} is_pending={is_pending} />

            {!is_pending && has_data && this.props.children}
        </section>;
    }
}

EmptyOrLoaderOrData.propTypes = {
    has_data: PropTypes.bool.isRequired,
    is_pending: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
};