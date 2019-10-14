import React, { Component } from 'react';
import DetailView from './DetailView';
import { connect } from 'react-redux';

class DetailContainer extends Component {
    render() {
        return <DetailView {...this.props} />;
    }
}

function mapStateToProps(action) {
    return {
        selected: action.marvelReducer.selected
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailContainer);
