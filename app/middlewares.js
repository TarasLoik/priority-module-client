import React, {Component} from 'react'

import LoginView from './views/login'
import MainView from './views/main'
import ClientView from './views/main/client'
import MeetingView from './views/meeting'
import ReportView from './views/report'
import TotalResultView from './views/meeting/total'
import ButtonGlobe from './views/components/navbar/button_globe'

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
    title: 'CLIENTS',
    titleStyle: styles.titleStyle,
    component: MainView,
    navigationBarStyle: styles.navBarStyles,
    navBarButtonColor: '#ffa57c',
    hideNavBar: false,
    renderLeftButton: false,
    renderRightButton: <ButtonGlobe></ButtonGlobe>,
  },
  {
    key: 'client',
    title: 'CLIENT',
    titleStyle: styles.titleStyle,
    component: ClientView,
    navigationBarStyle: styles.navBarStyles,
    navBarButtonColor: '#ffa57c',
    hideNavBar: false,
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
    //title: 'דוחות קודמות',
    title: 'LAST REPORTS',
    titleStyle: styles.titleStyle,
    navigationBarStyle: styles.navBarStyles,
    barButtonIconStyle: styles.titleStyle,
    hideNavBar: false,
    navBarButtonColor: '#ffa57c',
  },
  // Result Screen
  {
    key: 'total',
    component: TotalResultView,
    //title: 'מֵידָע',
    title: 'RESULT',
    titleStyle: styles.titleStyle,
    hideNavBar: false,
    navBarButtonColor: '#ffa57c',
  }
]
