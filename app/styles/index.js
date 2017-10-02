import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

import colors from './colors'

const BORDER_RADIUS = 4;

const styles = StyleSheet.create({
  // Common
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundLight: {
    backgroundColor: colors.background_light
  },

  imageBackground: {
    height: height,
    width: width
  },

  mainViewContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },

  mainViewDataContainer: {
    width: width,
    height: height - 200,
    alignItems: 'center'
  },

  bottomContainer: {
    width: width,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  addContainer: {
    height: 40,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 5,
    borderRadius: BORDER_RADIUS,
    backgroundColor: colors.light_grey
  },

  //NavBar
  navBarPadding: {
    ...Platform.select({
      ios: {
        paddingTop: 64,
      },
      android: {
        paddingTop: 54
      },
    })
  },
  navBarStyles: {
    backgroundColor: colors.background,
  },
  titleStyle: {
    color: colors.app_orange,
    fontWeight: 'bold',
  },
  navButtonStyle: {
    color: colors.light_grey,
  },
  textMassage: {
    textAlign: 'center',
    fontSize: 22,
    color: colors.dark_button
  },

  text: {
    fontSize: 13,
    color: 'black'
  },

  textBigDark: {
    fontSize: 24,
    color: colors.dark_button
  },

  textBigSemiDark: {
    fontSize: 24,
    color: colors.background_dark
  },

  textGrey: {
    fontSize: 18,
    color: colors.background
  },

  descText: {
    fontSize: 20,
    color: colors.dark_button
  },

  //Inputs & Buttons
  input: {
    margin: 5,
    color: 'black',
    fontSize: 15,
    backgroundColor: colors.light_grey,
    borderRadius: BORDER_RADIUS
  },
  buttonLoginView: {
    height: 50,
    width: width / 4,
    margin: 5,
    marginTop: 25
  },
  bottomButton: {
    width: width / 2, marginTop: 10
  },
  button: {
    borderRadius: BORDER_RADIUS
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.app_orange
  },
  buttonTextTint: {
    fontSize: 15,
    color: colors.app_orange
  },
  btnPlus: {
    margin: 2,
    paddingHorizontal: 0,
    width: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: colors.grey
  },
  btnReports: {
    backgroundColor: colors.background,
    borderRadius: 4, alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 30
  },

  //dropdown menu
  dropdownButton: {
    flex: 1,
    height: 50,
    backgroundColor: colors.background,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdownList: {
    width: width - 80,
    borderWidth: 1,
    borderColor: colors.dark_button
  },
  dropdownRow: {
    height: 50,
    width: width - 80,
    padding: 10,
    justifyContent: 'center'
  },

  //TODO temp styles for slicing(should be deleted!)
  tempBorderStyle: {
    borderWidth: 3,
    borderColor: 'red'
  }

});

export default styles;
