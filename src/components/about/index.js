import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>AboutScreen</Text>
      </View>
    )
  }
}

export default AboutScreen;