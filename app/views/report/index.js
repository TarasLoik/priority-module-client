import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import colors from '../../styles/colors'

export default class ReportView extends Component {

  constructor (props) {
    super (props)
  }

  render() {
    let orders = this.props.orders
    return (
      <ScrollView>
        <View style={{padding: 10}}>
          {
            orders.map((order) => {
              return (
                <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
                  <View style={{backgroundColor: colors.background_light}}>
                    <Text style={{fontSize: 18, color: colors.background}}>תאריך</Text>
                    <Text style={{fontSize: 20, color: colors.dark_button}}>{order.date}</Text>
                  </View>
                  <View style={{ borderColor: colors.dark_button}}>
                    <Text style={{fontSize: 18, color: colors.background}}>שטח</Text>
                    <Text style={{fontSize: 20, color: colors.dark_button}}>{order.field}</Text>
                  </View>
                  <View style={{ borderColor: colors.dark_button}}>
                    <Text style={{fontSize: 18, color: colors.background}}>הזמנה</Text>
                    <Text style={{fontSize: 20, color: colors.dark_button}}>{order.product}</Text>
                  </View>
                  <View style={{ borderColor: colors.dark_button}}>
                    <Text style={{fontSize: 18, color: colors.background}}>הנחות</Text>
                    <Text style={{fontSize: 20, color: colors.dark_button}}>{order.discount}%</Text>
                  </View>
                  <View style={{ borderColor: colors.dark_button}}>
                    <Text style={{fontSize: 18, color: colors.background}}>מחיר סופי</Text>
                    <Text style={{fontSize: 20, color: colors.dark_button}}>{order.price}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}
