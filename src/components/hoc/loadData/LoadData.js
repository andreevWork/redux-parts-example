import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 *
 * @param options:
 * - stateToProps - required - fn for mapping redux state to props, must return object with single "data" key
 * - loadDataAction - required - action which will be dispatch to store for start load data. Takes data from props
 * - hasData - required - function for check if data already was loaded. Takes data from mapStateToProps
 * @returns {Function}
 */
export function LoadData(options) {
    const {stateToProps, loadDataAction, hasData} = options;

    return function (Component) {
        class LoadDataComponent extends PureComponent {
            componentDidMount() {
                const has_data = hasData(this.props);

                if (!has_data) {
                    this.props.loadDataAction(this.props);
                }
            }

            render() {
                return <Component
                    {...this.props}
                    data={this.props.data}
                />;
            }
        }

        return connect(
            (state) => ({data: stateToProps(state)}),
            getLoadAction(loadDataAction)
        )(LoadDataComponent);
    };
}

function getLoadAction(loadDataAction) {
    return dispatch => bindActionCreators({loadDataAction}, dispatch);
}