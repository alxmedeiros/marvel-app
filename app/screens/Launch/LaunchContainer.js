import React, { Component } from 'react';
import LaunchView from './LaunchView';
import { connect } from 'react-redux';
import * as marvelActions from 'app/actions/marvelActions';
import * as navigationActions from '../../actions/navigationActions';

class LaunchContainer extends Component {

    componentDidMount() {

        const { results, requestCharacters, navigation } = this.props;

        if ( results.length ) {
            navigation.navigate('App');
        } else {
            requestCharacters({offset: 0, limit: 4});
        }

    }

    componentDidUpdate() {

        const { results, requestCharacters, navigation } = this.props;

        if ( results.length ) {
            navigation.navigate('App');
        } else {
            requestCharacters({offset: 0, limit: 4});
        }
    }

    render() {
        return <LaunchView {...this.props} />;
    }
}

function mapStateToProps(action) {
    return {
        results: action.marvelReducer.results
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestCharacters: (params) => dispatch(marvelActions.requestCharacters(params))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchContainer);
