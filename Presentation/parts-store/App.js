import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import MainScreen from './Scenes/MainScreen';
import DetailsScreen from './Scenes/DetailsScreen';
import ReviewScreen from './Scenes/ReviewScreen';
import NotImplementedYet from './Scenes/NotImplementedYet';

import Variables from './components/Globals/Variables';

const styles = StyleSheet.create(
  {
    leftIcon: {
      paddingLeft: 20,
    },
    rightIcons: {
      paddingRight: 20,
    }
  }
);


const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: (
          <TouchableOpacity>
            <Icon
              containerStyle={styles.leftIcon}
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
              onPress={() => { navigation.toggleDrawer() }} />
          </TouchableOpacity>
        ),
        headerRight: [(
          <TouchableOpacity key={1}>
            <Icon
              containerStyle={styles.rightIcons}
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              onPress={() => Variables.SearchBarActive.value = true} />
          </TouchableOpacity>
        ),
        (
          <TouchableOpacity key={2}>
            <Icon
              containerStyle={styles.rightIcons}
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-close" : "md-close"}
              onPress={() => Variables.SearchBarActive.value = false} />
          </TouchableOpacity>
        )]
      };
    }
  }
);

const ModalStack = createStackNavigator(
  {
    Main: AppNavigator,
    Details: DetailsScreen,
    Review: ReviewScreen,
    NotImplemented: NotImplementedYet,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);


const DrawerNavigator = createDrawerNavigator(
  {
    NavBar: {
      screen: AppNavigator,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
    Modal: {
      screen: ModalStack,
      navigationOptions: {
        drawerLabel: () => null,
      }
    },
    Main: MainScreen,
  },
);

const AppContainer = createAppContainer(DrawerNavigator);


export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}