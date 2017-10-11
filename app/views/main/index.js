import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  Alert,
  AsyncStorage
} from 'react-native'
import DropdownMenu from './dropdown_menu'
import {Input, Button} from 'nachos-ui';

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'

const {width, height} = Dimensions.get('window');

import dropdown from '../../store/actions/dropdown'
import store from '../../store'
import meetingAction from '../../store/actions/meeting'
import orders from '../../store/storage/orders'

export default class Main extends Component {

  constructor (props) {
    super (props)
    this.state = {
      searchText: '',
      selectedClient: {},
      clientIsSelected: false,
      clientsData: [],
      modalVisible: false,
      orders: {}
    }
  }

  componentWillMount() {
    meetingAction.clear()
    dropdown.getItems('demo_clients')
    this.setState({clientsData: store.getState().dropdown.items})
    this.showOrders()
  }

  goToMeeting() {
    Actions.meeting({client: this.state.selectedClient})
  }

  selectClient(data) {
    this.setState({selectedClient: data})
    this.setState({clientIsSelected: true})
  }

  showLastReports() {
    Actions.report({
      client: this.state.selectedClient
    })
  }

  showOrders() {
    orders.getData()
      .then(
        (data) => {
          console.log('datat from test ->', data)
          this.setState({orders: data})
          console.log('orders', this.state.orders)
        }
      ).catch(
        err => console.log(err)
      )
  }

  renderOrdersModal() {
    let data = this.state.orders
    return (
      <View style={[styles.container, styles.backgroundLight]}>
        <ScrollView>
          { (data.length)
            ?
            data.map((item) => {
              return (
                <View style={{padding: 5, marginTop: 10, borderBottomWidth: 2, borderColor: colors.app_orange}}>
                  <View style={{width: width - 40}}>
                    <View>
                      <Text>Client:</Text>
                      <Text style={styles.textBigSemiDark}>{item.client.number}</Text>
                      <Text style={styles.textBigDark}>{item.client.name}</Text>
                    </View>
                    <View>
                      <Text style={styles.textBigSemiDark}>Field:</Text>
                      <Text style={styles.textBigDark}>{item.field}</Text>
                    </View>
                    <View>
                      <Text style={styles.textBigSemiDark}>Products:</Text>
                      {item.products.map((prod) => {
                        return <Text>{prod}</Text>
                      })}
                    </View>
                    <View>
                      <Text style={styles.textBigSemiDark}>Discount:</Text>
                      <Text style={styles.textBigDark}>{item.clientDiscount + item.productDiscount}</Text>
                    </View>
                    <View>
                      <Text style={styles.textBigSemiDark}>Notes:</Text>
                      <Text style={styles.textBigDark}>{item.notes}</Text>
                    </View>
                  </View>
                </View>

              )
            })
            : <Text style={styles.massage}>No Orders</Text>
          }
        </ScrollView>
        <View style={[styles.bottomContainer, {height: 70}]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Button
              style={[styles.bottomButton, styles.button]}
              kind='squared'
              theme={themes.buttonTheme}
              onPress={() => this.setState({modalVisible: false})}
            >close</Button>
            <Button
              style={[styles.bottomButton, styles.button]}
              kind='squared'
              theme={themes.buttonTheme}
              onPress={() => Alert.alert('sync orders...')}
            >send</Button>
          </View>
        </View>
      </View>
    )
  }

  renderClientData() {
    if(this.state.clientIsSelected) {
      return (
        <ScrollView>
          <View style={{width: width - 40}}>
            <View>
              <Text style={styles.textBigSemiDark}>{this.state.selectedClient.number}</Text>
              <Text style={styles.textBigDark}>{this.state.selectedClient.name}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>{/*אזור:*/}Region:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.region}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>{/*עיר:*/}City:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.city}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>{/*מוצרים:*/}Products:</Text>
              <Text style={styles.descText}>מוצר1</Text>
              <Text style={styles.descText}>מוצר2</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>Central client:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.name}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>Central number:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.number}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>{/*אנשי קשר*/}Contacts:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.contacts.phone}</Text>
              <Text style={styles.descText}>{this.state.selectedClient.contacts.fax}</Text>
            </View>
            <View style={styles.btnReports}>
              <TouchableOpacity onPress={this.showLastReports.bind(this)}>
                <Text style={styles.buttonTextTint}>LAST REPORTS{/*דוחות קודמות*/}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )
    } else {
      return (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.textMassage}>
              {/*בחר לקוח*/}client is not selected
            </Text>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.backgroundLight]}>
        <View style={styles.mainViewContainer}>
          <View style={[{ width: width, height: 100, flexDirection: 'row'}]}>
            <View style={{flex: 4}}>
              <Input
                height={50}
                style={styles.input}
                inputStyle={{fontSize: 20}}
                theme={themes.inputTheme}
                autoCapitalize='none'
                value={this.state.searchText}
                underlineColorAndroid='transparent'
                placeholder="Search"
                onChangeText={(searchText) => this.setState({searchText})}
              />
            </View>
            <View style={{flex: 1, height: 50,  margin: 5}}>
              <DropdownMenu
                optionList={this.state.clientsData}
                onPress={(data) => this.selectClient(data)}/>
            </View>
          </View>

          <View style={styles.mainViewDataContainer}>
            {this.renderClientData()}
          </View>

          <Modal
            visible={this.state.modalVisible}
          >
            {this.renderOrdersModal()}
          </Modal>

          <View style={styles.bottomContainer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button
                //disabled={!this.state.clientIsSelected}
                style={[styles.bottomButton, styles.button]}
                kind='squared'
                theme={themes.buttonTheme}
                onPress={() => this.setState({modalVisible: true})}
              >show orders</Button>
              <Button
                disabled={!this.state.clientIsSelected}
                style={[styles.bottomButton, styles.button]}
                kind='squared'
                theme={themes.buttonTheme}
                onPress={this.goToMeeting.bind(this)}
              >go to meeting</Button>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

