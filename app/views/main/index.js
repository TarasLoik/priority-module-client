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
import {Indicator, Button} from 'nachos-ui';

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

import meetingAction from '../../store/actions/meeting'
import orders from '../../store/storage/orders'

import SearchInput, { createFilter } from 'react-native-search-filter'
//TODO Edit after giving on access to db
import data from '../../store/initial_data'
let clients = data.demo_clients
const KEYS_TO_FILTERS = ['name', 'number']


export default class Main extends Component {

  constructor (props) {
    super (props)
    this.state = {
      searchText: '',
      selectedClient: {},
      clientIsSelected: false,
      modalVisible: false,
      orders: [],
      searchTerm: '',
      isConnection: false,
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  componentWillMount() {
    meetingAction.clear()
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

  /*
  * Loading orders from local storage that no uploaded to database
  * */
  showOrders() {
    orders.getData()
      .then(
        (data) => {
          this.setState({orders: data})
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
            :
            <View style={{marginTop: 150}}>
              <Text style={styles.massage}>No Orders</Text>
            </View>
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
          <View style={{marginTop: 20, width: width - 40}}>
            <View style={{height: 80, flexDirection: 'row'}}>
              <View style={[styles.container ,{flex: 0.7}]}>
                <Text style={styles.textBigSemiDark}>{this.state.selectedClient.number}</Text>
              </View>
              <View style={[styles.container ,{flex: 1}]}>
                <Text style={styles.textBigDark}>{this.state.selectedClient.name}</Text>
              </View>
            </View>
            <View style={{height: 60, borderBottomWidth: 0.5, borderColor: colors.background}}>
              <Text style={styles.textGrey}>{/*אזור:*/}Region:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.region}</Text>
            </View>
            <View style={{height: 60, borderBottomWidth: 0.5, borderColor: colors.background}}>
              <Text style={styles.textGrey}>{/*עיר:*/}City:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.city}</Text>
            </View>
            <View style={{borderBottomWidth: 0.5, borderColor: colors.background}}>
              <Text style={styles.textGrey}>{/*מוצרים:*/}Products:</Text>
              <Text style={styles.descText}>מוצר1</Text>
              <Text style={styles.descText}>מוצר2</Text>
            </View>
            <View style={{height: 60, borderBottomWidth: 0.5, borderColor: colors.background}}>
              <Text style={styles.textGrey}>Central client:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.name}</Text>
            </View>
            <View style={{height: 60, borderBottomWidth: 0.5, borderColor: colors.background}}>
              <Text style={styles.textGrey}>Central number:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.number}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
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
      const filteredClients = clients.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
      return (
        <View>
          <View style={{width: width}}>
            <SearchInput
              style={[styles.input, {margin: 10, height: 50, paddingLeft: 15}]}
              onChangeText={(term) => { this.searchUpdated(term) }}
              placeholder='Type client name or number'
            />
          </View>
          <ScrollView>
            {filteredClients.map((client) => {
              return (
                <View style={{paddingHorizontal: 20, height: 60, flexDirection: 'row',}}>
                  <View style={[styles.container, {flex: 0.3,borderBottomWidth: 1, borderColor: colors.background}]}>
                    <Text style={styles.descText}>{client.number}</Text>
                  </View>
                  <View style={[styles.container, {borderBottomWidth: 1, borderColor: colors.background}]}>
                    <Text style={styles.descText}>{client.name}</Text>
                  </View>
                  <View style={[styles.container, {flex: 0.6, borderBottomWidth: 1, borderColor: colors.background}]}>
                    <TouchableOpacity onPress={() => this.selectClient(client)}>
                      <Text style={styles.massage}>SELECT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })}
          </ScrollView>

        </View>
      )
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.backgroundLight]}>
        <View style={[styles.mainViewContainer]}>
          <View style={[{height: 50, width: width, paddingHorizontal: 20}]}>
            <View style={{height: 50, marginTop: 5}}>
              <Button
                //disabled={!this.state.clientIsSelected}
                style={[styles.button]}
                kind='squared'
                iconName={(this.state.clientIsSelected) ? 'ios-arrow-back' : 'md-globe'}
                iconColor={(this.state.clientIsSelected) ? colors.app_orange : (this.state.isConnection) ? colors.app_orange : 'black'}
                iconPosition='left'
                theme={themes.buttonTheme}
                onPress={() => this.setState({clientIsSelected: false})}
              >{(this.state.clientIsSelected)? 'back' : 'load from database'}</Button>
            </View>
          </View>

          <View style={[styles.mainViewDataContainer]}>
            {this.renderClientData()}
          </View>

          <Modal
            visible={this.state.modalVisible}
          >
            {this.renderOrdersModal()}
          </Modal>

          <View style={[styles.bottomContainer]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 50}}>
                  <Button
                    //disabled={!this.state.clientIsSelected}
                    style={[styles.button]}
                    kind='squared'
                    theme={themes.buttonTheme}
                    onPress={() => this.setState({modalVisible: true})}
                  >show orders</Button>
                </View>
              </View>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 50}}>
                  <Button
                    disabled={!this.state.clientIsSelected}
                    style={[styles.button]}
                    kind='squared'
                    theme={themes.buttonTheme}
                    onPress={this.goToMeeting.bind(this)}
                  >go to meeting</Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

