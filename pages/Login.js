import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as userApi from '../api/user';

export default function Login() {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [isClick, setIsClick] = useState(false);

  // 로그인 클릭
  const loginAction = async () => {
    setIsClick(true);

    if (userInfo.email && userInfo.password) {
      const userList = await userApi.getUsers();
      const matchData = userList.filter(user => user.email === userInfo.email && user.password === userInfo.password);

      if (!matchData.length) {
        Alert.alert('실패', '입력한 정보를 다시 확인해 주세요.');
      } else {
        Alert.alert('성공', '로그인이 정상적으로 처리되었습니다.');
      }
    }
  };

  return (
    <>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ marginTop: 15 }} >플레이오토!</Text>
      </View>

      <View style={styles.formContainer}>
        {/* 이메일 작성란 */}
        <Text style={{ width: 300, fontWeight: '500' }}>Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor='#ffffff'
          keyboardType='email-address'
          selectionColor='#ffffff'
          autoCapitalize='none' // 첫글자 대문자 고치기
          onChangeText={(Text) => setUserInfo({ ...userInfo, email: Text })}
        />
        {/* 이메일 작성 확인 */}
        {isClick && userInfo.email === ''
          ?
          <Text style={{ color: 'red', marginTop: 10 }}>이메일을 입력해 주세요.</Text>
          :
          null
        }

        {/* 비밀번호 작성란 */}
        <Text style={{ width: 300, fontWeight: '500' }}>Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
          selectionColor='#ffffff'
          autoCapitalize='none' // 첫글자 대문자 고치기
          secureTextEntry
          onChangeText={(Text) => setUserInfo({ ...userInfo, password: Text })}
        />
        {/* 비밀번호 작성 확인 */}
        {isClick && userInfo.password === ''
          ?
          <Text style={{ color: 'red', marginTop: 10 }}>비밀번호를 입력해 주세요.</Text>
          :
          null
        }

        {/* 로그인 버튼 */}
        <TouchableOpacity style={styles.button} onPress={loginAction}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

    </>
  );
};

const styles = StyleSheet.create({

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputBox: {
    backgroundColor: '#0A5AC2',
    width: 300,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 5
  },

  button: {
    backgroundColor: '#000000',
    width: 300,
    marginTop: 10,
    marginVertical: 10,
    paddingVertical: 13,
    borderRadius: 25
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});