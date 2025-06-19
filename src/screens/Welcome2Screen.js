
import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
  useColorScheme,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const WelcomeScreen2 = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';
  const textColor = colorScheme === 'dark' ? '#fff' : '#000';
  const descColor = colorScheme === 'dark' ? '#ccc' : '#444';

  const handleTap = () => {
    navigation.replace('Welcome3');
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />

        <Animated.View
          style={[
            styles.animatedContent,
            {
              opacity: animation,
              transform: [{ scale: animation }],
            },
          ]}
        >
          <Text style={[styles.title, { color: textColor }]}>Smart Automation{'\n'}
Your Way</Text>

          <Image
            source={require('../assets/images/home2.png')}
            style={styles.image}
            resizeMode="contain"
            onError={() => console.warn('Image failed to load')}
          />

          <Text style={[styles.description, { color: descColor }]}>Whether you're attending a meeting or entering a quiet zone, your phone will switch to silent mode automatically.</Text>
        </Animated.View>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.activeDot} />
          <View style={styles.dot} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default WelcomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedContent: {
    alignItems: 'center',
    paddingHorizontal: wp('6%'),
    flex: 1,
    justifyContent: 'center',
    marginTop: -hp('10%'),
  },
title: {
  fontSize: scale(28), // consistent across devices
  fontWeight: 'bold',
  textAlign: 'center',
  alignSelf: 'center',
  marginBottom: hp('8%'),
},

description: {
  fontSize: moderateScale(14),
  fontWeight: '600',
  textAlign: 'center',
  alignSelf: 'center',
  lineHeight: moderateScale(20),
  marginBottom: hp('6%'),
},

  image: {
    width: wp('90%'),
    height: hp('40%'),
    marginBottom: hp('3%'),
    marginTop: hp('-4%'),
  },
  // description: {
  //   fontSize: wp('4.2%'),
  //   fontWeight: '600',
  //   textAlign: 'left',
  //   alignSelf: 'flex-start',
  //   lineHeight: hp('3.5%'),
  //   marginBottom: hp('6%'),
  // },
  dots: {
    flexDirection: 'row',
    gap: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp('4%'),
    width: '100%',
  },
  dot: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C4A484',
  },
  activeDot: {
    width: 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F08A2C',
  },
});
