import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, ImageBackground, ScrollView, Image, Button, Modal, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import appConfig from './../../app.json';

// Vector icons
import ANT from 'react-native-vector-icons/AntDesign';
import MAT from 'react-native-vector-icons/MaterialCommunityIcons';

// Screen
import HomeScreen from '../components/home';
import AboutScreen from '../components/about';
import ProfileScreen from '../components/profile';
import ProductScreen from '../components/product';

// Styles
const styles = StyleSheet.create({
  menustyWarp: { justifyContent: 'center', flex: 1, paddingLeft: 10, paddingRight: 100, height: '100%', },
  menusty: { color: '#fff', },
  cartsty: { color: '#fff', paddingRight: 10 },
  menustyClose: { color: '#000', paddingRight: 10, },
  closeWarp: { height: 40, justifyContent: "center", alignItems: "flex-start", },
  closeText: { color: '#000', fontSize: 15, padding: 10 },
});

// Drawer Button
const DrawerButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.navigation.toggleDrawer} style={styles.menustyWarp}>
        <MAT name="menu" size={30} style={styles.menusty} />
      </TouchableOpacity>
    </View>
  );
};

// Stack Navigator
export const HomeStack = createStackNavigator (
{
  home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation, screenProps, props }) => ({
      headerLeft: () => <DrawerButton navigation={navigation} />,
      // headerRight: () => <CartButton navigation={navigation} screenProps={screenProps} />,
      headerRight: () => { return (<View style={{paddingRight: 15}}><Text style={styles.menusty}>Filter</Text></View>) },
      title: 'Browse',
      headerTitleAlign: 'left',
    })
  },
}, {
    initialRouteName: 'home',
    headerTitleAlign: 'center',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: appConfig.themes.primaryColor, elevation: 0, shadowOpacity: 0 },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '   ',
    }
  }
)

export const AboutStack = createStackNavigator (
{
  about: {
    screen: AboutScreen,
    navigationOptions: ({ navigation, screenProps, props }) => ({
      // headerLeft: () => <DrawerButton navigation={navigation} />,
      // headerRight: () => <CartButton navigation={navigation} screenProps={screenProps} />,
      // headerRight: () => { return (<View style={{paddingRight: 15}}><Text style={styles.menusty}>Filter</Text></View>) },
      title: 'About',
      headerTitleAlign: 'left',
      header: null
    })
  },
}, {
    initialRouteName: 'about',
    headerTitleAlign: 'center',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: appConfig.themes.primaryColor, },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '   ',
    }
  }
)

export const ProfileStack = createStackNavigator (
{
  profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation, screenProps, props }) => ({
      // headerLeft: () => <DrawerButton navigation={navigation} />,
      // headerRight: () => <CartButton navigation={navigation} screenProps={screenProps} />,
      // headerRight: () => { return (<View style={{paddingRight: 15}}><Text style={styles.menusty}>Filter</Text></View>) },
      title: 'Profile',
      headerTitleAlign: 'left',
      header: null
    })
  },
}, {
    initialRouteName: 'profile',
    headerTitleAlign: 'center',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: appConfig.themes.primaryColor, },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '   ',
    }
  }
)

export const ProductStack = createStackNavigator (
{
  product: {
    screen: ProductScreen,
    navigationOptions: ({ navigation, screenProps, props }) => ({
      headerLeft: () => <DrawerButton navigation={navigation} />,
      // headerRight: () => <CartButton navigation={navigation} screenProps={screenProps} />,
      // headerRight: () => { return (<View style={{paddingRight: 15}}><Text style={styles.menusty}>Filter</Text></View>) },
      title: 'Product',
      headerTitleAlign: 'left',
    })
  },
}, {
    initialRouteName: 'product',
    headerTitleAlign: 'center',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: appConfig.themes.primaryColor, elevation: 0, shadowOpacity: 0 },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerBackTitle: '   ',
    }
  }
)