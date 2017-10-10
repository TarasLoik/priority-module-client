import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';

import { Switcher, SegmentedControlButton, Button} from 'nachos-ui';

import styles from '../../styles/index.js'
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

import DiscountView from './discount_setting'
import ResultView from './result_setting'
import store from '../../store'
import meetingAction from '../../store/actions/meeting'

export default class MeetingView extends Component {

  constructor (props) {
    super (props);
    this.state = {
      discountTab: false,
      client: this.props.client,
      order: store.getState().meeting
    }
  }

  componentWillMount() {
    //meetingAction.clear()
  }

  componentDidMount() {
    meetingAction.setInfo({clientDiscount: this.props.client.discount})
  }

  setViewMode(mode) {
    (mode === 'Discount')
      ? this.setState({discountTab: true})
      : this.setState({discountTab: false})
  }

  renderMainInfo() {
    if(this.state.discountTab) {
      return (
        <DiscountView
          data={this.state}
        />
      )
    } else {
      return (
        <ResultView
          data={this.state}
        />
      )
    }
  }

  submit() {
    let data = store.getState().meeting
    meetingAction.setInfo(data)
    Actions.total(
      {
        client: this.state.client
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
                //text='הוסף מידע'
                text='INFO'
                theme={themes.segmentedControlButtonTheme}
              />
              <SegmentedControlButton
                value='Discount'
                //text='הנחות'
                text='DISCOUNTS'
                theme={themes.segmentedControlButtonTheme}
              />
            </Switcher>
          </View>
        </View>
        <ScrollView style={{height: height - 200, width: width - 20}}>
          {this.renderMainInfo()}
        </ScrollView>
        <View style={{ width: width, height: 100, alignItems: 'center', justifyContent: 'center', padding: 20}}>
          <Button
            style={styles.button}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={this.submit.bind(this)}
          >{/*שלח*/}SUBMIT</Button>
        </View>
      </View>
    )
  }
}

