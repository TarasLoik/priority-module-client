import React, {Component} from 'react'
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux'

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
    return <Router scenes={scenes}/>
  }

  render() {
    const render = this.renderApp();
    return render;

  }
}


