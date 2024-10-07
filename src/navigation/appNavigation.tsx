import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {colors, switchTheme} from '../utils/constant/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductList from '../screens/homeScreen';
import CategoryScreen from '../screens/categoryScreen';
import Splash from '../screens/splash';
import FetchByCategory from '../screens/fetchByCategory';
import ProductDetails from '../screens/productDetails';
import AboutScreen from '../screens/aboutScreen';
import DrawerScreen from '../screens/drawerScreen';
import WishList from '../screens/wishList';
import SettingScreen from '../screens/settingScreen';
import {ProductProvider} from '../providers/productContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Tab Navigator with customized styling
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.tabActiveColor,
        tabBarInactiveTintColor: colors.tabInactiveColor,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          borderTopWidth: 1,
          paddingBottom: 5,
          height: 70,
          elevation: 30,
          shadowColor: '#000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#000',
        headerStyle: {
          elevation: 30,
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={ProductList}
        options={({navigation}) => ({
          headerLeft: () => (
            <Ionicons
              name="menu"
              color={'#000'}
              size={32}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{marginLeft: 15}}
            />
          ),
        })}
      />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

// Stack Navigator
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#000',
        // headerStyle: {
        //   // backgroundColor: '#fff',
        //   // elevation: 30,
        //   // shadowColor: '#000',
        //   // shadowOpacity: 0.25,
        //   // shadowRadius: 3.84,
        // },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="fetchByCategory" component={FetchByCategory} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="WishList" component={WishList} />
    </Stack.Navigator>
  );
};

// Drawer Navigator
const DrawerNav = () => (
  <Drawer.Navigator
    drawerContent={({navigation}) => <DrawerScreen navigation={navigation} />}
    screenOptions={{
      headerShown: false,
      drawerStyle: {backgroundColor: '#f0f0f0'},
    }}>
    <Drawer.Screen name="Feed" component={StackNav} />
  </Drawer.Navigator>
);

// Main Navigation Container
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default AppNavigation;
