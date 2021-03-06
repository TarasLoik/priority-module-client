import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import { Switcher, SegmentedControlButton, Button} from 'nachos-ui';

import styles from '../../styles/index.js'
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

import DiscountView from './discount_setting'
import ResultView from './result_setting'

export default class MeetingView extends Component {

  constructor (props) {
    super (props);
    console.log(props);
    this.state = {
      discountTab: false,
      client: this.props.client,
      field: {},
      discounts: []
    }
  }

  setViewMode(mode) {
    (mode === 'Discount')
      ? this.setState({discountTab: true})
      : this.setState({discountTab: false});
  }

  setField(data) {
    console.log(data);
  }

  setDiscount(data) {
    this.setState({discounts: data})
  }

  renderMainInfo() {
    if(this.state.discountTab) {
      return (
        <DiscountView
          data={this.state}
          discounts={this.setDiscount}
        />
      )
    } else {
      return (
        <ResultView
          data={this.state}
          setData={this.setField}
        />
      )
    }
  }

  submit() {
    Actions.total(
      {
        client: this.state.client,
        field: this.state.field,
        products: this.state.products,
        discount: this.state.discounts
      }
    )
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: colors.background_light}]}>
        {/*segment button container*/}
        <View>
          <View style={{height: 50, width: width - 10, margin: 5}}>
            <Switcher
              style={{flex: 1}}
              onChange={(mode) => this.setViewMode(mode)}
              direction='row'
              defaultSelected={0}
            >
              <SegmentedControlButton
                value='Setting'
                text='הוסף מידע'
                theme={themes.segmentedControlButtonTheme}
              />
              <SegmentedControlButton
                value='Discount'
                text='הנחות'
                theme={themes.segmentedControlButtonTheme}
              />
            </Switcher>
          </View>
        </View>

        {/*Main container*/}
        <ScrollView style={{height: height - 200, width: width - 20}}>
          {this.renderMainInfo()}
        </ScrollView>

        {/*Bottom container(Button submit)*/}
        <View style={{ width: width, height: 100, alignItems: 'center', justifyContent: 'center', padding: 20}}>
          <Button
            style={styles.button}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={this.submit.bind(this)}
          >שלח</Button>
        </View>
      </View>
    )
  }
}

