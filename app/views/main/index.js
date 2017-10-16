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
import {Button} from 'nachos-ui';

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

import meetingAction from '../../store/actions/meeting'
import orders from '../../store/storage/orders'
import store from '../../store'

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
      modalVisible: false,
      orders: [],
      searchTerm: '',
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  componentWillMount() {
    meetingAction.clear()
    this.showOrders()
  }

  selectClient(data) {
<<<<<<< HEAD
    console.log(data)
    this.setState({selectedClient: data})
    this.setState({clientIsSelected: true})
    console.log(this.state.selectedClient)
  }

  showLastReports() {
    Actions.report({
      client: this.state.selectedClient
    })
=======
    Actions.client({
      client: data,
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
>>>>>>> 04ffdd5f7c1f077cbb61c4d6538a076f711da344
  }

  renderOrdersModal() {
    let data = this.state.orders
    return (
      <View style={[styles.container, styles.backgroundLight]}>
        <ScrollView>
<<<<<<< HEAD
          <View style={{width: width - 40}}>
            <View>
              <Text style={styles.textBigSemiDark}>{this.state.selectedClient.number}</Text>
              <Text style={styles.textBigDark}>{this.state.selectedClient.name}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>אזור:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.region}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>עיר:</Text>
              <Text style={styles.descText}>{this.state.selectedClient.city}</Text>
            </View>
            <View>
              <Text style={styles.textGrey}>מוצרים:</Text>
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
              <Text style={styles.textGrey}>אנשי קשר</Text>
              <Text style={styles.descText}>{this.state.selectedClient.contacts.phone}</Text>
              <Text style={styles.descText}>{this.state.selectedClient.contacts.fax}</Text>
            </View>
            <View style={styles.btnReports}>
              <TouchableOpacity onPress={this.showLastReports.bind(this)}>
                <Text style={styles.buttonTextTint}>דוחות קודמות</Text>
              </TouchableOpacity>
=======
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
>>>>>>> 04ffdd5f7c1f077cbb61c4d6538a076f711da344
            </View>
          }
        </ScrollView>
<<<<<<< HEAD
      )
    } else {
      return (
        <View style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.textMassage}>
              בחר לקוח
            </Text>
=======
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
>>>>>>> 04ffdd5f7c1f077cbb61c4d6538a076f711da344
          </View>
        </View>
      </View>
    )
  }

  render() {
    const filteredClients = clients.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={[styles.container, styles.backgroundLight]}>
<<<<<<< HEAD
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
                placeholder="שחר"
                onChangeText={(searchText) => this.setState({searchText})}
              />
            </View>
            <View style={{flex: 1, height: 50,  margin: 5}}>
              <DropdownMenu
                optionList={this.state.clientsData}
                onPress={(data) => this.selectClient(data)}/>
=======
        <View style={[styles.mainViewContainer]}>

          <View style={[styles.mainViewDataContainer]}>
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

>>>>>>> 04ffdd5f7c1f077cbb61c4d6538a076f711da344
            </View>
          </View>

          <Modal
            visible={this.state.modalVisible}
          >
            {this.renderOrdersModal()}
          </Modal>

<<<<<<< HEAD
          <View style={styles.bottomContainer}>
            <Button
              disabled={!this.state.clientIsSelected}
              style={[styles.bottomButton, styles.button]}
              kind='squared'
              theme={themes.buttonTheme}
              onPress={this.goToMeeting.bind(this)}
            >להתחיל פגישה</Button>
=======
          <View style={[styles.bottomContainer]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 50}}>
                  <Button
                    style={[styles.button]}
                    kind='squared'
                    theme={themes.buttonTheme}
                    onPress={() => this.setState({modalVisible: true})}
                  >show orders</Button>
                </View>
              </View>
            </View>
>>>>>>> 04ffdd5f7c1f077cbb61c4d6538a076f711da344
          </View>
        </View>
      </View>
    )
  }
}

