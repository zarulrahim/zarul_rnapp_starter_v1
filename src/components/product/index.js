import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>ProductScreen</Text>
      </View>
    )
  }
}

export default ProductScreen;