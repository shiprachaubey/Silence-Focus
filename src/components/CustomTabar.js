// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   useColorScheme,
// } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import LinearGradient from 'react-native-linear-gradient';
// import HomeIcon from '../assets/svgs/HomeIcon';
// import MissedIcon from '../assets/svgs/ActivityIcon';
// import ControlIcon from '../assets/svgs/SettingIcon';
// import ProfileIcon from '../assets/svgs/ProfileIcon';

// const icons = {
//   Home: <HomeIcon />,
//   Missed: <MissedIcon />,
//   Control: <ControlIcon />,
//   Accounts: <ProfileIcon />,
// };

// const labels = {
//   Home: 'Home',
//   Missed: 'Missed',
//   Control: 'Control',
//   Accounts: 'Accounts',
// };

// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   const insets = useSafeAreaInsets();

//   return (
//     <View style={styles.absoluteContainer}>
//       {/* Glowing background effect using gradient */}
//       <LinearGradient
//         colors={[
//           'rgba(184, 115, 51, 0.00)',
//           'rgba(184, 115, 51, 0.08)',
//         ]}
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         style={styles.glowLayer}
//       />

//       <View
//         style={[
//           styles.tabBar,
//           { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 },
        
//         ]}
//       >
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;
//           const label = labels[route.name];
//           const Icon = icons[route.name];

//           const onPress = () => {
//             if (!isFocused) navigation.navigate(route.name);
//           };

//           return (


// <TouchableOpacity
//   key={route.key}
//   onPress={onPress}
//   activeOpacity={0.8}
//   style={isFocused ? styles.activeTab : styles.inactiveTab}
// >
//   <View style={styles.iconRow}>
//     {React.cloneElement(Icon, {
//       width: 22,
//       height: 22,
//       color: isFocused ? '#FFA43A' : '#fff',
//     })}
//     {isFocused && label !== '' && (
//       <Text style={styles.activeLabel}>{label}</Text>
//     )}
//   </View>
// </TouchableOpacity>



//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
// absoluteContainer: {
//   position: 'absolute',
//   bottom: 0,
//   width: '100%',
//   alignItems: 'center',
//   paddingBottom: 18,
//   zIndex: 10,
// },
//   glowLayer: {
//   position: 'absolute',
//   bottom: 0,
//   width: '100%',
//   height: 120,
//   borderRadius: 40,
//   zIndex: -1,
// },

//  tabBar: {
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   alignItems: 'center',      // ✅ centers items vertically
//   backgroundColor: 'rgba(85, 85, 85, 0.12)',
//   borderRadius: 50,
//   width: '90%',
//   height: 75,                // your defined height
//   elevation: 15,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 4 },
//   shadowOpacity: 0.4,
//   shadowRadius: 65,
// },



// activeTab: {
//   width: 110,
//   height: 47,
//   borderRadius: 42,
//   backgroundColor: 'rgba(0, 0, 0, 0.65)',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: 10,
// },


// inactiveTab: {
//   width: 22,
//   height: 47, // match vertical space of active tab
//   justifyContent: 'center',
//   alignItems: 'center',
//     marginTop: 10,
// },


// iconRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
// },

// activeContent: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: 6,
// },

// inactiveContent: {
//   width: 22,
//   height: 22,
//   justifyContent: 'center',
//   alignItems: 'center',
// },

// activeLabel: {
//   color: '#FFA43A',
//   fontWeight: '600',
//   fontSize: 14,
//   marginLeft: 6,
// },


// });


// export default CustomTabBar;
// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   useColorScheme,
// } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import LinearGradient from 'react-native-linear-gradient';
// import HomeIcon from '../assets/svgs/HomeIcon';
// import MissedIcon from '../assets/svgs/ActivityIcon';
// import ControlIcon from '../assets/svgs/SettingIcon';
// import ProfileIcon from '../assets/svgs/ProfileIcon';

// const icons = {
//   Home: <HomeIcon />,
//   Missed: <MissedIcon />,
//   Control: <ControlIcon />,
//   Accounts: <ProfileIcon />,
// };

// const labels = {
//   Home: 'Home',
//   Missed: 'Missed',
//   Control: 'Control',
//   Accounts: 'Accounts',
// };

// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   const insets = useSafeAreaInsets();
//   const colorScheme = useColorScheme();
//   const isDark = colorScheme === 'dark';

//   return (
//     <View style={styles.absoluteContainer}>
//       {/* Theme-aware gradient glow */}
//       <LinearGradient
//         colors={
//           isDark
//             ? ['rgba(255, 165, 0, 0)', 'rgba(255, 165, 0, 0.1)']
//             : ['rgba(184, 115, 51, 0.00)', 'rgba(184, 115, 51, 0.08)']
//         }
//         start={{ x: 0.5, y: 0 }}
//         end={{ x: 0.5, y: 1 }}
//         style={styles.glowLayer}
//       />

//       <View
//         style={[
//           styles.tabBar,
//           {
//             paddingBottom: insets.bottom > 0 ? insets.bottom : 12,
//             backgroundColor: isDark
//               ? 'rgba(255, 255, 255, 0.06)'
//               : 'rgba(85, 85, 85, 0.12)',
//           },
//         ]}
//       >
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;
//           const label = labels[route.name];
//           const Icon = icons[route.name];

//           const onPress = () => {
//             if (!isFocused) navigation.navigate(route.name);
//           };

//           return (
//             <TouchableOpacity
//               key={route.key}
//               onPress={onPress}
//               activeOpacity={0.8}
//               style={isFocused ? styles.activeTab : styles.inactiveTab}
//             >
//               <View style={styles.iconRow}>
//                 {React.cloneElement(Icon, {
//                   width: 22,
//                   height: 22,
//                   color: isFocused ? '#FFA43A' : isDark ? '#aaa' : '#000',
//                 })}
//                 {isFocused && label !== '' && (
//                   <Text style={[styles.activeLabel, { color: '#FFA43A' }]}>
//                     {label}
//                   </Text>
//                 )}
//               </View>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   absoluteContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     alignItems: 'center',
//     paddingBottom: 18,
//     zIndex: 10,
//   },
  // glowLayer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   height: 120,
  //   borderRadius: 40,
  //   zIndex: -1,
  // },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     borderRadius: 50,
//     width: '90%',
//     height: 75,
//     elevation: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4,
//     shadowRadius: 65,
//   },
//   activeTab: {
    // width: 110,
    // height: 47,
    // borderRadius: 42,
    // backgroundColor: 'rgba(0, 0, 0, 0.65)',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 10,
//   },
//   inactiveTab: {
//     width: 22,
//     height: 47,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   activeLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
// });

// export default CustomTabBar;
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../assets/svgs/HomeIcon';
import MissedIcon from '../assets/svgs/ActivityIcon';
import ControlIcon from '../assets/svgs/SettingIcon';
import ProfileIcon from '../assets/svgs/ProfileIcon';

const icons = {
  Home: <HomeIcon />,
  Missed: <MissedIcon />,
  Control: <ControlIcon />,
  Accounts: <ProfileIcon />,
};

const labels = {
  Home: 'Home',
  Missed: 'Missed',
  Control: 'Control',
  Accounts: 'Accounts',
};



const CustomTabBar = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.absoluteContainer}>
      <View
        style={[
          styles.tabBar,
          {
            paddingBottom: insets.bottom > 0 ? insets.bottom : 12,
            backgroundColor: '#222', // 🔸 consistent dark gray for all themes
          },
        ]}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const label = labels[route.name];
          const Icon = icons[route.name];

          const onPress = () => {
            if (!isFocused) navigation.navigate(route.name);
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.8}
              style={isFocused ? styles.activeTab : styles.inactiveTab}
            >
              <View style={styles.iconRow}>
                {React.cloneElement(Icon, {
                  width: 22,
                  height: 22,
                  color: isFocused ? '#FFA43A' : '#fff',
                  
                })}
                {isFocused && (
                  <Text style={styles.activeLabel}>{label}</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
    zIndex: 10,
  },
    glowLayer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 120,
    borderRadius: 40,
    zIndex: -1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 40,
    width: 360,
    height: 67,
    backgroundColor: '#222',
  },
  activeTab: {
    width: 110,
    height: 47,
    borderRadius: 42,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  inactiveTab: {
    width: 22,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeLabel: {
    color: '#FFA43A',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },
});

export default CustomTabBar;
