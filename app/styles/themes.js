import colors from './colors'
export default {

  buttonTheme: {
    BUTTON_FONT_COLOR: colors.app_orange,
    BUTTON_ROUNDED_RADIUS: 25,
    BUTTON_ROUNDED_HEIGHT: 50,
    BUTTON_ROUNDED_FONT_SIZE: 15,
    BUTTON_SQUARED_HEIGHT: 50,
    BUTTON_SQUARED_FONT_SIZE: 15,
    BUTTON_STATE_SUCCESS: '#94de45',
    BUTTON_STATE_DANGER: '#ff9c00',
    BUTTON_STATE_PRIMARY: colors.background,
    BUTTON_ICON_SIZE: 25,
    BUTTON_ICON_COLOR: '#fff',
    BUTTON_ACTIVE_ICON_COLOR: 'rgba(0, 0, 0, 0.5)',
  },

  segmentedControlButtonTheme: {
    BUTTON_BACKGROUND: colors.background_light,
    BUTTON_BORDER_WIDTH: 1,
    BUTTON_BORDER_COLOR: colors.background,
    BUTTON_BORDER_RADIUS: 4,
    BUTTON_HEIGHT: 50,
    BUTTON_FONT_COLOR: colors.background,
    BUTTON_FONT_SIZE: 18,
    BUTTON_FONT_WEIGHT: 'bold',
    BUTTON_SELECTED_BACKGROUND: colors.background,
    BUTTON_SELECTED_FONT_COLOR: colors.app_orange,
    BUTTON_SELECTED_BORDER_COLOR: colors.background,
    BUTTON_ICON_SIZE: 15,
    BUTTON_ICON_POSITION:'left',
    BUTTON_ICON_COLOR: colors.background,
    BUTTON_ACTIVE_ICON_COLOR: colors.white
  },

  inputTheme: {
    INPUT_HEIGHT:46,
    INPUT_BACKGROUND:'#fff',
    INPUT_ICON_SIZE:20,
    INPUT_VALID_ICON:'md-checkmark',
    INPUT_WARN_ICON:'md-alert',
    INPUT_ERROR_ICON:'md-close',
    INPUT_NORMAL_COLOR: colors.dark_button,
    INPUT_VALID_COLOR:'#66bd2b',
    INPUT_WARN_COLOR:'#ff8c2f',
    INPUT_ERROR_COLOR:'#e03126'
  },

  sliderTheme: {
    PROGRESS_BACKGROUND:'#bdc1cc',
    PROGRESS_ACTIVE_COLOR: colors.grey,
    PROGRESS_HEIGHT:6,
    PROGRESS_WIDTH:300
  }

}
