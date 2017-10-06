import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Image,
  Text,
  View
} from 'react-native'

import { Button, Input } from 'nachos-ui';

import styles from '../../styles/index.js';
import themes from '../../styles/themes';

import orderAction from '../../store/actions/order'

export default class LoginView extends Component {

  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login() {
    Actions.main()
    orderAction.getOrders()
  }

  render() {
    return (
      <Image
        style={styles.imageBackground}
        resizeMode='cover'
        source={require('../../assets/images/bckgrnd_login.png')}>
        <View style={[styles.container, {paddingHorizontal: 20}]}>
          <Input
            height={50}
            style={styles.input}
            inputStyle={{fontSize: 20}}
            theme={themes.inputTheme}
            keyboardType='email-address'
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            value={this.state.email}
            placeholder='Email'
            onChangeText={(email) => this.setState({email})}
          />
          <Input
            height={50}
            style={styles.input}
            inputStyle={{fontSize: 20}}
            //secureTextEntry={true}
            theme={themes.inputTheme}
            autoCapitalize='none'
            underlineColorAndroid='transparent'
            value={this.state.password}
            placeholder='Password'
            onChangeText={(password) => this.setState({password})}
          />
          <View style={styles.buttonLoginView}>
            <Button
              style={styles.button}
              kind='squared'
              onPress={this.login}
              theme={themes.buttonTheme}
            >Login</Button>
          </View>
        </View>
      </Image>

    )
  }
}
