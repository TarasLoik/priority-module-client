import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

import styles from '../../styles/index.js';

const DEMO_OPTIONS = [
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    }

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
      }
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    }
  },
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    }

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
    }
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    }
  },
  {
    'name': "שחר חיים",
    'number': 1130,
    'fields': ['שחר חיים 1', 'שחר חיים 2', 'שחר חיים 3'],
    'discount': 5,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-654',
      'fax': '+972-1800-000-654'
    }

  },
  {
    'name': "שחר אורן",
    'number': 1150,
    'fields': ['שחר אורן 1', 'שחר אורן 2', 'שחר אורן 3'],
    'discount': 3,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-000-456',
      'fax': '+972-1800-000-456'
    }
  },
  {
    'name': "שחר דורון",
    'number': 1139,
    'fields': ['שחר דורון 1', 'שחר דורון 2', 'שחר דורון 3'],
    'discount': 7,
    'region': 'מחוז המרכז',
    'city': 'גבעת חיים',
    'contacts': {
      'phone': '+972-1800-332-000',
      'fax': '+972-1800-332-000'
    }
  },

];

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

