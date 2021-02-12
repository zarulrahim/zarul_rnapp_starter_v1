import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import appConfig from '../../../app.json';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('App')
    }, 1000)
  };

  render() {
    const styles = {
      mainContainer: {
        flex: 1,
        backgroundColor: appConfig.themes.primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
      },
      appLabel: {
        color: "#fff"
      }
    }

    return(
      <View style={styles.mainContainer}>
        <Text style={styles.appLabel}>{appConfig.name}</Text>
      </View>
    )
  }
}

export default LaunchScreen;