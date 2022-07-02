import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import axios from 'axios'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { loginValidator } from '../helpers/loginValidator'
import { API_PATH, LOGIN_SCREEN } from '../../store/constants'

export default function LoginScreen({ navigation }) {
  const [userid, setUserid] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [login, setLogin] = useState({ value: '', error: '' })
  const onLoginPressed = () => {
    // const userError = userValidator(email.value)
    // const passwordError = passwordValidator(password.value)
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // }
    axios
      .post(API_PATH.LOGIN, {
        userid: userid.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res.data)
        window.localStorage.setItem(LOGIN_SCREEN.TOKEN_NAME, res.data.token)
        setTimeout(() => {}, 1000)
        // console.log(window.localStorage.getItem(LOGIN_SCREEN.TOKEN_NAME))
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      })
      .catch((error) => {
        const loginError = loginValidator(error.message)
        console.log(loginError)
        if (error.message) {
          setLogin({ ...login, error: error.message })
        }
      })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="UserId"
        returnKeyType="next"
        value={userid.value}
        onChangeText={(text) => setUserid({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="userid"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      {/* <View style={styles.forgotPassword}> */}
      {/*  <TouchableOpacity */}
      {/*    onPress={() => navigation.navigate('ResetPasswordScreen')} */}
      {/*  > */}
      {/*    <Text style={styles.forgot}>Forgot your password?</Text> */}
      {/*  </TouchableOpacity> */}
      {/* </View> */}
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      {/* <View style={styles.row}> */}
      {/*  <Text>Don’t have an account? </Text> */}
      {/*  <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}> */}
      {/*    <Text style={styles.link}>Sign up</Text> */}
      {/*  </TouchableOpacity> */}
      {/* </View> */}
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
