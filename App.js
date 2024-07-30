import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>
        <Image source={require("./assets/images/loginImg.webp")} style={styles.loginImg} />
        <TextInput
          placeholder='Username'
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title='Login'
          onPress={
            () => Alert.alert(
              'Login successfuly',
              `Username: ${username},
             password: ${password}`
            )
          } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10
  },
  input: {
    height: 40,
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 8,
  },

  loginImg: {
    width: '100%',
    borderRadius: 20,
  }

});
