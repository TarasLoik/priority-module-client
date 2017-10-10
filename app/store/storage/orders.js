import { AsyncStorage } from 'react-native';

const order = {

  async create(data) {
    let response = await AsyncStorage.getItem('ORDERS');
    let listOfOrders = await JSON.parse(response) || [];
    listOfOrders.push(data)
    await AsyncStorage.setItem('ORDERS',
      JSON.stringify(listOfOrders));
  },

  async get() {
    try {
      const value = await AsyncStorage.getItem('ORDERS');
      if (value !== null){
        // We have data!!
        console.log(JSON.parse(value))
      }
    } catch (error) {
      // Error retrieving data
    }
  }

}

export default order