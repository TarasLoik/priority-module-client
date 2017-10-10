import { AsyncStorage } from 'react-native';

const order = {

  async create(data) {
    let response = await AsyncStorage.getItem('ORDERS');
    let listOfOrders = await JSON.parse(response) || [];
    listOfOrders.push(data)
    await AsyncStorage.setItem('ORDERS',
      JSON.stringify(listOfOrders));
  },

  async getOrders() {
    //TODO Add functionality for get orders from AsyncStorage
  },


}

export default order