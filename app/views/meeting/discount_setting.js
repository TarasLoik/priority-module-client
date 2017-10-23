import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import Picker from 'react-native-picker';

import styles from '../../styles/index.js';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

import store from '../../store'
import meetingAction from '../../store/actions/meeting'

export default class DiscountView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clDiscMin: this.props.data.client.discount,
      clDiscMax: 25,
      prDiscMin: 0,
      prDiscMax: 25,
      showPicker: false,
      order: store.getState().meeting
    };
  }

  componentWillUnmount() {
    let order = this.state.order
    meetingAction.setInfo(order)
  }

  result() {
    let discount = this.state.order.clientDiscount + this.state.order.productDiscount
    return discount
  }

  setClientDiscount(value) {
    let order = this.state.order
    order.clientDiscount = Number.parseInt(value)
    this.setState({order: order})
    this.setState({clDiscMin: Number.parseInt(value)})
    meetingAction.setInfo(order)
  }

  setProdDiscount(value) {
    let order = this.state.order
    order.productDiscount = Number.parseInt(value)
    this.setState({order: order})
    meetingAction.setInfo(order)
  }

  renderPickerClient(show) {
    let data = [];
    for (let i = this.state.clDiscMin; i <= this.state.clDiscMax; i++) {data.push(i)}
    Picker.init({
      pickerData: data,
      selectedValue: [0],
      pickerTitleText: 'הנחות למשפחה',
      pickerTitleColor: [75, 190, 185, 1],
      pickerConfirmBtnText: 'מַעֲרֶכֶת', // set
      pickerCancelBtnText: 'לְבַטֵל', // cancel
      pickerConfirmBtnColor: [255, 165, 124, 1],
      pickerCancelBtnColor: [255, 165, 124, 1], //orange
      pickerToolBarBg: [69, 71, 91, 1],//back-dark
      pickerBg: [90, 95, 111, 1], //background
      pickerToolBarFontSize: 20,
      pickerFontSize: 25,
      pickerFontColor: [255, 165, 124, 1], //orange
      onPickerConfirm: (value) => this.setClientDiscount(value)
    });
    Picker.hide();
    if(show) {
      return Picker.show()
    }
  }

  renderPickerProd (show) {
    let data = [];
    for (let i = this.state.prDiscMin; i <= this.state.prDiscMax; i++) {data.push(i)}
    Picker.init({
      pickerData: data,
      selectedValue: [0],
      pickerTitleText: 'הנחות',
      pickerTitleColor: [75, 190, 185, 1],
      pickerConfirmBtnText: 'מַעֲרֶכֶת', // set
      pickerCancelBtnText: 'לְבַטֵל', // cancel
      pickerConfirmBtnColor: [255, 165, 124, 1],
      pickerCancelBtnColor: [255, 165, 124, 1], //orange
      pickerToolBarBg: [69, 71, 91, 1],//back-dark
      pickerBg: [90, 95, 111, 1], //background
      pickerToolBarFontSize: 20,
      pickerFontSize: 25,
      pickerFontColor: [255, 165, 124, 1], //orange
      onPickerConfirm: value => this.setProdDiscount(value)
    });
    Picker.hide();
    if(show) {
      return Picker.show()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, {marginTop: 20}]}>
          <View style={{flex: 1, width: width - 60}}>
            <View style={{marginTop: 15, borderBottomWidth: 2, borderColor: colors.background_dark}}>
              <View style={[styles.container, {height: 45, borderRadius: 4, backgroundColor: colors.background}]}>
                <TouchableOpacity onPress={() => this.renderPickerClient(true)}>
                  <View>
                    <Text style={[styles.textGrey, {color: colors.app_orange}]}>FAMILY DISCOUNT{/*הנחות למשפחה*/}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View>
                  <Text>min:{this.state.clDiscMin}</Text>
                  <Text>max:{this.state.clDiscMax}</Text>
                </View>
                <View>
                  <Text style={[styles.titleStyle, {fontSize: 22}]}>
                    {this.state.clDiscMin}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 15, borderBottomWidth: 2, borderColor: colors.background_dark}}>
              <View style={[styles.container, {height: 45, borderRadius: 4, backgroundColor: colors.background}]}>
                <TouchableOpacity onPress={() => this.renderPickerProd(true)}>
                  <View>
                    <Text style={[styles.textGrey, {color: colors.app_orange}]}>PRODUCT DISCOUNT{/*הנחות*/}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View>
                  <Text>min:{this.state.prDiscMin}</Text>
                  <Text>max:{this.state.prDiscMax}</Text>
                </View>
                <View>
                  <Text style={[styles.titleStyle, {fontSize: 22}]}>{this.state.order.productDiscount}</Text>
                </View>
              </View>
            </View>
          </View>
          {this.renderPickerClient(this.state.showPicker)}
          {this.renderPickerProd(this.state.showPicker)}
          <View style={{flexDirection: 'row', marginTop: 20, height: 20, alignSelf: 'center'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textGrey}>Discount result:</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.textBigDark]}>{this.result()}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}