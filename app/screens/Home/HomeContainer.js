import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as marvelActions from '../../actions/marvelActions';

class HomeContainer extends Component {
    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(action) {
    return {
        currentPage: action.marvelReducer.currentPage,
        offset: action.marvelReducer.offset,
        total: action.marvelReducer.total,
        results: action.marvelReducer.results
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestCharacters: (params) => dispatch(marvelActions.requestCharacters(params)),
        onChangePage: (page) => dispatch(marvelActions.onChangePage(page)),
        requestCharacterDetails: (characterId) => dispatch(marvelActions.requestCharacterDetails(characterId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
