
import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import styles from '../../styles/index.js'

//import { connect } from 'react-redux'



//mapStateToProps = (state) => ({ optionList: state.newDropdownReducer.optionList });

/*mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (todoItem) => {
    dispatch(removeFromTodoList(todoItem));
  },
});*/

export default class NewDropdown extends Component {

  renderRow(rowData) {
    return (
      <TouchableOpacity>
        <View style={styles.dropdownRow}>
          <Text style={styles.textGrey}>{rowData.number}, {rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render(){
    const { optionList, selectItem } = this.props;
    return (
      <View style={styles.dropdownButton}>
        <ModalDropdown
          style={styles.dropdownButton}
          dropdownStyle={styles.dropdownList}
          options={optionList}
          renderRow={this.renderRow}
          onSelect={(idx, value) => selectItem(idx, value)}
        >
          <Text style={styles.buttonText}>
            {/*חפש*/}SEARCH
          </Text>
        </ModalDropdown>
      </View>
      /*<ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>To Do</Text>
          {
            Object.keys(todoList).map((itemId) => {
              return (
                <TouchableHighlight key={itemId} onPress={() => {removeTodoItem(itemId)}}>
                  <Text>{ todoList[itemId] }</Text>
                </TouchableHighlight>
              );
            })
          }
        </View>
      </ScrollView>*/
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(NewDropdown);


