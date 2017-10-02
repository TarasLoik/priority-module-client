import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native'

import {Button} from 'nachos-ui'

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');


export default class TotalResultView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      client: this.props.client
    }
  }

  submit() {
    Alert.alert('Result submitted!');
    Actions.main()
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: colors.background_light}]}>
        <View style={{flex: 1, width: width, padding: 10}}>
          <ScrollView>
            <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>שטח:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>שחר חיים 1</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הזמנה:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>POTASSIUM NITRATE (NPK: 13-0-46)</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הנחות:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>15%</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>1500</Text>
              </View>

            </View>
          </ScrollView>

        </View>


        <View style={{ flexDirection: 'row',width: width, height: 100, alignItems: 'center', justifyContent: 'space-between'}}>
          <Button
            style={[styles.button, {margin: 5}]}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={() => {console.log(this.state.client, this.props.client)}}
          >הוסף מידע</Button>
          <Button
            style={[styles.button, {margin: 5}]}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={this.submit}
          >שלח</Button>
        </View>
      </View>

    )
  }
}