
import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, ImageBackground, ScrollView, Image, Button, Modal, ActivityIndicator } from 'react-native';
import appConfig from './../../app.json';

// Vector icons
import ANT from 'react-native-vector-icons/AntDesign';
import MAT from 'react-native-vector-icons/MaterialCommunityIcons';
import ION from 'react-native-vector-icons/Ionicons';

// React Navigation
import { createAppContainer, NavigationActions, StackActions, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerNavigatorItems, DrawerActions } from 'react-navigation-drawer';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import * as navStack from './navigationStack.js';

// Component
import CustomDrawer from './customDrawer';
import CustomBottomTab from './customBottomTab';

// Screen
import LaunchScreen from '../components/launch';

// Drawer Navigator
const drawerNavigatorSetting = () => {
  return ({
    initialRouteName: 'home',
    contentComponent: props => <CustomDrawer {...props} />,
    drawerType: 'front',
    drawerBackgroundColor: '#fff',
    drawerWidth: '80%',
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    drawerPosition: 'left',
    // drawerLockMode: "unlocked",
    // disableGestures: false,
    contentOptions: {
      labelStyle: { color: '#fff', fontSize: 20, fontWeight: 'normal', paddingLeft: 20, },
      activeLabelStyle: { color: 'yellow' },
      // itemsContainerStyle: { marginTop: 30, },
      itemStyle: { borderBottomWidth: .5, borderBottomColor: '#ffffff2e', }
    }
  })
}

const HomeWithWithBottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: navStack.HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <ANT name={focused ? "home" : "home"} size={25} style={{ color: tintColor }} />
        )
      }
    },
    About: {
      screen: navStack.AboutStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <ANT name={focused ? "infocirlceo" : "infocirlceo"} size={25} style={{ color: tintColor }} />
        )
      }
    },
    Profile: {
      screen: navStack.ProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => (
          <ANT name={focused ? "user" : "user"} size={25} style={{ color: tintColor }} />
        ),
      }
    },
  },
  {
    tabBarComponent: (props) => (
      <CustomBottomTab {...props} />
    ),
    tabBarOptions: {
      // showLabel: false,
      // activeBackgroundColor: "#f8f9fa",
      inactiveTintColor: "#8d93ab",
      activeTintColor: appConfig.themes.primaryColor,
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 12,
      },
      style: {
        // backgroundColor: 'blue',
        borderTopColor: 'transparent'
      },
    }
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    home: {
      name: 'Home',
      screen: HomeWithWithBottomNavigator,
      navigationOptions: () => ({
        drawerLabel: 'Home',
      })
    },
    product: {
      name: 'Product',
      screen: navStack.ProductStack,
      navigationOptions: () => ({
        drawerLabel: 'Product',
      })
    },
  }, drawerNavigatorSetting()
);

// Switch Navigator
const AppNavigator = createSwitchNavigator(
  {
    Launch: { screen: LaunchScreen },
    App: { screen: AppDrawerNavigator }
    // Dashboard: { screen: registrationStatusScreen }
  }
);

// App Container
export default createAppContainer(AppNavigator);