import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render () {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img src={item.get('imgUrl')} className='pic' alt='缩略图' />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            );
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  }
});

export default connect(mapState, mapDispatch)(List);