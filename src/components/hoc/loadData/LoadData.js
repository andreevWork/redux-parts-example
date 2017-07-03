import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 *
 * @param options:
 * - mapStateToProps - required - fn for mapping redux state to props, must return object with single "data" key
 * - loadAction - required - action which will be dispatch to store for start load data
 * - checkDataExist - required - function for check if data already was loaded. Takes data from mapStateToProps
 * @returns {Function}
 */
export function LoadData(options) {
    const {mapStateToProps, loadAction, checkDataExist} = options;

    return function (Component) {
        class LoadDataComponent extends PureComponent {
            componentDidMount() {
                if (!checkDataExist(this.props.data)) {
                    this.props.loadAction();
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
            mapStateToProps,
            getActionsMap(loadAction)
        )(LoadDataComponent);
    };
}

function getActionsMap(loadAction) {
    return function mapDispatchToProps(dispatch) {
        return bindActionCreators({
            loadAction: loadAction
        }, dispatch);
    }
}