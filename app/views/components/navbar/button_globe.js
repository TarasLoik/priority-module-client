import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Button} from 'nachos-ui'
import styles from '../../../styles'
import themes from '../../../styles/themes'
import colors from '../../../styles/colors'

export default class ButtonGlobe extends Component{
  constructor(props){
    super(props)
    this.state = {
      connection: false
    }
  }

  componentWillMount() {
    //TODO Check Connection and set color(setState 'connection') to button
  }

  pressButton() {
    //TODO add logic to check connection
    Alert.alert('Checking for connection')
    this.setState({connection: !this.state.connection})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Button
          style={[styles.button,{flex: 1, width: 50, paddingHorizontal: 0}]}
          kind='squared'
          iconName='md-globe'
          height={27}
          iconColor={(this.state.connection) ? colors.app_orange : 'black'}
          iconPosition='left'
          iconSize={27}
          theme={themes.buttonTheme}
          onPress={() => this.pressButton()}
        ></Button>
      </View>
    )
  }
}
