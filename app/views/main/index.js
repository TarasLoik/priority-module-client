import React, {Component} from 'react'
import { Actions, ActionConst } from 'react-native-router-flux'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import DropdownMenu from './dropdown_menu'
import {Input, Button} from 'nachos-ui';

import styles from '../../styles/index.js';
import themes from '../../styles/themes';

const {width, height} = Dimensions.get('window');

import stateAction from '../../store/actions/state'
import store from '../../store'

import initialData from '../../store/initial_data';
const DEMO_OPTIONS = initialData.demo_clients

export default class Main extends Component {

  constructor (props) {
    super (props)
    this.state = {
      searchText: '',
      selectedClient: {},
      clientIsSelected: false,
      clientsData: DEMO_OPTIONS
    }
  }

  goToMeeting() {
    Actions.meeting({client: this.state.selectedClient})
  }

  selectClient(data) {
    let newstate = {client: {...data}}
    console.log('new state from main', newstate)
    stateAction.setState(newstate)
    let dataStore = store.getState()
    console.log('data from store', dataStore.state)

    this.setState({selectedClient: data})
    this.setState({clientIsSelected: true})
  }

  showLastReports() {
    Actions.report()
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
              <TouchableOpacity onPress={this.showLastReports}>
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
              <DropdownMenu optionList={this.state.clientsData} onPress={(data) => this.selectClient(data)}/>
            </View>
          </View>

          <View style={styles.mainViewDataContainer}>
            {this.renderClientData()}
          </View>

          <View style={styles.bottomContainer}>
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
    )
  }
}

