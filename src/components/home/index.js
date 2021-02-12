import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen;