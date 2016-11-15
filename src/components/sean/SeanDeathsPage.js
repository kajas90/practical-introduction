import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SeanDeathsContent from './SeanDeathsContent';

import * as seanActions from '../../actions/seanActions';

class SeanDeathsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const {deaths} = this.props;
    return (
      <SeanDeathsContent deaths={deaths} actions={this.props.actions} />
    );
  }
}

SeanDeathsPage.propTypes = {
  deaths: PropTypes.array,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => (
{
  deaths: state.sean
}
);


const mapDispatchToProps = (dispatch) => (
{actions: bindActionCreators(seanActions, dispatch)}
);

//connecting component with redux store via provider
export default connect(mapStateToProps, mapDispatchToProps)(SeanDeathsPage);
