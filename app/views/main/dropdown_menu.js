import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import styles from '../../styles/index.js';

//initial Data is only for tests
import initialData from '../../store/initial_data';
const DEMO_OPTIONS = initialData.demo_clients

export default class DropdownMenu extends Component {

  constructor(props) {
    super(props);
    this.data = DEMO_OPTIONS;
    this.state = {
      selectedRow: {}
    }
  }

  selectRow(idx, value) {
    this.props.onPress(value)
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity>
        <View style={styles.dropdownRow}>
          <Text style={styles.textGrey}>{rowData.number}, {rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.dropdownButton}>
        <ModalDropdown
          style={styles.dropdownButton}
          dropdownStyle={styles.dropdownList}
          options={this.data}
          renderRow={this.renderRow}
          onSelect={(idx, value) => this.selectRow(idx, value)}
        >
          <Text style={styles.buttonText}>
            {/*חפש*/}SEARCH
          </Text>
        </ModalDropdown>
      </View>
    );
  }
}

