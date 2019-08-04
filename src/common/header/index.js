import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {
  getListArea () {
    const newList = this.props.list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>热门搜索
          <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe601;</i>
              换一批
          </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render () {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right space'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe600;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe653;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe616;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispath = (dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch({
        type: 'search_focus'
      });
    },
    handleInputBlur () {
      dispatch({
        type: 'search_blur'
      });
    },
    handleMouseEnter () {
      dispatch({
        type: 'mouse_enter'
      });
    },
    handleMouseLeave () {
      dispatch({
        type: 'mouse_leave'
      });
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapState, mapDispath)(Header);