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
            placeholder='מִשׁתַמֵשׁ'
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
            placeholder='סיסמה'
            onChangeText={(password) => this.setState({password})}
          />
          <View style={styles.buttonLoginView}>
            <Button
              style={[styles.button, {width: 150}]}
              kind='squared'
              onPress={this.login}
              theme={themes.buttonTheme}
            >שחר</Button>
          </View>
        </View>
      </Image>

    )
  }
}
