/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Root } from "native-base";
import AppNavigator from './src/navigation';
import appConfig from './app.json';

const App: () => React$Node = () => {
  return (
    <Root>
      <React.Fragment>
        <StatusBar barStyle="light-content" backgroundColor={appConfig.themes.primaryColor} />
        <AppNavigator />
      </React.Fragment>
    </Root>
  );
};

export default App;