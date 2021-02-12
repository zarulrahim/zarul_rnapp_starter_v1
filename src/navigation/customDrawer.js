import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { List, ListItem, Text, Right, Left, Icon } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { DrawerItems, DrawerNavigatorItems } from 'react-navigation-drawer';
import ANT from 'react-native-vector-icons/AntDesign';
import appConfig from './../../app.json';
import moment from 'moment';

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        //
      }
  }

  render() {
    const styles = StyleSheet.create({
      menuListItem: { borderBottomWidth: .2, borderColor: '#ffffff42' },
      menuListText: { color: '#fff', fontSize: 18, padding: 5 },
      menustyWarp: { justifyContent: 'center', flex: 1, paddingLeft: 10, paddingRight: 100, height: '100%', },
      menusty: { color: '#fff', },
      cartsty: { color: '#fff', paddingRight: 10 },
      menustyClose: { color: appConfig.themes.primaryColor },
      closeWarp: { justifyContent: "center", alignItems: "flex-start", },
      closeText: { color: '#000', fontSize: 15, padding: 10 },
    });

    const excludeMenu = ['']
    let filteredMenuItems = []
    this.props.items.map((item) => {
      excludeMenu.map((menu) => {
        if (item.key !== menu) {
          filteredMenuItems.push(item)
        }
      })
    })

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: appConfig.themes.primaryColor }} forceInset={{bottom: 'never'}}>
        <View style={{ backgroundColor: '#fff', padding: 15 }}>
          <View style={styles.closeWarp}>
            <TouchableOpacity onPress={this.props.navigation.closeDrawer} style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-end' }}>
              <ANT name="closecircle" size={30} style={styles.menustyClose} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', marginBottom: 10, }}>
            <View style={{ width: '100%', height: 80 }}>
              <Text style={{ textAlign: 'center' }}>{appConfig.displayName}</Text>
              {/* <Image source={logo} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} /> */}
            </View>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: 'transparent' }}>
          <List>
          {
            filteredMenuItems.map((menu, menuIndex) => {
              console.log("check menu -===> ", menu.key)
              return (
                <ListItem key={menuIndex} style={styles.menuListItem} onPress={() => { this.props.navigation.navigate(menu.routeName)}} noIndent={true} noIndent={true}>
                  <Text style={styles.menuListText}>
                    {
                      menu.key === 'home' ? 'Home' :
                      menu.key === 'product' ? 'Product' :
                      menu.key
                    }
                   </Text>
                </ListItem>
              )
            })
          }
          </List>
        </ScrollView>
        <View style={{ marginTop: 15, backgroundColor: '#fff' }}>
          <View style={{ backgroundColor: 'transparent', margin: 15 }}>
            <Text style={{ color: '#000'}}>App Version <Text style={{ fontWeight: 'bold', color: '#000' }}>1.2.3</Text></Text>
            <Text note style={{ marginTop: 5, color: '#000', fontSize: 10 }}>Zarul Rahim © {moment().format('YYYY')}. All Rights Reserved.</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default CustomDrawer;