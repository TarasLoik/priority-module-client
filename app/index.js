import React, {Component} from 'react'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux'
import { Provider } from 'react-redux'

import store from './store'

import { middlewares } from './middlewares'

import styles from './styles'

const scenes = Actions.create(
  <Scene key='root'>
    {
      middlewares.map((middleware) => (
        <Scene
          navigationBarStyle={styles.navBarStyles}
          titleStyle={styles.titleStyle}
          rightButtonTextStyle={styles.navButtonStyle}
          {...middleware}
          component={middleware.component}
          //onRight={middleware.onRight}
          //rightTitle={middleware.rightTitle}
        />
      ))
    }
  </Scene>
);

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  renderApp() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    )
  }

  render() {
    const render = this.renderApp();
    return render;

  }
}


