import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import ION from 'react-native-vector-icons/Ionicons';
import appConfig from './../../app.json';

class CustomBottomTab extends Component {
  constructor(props) {
    super(props);
      this.state = {
        //
      }
  }

  renderTabItem = (routeIndex, route) => {
    const routeOptions = this.props.navigation._childrenNavigation
    const isFocused = routeOptions[route.routeName].isFocused()
    const tintColor = isFocused ? this.props.activeTintColor : this.props.inactiveTintColor
   
    return (
      <TouchableWithoutFeedback onPress={() => { routeOptions[route.routeName].navigate(route.routeName) }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          { this.props.renderIcon({ route, focused: isFocused, tintColor: tintColor }) }
          <Text style={{ fontWeight: 'bold', fontSize: 12, color: tintColor }}>{this.props.getLabelText({ route })}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 20, height: 60, backgroundColor: "#fff" }}>
          {
            this.props.navigation.state.routes.map((route, routeIndex) => {
              return (
                this.renderTabItem(routeIndex, route)
              )
            })
          }
        </View>
      </SafeAreaView>
    )
  }
}

export default CustomBottomTab;