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

import ModalDropdown from 'react-native-modal-dropdown';

import {Button} from 'nachos-ui'

import styles from '../../styles/index.js';
import colors from '../../styles/colors';
const {width, height} = Dimensions.get('window');

let tempData = {
  products: [
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
    'UREA(NPK:46-0-0)',
    'POTASSIUM NITRATE(NPK:13-0-46)',
    'SOLIMIX(NPK:15-0-15)',
    'SOLIMIX:(NPK:19-19-19)',
  ]
}

export default class ResultView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: this.props.data.client.fields,
      tempProducts: tempData.products,
      addedField: {
        name: '',
        fieldProducts: []
      },
      isAddedField: false,
      modalVisible: false
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
    if (this.state.isAddedField) {
      return (
        <View>
          <View style={[styles.addContainer]}>
            <Text style={styles.descText}>
              {this.state.addedField.name}
            </Text>
            <View style={{marginRight: 5}}>
              <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <Text style={styles.textGrey}>עוד מוצר</Text>{/*Add product*/}
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
    let data = this.state.addedField.fieldProducts
    return (
      data.map((item) => {
        return (
          <View style={styles.addContainer}>
            <Text style={styles.descText}>
              {item}
            </Text>
          </View>
        )
      })
    )
  }

  selectField(ind, data) {
    let fieldProducts = [];
    let field = this.state.addedField;
    field.name = data;
    field.fieldProducts = fieldProducts;
    this.setState({addedField: field, isAddedField: true});
    //console.log(this.state.addedField)
  }

  selectProduct(data) {
    let arr = (this.state.addedField.fieldProducts);
    arr.push(data);
    let field = this.state.addedField;
    field.fieldProducts = arr;
    this.setState({addedField: field});
    this.setModalVisible(false)
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
                  הוסף שדה
                </Text>
              </ModalDropdown>
            </View>
          </View>

          <View>
            {this.renderFieldInfo(this.state.addedField)}
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
                  <Text style={[styles.buttonText, {textAlign: 'center', fontSize: 25}]}>לְבַטֵל</Text>
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