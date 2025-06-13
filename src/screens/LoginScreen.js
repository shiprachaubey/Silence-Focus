import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Switch,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  Image,
  TextInput as RNTextInput,
  useColorScheme
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-dimensions';


import PasswordIcon from '../assets/svgs/Password';
import BackIcon from '../assets/svgs/Back';
import { Mail, Eye, EyeOff } from 'lucide-react-native';

const { height, width } = Dimensions.get('window');

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const orange = '#B87333';
  const backgroundColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const subTextColor = isDark ? '#ccc' : '#444';
  const cardBg = isDark ? 'rgba(21, 22, 21, 0.17)' : '#fff';
  const inputBg = isDark ? 'rgba(85, 85, 85, 0.12)' : 'rgba(85, 85, 85, 0.12)';

   const handleVerifyAndRegister = () => {
    navigation.navigate('MainTabs'); // replace with your actual screen name
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
       <ScrollView
  contentContainerStyle={{ paddingBottom: 40 }}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}
>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
  <BackIcon color={isDark ? 'white' : 'black'} />
</TouchableOpacity>
         
          <Text style={[styles.heading, { color: textColor }]}>Go ahead and setup{'\
'}your account</Text>
          <Text style={[styles.subheading, { color: subTextColor }]}>Sign in-up to enjoy the best experiences</Text>

          <View style={[styles.outerCard, { backgroundColor: cardBg, borderColor: isDark ? '#555' : '#ccc' }]}>
            <View style={styles.innerCardWrapper}>
              <View style={[styles.innerCard, { borderColor: isDark ? '#555' : '#eee' }]}>
                <View style={styles.tabRow}>
                  <TouchableOpacity
                    style={[styles.tabButton, isLogin && styles.tabActive]}
                    onPress={() => setIsLogin(true)}
                  >
                    <Text style={[styles.tabText, isLogin && styles.tabTextActive]}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.tabButton, !isLogin && styles.tabActive]}
                    onPress={() => setIsLogin(false)}
                  >
                    <Text style={[styles.tabText, !isLogin && styles.tabTextActive]}>Register</Text>
                  </TouchableOpacity>
                </View>

               
                <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
                  <Mail color={orange} style={styles.inputIcon} />
                  <TextInput
                    placeholder="Email address"
                    placeholderTextColor="#888"
                    style={[styles.input, { color: textColor }]}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={[styles.inputBox, { backgroundColor: inputBg }]}>
                  <PasswordIcon width={20} height={20} style={styles.inputIcon} />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry={!showPassword}
                    style={[styles.input, { color: textColor }]}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff color="#888" style={styles.inputIconRight} />
                    ) : (
                      <Eye color="#888" style={styles.inputIconRight} />
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.row}>
                  <View style={styles.rowLeft}>
                    <Switch
                      value={rememberMe}
                      onValueChange={setRememberMe}
                      thumbColor="#fff"
                      trackColor={{ false: '#ccc', true: 'rgba(240, 138, 44, 0.35)' }}
                      style={{ transform: [{ scale: 0.8 }] }}
                    />
                    <Text style={[styles.rememberText, { color: subTextColor }]}>Remember me</Text>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot password</Text>
                  </TouchableOpacity>
                </View>

              <TouchableOpacity
  style={styles.loginButton}
  onPress={() => {
    if (isLogin) {
      // Login clicked
      navigation.navigate('MainTabs');
    } else {
      // Register clicked → open modal
      setModalVisible(true);
    }
  }}
>
  <Text style={styles.loginButtonText}>
    {isLogin ? 'Login' : 'Verify and Register'}
  </Text>
</TouchableOpacity>


                <View style={styles.dividerRow}>
                  <View style={styles.line} />
                  <Text style={styles.orText}>or login </Text>
                  <View style={styles.line} />
                </View>

                <View style={styles.socialRow}>
  <TouchableOpacity style={styles.socialButtonModern}>
    <Image source={require('../assets/images/Goggle.png')} style={styles.socialIconModern} />
    <Text style={styles.socialText}>Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.socialButtonModern}>
    <Image source={require('../assets/images/facebook.png')} style={styles.socialIconModern} />
    <Text style={styles.socialText}>Facebook</Text>
  </TouchableOpacity>
</View>

              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView style={styles.modalOverlay} blurType={isDark ? 'dark' : 'light'} blurAmount={10} reducedTransparencyFallbackColor="white">
              <View style={styles.modalContent}>
            <Image source={require('../assets/images/tts.png')} style={{ width: 64, height: 64, marginBottom: 16 }} />
            <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 6 }}>Verify  your account</Text>
            <Text style={{ fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 4 }}>
              Enter 4 digits verification code we have sent to
            </Text>
            <Text style={{ fontWeight: 'bold', marginBottom: 16 }}>ShipraChaubey@gmail.com</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 16, width: '100%' }}>
              {[0, 1, 2, 3].map((i) => (
                <RNTextInput
                  key={i}
                  ref={otpRefs[i]}
                  maxLength={1}
                  style={{ width: 60, height: 60, backgroundColor: '#eee', borderRadius: 12, textAlign: 'center', textShadowColor: 'black',fontSize: 20 ,  color: 'black'}}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    if (text.length === 1 && i < 3) {
                      otpRefs[i + 1].current?.focus();
                    }
                  }}
                />
              ))}
            </View>

           <TouchableOpacity
  style={[styles.loginButton, { width: '100%' }]}
  onPress={() => {
    setModalVisible(false);
    setTimeout(() => {
      navigation.navigate('MainTabs');
    }, 100);
  }}
>
  <Text style={styles.loginButtonText}>Verify and Register</Text>
</TouchableOpacity>


 

          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#000',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 24,
    zIndex: 10,
  },
  backIconImage: {
  width: 28,
  height: 28,
  resizeMode: 'contain',
},

outerCard: {
  marginTop: hp(6),
  width: '100%',
  backgroundColor: 'rgba(21, 22, 21, 0.17)',
  borderTopLeftRadius: 42,
  borderTopRightRadius: 42,
  paddingTop: 16,
  paddingHorizontal: 16,
},

innerCard: {
  backgroundColor: '#FFF',
  borderRadius: 42,
  padding: 24,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 10,
  elevation: 8,
},


// innerCard: {
//   height: height * 0.65, // 60% of screen height
//   backgroundColor: '#FFF',
//   borderRadius: 42,
//   padding: 24,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 4 },
//   shadowOpacity: 0.25,
//   shadowRadius: 10,
//   elevation: 8,
// },
socialRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
},

socialButtonModern: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#D67D33',
  backgroundColor: '#fff',
  borderRadius: 32,
  paddingVertical: 12,
  paddingHorizontal: 20,
  flex: 1,
  marginHorizontal: 4,
},

socialIconModern: {
  width: 20,
  height: 20,
  marginRight: 10,
  resizeMode: 'contain',
},

socialText: {
  fontSize: 14,
  color: '#000',
  fontWeight: '500',
  marginLeft:5,
},
heading: {
  fontSize: 32,
  fontWeight: '600',
  color: '#fff',
  marginTop: hp(5),
  marginHorizontal: 24,
},
subheading: {
  color: '#ccc',
  fontSize: 18,
  marginTop: 8,
  marginHorizontal: 24,
},


// heading: {
//   fontSize: 32,
//   fontWeight: '600',
//   color: '#fff', // was #000
//   marginTop: 100,
//   marginLeft: 24,
// },
// subheading: {
//   color: '#ccc',
//   fontSize: 18,
//   marginTop: 8,
//   marginLeft: 24,
// },

 loginCard: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: height * 0.7,
  backgroundColor: '#fff', // Changed from rgba
  borderTopLeftRadius: 42,
  borderTopRightRadius: 42,
  padding: 24,
   paddingHorizontal: 8,
},

  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
    marginBottom: 24,
     padding: 6,
     paddingHorizontal: 8,
    width: '90%', // or '85%' if you want it tighter
  alignSelf: 'center'
     
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  tabText: {
    color: '#333',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#D67D33',
  },
 inputBox: {
backgroundColor: 'rgba(85, 85, 85, 0.12)',
 
  borderRadius: 16,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  marginBottom: 16,
  height: 60,
}
,
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  inputIcon: {
    marginRight: 10,
  },
  inputIconRight: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 8,
    color: '#555',
    fontSize: 13,
  },
  forgotText: {
    color: '#D67D33',
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#D67D33',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontSize: 12,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D67D33',
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
    marginHorizontal: 6,
  },
   modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
});
export default LoginScreen;