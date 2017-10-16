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

import {Button} from 'nachos-ui'

import styles from '../../styles/index.js';
import themes from '../../styles/themes';
import colors from '../../styles/colors'
const {width, height} = Dimensions.get('window');

export default class ClientView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedClient: this.props.client
    }
  }

  showLastReports() {
    Actions.report({
      client: this.state.selectedClient
    })
  }

  goToMeeting() {
    Actions.meeting({client: this.state.selectedClient})
  }

  render() {
    return (
      <View style={styles.container}>
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
        <View style={[styles.bottomContainer]}>

          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 50}}>
              <Button
                style={[styles.button]}
                kind='squared'
                theme={themes.buttonTheme}
                onPress={this.goToMeeting.bind(this)}
              >start meeting</Button>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
