import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

class List extends Component {
  render () {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <ListItem >
                <img alt='' className='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
});

export default connect(mapState, mapDispatch)(List);