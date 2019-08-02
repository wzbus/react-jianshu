import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button
} from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right space'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe600;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe653;</i>
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

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus',
      };
      dispatch(action);
    },
    handleInputBlur () {
      const action = {
        type: 'search_blur',
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);