import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  Dimensions
} from 'react-native'



import Picker from 'react-native-picker';

import styles from '../../styles/index.js';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

export default class DiscountView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clientDiscount: this.props.data.client.discount,
      clDiscMin: 0,
      clDiscMax: 25,
      prDiscMin: 0,
      prDiscMax: 25,
      productDiscount: 0,
      showPicker: false,
    }
  }

  result() {
    let a = this.state.clientDiscount;
    let b = this.state.productDiscount;
    let result = a + b;
    this.props.discount(result)
  }

  renderPickerClient(show) {
    let data = [];
    for (let i = this.state.clDiscMin; i <= this.state.clDiscMax; i++) {data.push(i)}
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
      onPickerConfirm: (value) => this.setState({clientDiscount: value})
    });
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
      onPickerConfirm: value => this.setState({productDiscount: value})
    });
    if(show) {
      return Picker.show()
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>

          <View style={{flex: 1, width: width - 60}}>
            <View style={{marginTop: 15, borderBottomWidth: 2, borderColor: colors.background_dark}}>
              <View style={[styles.container, {height: 45, borderRadius: 4, backgroundColor: colors.background}]}>
                <TouchableOpacity onPress={this.renderPickerClient(true)}>
                  <View>
                    <Text style={[styles.textGrey, {color: colors.app_orange}]}>הנחות למשפחה</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View>
                  <Text>min:{this.state.clDiscMin}</Text>
                  <Text>max:{this.state.clDiscMax}</Text>
                </View>
                <View>
                  <Text style={[styles.titleStyle, {fontSize: 22}]}>{this.state.clientDiscount}</Text>
                </View>

              </View>

            </View>



            <View style={{marginTop: 15, borderBottomWidth: 2, borderColor: colors.background_dark}}>

              <View style={[styles.container, {height: 45, borderRadius: 4, backgroundColor: colors.background}]}>
                <TouchableOpacity onPress={() => this.renderPickerProd(true)}>
                  <View>
                    <Text style={[styles.textGrey, {color: colors.app_orange}]}>הנחות</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20}}>
                <View>
                  <Text>min:{this.state.prDiscMin}</Text>
                  <Text>max:{this.state.prDiscMax}</Text>
                </View>
                <View>
                  <Text style={[styles.titleStyle, {fontSize: 22}]}>{this.state.productDiscount}</Text>
                </View>
              </View>
            </View>
          </View>
          {this.renderPickerClient(this.state.showPicker)}
          {this.renderPickerProd(this.state.showPicker)}


        </View>
      </View>
    )
  }
}