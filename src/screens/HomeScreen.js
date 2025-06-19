
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
  Dimensions,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ModernSilentButton from '../components/ModernSilentButton';
import ScheduleCard from '../components/ScheduleCard';

const HomeScreen = () => {
  const [silentMode, setSilentMode] = useState(false);
  const [timer, setTimer] = useState(900); // 15 minutes
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    let interval;
    if (silentMode && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [silentMode, timer]);

  const toggleSilentMode = () => {
    setSilentMode((prev) => !prev);
    setTimer(900);
  };

  const formatTime = (sec) => {
    const minutes = String(Math.floor(sec / 60)).padStart(2, '0');
    const seconds = String(sec % 60).padStart(2, '0');
    return `00:${minutes}:${seconds}`;
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111111' : '#ffffff' }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.greeting, { color: isDark ? 'white' : '#000000' }]}>
          Hi Shipra 
        </Text>
         <Text style={[styles.subgreeting, { color: isDark ? 'white' : '#000000' }]}>
         Click below to toggle Silent Mode
        </Text>

        <TouchableOpacity onPress={toggleSilentMode} style={styles.silentButtonWrapper}>
          <ModernSilentButton silentMode={silentMode} timerFormatted={formatTime(timer)} />
        </TouchableOpacity>

        {silentMode ? (
          timer > 0 && (
            <View style={styles.missedSection}>
              <Text style={[styles.missedTitle, { color: isDark ? 'white' : '#000' }]}>
               Missed Notification
              </Text>
              <Text style={styles.seeAll}>See all</Text>
              {[1, 2, 3,4,5,6,7,8,9].map((_, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.missedItem,
                    { backgroundColor: isDark ? '#222' : '#f6f6f6' },
                  ]}
                >
                  <Text style={[styles.sender, { color: isDark ? 'white' : '#000' }]}>
                    Steve Jobs
                  </Text>
                  <View style={styles.callRow}>
                    <Text style={[styles.type, { color: '#aaa' }]}>CALL</Text>
                    <Text style={[styles.time, { color: '#aaa' }]}>5 min ago</Text>
                  </View>
                </View>
              ))}
            </View>
          )
        ) : (
          // <View style={styles.scheduleSection}>
          //   <ScheduleCard />
          // </View>

              <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={[styles.title, { color: isDark ? 'white' : '#1C1C1C' }]}>SET A SCHEDULE</Text>
      <Text style={[styles.description, { color: isDark ? '#FAFAFA' : '#1C1C1C' }]}>
        Have the Silent Focus turn on automatically at a set time
      </Text>

      {[...Array(5)].map((_, idx) => (
        <ScheduleCard key={idx} />
      ))}
    </ScrollView>

        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    paddingTop: hp('1%'),
    paddingHorizontal: wp('5%'),
  },
 scrollContent: {
  flexGrow: 1,
  paddingBottom: hp('12%'),
  paddingTop: hp('2%'),
 },
 scrollContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
    title: {
    fontSize: wp('3.4%'),
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: hp('0.6%'),
    marginTop: hp('-0.6%'),
  },
  description: {
    fontSize: wp('3.3%'),
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginBottom: hp('1.5%'),
  },
  greeting: {
    fontSize: wp('7%'),
    fontWeight: '600',
    fontFamily: 'Roboto',
    marginTop: hp('4%'),
  },
  
   subgreeting:{
   },


  silentButtonWrapper: {
    alignItems: 'center',
    marginVertical: hp('4%'),
  },
  callRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('0.5%'),
  },
  missedSection: {
    marginTop: hp('1%'),
  },
  missedTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  seeAll: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: '#D6721E',
    fontSize: wp('3.5%'),
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  missedItem: {
    marginTop: hp('2%'),
    borderRadius: wp('3%'),
    padding: wp('4%'),
    fontFamily: 'Roboto',
  },
  sender: {
    fontWeight: '700',
    fontSize: wp('4.2%'),
  },
  type: {
    fontSize: wp('3.2%'),
  },
  time: {
    fontSize: wp('3.2%'),
    textAlign: 'right',
    fontFamily: 'Roboto',
  },
  scheduleSection: {
    marginTop: hp('2%'),
  },
});
