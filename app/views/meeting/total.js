import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  TextInput,
  Modal
} from 'react-native'

import {Button} from 'nachos-ui'

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

import store from '../../store'
import orderAction from '../../store/actions/order'

export default class TotalResultView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      client: this.props.client,
      meetingInfo: store.getState().meeting,
      modalVisible: false,
      notes: ''
    }
  }

  renderProducts() {
    let data = this.state.meetingInfo.products
    return data.map((item) => {
      return (
        <View>
          <Text style={{fontSize: 20, color: colors.dark_button}}>{item}</Text>
        </View>
      )
    })
  }

  submit() {
    let client = this.state.client
    let order = {...this.state.meetingInfo, client}
    order.notes = this.state.notes
    orderAction.create(order)
    Alert.alert('Result submitted!');
    Actions.main()
  }

  saveNotes() {
    this.setState({modalVisible: false})
  }

  renderNotesModal(text) {
    return (
      <View>
        <TextInput
          ref="notes"
          style={styles.notesInput}
          onChangeText={(text) => this.setState({notes: text})}
          multiline = {true}
          numberOfLines = {8}
          value={this.state.notes}
          defaultValue={text}
          //returnKeyType='done'
        />
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: colors.background_light}]}>
        <View style={{flex: 1, width: width, padding: 10}}>
          <ScrollView>
            <View style={{borderBottomWidth: 1, borderColor: colors.app_red, marginBottom: 10}}>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>לקוח:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>{this.props.client.name}</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>{this.props.client.number}</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>שטח:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>{this.state.meetingInfo.field}</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>מוצר:</Text>
                {this.renderProducts()}
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הנחות: למשפחה</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>{this.state.meetingInfo.clientDiscount}</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הנחות:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>{this.state.meetingInfo.productDiscount}</Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הנחות:</Text>
                <Text style={{fontSize: 20, color: colors.dark_button}}>
                  {this.state.meetingInfo.productDiscount + this.state.meetingInfo.clientDiscount}
                </Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>מחיר: סופי</Text>
                <Text style={{fontSize: 25, color: colors.dark_button}}>
                  0
                </Text>
              </View>
              <View style={{ borderColor: colors.dark_button}}>
                <Text style={{fontSize: 18, color: colors.background}}>הוסף: מידע</Text>
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                  <Text
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    style={{height: 50, fontSize: 16, color: colors.dark_button}}
                  >
                    {this.state.notes}
                  </Text>
                </TouchableOpacity>
              </View>
              {/*
              **********Don`t remove this rows while haven`t translations***********
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
              */}
            </View>
          </ScrollView>
        </View>
        <Modal
          visible={this.state.modalVisible}
        >
          <View style={{flex: 1, backgroundColor: colors.background_light}}>
            <View style={{flexDirection: 'row', height: 60}}>
              <Button
                style={[styles.button, {flex: 1, margin: 5}]}
                kind='squared'
                theme={themes.buttonTheme}
                onPress={() => {this.saveNotes()}}
              >הוסף מידע</Button>
              <Button
                style={[styles.button, {flex: 1, margin: 5}]}
                kind='squared'
                theme={themes.buttonTheme}
                onPress={() => {this.setState({modalVisible: false})}}
              >CANCEL</Button>
            </View>
            {this.renderNotesModal(this.state.notes)}
          </View>

        </Modal>
        <View style={{ flexDirection: 'row',width: width, height: 100, alignItems: 'center', justifyContent: 'space-between'}}>
          <Button
            style={[styles.button, {margin: 5}]}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={() => {this.setState({modalVisible: true})}}
          >הוסף מידע</Button>
          <Button
            style={[styles.button, {margin: 5}]}
            kind='squared'
            theme={themes.buttonTheme}
            onPress={this.submit.bind(this)}
          >שלח</Button>
        </View>
      </View>
    )
  }
}