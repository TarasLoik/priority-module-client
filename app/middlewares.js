import { Actions } from 'react-native-router-flux'

import LoginView from './views/login'
import MainView from './views/main'
import MeetingView from './views/meeting'
import ReportView from './views/report'
import TotalResultView from './views/meeting/total'

import styles from './styles'

export const middlewares = [
  // Login Screen
  {
    key: 'login',
    component: LoginView,
    hideNavBar: true,
  },
  // Main Screen
  {
    key: 'main',
    component: MainView,
    hideNavBar: true,
  },
  // Meeting Screen
  {
    key: 'meeting',
    component: MeetingView,
    hideNavBar: true,
  },
  // Report Screen
  {
    key: 'report',
    component: ReportView,
    title: 'דוחות קודמות',
    titleStyle: styles.titleStyle,
    navigationBarStyle: styles.navBarStyles,
    barButtonIconStyle: styles.titleStyle,
    hideNavBar: false,
  },
  // Result Screen
  {
    key: 'total',
    component: TotalResultView,
    title: 'TOTAL RESULT',
    hideNavBar: false,
  }
]
