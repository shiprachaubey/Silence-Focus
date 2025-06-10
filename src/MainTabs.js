
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CustomTabBar from './components/CustomTabar';

// import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ActivityScreen';
// import SettingsScreen from './screens/SettingScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Tab = createBottomTabNavigator();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <CustomTabBar {...props} />} // ✅ pass ALL props here
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Missed" component={ChatScreen} />
//       <Tab.Screen name="Control" component={SettingsScreen} />
//       <Tab.Screen name="Accounts" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CustomTabBar from './components/CustomTabar';

// import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ActivityScreen';
// import SettingsScreen from './screens/SettingScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Tab = createBottomTabNavigator();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         lazy: false, // ✅ load all tabs immediately
//       }}
//       tabBar={(props) => <CustomTabBar {...props} />}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ unmountOnBlur: false }} // ✅ keeps screen alive
//       />
//       <Tab.Screen
//         name="Missed"
//         component={ChatScreen}
//         options={{ unmountOnBlur: false }}
//       />
//       <Tab.Screen
//         name="Control"
//         component={SettingsScreen}
//         options={{ unmountOnBlur: false }}
//       />
//       <Tab.Screen
//         name="Accounts"
//         component={ProfileScreen}
//         options={{ unmountOnBlur: false }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default MainTabs;


import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabar';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ActivityScreen';
import SettingsScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} theme={colorScheme} />} // 👈 pass theme here
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ unmountOnBlur: false }} />
<Tab.Screen
  name="Missed"
  component={ChatScreen}
  options={{
    tabBarIcon: ({ focused }) => <ActivityIcon focused={focused} />,
  }}
/>

      <Tab.Screen name="Control" component={SettingsScreen} options={{ unmountOnBlur: false }} />
      <Tab.Screen name="Accounts" component={ProfileScreen} options={{ unmountOnBlur: false }} />
    </Tab.Navigator>
  );
};

export default MainTabs;
