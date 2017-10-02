import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import styles from '../../styles/index.js'
import colors from '../../styles/colors'

export default class ReportView extends Component {

  constructor (props) {
    super (props)
  }

  render() {
    return (
      <ScrollView>
        <View style={{padding: 10}}>
          <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
            <View style={{backgroundColor: colors.background_light}}>
              <Text style={{fontSize: 18, color: colors.background}}>תאריך</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1 MAR 2015</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>שטח</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>NorthWest Feild Area</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הזמנה</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>POTASSIUM NITRATE (NPK: 13-0-46)</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הנחות</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>0%</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1500</Text>
            </View>
          </View>
          <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
            <View style={{backgroundColor: colors.background_light}}>
              <Text style={{fontSize: 18, color: colors.background}}>תאריך</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1 MAR 2015</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>שטח</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>NorthWest Feild Area</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הזמנה</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>POTASSIUM NITRATE (NPK: 13-0-46)</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הנחות</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>0%</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1500</Text>
            </View>
          </View>
          <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
            <View style={{backgroundColor: colors.background_light}}>
              <Text style={{fontSize: 18, color: colors.background}}>תאריך</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1 MAR 2015</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>שטח</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>NorthWest Feild Area</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הזמנה</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>POTASSIUM NITRATE (NPK: 13-0-46)</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הנחות</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>0%</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1500</Text>
            </View>
          </View>
          <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
            <View style={{backgroundColor: colors.background_light}}>
              <Text style={{fontSize: 18, color: colors.background}}>תאריך</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1 MAR 2015</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>שטח</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>NorthWest Feild Area</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הזמנה</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>POTASSIUM NITRATE (NPK: 13-0-46)</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>הנחות</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>0%</Text>
            </View>
            <View style={{ borderColor: colors.dark_button}}>
              <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי</Text>
              <Text style={{fontSize: 20, color: colors.dark_button}}>1500</Text>
            </View>
          </View>


        </View>
      </ScrollView>
    )
  }
}
