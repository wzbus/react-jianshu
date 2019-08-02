import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Iconfont } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Iconfont/>
        <Header/>
      </Provider>
    )
  }
}

export default App;
