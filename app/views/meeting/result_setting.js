import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown';

import styles from '../../styles/index.js';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

import initialData from '../../store/initial_data';
const DEMO_OPTIONS = initialData.products

import store from '../../store'
import meetingAction from '../../store/actions/meeting'


export default class ResultView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: this.props.data.client.fields,
      tempProducts: DEMO_OPTIONS,
      isAddedField: false,
      modalVisible: false,
      order: store.getState().meeting,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  renderProducts() {
    let data = this.state.tempProducts;
    return (
      <View>
        {
          data.map((item) => {
            return (
              <TouchableOpacity onPress={() => this.selectProduct(item)}>
                <View style={{height: 50, marginRight: 5, borderBottomWidth: 1, borderColor: 'black', justifyContent: 'center'}}>
                  <Text style={styles.textGrey}>{item}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  renderFieldInfo() {
    if ( this.state.order.field.length > 0) {
      return (
        <View>
          <View style={[styles.addContainer]}>
            <Text style={styles.descText}>
              {this.state.order.field}
            </Text>
            <View style={{marginRight: 5}}>
              <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <Text style={styles.textGrey}>{/*עוד מוצר*/}Add product</Text>{/*Add product*/}
              </TouchableOpacity>
            </View>
          </View>
          <View>
          </View>
        </View>
      )
    }
  }

  renderProductInfo() {
    let data = this.state.order.products
    if (data) {
      return (
        data.map((item) => {
          return (
            <View style={styles.addContainer}>
              <Text style={[styles.descText, {fontSize: 16}]}>
                {item}
              </Text>
            </View>
          )
        })
      )
    }
  }

  selectField(ind, data) {
    let order = this.state.order
    order.field = data
    this.setState({isAddedField: true})
    meetingAction.setInfo(order)
  }

  selectProduct(data) {
    let products = this.state.order.products
    products.push(data)
    meetingAction.setInfo({products: products})
    this.setState({modalVisible: false})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 18, color: 'red'}}>{this.props.data.client.number}</Text>
          <Text style={{fontSize: 24, color: 'black'}}>{this.props.data.client.name}</Text>
        </View>
        <View>
          <View style={{marginBottom: 5}}>
            <View style={[styles.dropdownButton, {alignItems: 'flex-end', paddingRight: 15}]}>
              <ModalDropdown
                style={styles.dropdownButton}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={{fontSize: 16}}
                options={this.state.fields}
                onSelect={(idx, value) => this.selectField(idx, value)}
              >
                <Text style={styles.buttonText}>
                  ADD FIELD{/*הוסף שדה*/}
                </Text>
              </ModalDropdown>
            </View>
          </View>
          <View>
            {this.renderFieldInfo(this.state.order.field)}
          </View>
          <View>
            {this.renderProductInfo()}
          </View>
          <View style={{width: width}}>
            <Modal
              animationType="fade"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {console.log('Modal has been closed')}}
            >
              <View style={{height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background}}>
                <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                  <Text style={[styles.buttonText, {textAlign: 'center', fontSize: 25}]}>{/*לְבַטֵל*/}CLOSE</Text>
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View style={{padding: 5,  paddingHorizontal: 10, backgorundColor: colors.light_grey}}>
                  {(this.state.modalVisible) ? this.renderProducts() : null }
                </View>
              </ScrollView>
            </Modal>
          </View>
        </View>
      </View>
    )
  }
}