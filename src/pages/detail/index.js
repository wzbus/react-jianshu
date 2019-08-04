import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent {
  render () {
    return (
      <div>detail</div>
    )
  }
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(Detail);